import { Link } from "react-router-dom"
import type { AuthFields } from "./types"

type FormAuthProps = {
  mode: 'login' | 'signup',
  fields: AuthFields[]
}

export default function FormAuth({mode, fields}: FormAuthProps) {
  const isLogin = mode === 'login'
  return (
    <div className="register-container">
      <div className="auth-container">
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form action='/api/api.get/post' className="form-register">
        {fields.map((user, index) =>
          <div className="user-forms"key={index}>
            {user.label && (
              <>
              <label htmlFor="">{user.label}</label>
              <input type={user.inputType} />
              </>
            )}
            {}
            {user.button && (
              <button className={user.buttonClassname} type={user.buttonType}>{user.button}</button>
            )}
            {user.linkName && user.redirect &&(
              <button className={user.buttonClassname}>
                <Link to={user}>{user.linkName}</Link>
              </button>
            )}
        </div>)}
      </form>
    </div>
    </div>
    
  )
}