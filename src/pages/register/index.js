import { useState } from 'react';
import Button from '../../components/button';
import TextInput from '../../components/form/textInput';
import useAuth from '../../hooks/useAuth';
import CredentialsCard from '../../components/credentials';
import './register.css';
import { validEmail, validPassword } from '../../service/inputValidationService';

const Register = () => {
  const { onRegister } = useAuth();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [emailResponse, setEmailResponse] = useState('');
  const [passwordReponse, setPasswordResponse] = useState('');
  const submit = async (e) => {
    e.preventDefault();
    setEmailResponse('');
    setPasswordResponse('');
    const emailValid = validEmail(formData.email);
    const passwordValid = validPassword(formData.password);
    if (!passwordValid.isValid) {
      setPasswordResponse(passwordValid.message); // Set password error response
    }
    if (!emailValid.isValid) {
      setEmailResponse(emailValid.message); // Set email error response
    }
    // Only request if email and password is valid
    if (passwordValid.isValid && emailValid.isValid) {
      const data = await onRegister(formData.email, formData.password);
      console.log(data);
      if (data.status === 'fail' && data.email !== null) {
        console.log('email');
        setEmailResponse(data.data.email);
      }
    }
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
              require={true}
              value={formData.email}
              onChange={(e) => onChange(e)}
              type="email"
              name="email"
              label={'Email *'}
              errorResponse={emailResponse}
            />
            <TextInput
              require={true}
              value={formData.password}
              onChange={onChange}
              name="password"
              label={'Password *'}
              type={'password'}
              errorResponse={passwordReponse}
            />
            <span className="input-description">
              Password must contain atleast 8 characters, including atleast one capital letter, one
              number and one special character
            </span>
            <span className="input-description">*Required</span>
            <Button type="submit" text="Sign up" classes="green width-full" />
          </form>
        </div>
      </CredentialsCard>
    </div>
  );
};

export default Register;
