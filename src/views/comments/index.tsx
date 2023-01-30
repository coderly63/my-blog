import React, { useState } from 'react'
import CommentCard from './component/commentCard'
import MyComment from './component/myComment'
import './index.less'
import 'animate.css'
import TrackVisibility from 'react-on-screen'

const Comments = () => {
  return (
    <div className="comments">
      <div className="title">
        <div className="text">comments</div>
        <div className="number">{24}</div>
      </div>
      <MyComment></MyComment>
      <TrackVisibility partialVisibility>
        {({ isVisible }) => (
          <div className={1 ? 'animate__animated animate__fadeInUp' : ''}>
            <CommentCard></CommentCard>
            <CommentCard></CommentCard>
            <CommentCard></CommentCard>
            <CommentCard></CommentCard>
            <CommentCard></CommentCard>
          </div>
        )}
      </TrackVisibility>
    </div>
  )
}

export default Comments
