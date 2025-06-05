import { Container, Dados, Dado, Nome, Valor } from "./Styles";

export default function Sessao({ sessao }) {
  if (!sessao || !sessao.id_usuario) {
    return <Container></Container>;
  }

  return (
    <Container>
      <Nome>{sessao.id_usuario.nome}</Nome>
      <Dados>
        <Dado>
          ID: <Valor>{sessao.id_usuario._id}</Valor>
        </Dado>
      </Dados>
    </Container>
  );
}
