import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const FeatureCard311 = (props) => {
  return (
    <>
      <div className={`feature-card311-feature-card ${props.rootClassName} `}>
        <svg viewBox="0 0 1024 1024" className="feature-card311-icon1">
          <path d="M192 128l640 384-640 384z"></path>
        </svg>
        <h2 className="feature-card311-text1">{props.title}</h2>
        <span className="feature-card311-text2">{props.description}</span>
        <Link href="/contact">
          <a className="feature-card311-link">{props.action}</a>
        </Link>
      </div>
      <style jsx>
        {`
          .feature-card311-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-halfunit);
            align-items: center;
            flex-direction: column;
          }
          .feature-card311-icon1 {
            fill: var(--dl-color-primary-700);
            width: var(--dl-layout-size-small);
            height: var(--dl-layout-size-small);
          }
          .feature-card311-text1 {
            fill: var(--dl-color-theme-neutral-light);
            color: var(--dl-color-theme-neutral-light);
            font-size: 28px;
            font-style: normal;
            margin-top: var(--dl-layout-space-unit);
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-layout-space-unit);
          }
          .feature-card311-text2 {
            fill: var(--dl-color-primary-700);
            color: var(--dl-color-primary-700);
            font-size: 16px;
            text-align: center;
          }
          .feature-card311-link {
            fill: var(--dl-color-theme-neutral-light);
            color: var(--dl-color-theme-neutral-light);
            font-size: 1.25rem;
            margin-top: var(--dl-layout-space-unit);
            font-weight: 500;
            text-decoration: none;
          }

          @media (max-width: 1920px) {
            .feature-card311-text2 {
              text-align: center;
            }
          }
          @media (max-width: 1366px) {
            .feature-card311-text2 {
              text-align: center;
            }
          }
          @media (max-width: 1200px) {
            .feature-card311-text2 {
              text-align: center;
            }
          }
          @media (max-width: 900px) {
            .feature-card311-text2 {
              font-size: 16px;
              text-align: center;
            }
          }
          @media (max-width: 480px) {
            .feature-card311-text2 {
              font-size: 14px;
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

FeatureCard311.defaultProps = {
  action: 'SEE MORE',
  description:
    'Providing expert repair and maintenance services for audio and Hi-Fi systems, catering to both vintage and modern models. Our dedicated team specializes in restoring old systems by cleaning and replacing components such as capacitors, belts, speakers, and cabinets. We offer convenient home visits for setups or repairs, ensuring that your Hi-Fi systems enhance your audio experience with top-notch sound quality.',
  rootClassName: '',
  title: 'Audio Service & Hi-Fi Repair',
}

FeatureCard311.propTypes = {
  action: PropTypes.string,
  description: PropTypes.string,
  rootClassName: PropTypes.string,
  title: PropTypes.string,
}

export default FeatureCard311
