import { Container, Form, Button, StyleInput, Campo, Label } from "./Styles";
import { useNavigate } from "react-router-dom";
import BotaoPadrao4 from "../../Components/BotaoPadrao/BotaoPadrao4";
import BotaoPadrao2 from "../../Components/BotaoPadrao/BotaoPadrao2";
import { StyleTexto } from "../../Components/texto2/style";
import { StyleFinal } from "../../Components/final2/styles";
import EmailInput from "../../Components/inputs/inputemail";
import SenhaInput from "../../Components/inputs/inputsenha";
import {useState} from "react";
import api from "../../services/api/api";
import useAuthStore from "../../stores/auth";

function Login(){
    const navigate = useNavigate();
    const [email, setEmail]= useState("");
    const [senha, setSenha]= useState("");
    const [carregando, setCarregando]= useState(false);
    const token = useAuthStore((state)=> state.token);
    const usuario = useAuthStore((state) => state.usuario);
    const setToken = useAuthStore((state) => state.setToken);
    console.log({token, usuario});

    const handleSubmit = async (e) => {
        e.preventDefault();

    try {
        setCarregando(true);
       const res = await api.post("/", {email, senha});
        const {token} = res.data;

        setToken(token);
    } catch (erro) {
        console.error(erro);
        alert(erro.message);
    } finally{
        setCarregando(false);
    }
}

if(carregando)
    return ( 
        <Container>
            <h1>Carregando...</h1>
        </Container>
    )

    return (
        <div>
            <StyleTexto>
                LOGIN
            </StyleTexto>
            <Form onSubmit={handleSubmit}>
             <Campo>
                    <Label htmlFor = "email"></Label>
                    <EmailInput name= "email" type = "email" id = "email" placeholder="Email"
                    required onChange={(e) => setEmail(e.target.value)}/>
            </Campo>
            <Campo>
                <Label></Label>
                  <SenhaInput type = "password" id= "senha" name = "senha" placeholder="Senha"
                  required onChange={(e) => setSenha(e.target.value)}/>
            </Campo>
             <BotaoPadrao2 type = "submit">
                FAZER LOGIN
            </BotaoPadrao2>
            </Form>
            <StyleFinal>
                Não tem login? Faça seu cadastro   <BotaoPadrao4 onClick={() => navigate("/cadastro")}>
                aqui
            </BotaoPadrao4>
            </StyleFinal>
           
            
        </div>
    )
}

export default Login;
