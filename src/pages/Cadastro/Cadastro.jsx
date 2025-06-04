
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
import { useCreateUsuario} from "../../hooks/user";
import {useForm} from "react-hook-form";
import  {Form} from "./Styles";
import { toast } from "react-toastify";
import { usuarioVallidationSchema } from "./utils";
import {zodResolver} from "@hookform/resolvers/zod"

function Cadastro(){
const navigate = useNavigate();
      
const {handleSubmit, register, reset, formState: {errors} 
} = useForm({resolver: zodResolver(usuarioVallidationSchema)});
const {mutate: postUsuario, isPending} = useCreateUsuario({
    onSuccess: (data) => {
        toast.success("usuario cadastrado com sucesso");
        navigate("/");
},
    onError: () => {
        toast.error("usuário não cadastrado");
    }});


function response(data){
postUsuario(data);
console.log("dados:", data);
reset();
}


    return (
        <div>
            <StyleTexto>
                CADASTRO
            </StyleTexto>
            <Form onSubmit={handleSubmit(response)}>
            <div>
            <NomeInput {...register("nome")} placeholder="Nome"></NomeInput>
            {errors.nome &&<p>{errors.nome.message}</p>}
            </div>
            <div>
            <EmailInput {...register("email")} placeholder="Email"></EmailInput>
            {errors.email &&<p>{errors.email.message}</p>}
            </div>
            <div>
            <CargoInput {...register("cargo")} placeholder="Cargo"></CargoInput>
            {errors.cargo &&<p>{errors.cargo.message}</p>}
            </div>
            <div>
            <SenhaInput {...register("senha")} placeholder="Senha"></SenhaInput>
            {errors.senha &&<p>{errors.senha.message}</p>}
            </div>
            <div>
            <Senha2Input {...register("senha2")} placeholder="Confirme sua senha"></Senha2Input>
            {errors.senha2 &&<p>{errors.senha2.message}</p>}
            </div>
             <BotaoPadrao type="submit">CRIAR CONTA  </BotaoPadrao>
             </Form>
            <StyleFinal>
            Já tem uma conta? Clique <BotaoPadrao3 onClick={() => navigate("/")}
                >aqui
                </BotaoPadrao3>
            </StyleFinal>
    
        </div>
    )
}

export default Cadastro;