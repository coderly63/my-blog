import React, { useRef, useEffect, useState } from 'react'
import NavBar from '@/views/NavBar'
import Banner from '@/views/Banner'
import Skills from '@/views/Skills'
import Projects from '@/views/Projects'
import Contact from '@/views/Contact'
import Comments from '@/views/comments'
import Modal from '@/components/Modal'
import Login from '@/views/login'
import Info from '@/views/info'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const myRef = useRef<HTMLDivElement>(null)
  // 存放各个组件offsetTop的数组
  const [positionList, setpositionList] = useState<Array<number>>([0, 0, 0])
  // 控制登录弹窗组件是否展示
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  // 控制修改用户信息弹窗组件是否展示
  const [isChangeModalOpen, setIsChangeModalOpen] = useState<boolean>(true)
  // 获取各个组件在渲染时的offsetTop 用于滚动
  const getBannerPosition = () => {
    const skillDom = myRef.current?.children[2] as HTMLElement | null
    const projectDom = myRef.current?.children[3] as HTMLElement | null
    const contactDom = myRef.current?.children[4] as HTMLElement | null
    const commentDom = myRef.current?.children[5] as HTMLElement | null
    if (skillDom && projectDom && contactDom && commentDom) {
      setpositionList([
        0,
        skillDom.offsetTop,
        projectDom.offsetTop,
        contactDom.offsetTop,
        commentDom.offsetTop,
      ])
    }
  }
  // 点击导航栏跳转到指定位置
  const toPosition = (key: number) => {
    window.scrollTo({
      top: positionList[key],
      behavior: 'smooth',
    })
  }
  useEffect(() => {
    setTimeout(() => {
      getBannerPosition()
    }, 100)
  }, [])
  return (
    <>
      <div className="App" ref={myRef}>
        <NavBar
          toPosition={toPosition}
          setIsModalOpen={setIsModalOpen}
          setIsChangeModalOpen={setIsChangeModalOpen}
        ></NavBar>
        <Banner setIsModalOpen={setIsModalOpen}></Banner>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
        <Comments></Comments>
        <Modal open={isModalOpen} setIsModalOpen={setIsModalOpen}>
          <Login setIsModalOpen={setIsModalOpen}></Login>
        </Modal>
        <Modal open={isChangeModalOpen} setIsModalOpen={setIsChangeModalOpen}>
          <Info setIsModalOpen={setIsChangeModalOpen}></Info>
        </Modal>
      </div>
    </>
  )
}

export default App
