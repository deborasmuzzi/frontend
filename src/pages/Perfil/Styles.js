import styled from "styled-components";
import { Modal } from "antd";
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

export const StyleBotaoPadrao = styled.button`
  display: inline-block;
        padding: 25px;
        font-size: 20px;
        width: 15%;
        font-weight: bold;
        text-align: center;
        color: black;
        background-color: #ffd100;
        border-radius: 6px;
        border: none;
        cursor: pointer;
        transition: background-color 0.3s ease;
        justify-content: center;

 
        

        &.hover {
            background-color: #ffd100;
        }
  @media (max-width: 280px) {
    font-size: 14px;
    padding: 8px;
  }
`;

export const StyledAntdModal = styled(Modal)`
  .ant-modal-content {
    background-color: black;
    border-radius: 10px;
  }

  .ant-modal-title {
    color: yellow;
    font-size: 1.8em;
  }

  .ant-modal-body {
    background-color: #303030;
    color: yellow;
    padding: 30px;
  }

  .ant-modal-footer {
    background-color: #252525;
    border-top: 1px solid #404040;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;
