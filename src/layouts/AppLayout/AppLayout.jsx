
import Header from "../../Components/header/Header"
import { Container } from "./styles";
import {Outlet} from "react-router-dom";



export default function AppLayout (){
    return ( 

        <Container> 
        <Header></Header>
        <Outlet /> 
        </Container>
    
    );
}