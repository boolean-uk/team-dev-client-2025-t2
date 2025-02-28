import { createContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getUser } from '../../service/apiClient';
import Profile from '../../components/profile';
import { ProfileButton } from '../../components/profileButton';
import { getId } from '../../service/tokenService';

export const ViewUserContext = createContext();

const ViewProfile = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState(null);
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
    getId() === Number(id) ? setCanEdit(true) : setCanEdit(false);
  }, [id]);

  const goToEdit = () => {
    navigate(`/profile/${id}/edit`);
  };

  return (
    <ViewUserContext.Provider value={{ user }}>
      <div className="profile-button-group">
        <Profile readOnly={true} UserContext={ViewUserContext} />
        <section>
          <ProfileButton isInEditMode={false} canEdit={canEdit} onClick={goToEdit} pageId={id} />
        </section>
      </div>
    </ViewUserContext.Provider>
  );
};

export default ViewProfile;
