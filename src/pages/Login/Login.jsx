
import { useNavigate } from "react-router-dom";
import BotaoPadrao4 from "../../Components/BotaoPadrao/BotaoPadrao4";
import BotaoPadrao2 from "../../Components/BotaoPadrao/BotaoPadrao2";
import { StyleTexto } from "./texto/style";
import EmailInput from "./inputs/inputemail";
import SenhaInput from "./inputs/inputsenha";
import { StyleFinal } from "./final/styles";
function Login(){
    const navigate = useNavigate();
    return (
        <div>
            <StyleTexto>
                LOGIN
            </StyleTexto>
            <EmailInput/>
            <SenhaInput/>
            <BotaoPadrao2 onClick={() => navigate("/")}>
                ENTRAR
            </BotaoPadrao2>
            <StyleFinal>
                Não tem login? Faça seu cadastro   <BotaoPadrao4 onClick={() => navigate("/cadastro")}>
                aqui
            </BotaoPadrao4>
            </StyleFinal>
            
        </div>
    )
}

export default Login;