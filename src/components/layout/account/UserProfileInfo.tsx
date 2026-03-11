import { IconEdit } from "@/assets/icons";
import FormChangeInfo from "./FormChangeInfo";
import type { ProfileFields } from "./ProfileAuthChanges";
export default function UserProfileInfo() {

  const userProfileInputs: ProfileFields[] = [
    {label: 'span'},
    {label: 'First Name'},
    {label: '', type: 'text', placeHolderRequired: true, placeHolder: 'First Name', id:'first-name-user-profile'},
    {label: '', type: 'text', placeHolderRequired: true, placeHolder: 'Last Name', id:'last-name-user-profile'}
  ]

  return (
    <div className="profile-detail-box profile-box">
      <div className="profile-detail-header">
        <label htmlFor="name">Name</label>
        <button>
          <IconEdit />
        </button>
      </div>
      <div className="profile-detail-footer">
        <label className="email-naming-span">Email</label>
        <span className="email-span">kartozianikoloz1@gmail.com</span>
      </div>
      <FormChangeInfo userProfileInputs={userProfileInputs}/>
    </div>
  );
}
