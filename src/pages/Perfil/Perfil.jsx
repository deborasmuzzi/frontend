import React, { useState, useEffect } from 'react';
import { Button, Modal, Form, Input } from 'antd';
import { useAuthStore } from "../../stores/auth";
import Usuario from "../../Components/Usuario/Usuario";
import { Container, StyleBotaoPadrao, StyledAntdModal, StyledInput } from "./Styles"; 
import { zodResolver } from '@hookform/resolvers/zod';
import { usuarioVallidationSchema } from './utils'; 
import { useNavigate } from 'react-router-dom'; 
import { toast } from 'react-toastify'; 
import { useUpdateUsuario } from '../../hooks/user';

export default function Perfil() {
  const navigate = useNavigate(); 
  const usuario = useAuthStore((state) => state.usuario); 
  const setUsuario = useAuthStore((state) => state.setUsuario); 

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [form] = Form.useForm(); 

  const { mutate: putUsuario } = useUpdateUsuario({
    onSuccess: (data) => { 
      toast.success("Usuário atualizado com sucesso!");
      setUsuario(data); 
      setIsEditModalOpen(false); 
      navigate("/home");
    },
    onError: (error) => {
      console.error("Erro ao atualizar usuário:", error);
      toast.error("Erro ao atualizar usuário. Tente novamente.");
    }
  });

  useEffect(() => {
    if (isEditModalOpen && usuario) {
      form.setFieldsValue({
      });
    }
  }, [isEditModalOpen, usuario, form]); 

  const showEditModal = () => {
    setIsEditModalOpen(true);
  };

  const handleEditCancel = () => {
    setIsEditModalOpen(false);
    form.resetFields(); 
  };

const handleFormSubmit = (values) => {
  if (!usuario?._id) {
    toast.error("Usuário não encontrado.");
    return;
  }else { 
  toast.success("Usuário atualizado");
  putUsuario({ id: usuario._id, nome: values.nome, cargo: values.cargo });
}};


  return (
    <Container>
      <Usuario usuario={usuario} />

      <StyleBotaoPadrao
        type="primary"
        onClick={showEditModal}
        style={{ marginTop: '20px' }}
      >
        EDITAR PERFIL
      </StyleBotaoPadrao>

      <StyledAntdModal
        title="Editar Perfil"
        open={isEditModalOpen}
        onOk={() => form.submit()}
        onCancel={handleEditCancel}
        destroyOnClose
      >
        <Form
          form={form}
          layout="vertical"
          name="perfil_form"
          onFinish={handleFormSubmit}
        >
          <Form.Item
            name="nome"
            label={<span style={{ color: 'black', fontWeight: 'bold' }}>NOME</span>}
            rules={[{ required: true, message: 'Por favor insira seu nome.' }]}
          >
            <StyledInput />
          </Form.Item>
            <Form.Item
            name="email"
            label={<span style={{ color: 'black', fontWeight: 'bold' }}>EMAIL </span>}
            rules={[{ required: true, message: 'Por favor insira seu email.' }]}
          >
            <StyledInput />
          </Form.Item>
          <Form.Item
            name="cargo"
            label={<span style={{ color: 'black', fontWeight: 'bold' }}>CARGO</span>}
            rules={[{ required: true, message: 'Por favor insira seu cargo.' }]}
          >
            <StyledInput />
          </Form.Item>
        <Form.Item
            name="senha"
            label={<span style={{ color: 'black', fontWeight: 'bold' }}>SENHA</span>}
            rules={[{ required: true, message: 'Por favor insira seu cargo.' }]}
          >
            <StyledInput />
          </Form.Item>
        <Form.Item
            name="senha2"
            label={<span style={{ color: 'black', fontWeight: 'bold' }}>CONFIRME SUA SENHA</span>}
            rules={[{ required: true, message: 'Por favor insira seu cargo.' }]}
          >
            <StyledInput />
          </Form.Item>
        </Form>
      </StyledAntdModal>
    </Container>
  );
}
