import axios from '../index'
import { LoginReqForm, User, RegisterReqForm } from '../interface/login'

export const login = (params: LoginReqForm) => {
  // 返回的数据格式可以和服务端约定
  return axios.post<User>('/user/login', params);
}

export const register = (params: RegisterReqForm) => {
  // 返回的数据格式可以和服务端约定
  return axios.post<User>('/user/register', params);
}