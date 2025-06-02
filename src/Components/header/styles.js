import styled from "styled-components";

export const StyleHeader= styled.div`
border:solid;
height: 100px;
width: 100%;
margin-bottom: 30px;
background-color:  #ffd100;
color: black;
display: flex;
padding-top: 15px;
font-size: 50px;
gap: 20px;
html {
    scroll-behavior: smooth;
    @media (prefers-reduced-motion: reduce) { 
        scroll-behavior: auto;
    }
}
`
export const Container = styled.div`
    @media (max-width: 280px){
    display: flex;
    justify-content: center;
    align-items: center;
    grid-template-rows: auto ifr;
    height: 100%;
    }
`;
