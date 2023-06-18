import { GlobalStyle } from './GlobalStyle';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy } from 'react';
import { refreshUser } from 'Redux/Auth/operationsAuth'; 
import { PrivateRoute } from './PrivateRoute'; 
import { RestrictedRoute } from './RestrictedRoute'; 
import { ToastContainer } from 'react-toastify'; 
import { LoadingOutlined } from '@ant-design/icons';



const Register = lazy(() => import('../pages/Register/Register'));
const Home = lazy(() => import('../pages/Home/Home'));
const Login = lazy(() => import('../pages/Login/Login'));
const Contactlist = lazy(() => import('../pages/ContactList/ContactList'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser()); 
  }, [dispatch]);

  const { isRefreshing } = useSelector(state => state.auth);

  return !isRefreshing ? (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route
            path="/contacts"
            element={
              <PrivateRoute component={<Contactlist />} redirectTo="/login" />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Register />}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>

      {/* для вспливаючих повідомлень */}
      <ToastContainer />

      {/* для глобальних стилів */}
      <GlobalStyle />
    </>
  ) : (
      <LoadingOutlined  style={{ fontSize: '22px', color: '#2ca04f' }} spin />
  );
};

 
