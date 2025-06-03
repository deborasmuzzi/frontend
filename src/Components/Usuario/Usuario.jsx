import { Container, Dados, Dado, Nome, Valor } from "./Styles";


export default function Usuario ({usuario}){
    return (
            <Container>
                    <Nome>{usuario.nome}</Nome>
                    <Dados>
                        <Dado>
                            Email: <Valor>{usuario.email}</Valor>
                        </Dado>
                        <Dado>
                            Cargo: <Valor>{usuario.cargo}</Valor>
                        </Dado>
                    </Dados>
                </Container>
    );
}