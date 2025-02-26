import { useState } from 'react';
import Button from '../../components/button';
import TextInput from '../../components/form/textInput';
// import useAuth from '../../hooks/useAuth';
import CredentialsCard from '../../components/credentials';
import './register.css';

const Register = () => {
  // const { onRegister } = useAuth();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const onRegister = (email, password) => {
    console.log('register');
    console.log(email);
  };
  const submit = (e) => {
    console.log('Submit');
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="bg-blue register credentialpage">
      <CredentialsCard
        title="Register"
        socialLinksTitle="Or sign up with"
        altButtonTitle="Already a user?"
        altButtonLink="/login"
        altButtonText="Log in"
      >
        <div className="register-form">
          <form onSubmit={submit}>
            <TextInput
              title="Random"
              value={formData.email}
              onChange={(e) => onChange(e)}
              type="email"
              name="email"
              label={'Email *'}
              pattern={{
                value: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$',
                message: 'Email in wrong format'
              }}
            />
            <TextInput
              pattern=""
              value={formData.password}
              onChange={onChange}
              name="password"
              label={'Password *'}
              type={'password'}
            />
            <Button
              type="submit"
              text="Sign up"
              onClick={() => onRegister(formData.email, formData.password)}
              classes="green width-full"
            />
          </form>
        </div>
      </CredentialsCard>
    </div>
  );
};

export default Register;
