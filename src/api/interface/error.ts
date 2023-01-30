export interface errorData {
  errors?: Array<{
    msg: string,
    location?: string,
    param?: string,
    value?: string
  }>
}