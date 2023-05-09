import React, { useState } from 'react'
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap'
import ProjectCard from './ProjectCard'
import projImg1 from '../assets/img/project-img1.png'
import projImg2 from '../assets/img/project-img2.png'
import projImg3 from '../assets/img/project-img3.png'
import projImg4 from '../assets/img/project-img4.png'
import projImg5 from '../assets/img/project-img5.png'
import projImg6 from '../assets/img/project-img6.png'
import colorSharp2 from '../assets/img/color-sharp2.png'
import { message, Badge, Descriptions } from 'antd'
import 'animate.css'
import './Projects.less'
import TrackVisibility from 'react-on-screen'
import { getStorage } from '@/utils'

const Projects = () => {
  type ProjectsType = {
    title: string
    description: string
    imgUrl: string
    url: string
  }
  const projects: Array<ProjectsType> = [
    {
      title: 'Virtual Scroll',
      description: 'Scroll',
      imgUrl: projImg1,
      url: 'https://juejin.cn/post/6844904183582162957',
    },
    {
      title: 'Virtual DOM',
      description: 'React & Vue',
      imgUrl: projImg2,
      url: 'https://juejin.cn/post/6844903806132568072',
    },
    {
      title: 'Large file upload',
      description: 'Resume the upload at a breakpoint',
      imgUrl: projImg3,
      url: 'https://juejin.cn/post/6844904046436843527',
    },
    {
      title: 'A JavaScript library for building user interfaces',
      description: 'react & redux',
      imgUrl: projImg4,
      url: 'https://react.docschina.org/',
    },
    {
      title: 'The Progressive JavaScript Framework',
      description: 'vue & vuex',
      imgUrl: projImg5,
      url: 'https://cn.vuejs.org/',
    },
    {
      title:
        'Node.js® is an open-source, cross-platform JavaScript runtime environment.',
      description: 'node & js',
      imgUrl: projImg6,
      url: 'https://nodejs.org/en/',
    },
  ]

  const [keyword, setKeyword] = useState('')
  const downloadZip = (
    linkUrl: string,
    isCheck: boolean = false,
    key: string = 'fronts'
  ) => {
    if (isCheck && keyword !== '123456') return message.error('提取码错误！')
    const link = document.createElement('a')
    link.href = linkUrl
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    getStorage(key, 19)
  }

  return (
    <section className='project' id='project'>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility partialVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                    <Nav
                      variant='pills'
                      className='nav-pills mb-5 justify-content-center align-items-center'
                      id='pills-tab'
                    >
                      <Nav.Item>
                        <Nav.Link eventKey='first'>分享</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey='second'>下载</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey='third'>统计</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id='slideInUp'
                      className={
                        isVisible ? 'animate__animated animate__slideInUp' : ''
                      }
                    >
                      <Tab.Pane eventKey='first'>
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey='second'>
                        <div className='second'>
                          <div className='code'>下载博客前端代码</div>
                          <div
                            className='download'
                            onClick={() =>
                              downloadZip(
                                'http://49.233.45.84:3333/blog-end-master.zip'
                              )
                            }
                          >
                            download
                          </div>
                          <div className='code'>下载博客后端代码</div>
                          <form>
                            <input
                              type='password'
                              value={keyword}
                              placeholder='请输入提取码'
                              onChange={(e) => setKeyword(e.target.value)}
                            />
                          </form>
                          <div
                            className='download'
                            onClick={() =>
                              downloadZip(
                                'http://49.233.45.84:3333/my-blog-main.zip',
                                true,
                                'ends'
                              )
                            }
                          >
                            download
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey='third'>
                        <div className='third'>
                          <Descriptions title='博客相关参数' bordered>
                            <Descriptions.Item label='名称'>
                              个人博客
                            </Descriptions.Item>
                            <Descriptions.Item label='上线时间'>
                              2023-01-01 18:00:00
                            </Descriptions.Item>
                            <Descriptions.Item label='分类'>
                              前后端分离
                            </Descriptions.Item>
                            <Descriptions.Item label='浏览量'>
                              {window.localStorage.getItem('views') || 186}
                            </Descriptions.Item>
                            <Descriptions.Item label='状态' span={3}>
                              <Badge status='processing' text='Running' />
                            </Descriptions.Item>
                            <Descriptions.Item label='登录次数'>
                              {window.localStorage.getItem('logins') || 75}
                            </Descriptions.Item>
                            <Descriptions.Item label='前端下载量'>
                              {window.localStorage.getItem('fronts') || 19}
                            </Descriptions.Item>
                            <Descriptions.Item label='后端下载量'>
                              {window.localStorage.getItem('ends') || 13}
                            </Descriptions.Item>
                            <Descriptions.Item label='Data Info'>
                              Data disk type: MongoDB
                              <br />
                              Database version: 3.4
                              <br />
                              Package: dds.mongo.mid
                              <br />
                              Storage space: 10 GB
                              <br />
                              Replication factor: 3
                              <br />
                              Region: East China 1
                              <br />
                            </Descriptions.Item>
                          </Descriptions>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className='background-image-right' src={colorSharp2}></img>
    </section>
  )
}

export default Projects
