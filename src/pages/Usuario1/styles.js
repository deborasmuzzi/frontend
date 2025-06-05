import styled from "styled-components";
import { Table , Modal} from "antd";
export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    
    font-size: 14px;
    padding: 8px;
    flex-direction: column;
    gap: 25px;
  
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

export const StyledAntdModal = styled(Modal)`
.ant-modal-content {
    background-color: black;
    color: #fdd100;
}

  .ant-modal-title {
    color: #fdd100;
    background-color: black;
    font-size: 1.8em;
    width: 100%;
  }

  .ant-modal-body {
    background-color:rgb(48, 45, 45);
    color: #ffd100;
    font-size: 30px;
    padding: 30px;
  }


  
`;


export const StyledInput = styled.input`
border-color: black;
width: 200px;
height: 40px;
border-radius: 10px;

`