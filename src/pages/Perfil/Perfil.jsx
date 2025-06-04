
import React, { useState, useEffect } from 'react';
import { Button, Modal, Form, Input, message } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { useAuthStore } from "../../stores/auth";
import Usuario from "../../Components/Usuario/Usuario";
import { Container, StyleBotaoPadrao, StyledAntdModal } from "./Styles"; 
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { usuarioVallidationSchema } from './utils'; 
import { useNavigate } from 'react-router-dom'; 
import { toast } from 'react-toastify'; 
import { useUpdateUsuario } from '../../hooks/user';
import BotaoPadrao from '../../Components/BotaoPadrao';



export default function Perfil() {
    const navigate = useNavigate(); 
    const usuario = useAuthStore((state) => state.usuario); 

    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [form] = Form.useForm(); 
    
    const {
        handleSubmit, 
        register,     
        reset,        
        formState: { errors } 
    } = useForm({
        resolver: zodResolver(usuarioVallidationSchema),
        defaultValues: { 
            nome: usuario?.nome || '',
            cargo: usuario?.cargo || '',
        }
    });
    const { mutate: putUsuario } = useUpdateUsuario({
        onSuccess: (data) => { 
            toast.success("Usuário atualizado com sucesso!");
            useAuthStore.getState().setUsuario(data); 
            navigate("/home"); 
            setIsEditModalOpen(false); 
            reset();
        },
        onError: (error) => {
            console.error("Erro ao atualizar usuário:", error);
            toast.error("Erro ao atualizar usuário. Tente novamente.");
        }
    });

    function handleFormSubmit(data) { 
        const dataToUpdate = { ...data, id: usuario?.id }; 
        putUsuario(dataToUpdate); 
        console.log("Dados enviados para putUsuario:", dataToUpdate);
    }

    useEffect(() => {
        if (isEditModalOpen && usuario) {
            form.setFieldsValue({
                nome: usuario.nome || '',
                cargo: usuario.cargo || '',
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

    return (
        <Container>
            <Usuario usuario = {usuario}/>
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
                destroyOnClose={true}
                
            >
                <Form
                    form={form}
                    layout="vertical"
                    name="perfil_form"
                    onFinish={handleFormSubmit} 
                >
                    <Form.Item
                        name="nome"
                        label="Nome"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="cargo"
                        label="Cargo"
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </StyledAntdModal>
        </Container>
    )
}