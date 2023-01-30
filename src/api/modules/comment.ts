import axios from '../index'
import { CommentList } from '../interface/comment'

export const getCommentList = () => {
  // 返回的数据格式可以和服务端约定
  return axios.get<CommentList>('/comment/list');
}
