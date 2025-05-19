import styled from "styled-components";

export const StyleTexto= styled.div`
width: 100%;
margin-top: 100px;
color:  #ffd100;
display: flex;
font-size: 50px;
text-align: center;
cursor: pointer;
font-weight: bold;
justify-content: center;
margin-bottom: 12px;
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