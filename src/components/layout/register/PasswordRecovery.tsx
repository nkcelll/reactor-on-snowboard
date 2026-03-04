import './register.css'
import IconClose from '@/assets/icons/IconClose';

type PasswordRecoveryProps = {
  onClick: () => void;
};

export default function PasswordRecovery({onClick}: PasswordRecoveryProps) {
  return (
    <div className="password-modal-box" onClick={(e) => e.stopPropagation()}>
      <button type="button" onClick={onClick}>
        <IconClose />
      </button>
      <h3>Password Reset</h3>
      <span>We'll send you an email to reset your password.</span>
      <div  className="forgot-password-form" >
        <label htmlFor="email">
          <span>Email</span>
        </label>
        <input type="email" placeholder="Example@gmail.com" />
        <button type="submit">Send</button>
      </div>
    </div>
  );
}
