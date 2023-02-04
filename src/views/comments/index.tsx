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

const Comments = () => {
  const [commentList, setCommentList] = useState<Array<CommentObject> | []>([])
  const [hasReply, setHasReply] = useState<boolean>(false)
  const user = useAppSelector((state) => state.user)
  useEffect(() => {
    getComments()
  }, [])
  const getComments = async () => {
    const res = await getCommentList()
    console.log('getComments ~ res.data', res.data)
    if (res.data) setCommentList(res.data)
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
    <div className="comments">
      <div className="title">
        <div className="text">comments</div>
        <div className="number">{commentList.length}</div>
      </div>
      <MyComment addComment={handleSubmit}></MyComment>
      <TrackVisibility partialVisibility>
        {({ isVisible }) => (
          <div
            className={isVisible ? 'animate__animated animate__fadeInUp' : ''}
          >
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
