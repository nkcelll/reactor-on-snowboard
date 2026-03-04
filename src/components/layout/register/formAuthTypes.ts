export type InputFieldsAuth = {
  type: 'input'
  label?: string
  id?: string
  inputType?: string
  inputClassName?: string
  placeHolder?: string
}

export type ButtonFieldAuth = {
  type: 'button'
  buttonName?: string
  id?: string
  buttonType?: 'submit'
  buttonClassName: string
}

export type LinkFieldAuth = {
  type: 'link'
  linkName?: string
  id?: string
  redirect?: string
  buttonClassName?: string
}

export type RememberUser = {
  type: 'checkbox'
  userRemember?: string
  id?: string
  inputType?: string
  inputClassName?: string
}

export type ForgotPassUser = {
  type: 'forgotModal'
  buttonType: 'button'
  // userForgotPass?: string
  label?: string
  id?: string
}

export type AuthFields =
  | InputFieldsAuth
  | ButtonFieldAuth
  | LinkFieldAuth
  | RememberUser
  | ForgotPassUser