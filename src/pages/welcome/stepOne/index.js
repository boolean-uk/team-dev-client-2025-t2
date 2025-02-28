import { useEffect, useState } from 'react';
import ProfileIcon from '../../../assets/icons/profileIcon';
import Form from '../../../components/form';
import TextInput from '../../../components/form/textInput';
import { validFirstName, validLastName } from '../../../service/inputValidationService';
import useModal from '../../../hooks/useModal';
import UploadPhotoModal from '../../../components/uploadPhotoModal';

const StepOne = ({ data, setData, inputIsValid, setInputIsValid }) => {
  const [firstNameResponse, setFirstNameResponse] = useState('');
  const [lastNameResponse, setLastNameResponse] = useState('');
  const { openModal, setModal } = useModal();

  // Create a function to run on user interaction
  const showModal = () => {
    // Use setModal to set the header of the modal and the component the modal should render
    setModal('Upload photo', <UploadPhotoModal />); // CreatePostModal is just a standard React component, nothing special

    // Open the modal!
    openModal();
  };
  useEffect(() => {
    if (data.firstName !== '' && data.lastName !== '') {
      setInputIsValid(true);
    }
    if (data.lastName === '') {
      setLastNameResponse(validLastName(data.lastName).message);
      setInputIsValid(false);
    }
    if (data.lastName.length > 1) {
      setLastNameResponse('');
    }
    if (data.firstName === '') {
      setFirstNameResponse(validFirstName(data.firstName).message);
      setInputIsValid(false);
    }
    if (data.firstName.length > 1) {
      setFirstNameResponse('');
    }
  }, [data.firstName, data.lastName, inputIsValid, firstNameResponse, lastNameResponse]);
  return (
    <>
      <div className="welcome-formheader">
        <h3>Basic info</h3>
      </div>
      <Form className="welcome-form" onSubmit={() => console.log('next')}>
        <div className="welcome-form-profileimg">
          <p className="text-blue1">Photo</p>
          <div className="welcome-form-profileimg-input">
            <ProfileIcon colour="#28C846" background="#64DC78" />
            <p onClick={showModal} className="text-blue1">
              Add headshot
            </p>
          </div>
          <p className="welcome-form-profileimg-error">Please upload a valid image file</p>
        </div>
        <div className="welcome-form-inputs">
          <TextInput
            require={true}
            onChange={setData}
            value={data.firstName}
            name="firstName"
            label={'First name*'}
            errorResponse={firstNameResponse}
          />
          <TextInput
            require={true}
            onChange={setData}
            value={data.lastName}
            name="lastName"
            label={'Last name*'}
            errorResponse={lastNameResponse}
          />
          <TextInput
            require={true}
            onChange={setData}
            value={data.githubUsername}
            name="githubUsername"
            label={'Github Username'}
          />
          <p className="text-blue1">*Required</p>
        </div>
      </Form>
    </>
  );
};

export default StepOne;
