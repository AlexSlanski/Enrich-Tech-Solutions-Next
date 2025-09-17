import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const TestimonialCard1 = (props) => {
  return (
    <>
      <div
        className={`testimonial-card1-testimonial-card ${props.rootClassName} `}
      >
        <svg
          viewBox="0 0 950.8571428571428 1024"
          className="testimonial-card1-icon1"
        >
          <path d="M438.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714zM950.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714z"></path>
        </svg>
        <div className="testimonial-card1-testimonial">
          <span className="testimonial-card1-text1">{props.quote}</span>
          <span className="testimonial-card1-text2">{props.name}</span>
          <span className="testimonial-card1-text3">{props.role}</span>
          <img
            alt={props.pictureAlt}
            src={props.pictureSrc}
            className="testimonial-card1-image"
          />
        </div>
      </div>
      <style jsx>
        {`
          .testimonial-card1-testimonial-card {
            display: flex;
            padding: var(--dl-layout-space-twounits);
            max-width: var(--dl-layout-size-maxwidth);
            background: #fff;
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .testimonial-card1-icon1 {
            width: 2rem;
            margin-bottom: var(--dl-layout-space-twounits);
          }
          .testimonial-card1-testimonial {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .testimonial-card1-text1 {
            color: var(--dl-color-gray-500);
            text-align: center;
            margin-bottom: var(--dl-layout-space-threeunits);
          }
          .testimonial-card1-text2 {
            font-size: 1.5rem;
            font-weight: 300;
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .testimonial-card1-text3 {
            color: var(--dl-color-gray-500);
            font-weight: 600;
            margin-bottom: var(--dl-layout-space-unit);
            text-transform: uppercase;
          }
          .testimonial-card1-image {
            width: var(--dl-layout-size-medium);
            height: var(--dl-layout-size-medium);
            object-fit: cover;
            border-radius: var(--dl-layout-radius-round);
          }

          @media (max-width: 1200px) {
            .testimonial-card1-text3 {
              align-self: center;
            }
          }
          @media (max-width: 900px) {
            .testimonial-card1-testimonial-card {
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
          }
          @media (max-width: 480px) {
            .testimonial-card1-testimonial-card {
              padding-top: var(--dl-layout-space-twounits);
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-twounits);
            }
            .testimonial-card1-icon1 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .testimonial-card1-text1 {
              margin-bottom: var(--dl-layout-space-twounits);
            }
            .testimonial-card1-text2 {
              margin-bottom: var(--dl-layout-space-halfunit);
            }
            .testimonial-card1-text3 {
              margin-bottom: var(--dl-layout-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

TestimonialCard1.defaultProps = {
  pictureSrc:
    'https://images.unsplash.com/photo-1620461006298-87ab1e433e18?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDM3OXx8b2ZmaWNlJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzA3MjU1MDc2fDA&ixlib=rb-4.0.3&w=200',
  rootClassName: '',
  name: 'Jean Thorne',
  quote:
    'Richard really knows his stuff! So helpful, had real problems with a forgotten password, all sorted at a good price. Recommend if anyone has problems with an iPhone. Totally brilliant!!',
  pictureAlt: 'profile',
  role: 'Chef',
}

TestimonialCard1.propTypes = {
  pictureSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  name: PropTypes.string,
  quote: PropTypes.string,
  pictureAlt: PropTypes.string,
  role: PropTypes.string,
}

export default TestimonialCard1
