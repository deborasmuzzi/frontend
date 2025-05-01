import BotaoPadrao from "../../Components/BotaoPadrao";
import BotaoPadrao3 from "../../Components/BotaoPadrao/BotaoPadrao3";
import { useNavigate } from "react-router-dom";
import { StyleFinal } from "./final/styles";
import BotaoCadastro1 from "./BotaoCadastro1";
import { StyleTexto } from "./texto/style";
import BotaoCadastro2 from "./BotaoCadastro2";
import BotaoCadastro3 from "./BotaoCadatsro3";
function Cadastro(){
    const navigate = useNavigate();
    return (
        <div>
            <StyleTexto>
                CADASTRO
            </StyleTexto>
            <BotaoCadastro1>
                Nome
            </BotaoCadastro1>
            <BotaoCadastro2>
                Email
            </BotaoCadastro2>
            <BotaoCadastro3> 
                Cargo
            </BotaoCadastro3>
            <BotaoCadastro1>
                Senha
            </BotaoCadastro1>
            <BotaoCadastro1>
                Repita sua senha 
            </BotaoCadastro1>
            <StyleFinal>
            Já tem uma conta? Clique    <BotaoPadrao3 onClick={() => navigate("/login")}
                >aqui
                </BotaoPadrao3>
            </StyleFinal>
                <BotaoPadrao 
            onClick={()=> navigate ("//")}
                >CRIAR CONTA
            </BotaoPadrao>
        </div>
    )
}

export default Cadastro;