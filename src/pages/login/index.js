import { useState } from 'react';
import Button from '../../components/button';
import TextInput from '../../components/form/textInput';
import useAuth from '../../hooks/useAuth';
import CredentialsCard from '../../components/credentials';
import './login.css';

const Login = () => {
  const { onLogin } = useAuth();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [response, setResponse] = useState('');

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault();
    const data = await onLogin(formData.email, formData.password);
    if (data.status === 'fail') {
      setResponse(data.data.email);
      console.log(data.data.email);
    }
  };

  return (
    <div className="bg-blue login credentialpage">
      <CredentialsCard
        title="Login"
        socialLinksTitle="Or log in with"
        altButtonTitle="Need an account?"
        altButtonLink="/register"
        altButtonText="Sign up"
      >
        <div className="login-form">
          <form onSubmit={submit}>
            <TextInput value={formData.email} onChange={onChange} name="email" label={'Email *'} />
            <TextInput
              value={formData.password}
              onChange={onChange}
              name="password"
              label={'Password *'}
              type={'password'}
              errorResponse={response}
            />

            <Button type="submit" text="Log in" classes="green width-full" />
          </form>
        </div>
      </CredentialsCard>
    </div>
  );
};

export default Login;
