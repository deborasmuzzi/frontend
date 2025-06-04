import styled from "styled-components";
export const Container = styled.div`
    @media (max-width: 280px){
    display: flex;
    justify-content: center;
    align-items: center;
    grid-template-rows: auto ifr;
    height: 100%;
    }
`;
export const StyleInput = styled.input`
        font-size: 30px;
        color: gray;
        background-color: white;
        border-radius: 20px;
        border: none;
        cursor: pointer;
        width: 50%;
        height: 70px;
        margin-left: 25%;
        margin-bottom: 10px;
        outline:none;
        margin-top:50px;
        padding-left: 10px;
    
        
`;



export const Form = styled.form`
`