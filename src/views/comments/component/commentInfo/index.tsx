import React, { useState } from 'react'
import './index.less'

interface commentInfoProps {
  handleReply: Function
}

const CommentInfo: React.FC<commentInfoProps> = ({ handleReply }) => {
  const onReply = () => {
    handleReply()
  }
  return (
    <div className="comment-info">
      <div className="time">2022-12-21 21:51</div>
      <div className="like icon">
        <i className="iconfont icon-icon"></i>
        <span className="number">32</span>
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
