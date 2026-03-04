
import './register.css'
import FormAuth from './FormAuth'
import type { AuthFields } from './formAuthTypes'

export default function SignUp() {

  const signUp: AuthFields[] = [
    {type: 'input', label: 'First Name',  inputClassName: 'auth-input-field', id: 'sign-up-user-first-name', inputType: 'text', placeHolder: 'John'},
    {type: 'input', label: 'Last Name', inputClassName: 'auth-input-field', id: 'sign-up-user-last-name', inputType: 'text', placeHolder: 'Doe'},
    {type: 'input', label: 'Email',  inputClassName: 'auth-input-field', id: 'sign-up-user-email', inputType: 'email', placeHolder: 'Example@gmail.com'},
    {type: 'input', label: 'Password', inputClassName: 'auth-input-field', id: 'sign-up-user-password', inputType: 'password', placeHolder: '********'},
    {type: 'button', buttonName: 'Login', buttonClassName: 'auth-button-share', buttonType: 'submit'},
    {type: 'link', linkName: 'Create an account', buttonClassName: 'auth-button-share', redirect: '/login'}
  ]
  return (
    <>
      <FormAuth mode='signup' fields={signUp}/>
    </>
  )
}