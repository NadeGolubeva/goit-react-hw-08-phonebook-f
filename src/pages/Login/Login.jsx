import {
  FormWrap,
  LogButton,
  UserIcon,
  PasswordIcon,
  InputForm,
  RegLink,
  Container,
  TitleAct,
  LinkStyle
} from './Login.styled';

import { loginuser } from 'Redux/Auth/operationsAuth';
import { useDispatch } from 'react-redux';


export default function Login() {
  const [form] = FormWrap.useForm();
  const dispatch = useDispatch();

  const onFinish = values => {
    dispatch(loginuser(values)); 
    form.resetFields(); 
  };

  return (
    <section>
      <Container>
        <FormWrap
          form={form}
          name="normal_login"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          {' '}
          <TitleAct>Log in</TitleAct>
          <FormWrap.Item
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your Email!',
                type: 'email',
              },
            ]}
          >
            <InputForm prefix={<UserIcon />} placeholder="Email" />
          </FormWrap.Item>
          <FormWrap.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <InputForm
              prefix={<PasswordIcon />}
              type="password"
              placeholder="Password"
            />
          </FormWrap.Item>
          <FormWrap.Item>
            <LogButton type="primary" htmlType="submit">
              Log in
            </LogButton>
            <RegLink>
              Or <LinkStyle to="/register">register now</LinkStyle>
            </RegLink>
          </FormWrap.Item>
        </FormWrap>
      </Container>
    </section>
  );
}

 
