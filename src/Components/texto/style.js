import styled from "styled-components";

export const StyleTexto= styled.div`
width: 100%;
margin-top: 15px;
color:  #ffd100;
display: flex;
font-size: 50px;
text-align: center;
font-weight: bold;
cursor: pointer;
justify-content: center;
text-align: center;
@media (max-width: 280px) {
    font-size: 14px;
    padding: 8px;
  }

html {
    scroll-behavior: smooth;
    @media (prefers-reduced-motion: reduce) { 
        scroll-behavior: auto;
    }
}
`