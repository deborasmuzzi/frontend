import { Container, StyledCrsl, StyledForm, StyleBotaoDeslog, StyledTable } from "./Styles";
import { useForm } from "react-hook-form";
import { useCreateSessao, useDeleteSessao, useGetSessoes } from "../../hooks/sessoes";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useQueryClient } from "@tanstack/react-query";
import Sessao from "../../Components/Sessoes/Sessoes";
import { useNavigate } from "react-router-dom";
import { Button, Modal } from 'antd';
import BotaoPadrao from "../../Components/BotaoHome/BotaoHome";
import { useAuthStore } from "../../stores/auth";
import { toast } from "react-toastify";
import { DeleteOutlined } from '@ant-design/icons';
import dayjs from 'dayjs'; // Make sure dayjs is imported
import utc from 'dayjs/plugin/utc';
import duration from 'dayjs/plugin/duration';
import React, { useState, useEffect } from 'react';

dayjs.extend(utc);
dayjs.extend(duration);

function Home() {
  const clearAuth = useAuthStore((state) => state.clearAuth);
  const usuario = useAuthStore((state) => state.usuario);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const queryClient = useQueryClient();
  const [currentSessoesDisplay, setCurrentSessoesDisplay] = useState([]);

  const {
    handleSubmit,
  } = useForm();

  const { mutate: postSessao, isPending: isCreatingSessao } = useCreateSessao({
    onSuccess: () => {
      toast.success("Sessão iniciada com sucesso");
      setIsModalOpen(false);
      queryClient.invalidateQueries(['sessoes']);
    },
    onError: () => {
      toast.error("Erro ao iniciar sessão");
    }
  });

  const { data: fetchedSessoes, isLoading: isLoadingSessoes } = useGetSessoes({});

  // Functions for time formatting and calculation using dayjs for parsing
  const formatarHora = (dateString) => {
    const date = dayjs(dateString); // Use dayjs to parse the string
    if (!date.isValid()) {
      console.error("Invalid date string for formatarHora:", dateString);
      return "N/A";
    }
    // format as HH:mm based on your Tabela.jsx's 'arrival' column
    return date.format('HH:mm');
  };

  const calcularDuracao = (dateString) => {
    const start = dayjs(dateString).utc(); // Parse with dayjs and ensure UTC
    if (!start.isValid()) {
      console.error("Invalid date string for calcularDuracao:", dateString);
      return "N/A";
    }

    const end = dayjs().utc(); // Current UTC time using dayjs

    const diffDuration = dayjs.duration(end.diff(start)); // Get duration object

    const horas = diffDuration.hours();
    const minutos = diffDuration.minutes();
    const segundos = diffDuration.seconds();

    const hoursFormatted = String(horas).padStart(2, '0');
    const minutesFormatted = String(minutos).padStart(2, '0');
    const secondsFormatted = String(segundos).padStart(2, '0');

    return `${hoursFormatted}:${minutesFormatted}:${secondsFormatted}`;
  };

  useEffect(() => {
    if (fetchedSessoes) {
      setCurrentSessoesDisplay(fetchedSessoes.map(sessao => ({
        ...sessao,
        displayDuration: calcularDuracao(sessao.inicio),
        displayArrival: formatarHora(sessao.inicio)
      })));
    }

    const intervalId = setInterval(() => {
      setCurrentSessoesDisplay((prevSessoes) =>
        prevSessoes.map((sessao) => ({
          ...sessao,
          displayDuration: calcularDuracao(sessao.inicio),
        }))
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, [fetchedSessoes]);

  const onSubmit = () => {
    if (!usuario?._id) {
      console.error("Usuário não encontrado. Você está logado?");
    } else {
      const timestamp = dayjs().utc().format(); // Obtém a data e hora atual em UTC
      postSessao({ id_usuario: usuario._id, inicio: timestamp });
    }
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    clearAuth();
    navigate("/");
  };

  const { mutate: deleteSessao } = useDeleteSessao({
    onSuccess: () => {
      toast.success('Sessão deletada!');
      queryClient.invalidateQueries(['sessoes']);
    },
    onError: () => {
      toast.error('Erro ao deletar sessão.');
    },
  });

  const columns = [
    {
      title: 'MEMBRO',
      dataIndex: 'member',
      key: 'member',
      render: (text, record) => (
        <div>
          <div style={{ fontWeight: 'bold' }}>{record.member}</div>
          <div style={{ color: '#FDDD00' }}>{record.role}</div>
        </div>
      ),
    },
    {
      title: 'CHEGADA',
      dataIndex: 'displayArrival',
      key: 'displayArrival',
      render: (text) => text,
    },
    {
      title: 'TEMPO',
      dataIndex: 'displayDuration',
      key: 'displayDuration',
      render: (text) => text,
    },
    {
      title: '',
      key: 'action',
      render: (_, record) => (
        <Button
          type="default"
          onClick={() => deleteSessao({ id_usuario: record.id_usuario._id })}
          style={{ width: '100px' }}
          icon={<DeleteOutlined />}
        />
      ),
    },
  ];

  const listaSessoes = Array.isArray(currentSessoesDisplay)
    ? currentSessoesDisplay.map(sessao => ({
        key: sessao._id,
        id_usuario: sessao.id_usuario,
        member: sessao.id_usuario ? sessao.id_usuario.nome : "Usuário não disponível",
        role: sessao.id_usuario ? sessao.id_usuario.cargo : "",
        displayArrival: sessao.displayArrival,
        displayDuration: sessao.displayDuration,
      }))
    : [];

  const images = [
    {"id":"102","author":"Ben Moore","width":4320,"height":3240,"url":"https://unsplash.com/photos/pJILiyPdrXI","download_url":"https://picsum.photos/id/102/4320/3240"},
    {"id":"103","author":"Ilham Rahmansyah","width":2592,"height":1936,"url":"https://unsplash.com/photos/DwTZwZYi9Ww","download_url":"https://picsum.photos/id/103/2592/1936"},
    {"id":"106","author":"Arvee Marie","width":2592,"height":1728,"url":"https://unsplash.com/photos/YnfGtpt2gf4","download_url":"https://picsum.photos/id/106/2592/1728"},
    {"id":"108","author":"Florian Klauer","width":2000,"height":1333,"url":"https://unsplash.com/photos/t1mqA3V3-7g","download_url":"https://picsum.photos/id/108/2000/1333"},
    {"id":"120","author":"Guillaume","width":4928,"height":3264,"url":"https://unsplash.com/photos/_DA3D5P71qs","download_url":"https://picsum.photos/id/120/4928/3264"},
    {"id":"112","author":"Zugr","width":4200,"height":2800,"url":"https://unsplash.com/photos/kmF_Aq8gkp0","download_url":"https://picsum.photos/id/112/4200/2800"},
    {"id":"129","author":"Charlie Foster","width":4910,"height":3252,"url":"https://unsplash.com/photos/A88emaZe7d8","download_url":"https://picsum.photos/id/129/4910/3252"},
  ];

  return (
    <Container>
      <StyledCrsl>
        <Carousel autoPlay infiniteLoop showThumbs={false}>
          {
            images.map (image => <img key={image.id} src={image.download_url} alt={`Image by ${image.author}`}/>)
          }
        </Carousel>
      </StyledCrsl>

      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <>
          <BotaoPadrao type="primary" onClick={showModal}>
            Fazer Login
          </BotaoPadrao>

          <Modal
            title="Você deseja mesmo fazer login?"
            closable={{ 'aria-label': 'Custom Close Button' }}
            open={isModalOpen}
            onOk={handleSubmit(onSubmit)}
            confirmLoading={isCreatingSessao}
            onCancel={handleCancel}
          >
            <p>Você tem certeza que deseja fazer esse login?</p>
          </Modal>
        </>
      </StyledForm>

      <div style={{ width: '80%', margin: '20px auto' }}>
        <StyledTable
          dataSource={listaSessoes}
          columns={columns}
          loading={isLoadingSessoes}
          pagination={false}
        >
        </StyledTable>
      </div>

      <StyleBotaoDeslog type="button" onClick={handleLogout}>Deslogar</StyleBotaoDeslog>
    </Container>
  );
}

export default Home;