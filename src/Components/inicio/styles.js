import styled from "styled-components";

export const StyleInicio= styled.div`
border:solid;
height: 100px;
width: 100%;
margin-bottom: 20px;
background-color:  #ffd100;
color: black;
display: flex;
padding-top: 15px;
font-size: 50px;
html {
    scroll-behavior: smooth;
    @media (prefers-reduced-motion: reduce) { 
        scroll-behavior: auto;
    }
}
`
