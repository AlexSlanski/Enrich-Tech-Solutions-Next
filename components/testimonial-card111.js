import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const TestimonialCard111 = (props) => {
  return (
    <>
      <div
        className={`testimonial-card111-testimonial-card ${props.rootClassName} `}
      >
        <svg
          viewBox="0 0 950.8571428571428 1024"
          className="testimonial-card111-icon1"
        >
          <path d="M438.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714zM950.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714z"></path>
        </svg>
        <div className="testimonial-card111-testimonial">
          <span className="testimonial-card111-text1">{props.quote}</span>
          <span className="testimonial-card111-text2">{props.name}</span>
          <span className="testimonial-card111-text3">{props.role}</span>
          <img
            alt={props.pictureAlt}
            src={props.pictureSrc}
            className="testimonial-card111-image"
          />
        </div>
      </div>
      <style jsx>
        {`
          .testimonial-card111-testimonial-card {
            display: flex;
            padding: var(--dl-layout-space-twounits);
            max-width: var(--dl-layout-size-maxwidth);
            background: #fff;
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .testimonial-card111-icon1 {
            width: 2rem;
            margin-bottom: var(--dl-layout-space-twounits);
          }
          .testimonial-card111-testimonial {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .testimonial-card111-text1 {
            color: var(--dl-color-gray-500);
            text-align: center;
            margin-bottom: var(--dl-layout-space-threeunits);
          }
          .testimonial-card111-text2 {
            font-size: 1.5rem;
            font-weight: 300;
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .testimonial-card111-text3 {
            color: var(--dl-color-gray-500);
            font-weight: 600;
            margin-bottom: var(--dl-layout-space-unit);
            text-transform: uppercase;
          }
          .testimonial-card111-image {
            width: var(--dl-layout-size-medium);
            height: var(--dl-layout-size-medium);
            object-fit: cover;
            border-radius: var(--dl-layout-radius-round);
          }

          @media (max-width: 1200px) {
            .testimonial-card111-text3 {
              align-self: center;
            }
          }
          @media (max-width: 900px) {
            .testimonial-card111-testimonial-card {
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
          }
          @media (max-width: 480px) {
            .testimonial-card111-testimonial-card {
              padding-top: var(--dl-layout-space-twounits);
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-twounits);
            }
            .testimonial-card111-icon1 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .testimonial-card111-text1 {
              margin-bottom: var(--dl-layout-space-twounits);
            }
            .testimonial-card111-text2 {
              margin-bottom: var(--dl-layout-space-halfunit);
            }
            .testimonial-card111-text3 {
              margin-bottom: var(--dl-layout-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

TestimonialCard111.defaultProps = {
  role: 'Pastor',
  pictureSrc:
    'https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDMyfHxtYWxlfGVufDB8fHx8MTcwNzIzOTg4Mnww&ixlib=rb-4.0.3&w=200',
  quote:
    'Thank you Rich and the team at Enrich Tech. Excellent job with the lap top it is working better than ever now. We know where to come if we need anymore computers to be serviced or repaired.',
  rootClassName: '',
  name: 'Andrew',
  pictureAlt: 'profile',
}

TestimonialCard111.propTypes = {
  role: PropTypes.string,
  pictureSrc: PropTypes.string,
  quote: PropTypes.string,
  rootClassName: PropTypes.string,
  name: PropTypes.string,
  pictureAlt: PropTypes.string,
}

export default TestimonialCard111
