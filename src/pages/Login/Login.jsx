
import { useNavigate } from "react-router-dom";
import BotaoPadrao4 from "../../Components/BotaoPadrao/BotaoPadrao4";
import BotaoPadrao2 from "../../Components/BotaoPadrao/BotaoPadrao2";
import { StyleTexto } from "../../Components/texto2/style";
import { StyleFinal } from "../../Components/final2/styles";
import EmailInput from "../../Components/inputs/inputemail";
import SenhaInput from "../../Components/inputs/inputsenha";
function Login(){
    const navigate = useNavigate();
    return (
        <div>
            <StyleTexto>
                LOGIN
            </StyleTexto>
            <EmailInput/>
            <SenhaInput/>
            <StyleFinal>
                Não tem login? Faça seu cadastro   <BotaoPadrao4 onClick={() => navigate("/cadastro")}>
                aqui
            </BotaoPadrao4>
            </StyleFinal>
            <BotaoPadrao2 onClick={() => navigate("/")}>
                ENTRAR
            </BotaoPadrao2>
            
        </div>
    )
}

export default Login;