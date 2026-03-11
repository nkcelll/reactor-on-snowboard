import { IconClose } from '@/assets/icons';

export type InputFieldsAuthProfile = {
  type: 'input',
  label: 'string',
  id: string,
  inputType: string,
  inputClassName?: string,
  placeHolder?: string
}

export default function FormChangeInfo() {
  // const formProfile = ''

  return (
    <div className="modal-profile-user-container">
      <div className="user-header-modal">
        <span></span>
        <button>
          <IconClose />
        </button>
      </div>

    </div>
  );
}
