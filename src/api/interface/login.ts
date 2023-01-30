export interface User {
  '_id'?: string,
  nickname?: string
  email?: string
  phone?: string
  token?: string,
  image?: string,
}
export interface LoginReqForm {
  nickname?: string
  email?: string
  phone: string
  password: string
}
// 登录成功后返回的token
export interface RegisterReqForm {
  nickname: string
  email: string
  phone: string
  password: string
}