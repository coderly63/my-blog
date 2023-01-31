import React, { useState, useMemo } from 'react'
import { timestampToTime } from '@/utils'
import './index.less'

interface commentInfoProps {
  handleReply: Function
  createdAt: number
  nums: number
}

const CommentInfo: React.FC<commentInfoProps> = ({
  handleReply,
  createdAt,
  nums,
}) => {
  const onReply = () => {
    handleReply()
  }
  const memoTime = useMemo(() => timestampToTime(createdAt), [createdAt])
  return (
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
      <div className="reply" onClick={onReply}>
        回复
      </div>
    </div>
  )
}

export default CommentInfo
