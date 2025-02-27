import { useNavigate } from 'react-router-dom';
import Button from '../button';

export const ProfileButton = (isInEditMode, canEdit, onClick, pageId) => {
  const navigate = useNavigate();
  const onCancel = (e) => {
    e.preventDefault();
    navigate(`/profile/${pageId}`);
  };

  return (
    <div>
      {isInEditMode ? (
        <div className="button-container">
          <Button text="Save" onClick={onClick} className="" />
          <Button text="Cancel" onClick={onCancel} className="" />
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
