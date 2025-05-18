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