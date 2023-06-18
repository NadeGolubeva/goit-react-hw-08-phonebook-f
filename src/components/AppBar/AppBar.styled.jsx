import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  gap: 30px;
  justify-content: space-between;
  height: 50px;
  align-items: center;
  border: 1px solid '#2ca04f'
`;

export const Link = styled(NavLink)`

  margin-right: 20px;
  &.active {
    color: #2ca04f;
    border-top: 2px solid #2ca04f;
  }
  text-decoration: none;
  color: inherit;
  font-size: 20px;
  font-weight: 600;
  padding: 11px 4px;
`;

export const Container = styled.div`
  padding: 0 15px;
    width: 1000px;
`;
