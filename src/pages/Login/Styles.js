import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    grid-template-rows: auto ifr;
    height: 100%;
      @media (max-width: 280px) {
    font-size: 14px;
    padding: 8px;
  }
`;


export const Form = styled.form`
`
export const Campo = styled.div``
export const Label = styled.div``
export const StyleInput = styled.input`
        font-size: 70px;
        color: gray;
        background-color: white;
        border-radius: 20px;
        border: none;
        cursor: pointer;
        width: 75%;
        height: 80x;
        outline:none;
        margin-top:20px;
        margin-bottom:20px;
    @media (max-width: 280px) {
    font-size: 14px;
    padding: 8px;
  }
`;
export const Button = styled.button``