interface User {
  '_id'?: string,
  nickname?: string
  email?: string
  phone?: string
  token?: string,
  image?: string,
}

export interface CommentList {
  action: number,
  userId: User,
  replyId?: User,
  content: string,
  createdAt: number,
  updateAt: number,
}[]
