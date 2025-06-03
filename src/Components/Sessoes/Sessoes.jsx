import { Container, Dados, Dado, Nome, Valor } from "./Styles";


export default function Sessao ({sessao}){
    return (
            <Container>
                    <Nome>{sessao.usuario.nome}</Nome>
                    <Dados>
                        <Dado>
                            Inicio: <Valor>{sessao.timeStamps}</Valor>
                        </Dado>
                        <Dado>
                            id: <Valor>{sessao.id_usuario}</Valor>
                        </Dado>
                    </Dados>
                </Container>
    );
}