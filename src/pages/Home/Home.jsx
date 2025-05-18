
import { Container } from "./Styles";
import { StyledForm } from "./Styles";
import {useForm} from "react-hook-form";
import { useCreateUsuario } from "../../hooks/user";


function Home(){
    
    const {handleSubmit, register, formState: {errors} } = useForm({});

    function response(data) {
        console.log(data);
    }

    const {mutate: postUsuario, isPending} = useCreateUsuario({});
    function response(data){
        console.log("cheguei na função");
        postUsuario(data);
    }
    return (
    <Container>
    <StyledForm onSubmit={handleSubmit(response)}>
        <input {...register("nome")} placeholder="nome"></input>
        <input {...register("email")} placeholder="email"></input>
        <input {...register("senha")} placeholder="senha"></input>
        <button>enviar</button>
        </StyledForm>
    </Container>
    )
}

export default Home;

