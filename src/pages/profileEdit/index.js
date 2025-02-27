import { createContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUser } from '../../service/apiClient';
import Profile from '../../components/profile';

export const UserContext = createContext();

const EditProfile = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [updatedUser, setUpdatedUser] = useState({});

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
      <button onClick={submit}>Submit</button>
    </UserContext.Provider>
  );
};

export default EditProfile;
