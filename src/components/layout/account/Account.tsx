import './accountLayout.css';
import { UserProfileInfo, Address } from './index';

export default function Account() {
  return (
    <div className="account-container">
      <div className="account-wrapper">
        <div className="profile-header">
          <span>Profile</span>
          <button type="submit">Log out</button>
        </div>
        <UserProfileInfo />
        <Address />
      </div>
    </div>
  );
}
