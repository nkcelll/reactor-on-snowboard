export interface ProfileFields {
  label: string,
  id: string,
  inputType: string,
  htmlFor: string
  placeHolder?: string
}

export interface AddressFields {
  label: string,
  htmlFor: string,
  inputType: 'text',
  id: string,
  name: string,
  value?: string,
  placeHolder?: string,
  // options?: string[]

} 