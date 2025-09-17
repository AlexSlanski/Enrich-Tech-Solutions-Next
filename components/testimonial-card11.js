import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const TestimonialCard11 = (props) => {
  return (
    <>
      <div
        className={`testimonial-card11-testimonial-card ${props.rootClassName} `}
      >
        <svg
          viewBox="0 0 950.8571428571428 1024"
          className="testimonial-card11-icon1"
        >
          <path d="M438.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714zM950.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714z"></path>
        </svg>
        <div className="testimonial-card11-testimonial">
          <span className="testimonial-card11-text1">{props.quote}</span>
          <span className="testimonial-card11-text2">{props.name}</span>
          <span className="testimonial-card11-text3">{props.role}</span>
          <img
            alt={props.pictureAlt}
            src={props.pictureSrc}
            className="testimonial-card11-image"
          />
        </div>
      </div>
      <style jsx>
        {`
          .testimonial-card11-testimonial-card {
            display: flex;
            padding: var(--dl-layout-space-twounits);
            max-width: var(--dl-layout-size-maxwidth);
            background: #fff;
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .testimonial-card11-icon1 {
            width: 2rem;
            margin-bottom: var(--dl-layout-space-twounits);
          }
          .testimonial-card11-testimonial {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .testimonial-card11-text1 {
            color: var(--dl-color-gray-500);
            text-align: center;
            margin-bottom: var(--dl-layout-space-threeunits);
          }
          .testimonial-card11-text2 {
            font-size: 1.5rem;
            font-weight: 300;
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .testimonial-card11-text3 {
            color: var(--dl-color-gray-500);
            font-weight: 600;
            margin-bottom: var(--dl-layout-space-unit);
            text-transform: uppercase;
          }
          .testimonial-card11-image {
            width: var(--dl-layout-size-medium);
            height: var(--dl-layout-size-medium);
            object-fit: cover;
            border-radius: var(--dl-layout-radius-round);
          }

          @media (max-width: 1200px) {
            .testimonial-card11-text3 {
              align-self: center;
            }
          }
          @media (max-width: 900px) {
            .testimonial-card11-testimonial-card {
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
          }
          @media (max-width: 480px) {
            .testimonial-card11-testimonial-card {
              padding-top: var(--dl-layout-space-twounits);
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-twounits);
            }
            .testimonial-card11-icon1 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .testimonial-card11-text1 {
              margin-bottom: var(--dl-layout-space-twounits);
            }
            .testimonial-card11-text2 {
              margin-bottom: var(--dl-layout-space-halfunit);
            }
            .testimonial-card11-text3 {
              margin-bottom: var(--dl-layout-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

TestimonialCard11.defaultProps = {
  pictureSrc:
    'https://images.unsplash.com/photo-1619022975927-b37c4982cc49?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHR1cmJvfGVufDB8fHx8MTcwNzI0MDE1Nnww&ixlib=rb-4.0.3&w=200',
  name: 'Keith',
  pictureAlt: 'profile',
  rootClassName: '',
  quote:
    'Top quality service that really went above an beyond, replaced a part on my kit at the drop of a hat, honestly the place to go if you want things done right the first time round, thanks very much guys 👌🏼',
  role: 'Director',
}

TestimonialCard11.propTypes = {
  pictureSrc: PropTypes.string,
  name: PropTypes.string,
  pictureAlt: PropTypes.string,
  rootClassName: PropTypes.string,
  quote: PropTypes.string,
  role: PropTypes.string,
}

export default TestimonialCard11
