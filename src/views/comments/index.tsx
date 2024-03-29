import React, { useState, useEffect } from 'react'
import CommentCard from './component/commentCard'
import { User } from '@/api/interface/comment'
import MyComment from './component/myComment'
import './index.less'
import 'animate.css'
import { getCommentList, addComment } from '@/api/modules/comment'
import { CommentObject } from '@/api/interface/comment'
import { message } from 'antd'
import { useAppSelector } from '@/redux/hooks'
import TrackVisibility from 'react-on-screen'

interface CommentPros {
  isInfoChange: boolean
}

const Comments: React.FC<CommentPros> = ({ isInfoChange }) => {
  const [commentList, setCommentList] = useState<Array<CommentObject> | []>([])
  const [topElement, settopElement] = useState(null as any)
  const [hasReply, setHasReply] = useState<boolean>(false)
  const user = useAppSelector((state) => state.user)
  useEffect(() => {
    getComments()
  }, [isInfoChange])
  const getComments = async (isNew: boolean = false) => {
    const res = await getCommentList()
    if (res.data) {
      let list = res.data
      settopElement(list[0])
      list = list.slice(1)
      console.log('getComments ~ list:', list)
      if (!isNew) list.sort((pre, now) => now.nums - pre.nums)
      setCommentList(list)
    }
  }
  // 处理发布或回复评论
  const handleSubmit = async (replyId: User, content: string) => {
    if (!user._id) return message.error('请先登录！')
    const params = {
      userId: user._id,
      replyId: replyId ? replyId._id : undefined,
      content,
    }
    const res = await addComment(params)
    if (res.code === 200) {
      message.success('发布成功！')
      setHasReply(!hasReply)
      getComments()
    }
  }
  return (
    <div className='comments'>
      <div className='title'>
        <div className='text'>comments</div>
        <div className='number'>{commentList.length + 1}</div>
        <div className='sort'>
          <div
            className='list'
            onClick={() => {
              getComments(true)
            }}
          >
            最新
          </div>
          <div>|</div>
          <div
            className='list'
            onClick={() => {
              getComments(false)
            }}
          >
            最热
          </div>
        </div>
      </div>
      <MyComment addComment={handleSubmit}></MyComment>
      <TrackVisibility partialVisibility>
        {({ isVisible }) => (
          <div
            className={isVisible ? 'animate__animated animate__fadeInUp' : ''}
          >
            {topElement && (
              <CommentCard
                isTop={true}
                commentId={topElement._id}
                user={user}
                hasReply={hasReply}
                addComment={handleSubmit}
                userId={topElement.userId}
                nums={topElement.nums}
                content={topElement.content}
                createdAt={topElement.createdAt}
                replyId={topElement.replyId}
                key={topElement._id}
              />
            )}
            {commentList.map((comment) => (
              <CommentCard
                commentId={comment._id}
                user={user}
                hasReply={hasReply}
                addComment={handleSubmit}
                userId={comment.userId}
                nums={comment.nums}
                content={comment.content}
                createdAt={comment.createdAt}
                replyId={comment.replyId}
                key={comment._id}
              />
            ))}
          </div>
        )}
      </TrackVisibility>
    </div>
  )
}

export default Comments
