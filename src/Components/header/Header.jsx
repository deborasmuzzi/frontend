import { Container, StyleHeader } from "./styles";
import {Link, useNavigate } from "react-router-dom"
import { useAuthStore } from "../../stores/auth";

export default function Header() {
    const usuario = useAuthStore((state) => state.usuario);
    const clearAuth = useAuthStore((state) => state.clearAuth);
    const navigate = useNavigate;
    const logout = () => {
        clearAuth()
        navigate("/")
      }

    return (
        <StyleHeader>
            cpe
        <Link to = "/"> login </Link>
        <Link to = "/cadastro"> cadastro </Link>

        {! usuario && (
            <>
            <Link to ="/home" > home </Link>
            <Link to = "/perfil"> perfil </Link>
            <h2>Seja bem vindo{usuario.nome}</h2>
            <button type = "button" onClick= {logout}>Deslogar</button>
            </>
        )}
        </StyleHeader>
    )
}
