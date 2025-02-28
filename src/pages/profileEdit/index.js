import { createContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getUser, updateUser } from '../../service/apiClient';
import { ProfileButton } from '../../components/profileButton';
import Profile from '../../components/profile';
import { getId } from '../../service/tokenService';
import { validateUpdateUser } from '../../service/inputValidationService';

export const UserContext = createContext();

const EditProfile = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [updatedUser, setUpdatedUser] = useState({});
  const [canEdit, setCanEdit] = useState(true);
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState('');
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getUser(id);
        setUser(response.data.user);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
    getId() === Number(id) ? setCanEdit(true) : setCanEdit(false);
  }, []);

  useEffect(() => {
    if (!canEdit) {
      navigate(`/profile/${id}`);
    }
  }, [canEdit]);

  useEffect(() => {
    const validInput = validateUpdateUser(updatedUser);
    if (!validInput.isValid) {
      setErrorMsg(validInput.message);
    }
  }, [updatedUser]);

  const submit = async (e) => {
    e.preventDefault();
    const validInput = validateUpdateUser(updatedUser);
    if (!validInput.isValid) {
      return;
    }
    if (Object.keys(updatedUser).length > 0) {
      try {
        await updateUser(id, updatedUser);
        console.log(updatedUser);
      } catch (error) {
        console.error('Error updating user:', error);
      }
    }
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser((prevUpdatedUser) => ({
      ...prevUpdatedUser,
      [name]: value
    }));
  };

  return (
    <UserContext.Provider value={{ user, updatedUser, onChange, submit }}>
      <div className="profile-button-group">
        <Profile readOnly={false} UserContext={UserContext} />
        <p className="input-invalid">{errorMsg}</p>
        <section>
          <ProfileButton isInEditMode={true} canEdit={canEdit} onClick={submit} pageId={id} />
        </section>
      </div>
    </UserContext.Provider>
  );
};

export default EditProfile;
