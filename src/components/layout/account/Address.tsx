import { IconAdd, IconEmailInfo } from '@/assets/icons';
import type { AddressFields } from './ProfileInputFields';
import FormChangeInfo from './FormChangeInfo';
interface AddressProps {
  addressInputs: AddressFields[],
  openAddress: boolean,
  toggleAddress: () => void
}

export default function Address({addressInputs,openAddress,toggleAddress}: AddressProps) {
  return (
    <div className="address-detail-box profile-box">
      <div className="profile-detail-header">
        <label htmlFor="name">Address</label>
        <button type='button' onClick={toggleAddress}>
          <IconAdd />
        </button>
      </div>
      <div className="profile-detail-footer">
        <div className="no-address-added">
          <IconEmailInfo />
          <span>No address added</span>
        </div>
      </div>
      <FormChangeInfo
        addressInputs={addressInputs}
        openAddress={openAddress}
        toggleAddress={toggleAddress}
      />
    </div>
  );
}
