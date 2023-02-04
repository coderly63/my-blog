import React, { useState } from 'react'
import { User } from '@/api/interface/comment'
import './index.less'
import 'animate.css'

interface myCommentProps {
  placeholder?: string
  replyId?: User
  addComment: Function
}

const myComment: React.FC<myCommentProps> = ({
  placeholder,
  addComment,
  replyId,
}) => {
  const [myComment, setMyComment] = useState<string>('')
  const [buttonText, setButtonText] = useState<string>('Send')
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addComment(replyId, myComment)
    setMyComment('')
  }
  return (
    <div className="my-comment animate__animated animate__fadeInUp">
      <form onSubmit={handleSubmit}>
        <img src="icon.png" alt="" />
        <input
          type="text"
          value={myComment}
          placeholder={placeholder ? placeholder : '发一条友善的评论'}
          onChange={(e) => setMyComment(e.target.value)}
        />
        <div className="navbar-text">
          <button type="submit">
            <span>{buttonText}</span>
          </button>
        </div>
      </form>
    </div>
  )
}

export default myComment
