import styled from 'styled-components';
import {
  WechatOutlined,
  QqOutlined,
} from '@ant-design/icons';


export const Item = styled.li`
  background-color: #e8eec5;
  padding-left: 10px;
  border-radius: 7px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 22px;
  border: 1px solid #2ca04f;
  
`;

export const List = styled.ul`
  display: flex;
  gap: 15px;
  flex-direction: column;
`;

export const UserIconList = styled(QqOutlined)`
 
  margin-right: 8px;
  color: #2ca04f;
`;

export const PhoneiconList = styled(WechatOutlined)`
  margin: 0 8px;
  color: #2ca04f;
`;

export const DivName = styled.div`
  min-width: 220px;
`;

export const Title = styled.h2`
  margin: 20px auto;
  color: #132b1bbb;
`;

export const Container = styled.div`
  padding: 20px 0;
`;
