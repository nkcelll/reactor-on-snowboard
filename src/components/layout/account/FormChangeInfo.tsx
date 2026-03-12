import { IconClose } from '@/assets/icons';
import type { ProfileFields } from './ProfileFields';

interface FormChangeEndpoints {
  userProfileInputs: ProfileFields[];
  isOpen: boolean;
  toggleModal: () => void;
}

export default function FormChangeInfo({
  userProfileInputs,
  isOpen,
  toggleModal,
}: FormChangeEndpoints) {
  const userProfileInfo = userProfileInputs.map((field) => {
    return (
      <div key={field.id} className="edit-form-inputs-modal">
        <label htmlFor={field.htmlFor}>{field.label}</label>
        <input
          className="input-fields edit-form-input-fields"
          id={field.id}
          type={field.inputType}
          placeholder={field.placeHolder}
        />
      </div>
    );
  });
  return (
    <>
      {isOpen && (
        <div className="modal-profile-user-container">
          <div className="user-wrapper-modal">
            <div className="form-edit-header">
              <span>Edit Profile</span>
              <button type="button" onClick={toggleModal}>
                <IconClose />
              </button>
            </div>
            {userProfileInfo}
            <div className="modal-profile-save-cancel-buttons">
              <button type="submit" className="modal-profile-save-buttons">
                Save
              </button>
              <button
                type="button"
                className="modal-profile-save-buttons"
                onClick={toggleModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
