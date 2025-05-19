
import { Container, StyledCrsl } from "./Styles";
import { StyledForm } from "./Styles";
import {useForm} from "react-hook-form";
import { useCreateUsuario, useGetUsuarios} from "../../hooks/user";
import { Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";


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
    const listaUsuarios = Array.isArray(usuarios) ? usuarios: [];

    const images = [
        {"id":"102","author":"Ben Moore","width":4320,"height":3240,"url":"https://unsplash.com/photos/pJILiyPdrXI","download_url":"https://picsum.photos/id/102/4320/3240"},
        {"id":"103","author":"Ilham Rahmansyah","width":2592,"height":1936,"url":"https://unsplash.com/photos/DwTZwZYi9Ww","download_url":"https://picsum.photos/id/103/2592/1936"},
        {"id":"106","author":"Arvee Marie","width":2592,"height":1728,"url":"https://unsplash.com/photos/YnfGtpt2gf4","download_url":"https://picsum.photos/id/106/2592/1728"},
        {"id":"108","author":"Florian Klauer","width":2000,"height":1333,"url":"https://unsplash.com/photos/t1mqA3V3-7g","download_url":"https://picsum.photos/id/108/2000/1333"},
       {"id":"120","author":"Guillaume","width":4928,"height":3264,"url":"https://unsplash.com/photos/_DA3D5P71qs","download_url":"https://picsum.photos/id/120/4928/3264"},
        {"id":"112","author":"Zugr","width":4200,"height":2800,"url":"https://unsplash.com/photos/kmF_Aq8gkp0","download_url":"https://picsum.photos/id/112/4200/2800"},
        {"id":"129","author":"Charlie Foster","width":4910,"height":3252,"url":"https://unsplash.com/photos/A88emaZe7d8","download_url":"https://picsum.photos/id/129/4910/3252"},
    ]
        return (

    <Container>
    <StyledForm onSubmit={handleSubmit(response)}>
        </StyledForm>
        {isLoading ? (
            <p>carregando</p>) : (
        listaUsuarios.map((usuario) => {
        return <div>{usuario?.nome}</div>;
        })
        )}

        <StyledCrsl>
        <Carousel autoPlay  infiniteLoop showThumbs={false}>
        {
            images.map (image => <img  src={image.download_url}/>)
        }
        </Carousel>
        </StyledCrsl>
    </Container>
    )
}

export default Home;

