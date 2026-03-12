import './accountLayout.css';
import { UserProfileInfo, Address } from './index';
import type { ProfileFields, AddressFields } from "./ProfileInputFields";
import { useState } from 'react';
export default function Account() {
  const [openProfile, setOpenProfile] = useState<boolean>(false)
  const [openAddress, setOpenAddress] = useState<boolean>(false)

  const userProfileInputs: ProfileFields[] = [
    {label: 'First Name', htmlFor: 'first-name', inputType: 'input', id: 'edit-first-name', placeHolder: 'Your Name'},
    {label: 'Last Name', htmlFor: 'last-name', inputType: 'input', id: 'edit-last-name', placeHolder: 'Last Name'},
    {label: 'Email', htmlFor: 'change-email', inputType: 'input', id: 'edit-email', placeHolder: 'example@gmail.com'}
  ]

  const addressInputs: AddressFields[] = [
    {label: 'Address Line:', htmlFor: 'address_line', inputType:'text', id: 'address_line', name: 'address_line'},
    {label: 'City:', htmlFor: 'city', inputType:'text', id: 'city', name: 'city'},
    {label: 'Street:', htmlFor: 'street', inputType:'text', id: 'street', name: 'street'},
    {label: 'Zip:', htmlFor: 'zip', inputType:'text', id: 'zip', name: 'zip'},
  ] 
  const toggleProfile = () => {
    setOpenProfile(prev => !prev)
  }
  const toggleAddress = () => {
    setOpenAddress(prev => !prev)
  }
  return (
    <div className="account-container">
      <div className="account-wrapper">
        <div className="profile-header">
          <span>Profile</span>
          <button type="submit">Log out</button>
        </div>
        <UserProfileInfo
        userProfileInputs={userProfileInputs} 
        openProfile={openProfile}
        toggleProfile={toggleProfile}
        />
        <Address 
         addressInputs={addressInputs}
         openAddress={openAddress}
         toggleAddress={toggleAddress}
        />
      </div>
    </div>
  );
}
