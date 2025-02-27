import { useNavigate } from 'react-router-dom';
import Button from '../button';

export const ProfileButton = (isInEditMode, canEdit, onClick, pageId) => {
  const navigate = useNavigate();
  const onCancel = (e) => {
    e.preventDefault();
    navigate(`/route/${pageId}`);
  };

  return (
    <div>
      {isInEditMode && (
        <div className="button-container">
          <Button text="Save" onClick={(e) => onClick()} className="" />
          <Button text="Cancel" onClick={(e) => onCancel(e)} className="" />
        </div>
      )}

      {!isInEditMode && (
        <div>
          <Button
            text="Edit"
            onClick={(e) => onClick()}
            className="profile-button"
            disabled={canEdit}
          />
        </div>
      )}
    </div>
  );
};
