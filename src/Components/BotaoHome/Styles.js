import styled from "styled-components";

export const StyleBotaoPadrao= styled.button`
 font-size: 20px;
        color: #ffd100;
        background-color: black;
        border-radius: 6px;
        border: 2px solid #ffd100;
        cursor: pointer;
        transition: background-color 0.3s ease;
        margin-left: 9px;
        

        &.hover {
            background-color: black;
        }
    @media (max-width: 409px) {
    font-size: 6px;

  }
  @media (max-width: 280px) {
    font-size: 6px;

  }
`;