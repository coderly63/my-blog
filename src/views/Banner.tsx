import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import headerImg from '../assets/img/header-img.svg'
import { useAppSelector } from '@/redux/hooks'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import 'animate.css'
import TrackVisibility from 'react-on-screen'

interface BannerProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Banner: React.FC<BannerProps> = ({ setIsModalOpen }) => {
  const [loopNum, setLoopNum] = useState<number>(0)
  const [isDeleting, setIsDeleting] = useState<boolean>(false)
  const toRotate: Array<string> = [
    'Web Developer',
    'Web Designer',
    'UI/UX Designer',
  ]
  const [text, setText] = useState<string>('')
  const [delta, setDelta] = useState<number>(300 - Math.random() * 100)
  const period = 2000
  const user = useAppSelector((state) => state.user)

  // 动态增删时间
  const tick = () => {
    let i = loopNum % toRotate.length
    let fullText = toRotate[i]
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1)

    setText(updatedText)

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setDelta(period)
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setDelta(500)
    }
  }
  useEffect(() => {
    const ticker = setInterval(() => {
      tick()
    }, delta)
    return () => clearInterval(ticker)
  }, [text, delta, tick])
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Judy`}{' '}
                    <span
                      className="txt-rotate"
                      data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  {user.nickname ? (
                    ''
                  ) : (
                    <button onClick={() => setIsModalOpen(true)}>
                      Let’s Connect <ArrowRightCircle size={25} />
                    </button>
                  )}
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div>
              <img src={headerImg} alt="Header Img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner
