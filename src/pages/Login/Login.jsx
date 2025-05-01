
import { useNavigate } from "react-router-dom";
import BotaoPadrao4 from "../../Components/BotaoPadrao/BotaoPadrao4";
import BotaoPadrao2 from "../../Components/BotaoPadrao/BotaoPadrao2";
function Login(){
    const navigate = useNavigate();
    return (
        <div>
            <BotaoPadrao2>
                ENTRAR
            </BotaoPadrao2>
            <BotaoPadrao4
            onClick={() => navigate("/cadastro")}>
                aqui
            </BotaoPadrao4>
            
        </div>
    )
}

export default Login;