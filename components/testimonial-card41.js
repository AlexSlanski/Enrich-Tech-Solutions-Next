import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const TestimonialCard41 = (props) => {
  return (
    <>
      <div className="testimonial-card41-testimonial-card">
        <svg viewBox="0 0 1024 1024" className="testimonial-card41-icon1">
          <path d="M225 448c123.712 0 224 100.29 224 224 0 123.712-100.288 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.634 11.636-22.252 24.016-31.83 37.020 11.438-1.8 23.16-2.746 35.104-2.746zM801 448c123.71 0 224 100.29 224 224 0 123.712-100.29 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.636 11.636-22.254 24.016-31.832 37.020 11.44-1.8 23.16-2.746 35.106-2.746z"></path>
        </svg>
        <span className="testimonial-card41-text1">{props.quote}</span>
        <div className="testimonial-card41-profile">
          <img
            alt={props.pictureAlt}
            src={props.pictureSrc}
            className="testimonial-card41-image"
          />
          <div className="testimonial-card41-container">
            <span className="testimonial-card41-text2">{props.name}</span>
            <span className="testimonial-card41-text3">{props.role}</span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .testimonial-card41-testimonial-card {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-twounits);
            max-width: var(--dl-layout-size-maxwidth);
            align-self: stretch;
            background: #fff;
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            align-items: stretch;
            flex-direction: column;
            justify-content: flex-start;
          }
          .testimonial-card41-icon1 {
            width: var(--dl-layout-size-medium);
            flex-shrink: 0;
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .testimonial-card41-text1 {
            color: var(--dl-color-gray-500);
            font-size: 1.15rem;
            padding-top: var(--dl-layout-space-threeunits);
            padding-bottom: var(--dl-layout-space-threeunits);
          }
          .testimonial-card41-profile {
            width: 100%;
            display: flex;
            margin-top: auto;
            align-items: center;
            padding-top: var(--dl-layout-space-unit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            flex-direction: row;
            justify-content: flex-start;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .testimonial-card41-image {
            width: var(--dl-layout-size-medium);
            filter: grayscale();
            height: var(--dl-layout-size-medium);
            object-fit: cover;
            border-radius: var(--dl-layout-radius-round);
          }
          .testimonial-card41-container {
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-layout-space-unit);
            flex-direction: column;
            justify-content: space-between;
          }
          .testimonial-card41-text2 {
            font-size: 24px;
            font-style: normal;
            font-weight: 600;
            margin-bottom: 0.25rem;
          }
          .testimonial-card41-text3 {
            color: var(--dl-color-gray-500);
            font-size: 12px;
            font-style: normal;
            font-weight: 600;
          }
          @media (max-width: 1200px) {
            .testimonial-card41-icon1 {
              height: var(--dl-layout-size-medium);
            }
            .testimonial-card41-profile {
              padding-left: var(--dl-layout-space-halfunit);
              padding-right: var(--dl-layout-space-halfunit);
            }
            .testimonial-card41-image {
              margin-left: 0px;
            }
          }
          @media (max-width: 480px) {
            .testimonial-card41-testimonial-card {
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
            }
            .testimonial-card41-profile {
              justify-content: center;
            }
          }
        `}
      </style>
    </>
  )
}

TestimonialCard41.defaultProps = {
  rootClassName: '',
  pictureSrc:
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxwb3J0cmFpdHxlbnwwfHx8fDE2MjYzNzg5NzI&ixlib=rb-1.2.1&h=1200',
  name: 'John Doe',
  quote:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem, malesuada in metus vitae, scelerisque accumsan ipsum. Nam pellentesque nulla leo, sagittis vehicula sem commodo nec. Integer egestas, quam eu convallis ultrices, est nisl rutrum tellus, sed posuere velit nisi sit amet ante. In a augue porttitor, porta sapien sed, faucibus felis.',
  role: 'Software Engineer',
  pictureAlt: 'John Doe',
}

TestimonialCard41.propTypes = {
  rootClassName: PropTypes.string,
  pictureSrc: PropTypes.string,
  name: PropTypes.string,
  quote: PropTypes.string,
  role: PropTypes.string,
  pictureAlt: PropTypes.string,
}

export default TestimonialCard41
