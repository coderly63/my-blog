import React, { useState, useRef } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { PersonXFill } from 'react-bootstrap-icons'
import classNames from 'classnames'
import { CSSTransition } from 'react-transition-group'
import { login, register } from '@/api/modules/login'
import { message } from 'antd'
import { useAppDispatch } from '@/redux/hooks'
import { setUser } from '@/redux/modules/userSlice'
import './index.less'

interface formInitialDetailsType {
  nickname: string
  email: string
  phone: string
  password: string
}

interface LoginProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Login: React.FC<LoginProps> = ({ setIsModalOpen }) => {
  // redux中的user信息
  const dispatch = useAppDispatch()
  // 初始化登录注册表单信息
  const formInitialDetails: formInitialDetailsType = {
    nickname: '',
    email: '',
    phone: '15701381282',
    password: '123456',
  }
  const nodeRef = useRef<HTMLInputElement | null>(null)
  // is login or register ?
  const [isLogin, setIsLogin] = useState<boolean>(true)
  const [formDetails, setFormDetails] =
    useState<formInitialDetailsType>(formInitialDetails)
  const [buttonText, setButtonText] = useState<string>('Login')

  const loginClass = classNames({
    'login-register': true,
    login: isLogin,
    register: !isLogin,
  })

  const onFormUpdate = (category: string, value: string) => {
    setFormDetails({ ...formDetails, [category]: value })
  }
  // 切换登录注册界面
  const changeIsLogin = () => {
    const newIsLogin = isLogin
    setIsLogin(!newIsLogin)
    setButtonText(!newIsLogin ? 'Login' : 'Register')
  }
  // 登录 or 注册
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setButtonText('Sending...')
    if (isLogin) {
      const res = await login(formDetails)
      console.log('handleSubmit ~ res', res)
      if (res.data) {
        dispatch(setUser(res.data))
        if (res.data.token) localStorage.setItem('token', res.data.token)
        message.success('登录成功')
      }
    } else {
      const res = await register(formDetails)
      if (res.code === 200) message.success('注册成功')
    }
    setButtonText('OK')
    setIsModalOpen(false)
  }
  return (
    <div className={loginClass}>
      <Container>
        <Row className="align-items-center">
          <Col size={24} md={10}>
            <div className={1 ? 'animate__animated animate__fadeIn' : ''}>
              <h2 className="title">{isLogin ? '登录' : '注册'}</h2>
              <div className="close-icon" onClick={() => setIsModalOpen(false)}>
                <PersonXFill size={25}></PersonXFill>
              </div>
              <form onSubmit={handleSubmit}>
                <input
                  type="tel"
                  value={formDetails.phone}
                  placeholder="Phone No."
                  onChange={(e) => onFormUpdate('phone', e.target.value)}
                />
                <CSSTransition
                  nodeRef={nodeRef}
                  in={!isLogin}
                  timeout={300}
                  classNames="alert"
                  unmountOnExit
                >
                  <div className="register-form" ref={nodeRef}>
                    <input
                      type="text"
                      value={formDetails.nickname}
                      placeholder="nickname"
                      onChange={(e) => onFormUpdate('nickname', e.target.value)}
                    />
                    <input
                      type="text"
                      value={formDetails.email}
                      placeholder="email"
                      onChange={(e) => onFormUpdate('email', e.target.value)}
                    />
                  </div>
                </CSSTransition>
                <input
                  type="text"
                  value={formDetails.password}
                  placeholder="Password"
                  onChange={(e) => onFormUpdate('password', e.target.value)}
                />
                {isLogin ? (
                  <div className="to-register">
                    <span>Don't have account? </span>
                    <span className="sign-up" onClick={changeIsLogin}>
                      {' '}
                      Sign up
                    </span>
                  </div>
                ) : (
                  <div className="to-login">
                    <span>have account? </span>
                    <span className="sign-in" onClick={changeIsLogin}>
                      {' '}
                      Sign in
                    </span>
                  </div>
                )}
                <button type="submit">
                  <span>{buttonText}</span>
                </button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Login
