import {
  LabelEl,
  FormReg,
  BtnSubmit,
  InputReg,
  InputPassword,
  RegMail,
  RegUser,
  RegPassWord,
  LinkToLog,
  Text,
  Container,
  TitleAct,
} from './Register.styled';

import { register } from 'Redux/Auth/operationsAuth';
import { useDispatch, useSelector } from 'react-redux';

export default function Register() {
  const [form] = FormReg.useForm();
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(state => state.auth);

  const onFinish = values => {
    const { name, email, password } = values;

    if (password) {
      dispatch(register({ name, email, password })); 
      !isLoading && !error && form.resetFields(); 
    }
  };

  return (
    <section>
      <Container>
        <FormReg
          form={form}
          name="register"
          onFinish={onFinish}
          initialValues={{
            residence: [], 
            prefix: '86',
          }}
          scrollToFirstError
        >
          <TitleAct>Register new user</TitleAct>
          <LabelEl
            name="name"
            label="Name"
            rules={[
              {
                required: true,
                message: 'Please input name!',
                whitespace: true,
              },
            ]}
          >
            <InputReg prefix={<RegUser />} />
          </LabelEl>
          <LabelEl
            name="email"
            label="E-mail"
            rules={[
              {
                type: 'email',
                message: 'Email is not valid',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >
            <InputReg prefix={<RegMail />} />
          </LabelEl>
          <LabelEl
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: 'Please input password',
              },
            ]}
            hasFeedback
          >
            <InputPassword
              prefix={<RegPassWord />}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 7 or more characters"
            />
          </LabelEl>
          <LabelEl>
            {' '}
            <BtnSubmit type="primary" htmlType="submit">
              Register
            </BtnSubmit>{' '}
            <Text>
              You can <LinkToLog to="/login"> log in,</LinkToLog>in case you have
              an account{' '}
            </Text>
          </LabelEl>
        </FormReg>
      </Container>
    </section>
  );
}
