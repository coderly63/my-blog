export interface User {
  '_id'?: string,
  nickname?: string
  email?: string
  phone?: string
  token?: string,
  image?: string,
}

export interface CommentObject {
  '_id': string,
  nums: number,
  action: number,
  userId: User,
  replyId?: User,
  content: string,
  createdAt: number,
  updateAt: number,
}

export interface AddCommentReq {
  userId: string,
  replyId?: string,
  content: string,
}