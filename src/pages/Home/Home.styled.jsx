import styled, { keyframes } from 'styled-components';
import {
  QqOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import img from '../../img/png.png';
import { bounce } from 'react-animations';

const animation = keyframes`${bounce}`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  color: #132b1bbb;
`;

export const Wrap = styled.div`
  margin-bottom: 60px;
  padding: 40px 0;
  display: flex;
  gap: 30px;
  justify-content: center;
`;

export const TitleH2 = styled.h2`
  color: #132b1bbb;
  text-align: center;
  font-size: 28px;
  height: 40px;
`;

export const HomeLink = styled(Link)`
  text-decoration: none;
  margin: 0 6px;
  color: white;
  border: 1px solid #2ca04f;
  border-radius: 8px;
  padding: 5px 8px;
  background-color: #2ca04f;
  font-weight: 400;
  font-size: 20px;
  
`;

export const Section = styled.section`
  padding-top: 40px;
  height: 40em;
  background-image: linear-gradient(
      90deg,
      rgba(157, 177, 163, 0.96),
      rgba(255, 255, 255, 0.97)
    ),
    url(${img}); 
  border-radius: 1.1em; 
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const HomeEdit = styled(QqOutlined)`
  animation: 2s ${animation};
  svg {
    color: #2ca04f;
    width: 200px;
    display: block;
    height: 200px;
    margin: 0 auto;
  }
`;
