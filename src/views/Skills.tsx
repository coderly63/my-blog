import React from 'react'
import meter1 from '../assets/img/meter1.svg'
import meter2 from '../assets/img/meter2.svg'
import meter3 from '../assets/img/meter3.svg'
import Carousel from 'react-multi-carousel'
import { ResponsiveType } from 'node_modules/react-multi-carousel/lib/types'
import 'react-multi-carousel/lib/styles.css'
import colorSharp from '../assets/img/color-sharp.png'
import 'animate.css'
import TrackVisibility from 'react-on-screen'

const Skills: React.FC = () => {
  const responsive: ResponsiveType = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }
  return (
    <section className="skill" id="skills">
      <TrackVisibility partialVisibility>
        {({ isVisible }) => (
          <div
            className={
              isVisible ? 'animate__animated animate__slideInRight' : ''
            }
          >
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="skill-bx wow zoomIn">
                    <h2>Skills</h2>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.<br></br> Lorem Ipsum has been the
                      industry's standard dummy text.
                    </p>
                    <Carousel
                      responsive={responsive}
                      infinite={true}
                      className="owl-carousel owl-theme skill-slider"
                    >
                      <div className="item">
                        <img src={meter1} alt="skills" />
                        <h5>Web Development</h5>
                      </div>
                      <div className="item">
                        <img src={meter2} alt="skills" />
                        <h5>Brand Identity</h5>
                      </div>
                      <div className="item">
                        <img src={meter3} alt="skills" />
                        <h5>Logo Design</h5>
                      </div>
                      <div className="item">
                        <img src={meter1} alt="skills" />
                        <h5>backend Development</h5>
                      </div>
                    </Carousel>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </TrackVisibility>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}

export default Skills
