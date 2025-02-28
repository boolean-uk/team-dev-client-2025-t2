import { useNavigate } from 'react-router-dom';
import Button from '../button';
import './styling.css';

export const ProfileButton = ({ isInEditMode, canEdit, onClick, pageId }) => {
  const navigate = useNavigate();
  const onCancel = (e) => {
    e.preventDefault();
    navigate(`/profile/${pageId}`);
  };

  return (
    <div>
      {isInEditMode ? (
        <div className="button-container">
          <Button text="Cancel" onClick={onCancel} className="button-button" />
          <Button text="Save" onClick={onClick} className="" />
        </div>
      ) : (
        <div>
          <Button
            text="Edit"
            onClick={onClick}
            className="profile-button"
            disabled={!canEdit} // Assuming canEdit should enable the button when true
          />
        </div>
      )}
    </div>
  );
};
