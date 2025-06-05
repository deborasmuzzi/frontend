import { Container, StyledAntdModal, StyledInput, StyledTable} from "./styles";
import { StyleTexto } from "../../Components/texto2/style";
import { useDeleteUsuario, useGetUsuarios, useUpdateUsuario } from "../../hooks/user";
import { toast } from "react-toastify";
import { usuarioVallidationSchema } from "../Perfil/utils";
import {useForm} from "react-hook-form";
import { StyledForm } from "../Home/Styles";
import {zodResolver} from "@hookform/resolvers/zod"
import { useAuthStore } from "../../stores/auth";
import CargoInput from "../../Components/inputs/inputcargo";
import Usuario from "../../Components/Usuario/Usuario";
import NomeInput from "../../Components/inputs/inputnome";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Table, Form, Button} from "antd";
import { DeleteOutlined } from "@ant-design/icons";

export default function Usuario1(){

const queryClient = useQueryClient();
const usuario = useAuthStore((state) => state.usuario);
const {handleSubmit, register, formState: {errors} } = useForm({});
const {data: usuarios, isLoading} = useGetUsuarios({});
const navigate = useNavigate(); 
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


useEffect(() => {
if (usuarios) {
console.log("USUÁRIOS:", usuarios);

}
}, [usuarios]);


const {mutate: deleteUsuario, isPending} = useDeleteUsuario({
        onSuccess: () => {
            toast.success("usuario deletado com sucesso");
    },
        onError: () => {
            toast.error("usuário não deletado");
        }});

    function response(data){
    deleteUsuario(data);
    console.log("dados:", data);
    reset();
    }


    const columns = [
    {
      title: 'NOME',
      dataIndex: 'nome',
      key: 'nome',
    },
    {
      title: 'CARGO',
      dataIndex: 'cargo',
      key: 'cargo',
    },
    {
      title: 'USUARIO',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '', 
      key: 'action',
      render: (_, record) => ( 
       <Button 
          type="default" 
          onClick={() => deleteUsuario({ id_usuario })}
          style={{ width: '100px' }}
          icon={<DeleteOutlined />}
        >
        </Button>
      ),
    },
  ];

const listaUsuarios = Array.isArray(usuarios) ? usuarios.map(usuario => ({
  key: usuario,  
  nome: usuario.nome,
  cargo: usuario.cargo,
  id: usuario._id,   
})) : [];

    
    return (
        <Container>
             <StyleTexto>
               GERENCIAR USUÁRIOS
            </StyleTexto>
          <div style={{ width: '80%', margin: '20px auto' }}>
            

               <StyledTable
                 dataSource={listaUsuarios}
                 columns={columns}
                 loading = {isLoading}
                   pagination={false}
               >
               </StyledTable>
             </div>


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
            label={<span style={{ color: '#fdd100', fontWeight: 'bold' }}>NOME</span>}
            rules={[{ required: true, message: 'Por favor insira seu nome.' }]}
          >
            <StyledInput />
          </Form.Item>

          <Form.Item
            name="cargo"
            label={<span style={{ color: '#fdd100', fontWeight: 'bold' }}>CARGO</span>}
            rules={[{ required: true, message: 'Por favor insira seu cargo.' }]}
          >
            <StyledInput />
          </Form.Item>
        </Form>
      </StyledAntdModal>
    </Container>
    )
}