export type InputFieldsAuth = {
  type?: 'input'
  label?: string
  id?: string 
  inputType?: string
  inputClassName?: string
}

export type ButtonFieldAuth = {
  type?: 'button'
  label?: string
  buttonName?: string
  id?: string
  buttonType?: string
  buttonClassName: string
}

export type LinkFieldAuth = {
  type?: 'link'
  // label?: string
  linkName?: string
  id?: string
  redirect?: string
  buttonClassName?: string
}

export type RememberUser = {
  type?: 'checkbox'
  // label?: string
  userRemember?: string
  inputType?: string
}
export type ForgotPassUser = {
  userForgotPass?: string
  // label?: string
}

export type AuthFields = InputFieldsAuth | ButtonFieldAuth | LinkFieldAuth | RememberUser | ForgotPassUser