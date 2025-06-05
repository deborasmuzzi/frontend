import { StyleBotaoDeslog, StyleHeader , StyledLink} from "./styles";
import { useNavigate } from "react-router-dom"
import { useAuthStore } from "../../stores/auth";
import logo from "../../assets/imagens/logo.png"

export default function Header() {
    const usuario = useAuthStore((state) => state.usuario);
    const clearAuth = useAuthStore((state) => state.clearAuth);
      

    return (
        <StyleHeader>
      <img
        src={logo}
        alt="Logo"
        style={{ width:  250, height: 78, marginRight: 50, marginBottom: 15}}
      />
        { usuario && (
            <>
            <StyledLink to ="/home" >HOME</StyledLink>
            <StyledLink to = "/perfil"> PERFIL </StyledLink>
            <StyledLink to = "/usuario">USUÁRIOS</StyledLink>
          
            </>
        )}
        </StyleHeader>
    )
}
