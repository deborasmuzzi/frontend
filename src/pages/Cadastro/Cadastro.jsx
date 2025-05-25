import { StyleInicio } from "../../Components/inicio/styles";
import BotaoPadrao from "../../Components/BotaoPadrao";
import BotaoPadrao3 from "../../Components/BotaoPadrao/BotaoPadrao3";
import { useNavigate } from "react-router-dom";
import { StyleFinal } from "../../Components/final/styles";
import { StyleTexto } from "../../Components/texto2/style";
import NomeInput from "../../Components/inputs/inputnome";
import EmailInput from "../../Components/inputs/inputemail";
import CargoInput from "../../Components/inputs/inputcargo";
import SenhaInput from "../../Components/inputs/inputsenha";
import Senha2Input from "../../Components/inputs/inputsenha2";
import { useCreateUsuario, useGetUsuarios } from "../../hooks/user";
import {useForm} from "react-hook-form";
import { StyledForm } from "../Home/Styles";
import { useEffect } from "react";
function Cadastro(){
const navigate = useNavigate();
      
const {handleSubmit, register, formState: {errors} } = useForm({});
const {mutate: postUsuario, isPending} = useCreateUsuario({});

function response(data){
postUsuario(data);
console.log("dados:", data);
}


    return (
        <div>
            <StyleTexto>
                CADASTRO
            </StyleTexto>
            <StyledForm onSubmit={handleSubmit(response)}>
            <NomeInput {...register("nome")} placeholder="nome"></NomeInput>
            <EmailInput {...register("email")} placeholder="email"></EmailInput>
            <CargoInput {...register("cargo")} placeholder="cargo"></CargoInput>
            <SenhaInput {...register("senha")} placeholder="senha"></SenhaInput>
            <Senha2Input {...register("senha2")} placeholder="senha2"></Senha2Input>
             <BotaoPadrao 
            onClick={()=> navigate ("/")}
                >CRIAR CONTA
            </BotaoPadrao>
             </StyledForm>
            <StyleFinal>
            Já tem uma conta? Clique <BotaoPadrao3 onClick={() => navigate("/")}
                >aqui
                </BotaoPadrao3>
            </StyleFinal>
    
        </div>
    )
}

export default Cadastro;