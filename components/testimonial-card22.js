import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const TestimonialCard22 = (props) => {
  return (
    <>
      <div
        className={`testimonial-card22-testimonial-card ${props.rootClassName} `}
      >
        <div className="testimonial-card22-testimonial">
          <svg viewBox="0 0 1024 1024" className="testimonial-card22-icon1">
            <path d="M225 448c123.712 0 224 100.29 224 224 0 123.712-100.288 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.634 11.636-22.252 24.016-31.83 37.020 11.438-1.8 23.16-2.746 35.104-2.746zM801 448c123.71 0 224 100.29 224 224 0 123.712-100.29 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.636 11.636-22.254 24.016-31.832 37.020 11.44-1.8 23.16-2.746 35.106-2.746z"></path>
          </svg>
          <span className="testimonial-card22-text1">
            {props.text ?? (
              <Fragment>
                <span className="testimonial-card22-text3">
                  <span>help</span>
                  <br></br>
                  <br></br>
                </span>
              </Fragment>
            )}
          </span>
          <span className="testimonial-card22-text2">{props.name}</span>
        </div>
        <img
          alt={props.profileAlt}
          src={props.profileSrc}
          className="testimonial-card22-image"
        />
      </div>
      <style jsx>
        {`
          .testimonial-card22-testimonial-card {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-threeunits);
            max-width: var(--dl-layout-size-maxwidth);
            background: #fff;
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            align-items: center;
            justify-content: space-between;
          }
          .testimonial-card22-testimonial {
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-layout-space-threeunits);
            flex-direction: column;
            justify-content: space-between;
          }
          .testimonial-card22-icon1 {
            width: var(--dl-layout-size-small);
            flex-shrink: 0;
            margin-bottom: var(--dl-layout-space-twounits);
          }
          .testimonial-card22-text1 {
            color: var(--dl-color-gray-500);
            font-size: 1.15rem;
            margin-bottom: var(--dl-layout-space-twounits);
          }
          .testimonial-card22-text2 {
            font-size: 1.5rem;
            font-weight: 600;
          }
          .testimonial-card22-image {
            width: var(--dl-layout-size-xlarge);
            height: var(--dl-layout-size-xlarge);
            object-fit: cover;
            flex-shrink: 0;
            border-radius: var(--dl-layout-radius-round);
          }
          .testimonial-card22-text3 {
            display: inline-block;
          }
          .testimonial-card22root-class-name {
            align-self: flex-start;
            margin-bottom: var(--dl-layout-space-threeunits);
          }
          .testimonial-card22root-class-name1 {
            align-self: flex-start;
          }
          .testimonial-card22root-class-name2 {
            align-self: flex-start;
          }
          .testimonial-card22root-class-name3 {
            align-self: flex-start;
          }
          @media (max-width: 900px) {
            .testimonial-card22-testimonial-card {
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
            .testimonial-card22-testimonial {
              margin-right: var(--dl-layout-space-twounits);
            }
            .testimonial-card22-icon1 {
              height: var(--dl-layout-size-small);
            }
          }
          @media (max-width: 480px) {
            .testimonial-card22-testimonial-card {
              padding-top: var(--dl-layout-space-twounits);
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              flex-direction: column;
              padding-bottom: var(--dl-layout-space-twounits);
            }
            .testimonial-card22-testimonial {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-layout-space-unit);
            }
            .testimonial-card22-text1 {
              text-align: left;
            }
          }
        `}
      </style>
    </>
  )
}

TestimonialCard22.defaultProps = {
  profileAlt: 'profile',
  name: 'John Doe',
  profileSrc:
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxwb3J0cmFpdHxlbnwwfHx8fDE2MjYzNzg5NzI&ixlib=rb-1.2.1&h=1200',
  rootClassName: '',
  text: undefined,
}

TestimonialCard22.propTypes = {
  profileAlt: PropTypes.string,
  name: PropTypes.string,
  profileSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.element,
}

export default TestimonialCard22
