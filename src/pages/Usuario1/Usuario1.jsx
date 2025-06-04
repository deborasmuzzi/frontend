import { Container} from "./styles";
import { StyleTexto } from "../../Components/texto2/style";

import { useDeleteUsuario, useUpdateUsuario } from "../../hooks/user";
import { toast } from "react-toastify";
import { usuarioVallidationSchema } from "../Perfil/utils";
import {useForm} from "react-hook-form";
import { StyledForm } from "../Home/Styles";
import {zodResolver} from "@hookform/resolvers/zod"
import { useAuthStore } from "../../stores/auth";
import CargoInput from "../../Components/inputs/inputcargo";
import Usuario from "../../Components/Usuario/Usuario";
import NomeInput from "../../Components/inputs/inputnome";

export default function Usuario1(){
    const usuario = useAuthStore((state)=> state.usuario);
    const {handleSubmit, register, reset, formState: {errors} 
    } = useForm({resolver: zodResolver(usuarioVallidationSchema)});
    const {mutate: putUsuario} = useUpdateUsuario({
        onSuccess: () => {
            toast.success("usuario atualizado com sucesso");
            navigate("/home");
    },
        onError: () => {
            toast.error("usuário não cadastrado");
        }});
    
    
    function response(data){
    putUsuario(data);
    console.log("dados:", data);
    reset();
    }

    const {mutate: deleteUsuario, isPending} = useDeleteUsuario({
        onSuccess: () => {
            toast.success("usuario deletado com sucesso");
            navigate("/home");
    },
        onError: () => {
            toast.error("usuário não deletado");
        }});

    function response(data){
    deleteUsuario(data);
    console.log("dados:", data);
    reset();
    }
    return (
        <Container>
             <StyleTexto>
                USUÁRIO
            </StyleTexto>
            <StyledForm onSubmit={handleSubmit(response)}>
                <Usuario usuario = {usuario}/>
                 <div>
            <NomeInput {...register("nome")} placeholder="Nome"></NomeInput>
             {errors.nome &&<p>{errors.nome.message}</p>}
            </div>
            <div>
            <CargoInput {...register("cargo")} placeholder="Cargo"></CargoInput>
            {errors.cargo &&<p>{errors.cargo.message}</p>}
            </div>
             </StyledForm>
       
    </Container>
    )
}