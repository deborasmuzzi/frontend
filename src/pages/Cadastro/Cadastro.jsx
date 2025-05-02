import BotaoPadrao from "../../Components/BotaoPadrao";
import BotaoPadrao3 from "../../Components/BotaoPadrao/BotaoPadrao3";
import { useNavigate } from "react-router-dom";
import { StyleFinal } from "./final/styles";
import { StyleTexto } from "./texto/style";
import NomeInput from "./inputs/inputnome";
import EmailInput from "./inputs/inputemail";
import CargoInput from "./inputs/inputcargo";
import SenhaInput from "./inputs/inputsenha";
import Senha2Input from "./inputs/inputsenha2";
function Cadastro(){
    const navigate = useNavigate();
    return (
        <div>
            <StyleTexto>
                CADASTRO
            </StyleTexto>
            <NomeInput/>
            <EmailInput/>
            <CargoInput/>
            <SenhaInput/>
            <Senha2Input/>
            <StyleFinal>
            Já tem uma conta? Clique    <BotaoPadrao3 onClick={() => navigate("/login")}
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