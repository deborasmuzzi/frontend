import { Container, Dados, Dado, Nome, Valor } from "./Styles";


export default function Sessao ({id_usuario}){
    return (
            <Container>
                    <Nome>{id_usuario.nome}</Nome>
                    <Dados>
                        <Dado>
                            Inicio: <Valor>{id_usuario.timeStamps}</Valor>
                        </Dado>
                        <Dado>
                            id: <Valor>{id_usuario}</Valor>
                        </Dado>
                    </Dados>
                </Container>
    );
}