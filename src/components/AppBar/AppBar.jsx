import {
  Nav,
  Link,
  Container,
} from './AppBar.styled';

import { CheckOutlined, FormOutlined, QqOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { LoadingOutlined } from '@ant-design/icons';

import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';

export const AppBar = () => {
  const { isLoaggedIn, isLoading } = useSelector(state => state.auth); 

  return (
    <header>
      {isLoading &&  <LoadingOutlined  style={{ fontSize: '22px', color: '#2ca04f' }} spin />}
      <Container>
        <Nav >
          <div>
            <Link to="/">
              <QqOutlined />
              Home
            </Link>
            {isLoaggedIn && (
              <Link to="/contacts">
                <MenuUnfoldOutlined />
                Contacts
              </Link>
            )}
          </div>
          <div>
            {isLoaggedIn ? (
              <UserMenu />
            ) : (
              <>
                <Link to="/register">
                  <FormOutlined />
                  Register
                </Link>
                  <Link to="/login">
                    <CheckOutlined />
                  
                  Log in
                </Link>
              </>
            )}
          </div>
        </Nav>
      </Container>
    </header>
  );
};

 
