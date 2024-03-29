import { Navbar, Container, Nav } from 'react-bootstrap'
import React, { useState, useEffect } from 'react'
import logo from '../assets/img/logo.svg'
import { message } from 'antd'
import navIcon1 from '../assets/img/qq.svg'
import navIcon2 from '../assets/img/vx.svg'
import navIcon3 from '../assets/img/dy.svg'
import announce from '../assets/img/公告.png'
import music from '../assets/img/音乐.svg'
import stopMusic from '../assets/img/音乐-禁止.svg'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { setUser } from '@/redux/modules/userSlice'
import Modal from '@/components/Modal'
import Announce from './announce'
import './NavBar.less'

interface NavBarProps {
  toPosition: Function
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  setIsChangeModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const NavBar: React.FC<NavBarProps> = ({
  toPosition,
  setIsModalOpen,
  setIsChangeModalOpen,
}) => {
  const [activeLink, setActiveLink] = useState<string>('home')
  const [isPlaying, setIsPlaying] = useState(true)
  const [isAnnounceOpen, setIsAnnounceOpen] = useState<boolean>(false)
  const [scolled, setScolled] = useState<boolean>(false)
  const user = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const onScroll = (): void => {
      if (window.scrollY > 50) setScolled(true)
      else setScolled(false)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const onUpdateActiveLink = (value: string) => {
    if (value === 'home') toPosition(0)
    else if (value === 'skills') toPosition(1)
    else if (value === 'projects') toPosition(2)
    else if (value === 'contact') toPosition(3)
    else toPosition(4)
    setActiveLink(value)
  }
  const logout = () => {
    dispatch(setUser({}))
    message.success('退出成功')
  }
  return (
    <Navbar expand='lg' className={scolled ? 'scolled' : ''}>
      <Container>
        <Navbar.Brand href='#home'>
          <img src={logo} alt='' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link
              className={
                activeLink === 'home' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              className={
                activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('skills')}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              className={
                activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('projects')}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              className={
                activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('contact')}
            >
              Contact
            </Nav.Link>
            <Nav.Link
              className={
                activeLink === 'comments' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('comments')}
            >
              Comments
            </Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a href='#' className='qq-qrcode'>
                <img src={navIcon1} alt='' />
              </a>
              <a href='#' className='vx-qrcode'>
                <img src={navIcon2} alt='' />
              </a>
              <a href='#' className='dy-qrcode'>
                <img src={navIcon3} alt='' />
              </a>
            </div>
            {user.nickname ? (
              <div className='profile-card'>
                {/* <i className="iconfont icon-iconzhucetouxiang profile"></i> */}
                <img src={user.avator} className='avator' alt='' />
                <div className='profile-detail'>
                  <div className='title'>{user.nickname}</div>
                  <div className='navbar-text'>
                    <button type='submit' onClick={logout}>
                      <span>logout</span>
                    </button>
                  </div>
                  <div className='navbar-text'>
                    <button
                      type='submit'
                      onClick={() => setIsChangeModalOpen(true)}
                    >
                      <span>change info</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <button className='vvd' onClick={() => setIsModalOpen(true)}>
                <span>Let’s Connect</span>
              </button>
            )}
            <img
              className='announce'
              src={announce}
              onClick={() => setIsAnnounceOpen(true)}
            />
            <img
              className='announce'
              src={isPlaying ? music : stopMusic}
              onClick={() => setIsPlaying(!isPlaying)}
            />
            <Modal open={isAnnounceOpen} setIsModalOpen={setIsAnnounceOpen}>
              <Announce setIsModalOpen={setIsAnnounceOpen}></Announce>
            </Modal>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
