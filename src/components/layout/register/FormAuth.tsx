import { Link } from 'react-router-dom';
import type { AuthFields } from './formAuthTypes';
import { useState, useEffect} from 'react';
import PasswordRecovery from './PasswordRecovery';

type FormAuthProps = {
  mode: 'login' | 'signup';
  fields: AuthFields[];
};

export default function FormAuth({ mode, fields }: FormAuthProps) {
  const [openModal, setOpenModal] = useState(false)
  
  useEffect(() => {
    document.body.style.overflow = openModal ? 'hidden' : 'auto'
    return (() => {
      document.body.style.overflow = 'auto'
    })
  }, [openModal])

  const toggleModal = () => {
    setOpenModal(prev => !prev)
  }

  console.log(openModal)
  const isLogin = mode === 'login';
  return (
    <div className="register-container">
      <div className="auth-container">
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form action="/api/api.get/post" className="form-register">
          {fields.map((user, index) => (
            <div className="user-forms" key={index}>
              {user.type === 'input' && (
                <>
                  <label htmlFor={user.id}>{user.label}</label>
                  <input
                    type={user.inputType}
                    id={user.id}
                    className={user.inputClassName}
                    placeholder={user.placeHolder}
                  />
                </>
              )}
              {user.type === 'checkbox' && (
                <div className="remember-checkbox-container">
                  <input type="checkbox" id={user.id} />
                  <span>{user.userRemember}</span>
                </div>
              )}

              {user.type === 'forgotModal' && (
                <div className="forgot-modal-container">
                  <button
                    id={user.id}
                    type={user.buttonType}
                    className="forgot"
                    onClick={toggleModal}
                  >
                    {user.label}
                  </button>
                  {openModal && <div className="password-modal-container" onClick={toggleModal}>
                    <PasswordRecovery onClick={toggleModal}/>
                  </div>}
                </div>
              )}

              {user.type === 'button' && (
                <button className={user.buttonClassName} type={user.buttonType}>
                  {user.buttonName}
                </button>
              )}
              {user.type === 'link' && user.redirect && (
                <Link to={user.redirect} className={user.buttonClassName}>
                  {user.linkName}
                </Link>
              )}
            </div>
          ))}
        </form>
      </div>
    </div>
  );
}
