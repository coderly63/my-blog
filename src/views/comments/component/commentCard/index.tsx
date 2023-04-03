import React, { useState, useMemo, useEffect } from 'react'
import { timestampToTime } from '@/utils'
import MyComment from '../myComment'
import classNames from 'classnames'
import { User } from '@/api/interface/comment'
import { message } from 'antd'
import { likeComment } from '@/api/modules/comment'
import './index.less'

interface CommentCardProps {
  commentId: string
  addComment: Function
  userId: User
  content: string
  createdAt: number
  nums: number
  replyId?: User
  hasReply: boolean
  user: User
}

const CommentCard: React.FC<CommentCardProps> = ({
  commentId,
  userId,
  content,
  createdAt,
  nums,
  replyId,
  addComment,
  hasReply,
  user,
}) => {
  const [isReply, setIsReply] = useState<boolean>(false)
  const [isLike, setIsLike] = useState<boolean>(false)
  const [fakeNums, setFakeNums] = useState<number>(nums)
  const memoTime = useMemo(() => timestampToTime(createdAt), [createdAt])
  const handleReply = () => {
    setIsReply(!isReply)
  }
  // 点赞class
  const likeClass = classNames({
    like: true,
    icon: true,
    'is-like': isLike,
  })

  useEffect(() => {
    setIsReply(false)
  }, [hasReply])

  // 点赞评论
  const handleLike = async () => {
    if (!user._id) return message.error('请先登录！')
    const curLike = isLike
    setIsLike(!curLike)
    if (curLike) setFakeNums(fakeNums - 1)
    else setFakeNums(fakeNums + 1)
    await likeComment({
      userId: user._id,
      commentId: commentId,
      action: curLike ? -1 : 1,
    })
  }

  return (
    <div className='comment-card'>
      {/* <i className="iconfont icon-iconzhucetouxiang avator"></i> */}
      <img src={userId.avator} className='avator' alt='' />
      <div className='reply-title'>
        <span className='nickname'>{userId.nickname}</span>
        {replyId ? (
          <span className='reply'>
            <span>回复</span>
            <span className='reply-name'>{replyId.nickname} ：</span>
          </span>
        ) : (
          <></>
        )}
      </div>
      <div className='message'>{content}</div>
      <div className='comment-info'>
        <div className='time'>{memoTime}</div>
        <div className={likeClass} onClick={handleLike}>
          <i className='iconfont icon-icon' />
          <span className='number'>{fakeNums}</span>
        </div>
        <div className='reply' onClick={handleReply}>
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
