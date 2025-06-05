import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyleHeader= styled.div`
border:solid;
height: 100px;
width: 100%;
margin-bottom: 30px;
background-color:  #ffd100;
color: black;
text-decoration-color: black;
display: flex;
padding-top: 15px;
align-items: center;
font-size: 30px;
gap: 20px;
html {
    scroll-behavior: smooth;
    @media (prefers-reduced-motion: reduce) { 
        scroll-behavior: auto;
    }
}
`
export const StyleBotaoDeslog = styled.button`
  display: inline-block;
        padding: 15px;
        font-size: 30px;
        width: 28%;
        font-weight: bold;
        text-align: center;
        color: black;
        background-color: #ffd100;
        border-radius: 15px;
        border: none;
        cursor: pointer;
   
 
  
       
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    transition: color 0.3s;
    margin-right: 200px;

    &:hover {
        color: #005fa3;
    }
`;