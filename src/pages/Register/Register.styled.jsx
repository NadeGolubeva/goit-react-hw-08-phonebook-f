import styled from 'styled-components';
import { Form, Input } from 'antd';
import { QqOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export const LabelEl = styled(Form.Item)`
  label {
    width: 150px;
    padding-top: 8px;
  }
`;

export const Container = styled.div`
  padding-top: 10%;
  display: flex;
  padding-left: 20%;
`;

export const FormReg = styled(Form)`
  width: 500px;
`;

export const BtnSubmit = styled.button`
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


export const InputReg = styled(Input)`
  height: 40px;
  font-size: 20px;
  border: 1px solid #2ca04f;
`;

export const InputPassword = styled(Input.Password)`
  height: 40px;
  font-size: 20px;
  border: 1px solid #2ca04f;
`;

export const RegMail = styled(MailOutlined)`
  color: #2ca04f;
`;

export const RegUser = styled(QqOutlined)`
  color: #2ca04f;
`;

export const RegPassWord = styled(LockOutlined)`
  color: #2ca04f;
`;

export const LinkToLog = styled(Link)`
  font-size: 20px;
  margin: 0 4px;
   color: #2ca04f;
   font-weight: 500;
;
`;

export const Text = styled.div`
  font-size: 20px;
  line-height: 1.11;
  position: absolute;
  top: -1%;
  left: 50%;
  margin-left: 20px;

`;

export const TitleAct = styled.h2`
  margin-left: 30%;
  margin-bottom: 15px;
  color: #132b1bbb;
`;
