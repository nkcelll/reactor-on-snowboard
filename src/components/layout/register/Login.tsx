import './register.css'
import FormAuth from './FormAuth'
import type { AuthFields } from './formAuthTypes'

export default function Login() {

  const login: AuthFields[]  = [
    {type: 'input', label: 'Email',  inputClassName: 'auth-input-field', id: 'login-user', inputType: 'email', placeHolder: 'Example@gmail.com'},
    {type: 'input', label: 'Password', inputClassName: 'auth-input-field', id: 'login-user-password', inputType: 'password', placeHolder: '********'},
    {type: 'checkbox', userRemember: 'Remember Me', inputClassName: 'auth-input-field-checkBox', id: 'auth-remember-checkbox'},
    {type: 'forgotModal', label: 'Forgot password ?',id: 'forgot-password', buttonType: 'button'},
    {type: 'button', buttonName: 'Login', buttonClassName: 'auth-button-share', buttonType: 'submit'},
    {type: 'link', linkName: 'Create an account', buttonClassName: 'auth-button-share', redirect: '/signup'}
  ]
  return (
    <>
      <FormAuth mode='login' fields={login}/>
    </>
  )
}