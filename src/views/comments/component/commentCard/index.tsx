import React, { useState } from 'react'
import CommentInfo from '../commentInfo'
import MyComment from '../myComment'
import './index.less'

const CommentCard = () => {
  const [isReply, setIsReply] = useState<boolean>(false)
  const handleReply = () => {
    setIsReply(!isReply)
  }
  return (
    <div className="comment-card">
      <i className="iconfont icon-iconzhucetouxiang avator"></i>
      <span className="nickname">影武者飞飞大人</span>
      <div className="message">茄子太老实了，各种节目效果拉满</div>
      <CommentInfo handleReply={handleReply}></CommentInfo>
      {isReply ? <MyComment></MyComment> : <></>}
    </div>
  )
}

export default CommentCard
