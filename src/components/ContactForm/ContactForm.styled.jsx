import styled from 'styled-components';
import {  Form, Input, Modal } from 'antd';
import { WechatOutlined, QqOutlined } from '@ant-design/icons';

export const FormWrap = styled(Form)`
  margin: 0 auto;

`;

export const ModalNewContactBtn =  styled.button`
  margin-right: 8px;
  margin-left: auto;
 background-color: #2ca04f;
 color: white;
 font-size: 16px;
    height: 32px;
    padding: 4px 15px;
    border-radius: 6px;
    border: 0px solid white;
`;


export const UserIcon = styled(QqOutlined)`
  color: #2ca04f;
`;

export const PhoneIcon = styled(WechatOutlined)`
  color: #2ca04f;
`;

export const InputForm = styled(Input)`
  height: 35px;
  font-size: 20px;
  width: 100%;
`;

export const ModalNewContact = styled(Modal)`
  text-align: center;
  .ant-modal-content {
    width: 340px;
    height: 225px;
    position: absolute;
    top: 50%;
    left: 20%;
    background-color: #e8eec5;
  
  }
`;

export const OpenModalNewContact = styled.button`
  margin-right: 8px;
  margin-top: 8px;
  margin-left: auto;
 background-color: #2ca04f;
 color: white;
 font-size: 16px;
    height: 32px;
    padding: 4px 15px;
    border-radius: 6px;
    border: 0px solid white;
      &:hover {
    color: #132b1bbb;
     
  }

`;
