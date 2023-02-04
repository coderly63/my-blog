import axios from '../index'
import { CommentObject, AddCommentReq, LikeCommentReq } from '../interface/comment'

export const getCommentList = () => {
  // 返回的数据格式可以和服务端约定
  return axios.get<CommentObject[]>('/comment/list');
}


export const addComment = (params: AddCommentReq) => {
  // 返回的数据格式可以和服务端约定
  return axios.post('/comment/add', params);
}

export const likeComment = (params: LikeCommentReq) => {
  // 返回的数据格式可以和服务端约定
  return axios.post('/comment/like', params);
}
