import styled from "styled-components";

export const StyleTexto= styled.div`
width: 100%;
margin-top: 60px;
color:  #ffd100;
display: flex;
font-size: 50px;
margin-bottom: 120px;
text-align: center;
cursor: pointer;
font-weight: bold;
justify-content: center;

html {
    scroll-behavior: smooth;
    @media (prefers-reduced-motion: reduce) { 
        scroll-behavior: auto;
    }
}
`