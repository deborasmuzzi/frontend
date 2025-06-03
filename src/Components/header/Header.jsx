import { StyleBotaoDeslog, StyleHeader , StyledLink} from "./styles";
import { useNavigate } from "react-router-dom"
import { useAuthStore } from "../../stores/auth";

export default function Header() {
    const usuario = useAuthStore((state) => state.usuario);
    const clearAuth = useAuthStore((state) => state.clearAuth);
      

    return (
        <StyleHeader>
            cpe

        { usuario && (
            <>
            <StyledLink to ="/home" >cpe</StyledLink>
            <StyledLink to = "/perfil"> perfil </StyledLink>
            <StyledLink to = "/usuario"> usuário</StyledLink>
            <StyleBotaoDeslog type = "button" onClick= {clearAuth}>Deslogar</StyleBotaoDeslog>
            </>
        )}
        </StyleHeader>
    )
}
