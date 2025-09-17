import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const FeatureCard313 = (props) => {
  return (
    <>
      <div className={`feature-card313-feature-card ${props.rootClassName} `}>
        <svg viewBox="0 0 1024 1024" className="feature-card313-icon1">
          <path d="M0 64v640h1024v-640h-1024zM960 640h-896v-512h896v512zM672 768h-320l-32 128-64 64h512l-64-64z"></path>
        </svg>
        <h2 className="feature-card313-text1">{props.title}</h2>
        <span className="feature-card313-text2">{props.description}</span>
        <Link href="/contact">
          <a className="feature-card313-link">{props.action}</a>
        </Link>
      </div>
      <style jsx>
        {`
          .feature-card313-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-halfunit);
            align-items: center;
            flex-direction: column;
          }
          .feature-card313-icon1 {
            fill: var(--dl-color-primary-700);
            width: var(--dl-layout-size-small);
            height: var(--dl-layout-size-small);
          }
          .feature-card313-text1 {
            fill: var(--dl-color-theme-neutral-light);
            color: var(--dl-color-theme-neutral-light);
            font-size: 28px;
            font-style: normal;
            margin-top: var(--dl-layout-space-unit);
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-layout-space-unit);
          }
          .feature-card313-text2 {
            fill: var(--dl-color-primary-700);
            color: var(--dl-color-primary-700);
            font-size: 16px;
            text-align: center;
          }
          .feature-card313-link {
            fill: var(--dl-color-theme-neutral-light);
            color: var(--dl-color-theme-neutral-light);
            font-size: 1.25rem;
            margin-top: var(--dl-layout-space-unit);
            font-weight: 500;
            text-decoration: none;
          }

          @media (max-width: 1920px) {
            .feature-card313-text2 {
              text-align: center;
            }
          }
          @media (max-width: 1366px) {
            .feature-card313-text2 {
              text-align: center;
            }
          }
          @media (max-width: 1200px) {
            .feature-card313-text2 {
              text-align: center;
            }
          }
          @media (max-width: 900px) {
            .feature-card313-text2 {
              color: var(--dl-color-primary-700);
              font-size: 16px;
              text-align: center;
            }
          }
          @media (max-width: 480px) {
            .feature-card313-text1 {
              font-size: 28px;
              font-style: normal;
              font-weight: 500;
            }
            .feature-card313-text2 {
              fill: var(--dl-color-primary-700);
              color: var(--dl-color-primary-700);
              font-size: 14px;
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

FeatureCard313.defaultProps = {
  title: 'Computer Service and Repair',
  description:
    'Computer Repairs; our team of IT experts are here to solve all your PC and laptop issues. From diagnosing problems to enhancing performance, we take a systematic approach to guarantee a seamless computing experience. Let us transform your tech troubles into success stories.',
  rootClassName: '',
  action: 'CONTACT',
}

FeatureCard313.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  rootClassName: PropTypes.string,
  action: PropTypes.string,
}

export default FeatureCard313
