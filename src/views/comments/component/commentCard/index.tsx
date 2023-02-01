import React, { useState, useMemo, useEffect } from 'react'
import { timestampToTime } from '@/utils'
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
  hasReply: boolean
}

const CommentCard: React.FC<CommentCardProps> = ({
  userId,
  content,
  createdAt,
  nums,
  replyId,
  addComment,
  hasReply,
}) => {
  const [isReply, setIsReply] = useState<boolean>(false)
  const memoTime = useMemo(() => timestampToTime(createdAt), [createdAt])
  const handleReply = () => {
    setIsReply(!isReply)
  }

  useEffect(() => {
    setIsReply(false)
  }, [hasReply])

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
      <div className="comment-info">
        <div className="time">{memoTime}</div>
        <div className="like icon">
          <i className="iconfont icon-icon" />
          <span className="number">{nums}</span>
        </div>
        <div className="dislike icon">
          <i className="iconfont icon-cai"></i>
          {/* <span className="number">0</span> */}
        </div>
        <div className="reply" onClick={handleReply}>
          回复
        </div>
      </div>
      {isReply ? (
        <MyComment addComment={addComment} replyId={userId}></MyComment>
      ) : (
        <></>
      )}
    </div>
  )
}

export default CommentCard
