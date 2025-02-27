import { createContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUser } from '../../service/apiClient';
import { ProfileButton } from '../../components/profileButton';
import Profile from '../../components/profile';
import { getId } from '../../service/tokenService';

export const UserContext = createContext();

const EditProfile = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [updatedUser, setUpdatedUser] = useState({});
  const [canEdit, setCanEdit] = useState(false);

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
    getId() === id ? setCanEdit(true) : setCanEdit(false);
  }, [id]);

  const submit = async (e) => {
    e.preventDefault();
    try {
      // await updateUser(id, updatedUser);
      console.log(updatedUser);
    } catch (error) {
      console.error('Error updating user:', error);
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
      <Profile readOnly={false} UserContext={UserContext} />
      <ProfileButton isInEditMode={true} canEdit={canEdit} onClick={submit} pageId={id} />
    </UserContext.Provider>
  );
};

export default EditProfile;
