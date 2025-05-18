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
function Cadastro(){
    const navigate = useNavigate();
      
    const {handleSubmit, register, formState: {errors} } = useForm({});
       
        function response(data) {
               console.log(data);
        }
       
    const {mutate: postUsuario, isPending} = useCreateUsuario({});
        function response(data){
        postUsuario(data);
    }

    return (
        <div>
            <StyleTexto>
                CADASTRO
            </StyleTexto>
            <NomeInput {...register("nome")} placeholder="nome"></NomeInput>
            <EmailInput {...register("email")} placeholder="email"></EmailInput>
            <CargoInput {...register("cargo")} placeholder="cargo"></CargoInput>
            <SenhaInput {...register("senha")} placeholder="senha"></SenhaInput>
            <Senha2Input {...register("senha")} placeholder="senha"></Senha2Input>
            <StyleFinal>
            Já tem uma conta? Clique    <BotaoPadrao3 onClick={() => navigate("/")}
                >aqui
                </BotaoPadrao3>
            </StyleFinal>
            <BotaoPadrao 
            onClick={()=> navigate ("/")}
                >CRIAR CONTA
            </BotaoPadrao>
    
        </div>
    )
}

export default Cadastro;