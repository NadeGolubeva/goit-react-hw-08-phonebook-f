import { useSelector } from 'react-redux';
import { Avatar } from 'antd';
import { Wrap, ButtonCommon } from './Usermenu.styled';
import { logOut } from 'Redux/Auth/operationsAuth';
import { useDispatch } from 'react-redux';
import { LogoutOutlined } from '@ant-design/icons'; 

export const UserMenu = () => {
  const { email } = useSelector(state => state.auth.user); 
  const dispatch = useDispatch();

  return (
    <Wrap>
      <Avatar style={{ backgroundColor: '#2ca04f', color: '#e8eec5' }}>{email.slice(0, 3).toUpperCase()}</Avatar>
      <p>{email}</p>
      <ButtonCommon style={{backgroundColor: '#2ca04f'}} type="primary" onClick={() => dispatch(logOut())}>
        <LogoutOutlined /> Log out
      </ButtonCommon>{' '}
    </Wrap>
  );
};

 
