import { Container, StyledCrsl, StyledForm, StyleBotaoDeslog, StyledTable } from "./Styles";
import {useForm} from "react-hook-form";
import { useCreateSessao, useDeleteSessao, useGetSessoes} from "../../hooks/sessoes";
import { Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useQueryClient } from "@tanstack/react-query";
import Sessao from "../../Components/Sessoes/Sessoes";
import React, { useState} from 'react';
import { useNavigate } from "react-router-dom";
import { Button, Modal, Table } from 'antd';
import BotaoPadrao from "../../Components/BotaoHome/BotaoHome"
import { useAuthStore } from "../../stores/auth";
import { toast } from "react-toastify";
import { DeleteOutlined } from '@ant-design/icons';


function Home(){
  const clearAuth = useAuthStore((state) => state.clearAuth);
  const usuario = useAuthStore((state) => state.usuario);
   
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const queryClient = useQueryClient();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();


  const { mutate: postSessao, isPending: isCreatingSessao } = useCreateSessao({
    onSuccess: (usuario) => {
     toast.success("usuario cadastrado com sucesso");
      setIsModalOpen(false); 
      
    },
    onError: (error) => {
      toast.error("Erro ao iniciar sessão:");
    }
  });


  const {data: sessoes, isLoading: isLoadingSessoes} = useGetSessoes({});

  const onSubmit = () => {
    if (!usuario?._id){
      console.error("Usuário não encontrado. Você está logado?")
    }
    else {
      postSessao({ id_usuario: usuario._id });
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
  },
  onError: (error) => {
    toast.error('Erro ao deletar sessão.');
  },
});
  const columns = [
    {
      title: 'MEMBRO',
      dataIndex: 'nome',
      key: 'nome',
    },
    {
      title: 'CHEGADA',
      dataIndex: 'inicio',
      key: 'inicio',
    },
    {
      title: 'TEMPO',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '', 
      key: 'action',
      render: (_, record) => ( 
       <Button 
          type="default" 
          onClick={() => deleteSessao({ id_usuario: sessao.id_usuario._id })}
          style={{ width: '100px' }}
          icon={<DeleteOutlined />}
        >
        </Button>
      ),
    },
  ];


const listaSessoes = Array.isArray(sessoes)
  ? sessoes.map(sessao => ({
      key: sessao.id, 
      nome: sessao.id_usuario ? sessao.id_usuario.nome : "Usuário não disponível",
      inicio: sessao.inicio,
      tempo: sessao.tempo,
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
      
      {!isLoadingSessoes && Array.isArray(sessoes) && sessoes.length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
         {sessoes.map(sessao => (
         <Sessao key={sessao._id} usuario={sessao.id_usuario} />
       ))}
      </div>
      )}

      
      <StyleBotaoDeslog type="button" onClick={handleLogout}>Deslogar</StyleBotaoDeslog>
    </Container>
  );
}

export default Home;