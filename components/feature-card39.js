import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const FeatureCard39 = (props) => {
  return (
    <>
      <div className={`feature-card39-feature-card ${props.rootClassName} `}>
        <svg viewBox="0 0 1024 1024" className="feature-card39-icon1">
          <path d="M768 128v170h-512v-170h512zM810 512q18 0 31-12t13-30-13-31-31-13-30 13-12 31 12 30 30 12zM682 810v-212h-340v212h340zM810 342q52 0 90 38t38 90v256h-170v170h-512v-170h-170v-256q0-52 38-90t90-38h596z"></path>
        </svg>
        <h2 className="feature-card39-text1">{props.title}</h2>
        <span className="feature-card39-text2">{props.description}</span>
        <Link href="/contact">
          <a className="feature-card39-link">{props.action}</a>
        </Link>
      </div>
      <style jsx>
        {`
          .feature-card39-feature-card {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
          }
          .feature-card39-icon1 {
            fill: var(--dl-color-primary-700);
            width: var(--dl-layout-size-small);
            height: var(--dl-layout-size-small);
          }
          .feature-card39-text1 {
            fill: var(--dl-color-theme-neutral-light);
            color: var(--dl-color-theme-neutral-light);
            font-style: normal;
            margin-top: var(--dl-layout-space-unit);
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-layout-space-unit);
          }
          .feature-card39-text2 {
            fill: var(--dl-color-primary-700);
            color: var(--dl-color-primary-700);
            font-size: 16px;
            text-align: center;
          }
          .feature-card39-link {
            fill: var(--dl-color-theme-neutral-light);
            color: var(--dl-color-theme-neutral-light);
            font-size: 1.25rem;
            margin-top: var(--dl-layout-space-unit);
            font-weight: 500;
            text-decoration: none;
          }

          @media (max-width: 480px) {
            .feature-card39-text2 {
              font-size: 14px;
            }
          }
        `}
      </style>
    </>
  )
}

FeatureCard39.defaultProps = {
  description:
    "Printer maintenance and repair services for various printer models, including head alignment, cleaning, and unclogging. We also provide Laser Drum Parts and Transfer belts replacement services. If you are facing the common 'printer cannot be found' issue, our expert team can assist you in resolving all your printer-related issues.",
  title: 'Printer Servicing and Repair',
  rootClassName: '',
  action: 'CONTACT',
}

FeatureCard39.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  rootClassName: PropTypes.string,
  action: PropTypes.string,
}

export default FeatureCard39
