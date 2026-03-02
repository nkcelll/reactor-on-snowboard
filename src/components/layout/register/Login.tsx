import './register.css'
import FormAuth from './FormAuth'
import type { AuthFields } from './types'

export default function Login() {

  const login: AuthFields[]  = [
    {type: 'input', label: 'Email',  inputClassName: 'auth-input-field', id: 'login-user', inputType: 'email'},
    {type: 'input', label: 'Password', inputClassName: 'auth-input-field', id: 'login-user-password', inputType: 'password'},
    // {label: 'Remember Me', inputClassName: 'auth-input-field-checkBox', inputType: 'checkbox'},
    {type: 'checkbox', userRemember: 'Remember Me', inputType: 'checkbox'},
    {type: 'button', buttonName: 'Login', buttonClassName: 'auth-button-share', buttonType: 'submit'},
    {type: 'link', linkName: 'Create an account', buttonClassName: 'auth-button-share', redirect: '/sign-up'}
  ]
  // const login = [
  //   {label: 'Email',  inputClassname: 'auth-input-field', id: 'login-user', inputType: 'email'},
  //   {label: 'Password', inputClassname: 'auth-input-field', id: 'login-user-password', inputType: 'password'},
  //   {button: 'Login', buttonClassname: 'auth-button-share', buttonType: 'submit'},
  //   {linkName: 'Create an account', buttonClassname: 'auth-button-share', redirect: '/sign-up'}
  // ]

  return (
    <>
      <FormAuth mode='login' fields={login}/>
    </>
  )
}