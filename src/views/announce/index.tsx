import React, { useState, useRef, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { PersonXFill } from 'react-bootstrap-icons'
import { CSSTransition } from 'react-transition-group'
import './index.less'

interface LoginProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Login: React.FC<LoginProps> = ({ setIsModalOpen }) => {
  return (
    <div className='login-register'>
      <Container>
        <Row className='align-items-center'>
          <Col size={24} md={10}>
            <div className={1 ? 'animate__animated animate__fadeIn' : ''}>
              <h2 className='title'>公告</h2>
              <div className='close-icon' onClick={() => setIsModalOpen(false)}>
                <PersonXFill size={25}></PersonXFill>
              </div>
              <div>
                欢迎来到我的个人博客！这里是我分享生活、学习和工作经验的地方。在这里，我会写一些技术文章，分享我的编程经验，同时也会分享一些关于生活和旅行的故事。我希望通过我的博客能够帮助到你，提供一些有用的信息和灵感。
                我是一名软件工程师，对前端开发、后端开发和移动应用程序开发都有一定的经验。我会在博客中分享我的编程技巧和经验，并且也会写一些关于职业发展和创业的文章。
                除了技术和职业方面，我也会分享一些关于旅行和生活的内容。旅行是我热爱的爱好之一，我会分享我的旅行经历和旅行中的收获。我也会写一些关于生活的文章，分享我的生活经验和心得，希望能够为你提供一些启发和帮助。
                感谢你访问我的个人博客，希望你能在这里找到你需要的信息和灵感。如果你有任何问题或建议，欢迎在博客中留言，我会尽快回复你。谢谢！
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Login
