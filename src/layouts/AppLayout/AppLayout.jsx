
import { StyleInicio } from "../../Components/inicio/styles";
import { Container } from "./styles";
import {Outlet} from "react-router-dom";



export default function AppLayout (){
    return ( 

        <Container> 
        <StyleInicio>cpe</StyleInicio>
        <Outlet /> 
        </Container>
    
    );
}