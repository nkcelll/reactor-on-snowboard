import { IconClose } from '@/assets/icons';
import type { ProfileFields, AddressFields } from './ProfileInputFields';

interface FormChangeEndpoints {
  userProfileInputs?: ProfileFields[];
  addressInputs?: AddressFields[];
  openProfile?: boolean;
  openAddress?: boolean;
  toggleProfile?: () => void;
  toggleAddress?: () => void;
}

// type ModalType = 'profile' | 'address' | null

export default function FormChangeInfo({
  userProfileInputs = [],
  openProfile,
  toggleProfile,
  addressInputs = [],
  openAddress,
  toggleAddress,
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

  const addressInfo = addressInputs.map((field) => {
    return (
      <div key={field.id} className="edit-form-inputs-modal">
        <label htmlFor={field.htmlFor}>{field.label}</label>
        <input
          className="input-fields edit-form-input-fields"
          id={field.id}
          type={field.inputType}
          placeholder={field.placeHolder}
          required
        />
      </div>
    );
  });

  const title = openProfile ? 'Edit Profile' : 'Edit Address';

  return (
    <>
      {(openProfile || openAddress) && (
        <div className="modal-profile-user-container">
          <form className="user-wrapper-modal">
            <div className="form-edit-header">
              <span>{title}</span>
              <button
                type="button"
                onClick={openProfile ? toggleProfile : toggleAddress}
              >
                <IconClose />
              </button>
            </div>
            {openProfile && userProfileInfo}
            {openAddress && addressInfo}
            <div className="modal-profile-save-cancel-buttons">
              <button type="submit" className="modal-profile-save-buttons">
                Save
              </button>
              <button
                type="button"
                className="modal-profile-save-buttons"
                onClick={openProfile ? toggleProfile : toggleAddress}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
