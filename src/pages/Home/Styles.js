import styled from "styled-components";
import { Table } from "antd";
export const Container = styled.div`
    display: flex;
    justify-content: center; 
    flex-direction: column;
    align-items: center;
    grid-template-rows: auto ifr;
   min-height: 100vh;
    padding: 20px;

    @media (max-width: 280px){

    }
`;

export const StyledForm = styled.form `
   width: 90%; 
    display: flex;
     margin-left: 0;
    margin-right: auto;
    justify-content: flex-end;
`;

export const StyledCrsl = styled.div`
 width:25%;
border-radius: 50px;
margin: auto;
margin-top: 10px;

@media (max-width: 320px) {
  .carousel-wrapper {
    width: 95%;
  }

  .carousel .slide img {
    border-radius: 8px;
  }
}

@media (max-width: 280px) {
  .carousel-wrapper {
    width: 100%;
    padding: 0 5px;
  }
 .carousel .slide img {
    border-radius: 5px;
  }
}
  `
export const StyleBotaoLogarSessao = styled.button`
 font-size: 20px;
        font-weight: bold;
        color: #ffd100;
        background-color: black;
        border-radius: 6px;
        border: none;
        cursor: pointer;
        transition: background-color 0.3s ease;
        margin-left: 9px;
        

        &.hover {
            background-color: black;
        }
    @media (max-width: 409px) {
    font-size: 14px;
    padding: 8px;
  }
  @media (max-width: 280px) {
    font-size: 14px;
    padding: 8px;
  }
`;

export const StyleBotaoDeslog = styled.button`
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

export const StyledTable = styled(Table)`
.ant-table-thead > tr > th {
    background: #ffd100;
    color: black;
    font-weight: bold;

  }

  .ant-table-tbody > tr > td {
    background:rgb(88, 86, 86);
    color: white;
  }
`;


