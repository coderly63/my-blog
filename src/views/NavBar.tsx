import { Navbar, Container, Nav } from 'react-bootstrap'
import React, { useState, useEffect } from 'react'
import { useAppSelector } from '@/redux/hooks'
import logo from '../assets/img/logo.svg'
import navIcon1 from '../assets/img/qq.svg'
import navIcon2 from '../assets/img/vx.svg'
import navIcon3 from '../assets/img/dy.svg'

interface NavBarProps {
  toPosition: Function
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const NavBar: React.FC<NavBarProps> = ({ toPosition, setIsModalOpen }) => {
  const [activeLink, setActiveLink] = useState<string>('home')
  const [scolled, setScolled] = useState<boolean>(false)
  const user = useAppSelector((state) => state.user)

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
  return (
    <Navbar expand="lg" className={scolled ? 'scolled' : ''}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
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
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#" className="qq-qrcode">
                <img src={navIcon1} alt="" />
              </a>
              <a href="#" className="vx-qrcode">
                <img src={navIcon2} alt="" />
              </a>
              <a href="#" className="dy-qrcode">
                <img src={navIcon3} alt="" />
              </a>
            </div>
            {user.nickname ? (
              <i className="iconfont icon-iconzhucetouxiang profile"></i>
            ) : (
              <button className="vvd" onClick={() => setIsModalOpen(true)}>
                <span>Let’s Connect</span>
              </button>
            )}
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
