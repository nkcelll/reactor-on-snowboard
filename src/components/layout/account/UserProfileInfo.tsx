import { IconEdit } from "@/assets/icons";
import FormChangeInfo from "./FormChangeInfo";
import type { ProfileFields } from "./ProfileFields";
import { useState } from "react";
export default function UserProfileInfo() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const userProfileInputs: ProfileFields[] = [
    {label: 'First Name', htmlFor: 'first-name', inputType: 'input', id: 'edit-first-name', placeHolder: 'Your Name'},
    {label: 'Last Name', htmlFor: 'last-name', inputType: 'input', id: 'edit-last-name', placeHolder: 'Last Name'},
    {label: 'Email', htmlFor: 'change-email', inputType: 'input', id: 'edit-email', placeHolder: 'example@gmail.com'}
  ]

  const toggleModal = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <div className="profile-detail-box profile-box">
      <div className="profile-detail-header">
        <label htmlFor="name">Name</label>
        <button type="button" onClick={toggleModal}>
          <IconEdit />
        </button>
      </div>
      <div className="profile-detail-footer">
        <label className="email-naming-span">Email</label>
        <span className="email-span">kartozianikoloz1@gmail.com</span>
      </div>
      <FormChangeInfo 
        userProfileInputs={userProfileInputs}
        isOpen={isOpen}
        toggleModal={toggleModal}
      />
      {/* <FormChangeInfo userProfileInputs={userProfileInputs}/> */}
    </div>
  );
}
