import { IconEdit } from "@/assets/icons";
import FormChangeInfo from "./FormChangeInfo";
import type { ProfileFields } from "./ProfileInputFields";
// import { useState } from "react";

interface ProfileProps {
  userProfileInputs: ProfileFields[]
  openProfile: boolean,
  toggleProfile: () => void
}

export default function UserProfileInfo({userProfileInputs, openProfile, toggleProfile}: ProfileProps) {

  return (
    <div className="profile-detail-box profile-box">
      <div className="profile-detail-header">
        <label htmlFor="name">Name</label>
        <button type="button" onClick={toggleProfile}>
          <IconEdit />
        </button>
      </div>
      <div className="profile-detail-footer">
        <label className="email-naming-span">Email</label>
        <span className="email-span">kartozianikoloz1@gmail.com</span>
      </div>
      <FormChangeInfo 
        userProfileInputs={userProfileInputs}
        openProfile={openProfile}
        toggleProfile={toggleProfile}
      />
    </div>
  );
}
