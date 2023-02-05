import React from 'react'
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap'
import ProjectCard from './ProjectCard'
import projImg1 from '../assets/img/project-img1.png'
import projImg2 from '../assets/img/project-img2.png'
import projImg3 from '../assets/img/project-img3.png'
import projImg4 from '../assets/img/project-img4.png'
import projImg5 from '../assets/img/project-img5.png'
import projImg6 from '../assets/img/project-img6.png'
import colorSharp2 from '../assets/img/color-sharp2.png'
import 'animate.css'
import TrackVisibility from 'react-on-screen'

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
      title: 'Node.js® is an open-source, cross-platform JavaScript runtime environment.',
      description: 'node & js',
      imgUrl: projImg6,
      url: 'https://nodejs.org/en/',
    },
  ]


  return (
    <section className="project" id="project">
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
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? 'animate__animated animate__slideInUp' : ''
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                          Over 40 contractors for YouTube Music are going on
                          strike — a first at Google, according to the Alphabet
                          Workers Union (or AWU). The action is in response to
                          an order to return to in-person work next week,
                          something that many of the workers say they can’t do.
                          They’re demanding a return-to-work policy that’s
                          “fair, flexible, and does not threaten the safety and
                          livelihoods of workers,” according to an AWU press
                          release. The workers are part of the YouTube Music
                          Content Operations team via Cognizant, a subcontractor
                          for Alphabet, Google and YouTube’s parent company.
                          Their jobs are to “ensure music content is available
                          and approved” for the platform, according to a prior
                          press release from the AWU.The contractors are
                          currently attempting to unionize with the AWU, which
                          filed a petition with the National Labor Relations
                          Board to represent the contractors in October. Last
                          week, the AWU filed an unfair labor practice charge
                          against Alphabet and Cognizant, claiming that the
                          return to office was being used to “interfere with the
                          fair voting conditions mandated by federal law,” as
                          Sam Regan, one of the workers put it in a press
                          release.TCL’s R646 6-Series TV features 4K HDR and
                          Mini LED backlighting along with support for HDR10
                          Plus and 4K gaming at 120Hz. It runs on the Google TV
                          software, unlike the previous-gen model.It’s hard to
                          shop for a TV unless, of course, you already know what
                          you want out of it. Here, we’ve made the selection
                          process easy, sorting out the best TVs with the lowest
                          prices.we’ve made the selection process easy, sorting
                          out the best TVs with the lowest prices.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          The future looks bright for those who are looking to
                          nab a great TV in 2023 at a substantial discount.
                          Although a fresh slate of new models was announced at
                          CES 2023, it might be a while until many of them
                          arrive — and even longer before they receive a
                          discount. However, you don’t have to wait until later
                          this year to land a great deal on a mid- or high-end
                          TV from Sony, LG, TCL, or Samsung, as many models of
                          the flagship models from last year are currently
                          selling for hundreds of dollars less than their
                          original list price.Right now, there are a number of
                          discounted 4K TVs to choose from, spanning a wide
                          variety of prices, size configurations, and feature
                          sets. Whether you want a secondary TV for the bedroom
                          or a high-end OLED that’s built for a cinema-like
                          experience, we’ve picked out the best TV deals across
                          three common categories.Sony’s 55-inch X80J TV, like
                          the others above, has Google TV software built-in, so
                          you won’t need to purchase any additional streaming
                          boxes, like an Apple TV or a Chromecast. The LED panel
                          also supports HDR10, HLG, and Dolby Vision HDR and has
                          four HDMI ports (one of which is HDMI ARC). It’s a
                          relatively low-frills affair, but it seems like a good
                          deal that’s currently available at Walmart, where you
                          can buy the 55-inch model for $598 instead of $799.99.
                          The 65-inch X75K with the Google TV interface is also
                          on sale at Best Buy for $579.99 ($120 off) and offers
                          very few differences, as far as I can tell. It
                          features three HDMI ports instead of four, but if you
                          want a bigger TV for your money, it could be a good
                          choice.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

export default Projects
