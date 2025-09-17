import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const TestimonialCard21 = (props) => {
  return (
    <>
      <div className="testimonial-card21-testimonial-card">
        <div className="testimonial-card21-testimonial">
          <svg viewBox="0 0 1024 1024" className="testimonial-card21-icon1">
            <path d="M225 448c123.712 0 224 100.29 224 224 0 123.712-100.288 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.634 11.636-22.252 24.016-31.83 37.020 11.438-1.8 23.16-2.746 35.104-2.746zM801 448c123.71 0 224 100.29 224 224 0 123.712-100.29 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.636 11.636-22.254 24.016-31.832 37.020 11.44-1.8 23.16-2.746 35.106-2.746z"></path>
          </svg>
          <span className="testimonial-card21-text1">{props.quote}</span>
          <span className="testimonial-card21-text2">{props.name}</span>
        </div>
        <img
          alt={props.profileAlt}
          src={props.profileSrc}
          className="testimonial-card21-image"
        />
      </div>
      <style jsx>
        {`
          .testimonial-card21-testimonial-card {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-threeunits);
            max-width: var(--dl-layout-size-maxwidth);
            background: #fff;
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            align-items: center;
            justify-content: space-between;
          }
          .testimonial-card21-testimonial {
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-layout-space-threeunits);
            flex-direction: column;
            justify-content: space-between;
          }
          .testimonial-card21-icon1 {
            width: var(--dl-layout-size-small);
            flex-shrink: 0;
            margin-bottom: var(--dl-layout-space-twounits);
          }
          .testimonial-card21-text1 {
            color: var(--dl-color-gray-500);
            font-size: 1.15rem;
            margin-bottom: var(--dl-layout-space-twounits);
          }
          .testimonial-card21-text2 {
            font-size: 1.5rem;
            font-weight: 600;
          }
          .testimonial-card21-image {
            width: var(--dl-layout-size-xlarge);
            height: var(--dl-layout-size-xlarge);
            object-fit: cover;
            flex-shrink: 0;
            border-radius: var(--dl-layout-radius-round);
          }
          @media (max-width: 900px) {
            .testimonial-card21-testimonial-card {
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
            .testimonial-card21-testimonial {
              margin-right: var(--dl-layout-space-twounits);
            }
            .testimonial-card21-icon1 {
              height: var(--dl-layout-size-small);
            }
          }
          @media (max-width: 480px) {
            .testimonial-card21-testimonial-card {
              padding-top: var(--dl-layout-space-twounits);
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              flex-direction: column;
              padding-bottom: var(--dl-layout-space-twounits);
            }
            .testimonial-card21-testimonial {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-layout-space-unit);
            }
            .testimonial-card21-text1 {
              text-align: left;
            }
          }
        `}
      </style>
    </>
  )
}

TestimonialCard21.defaultProps = {
  name: 'John Doe',
  profileAlt: 'profile',
  quote:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem, malesuada in metus vitae, scelerisque accumsan ipsum.',
  rootClassName: '',
  profileSrc:
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxwb3J0cmFpdHxlbnwwfHx8fDE2MjYzNzg5NzI&ixlib=rb-1.2.1&h=1200',
}

TestimonialCard21.propTypes = {
  name: PropTypes.string,
  profileAlt: PropTypes.string,
  quote: PropTypes.string,
  rootClassName: PropTypes.string,
  profileSrc: PropTypes.string,
}

export default TestimonialCard21
