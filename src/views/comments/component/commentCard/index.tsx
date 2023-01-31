import React, { useId, useState } from 'react'
import CommentInfo from '../commentInfo'
import MyComment from '../myComment'
import { User } from '@/api/interface/comment'
import './index.less'

interface CommentCardProps {
  addComment: Function
  userId: User
  content: string
  createdAt: number
  nums: number
  replyId?: User
}

const CommentCard: React.FC<CommentCardProps> = ({
  userId,
  content,
  createdAt,
  nums,
  replyId,
  addComment,
}) => {
  const [isReply, setIsReply] = useState<boolean>(false)
  const handleReply = () => {
    setIsReply(!isReply)
  }

  return (
    <div className="comment-card">
      <i className="iconfont icon-iconzhucetouxiang avator"></i>
      <div className="reply-title">
        <span className="nickname">{userId.nickname}</span>
        {replyId ? (
          <span className="reply">
            <span>回复</span>
            <span className="reply-name">{replyId.nickname} ：</span>
          </span>
        ) : (
          <></>
        )}
      </div>
      <div className="message">{content}</div>
      <CommentInfo
        handleReply={handleReply}
        createdAt={createdAt}
        nums={nums}
      ></CommentInfo>
      {isReply ? (
        <MyComment addComment={addComment} replyId={userId}></MyComment>
      ) : (
        <></>
      )}
    </div>
  )
}

export default CommentCard
