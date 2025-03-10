/* eslint-disable no-lone-blocks */
import { useState } from 'react';
import Stepper from '../../components/stepper';
import useAuth from '../../hooks/useAuth';
import StepOne from './stepOne';
import StepTwo from './stepTwo';
import StepThree from './stepThree';
import StepFour from './stepFour';
import './style.css';

const Welcome = () => {
  const { onCreateProfile } = useAuth();
  const [inputIsValid, setInputIsValid] = useState(false);
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    githubUsername: '',
    bio: '',
    email: '',
    mobile: '',
    password: '',
    role: '',
    cohortId: '',
    specialism: '',
    startDate: '',
    endDate: ''
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    setProfile({
      ...profile,
      [name]: value
    });
    console.log(profile);
  };

  const onComplete = () => {
    if (inputIsValid) {
      onCreateProfile(profile.firstName, profile.lastName, profile.githubUsername, profile.bio);
      console.log(profile.firstName, profile.lastName, profile.githubUsername, profile.bio);
    } else {
      console.log('invalid');
      console.log(profile.firstName);
    }
  };

  return (
    <main className="welcome">
      <div className="welcome-titleblock">
        <h1 className="h2">Welcome to Cohort Manager</h1>
        <p className="text-blue1">Create your profile to get started</p>
      </div>

      <Stepper
        header={<WelcomeHeader />}
        onComplete={onComplete}
        inputIsValid={inputIsValid}
        setInputIsValid={setInputIsValid}
      >
        <StepOne
          data={profile}
          inputIsValid={inputIsValid}
          setInputIsValid={setInputIsValid}
          setData={onChange}
        />
        <StepTwo
          data={profile}
          inputIsValid={inputIsValid}
          setInputIsValid={setInputIsValid}
          setData={onChange}
        />
        <StepThree data={profile} setData={onChange} setInputIsValid={setInputIsValid} />
        <StepFour data={profile} setData={onChange} setInputIsValid={setInputIsValid} />
      </Stepper>
    </main>
  );
};

const WelcomeHeader = () => {
  return (
    <div className="welcome-cardheader">
      <h2>Create profile</h2>
      <p className="text-blue1">Tell us about yourself to create your profile</p>
    </div>
  );
};

export default Welcome;
