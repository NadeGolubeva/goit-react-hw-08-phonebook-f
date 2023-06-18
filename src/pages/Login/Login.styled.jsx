import styled from 'styled-components';
import { Form, Input } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
export const FormWrap = styled(Form)`
  width: 300px;
  
`;

export const LogButton = styled.button`
  margin-right: 8px;
  margin-left: auto;
 background-color: #2ca04f;
 color: white;
 font-size: 22px;
    height: 34px;
    padding: 4px 15px;
    border-radius: 6px;
    border: 0px solid white;
    width: 300px;
`;

export const UserIcon = styled(MailOutlined)`
  color: #2ca04f;
`;

export const PasswordIcon = styled(LockOutlined)`
  color: #2ca04f;
`;

export const InputForm = styled(Input)`
  height: 45px;
  font-size: 20px;
  width: 100%;
  border: 1px solid #2ca04f;
`;

export const RegLink = styled.div`
  font-size: 20px;
  text-align: center;

`;
export const LinkStyle = styled(NavLink)`
  color: #2ca04f;
  font-weight: 500;

`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10%;
`;

export const TitleAct = styled.h2`
  text-align: center;
  margin-bottom: 15px;
  color: #132b1bbb;
`;
