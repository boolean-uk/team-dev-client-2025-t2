import { createContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUser } from '../../service/apiClient';
import Profile from '../../components/profile';

export const ViewUserContext = createContext();

const ViewProfile = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

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

  return (
    <ViewUserContext.Provider value={{ user }}>
      <Profile readOnly={true} UserContext={ViewUserContext} />
    </ViewUserContext.Provider>
  );
};

export default ViewProfile;
