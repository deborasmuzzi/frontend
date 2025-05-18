
import { Container } from "./Styles";
import { StyledForm } from "./Styles";
import {useForm} from "react-hook-form";
import { useCreateUsuario, useGetUsuarios} from "../../hooks/user";


function Home(){
    
    const {handleSubmit, register, formState: {errors} } = useForm({});

    function response(data) {
        console.log(data);
    }

    const {mutate: postUsuario, isPending} = useCreateUsuario({});
    const {data: usuarios, isLoading}= useGetUsuarios({});
    function response(data){
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
        {isLoading ? (
            <p>carregando</p>) : (
        usuarios.map((usuario) => {
        return <div>{usuario?.nome}</div>;
        })
        )}
    </Container>
    )
}

export default Home;

