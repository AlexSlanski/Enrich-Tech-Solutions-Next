import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const TestimonialCard2 = (props) => {
  return (
    <>
      <div
        className={`testimonial-card2-testimonial-card ${props.rootClassName} `}
      >
        <div className="testimonial-card2-testimonial">
          <svg viewBox="0 0 1024 1024" className="testimonial-card2-icon1">
            <path d="M225 448c123.712 0 224 100.29 224 224 0 123.712-100.288 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.634 11.636-22.252 24.016-31.83 37.020 11.438-1.8 23.16-2.746 35.104-2.746zM801 448c123.71 0 224 100.29 224 224 0 123.712-100.29 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.636 11.636-22.254 24.016-31.832 37.020 11.44-1.8 23.16-2.746 35.106-2.746z"></path>
          </svg>
          <span className="testimonial-card2-text1">{props.quote}</span>
          <div className="testimonial-card2-container">
            <img
              alt={props.imageAlt1}
              src={props.imageSrc1}
              className="testimonial-card2-image"
            />
            <span className="testimonial-card2-text2">{props.name}</span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .testimonial-card2-testimonial-card {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-threeunits);
            max-width: var(--dl-layout-size-maxwidth);
            background: #fff;
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            align-items: center;
            justify-content: space-between;
          }
          .testimonial-card2-testimonial {
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-layout-space-threeunits);
            flex-direction: column;
            justify-content: space-between;
          }
          .testimonial-card2-icon1 {
            width: var(--dl-layout-size-small);
            flex-shrink: 0;
            margin-bottom: var(--dl-layout-space-twounits);
          }
          .testimonial-card2-text1 {
            color: var(--dl-color-gray-500);
            font-size: 1.15rem;
            margin-bottom: var(--dl-layout-space-twounits);
          }
          .testimonial-card2-container {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .testimonial-card2-image {
            width: 200px;
            object-fit: cover;
          }
          .testimonial-card2-text2 {
            font-size: 1.5rem;
            font-weight: 600;
          }
          @media (max-width: 900px) {
            .testimonial-card2-testimonial-card {
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
            .testimonial-card2-testimonial {
              margin-right: var(--dl-layout-space-twounits);
            }
            .testimonial-card2-icon1 {
              height: var(--dl-layout-size-small);
            }
          }
          @media (max-width: 480px) {
            .testimonial-card2-testimonial-card {
              padding-top: var(--dl-layout-space-twounits);
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              flex-direction: column;
              padding-bottom: var(--dl-layout-space-twounits);
            }
            .testimonial-card2-testimonial {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-layout-space-unit);
            }
            .testimonial-card2-text1 {
              text-align: left;
            }
          }
        `}
      </style>
    </>
  )
}

TestimonialCard2.defaultProps = {
  imageAlt1: 'image',
  imageSrc1:
    'https://images.unsplash.com/photo-1574687175332-dd01d500359e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8c2VhcmNofDkyfHxTY2llbnRpc3R8ZW58MHx8fHwxNzA3NzM1NzEzfDA&ixlib=rb-4.0.3&q=80&w=200',
  name: 'Dr DeVries',
  rootClassName: '',
  quote: 'Always a consumate professional and always very helpful',
}

TestimonialCard2.propTypes = {
  imageAlt1: PropTypes.string,
  imageSrc1: PropTypes.string,
  name: PropTypes.string,
  rootClassName: PropTypes.string,
  quote: PropTypes.string,
}

export default TestimonialCard2
