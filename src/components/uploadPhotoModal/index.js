import useModal from '../../hooks/useModal';
import Button from '../button';

const UploadPhotoModal = () => {
  const { closeModal } = useModal();
  const handleChooseFile = () => {
    // todo add file add
  };
  return (
    <>
      <div className="welcome-form-popup">
        <p> Choose a file to upload for your headshot.</p>
        <div className="welcome-form-popup-buttons">
          <Button text="Cancel" classes="offwhite" onClick={closeModal} />
          <Button text="Choose file" classes="blue" onClick={handleChooseFile} />
        </div>
      </div>
    </>
  );
};
export default UploadPhotoModal;
