import { IconAdd, IconEmailInfo } from '@/assets/icons';

export default function Address() {
  return (
    <div className="address-detail-box profile-box">
      <div className="profile-detail-header">
        <label htmlFor="name">Address</label>
        <button>
          <IconAdd />
        </button>
      </div>
      <div className="profile-detail-footer">
        <div className="no-address-added">
          <IconEmailInfo />
          <span>No address added</span>
        </div>
      </div>
    </div>
  );
}
