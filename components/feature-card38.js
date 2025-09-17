import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const FeatureCard38 = (props) => {
  return (
    <>
      <div className={`feature-card38-feature-card ${props.rootClassName} `}>
        <svg viewBox="0 0 1024 1024" className="feature-card38-icon1">
          <path d="M810 810v-682h-640v682h640zM490 982q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM790 0q44 0 75 31t31 75v812q0 44-31 75t-75 31h-598q-44 0-75-31t-31-75v-812q0-44 31-75t75-31h598z"></path>
        </svg>
        <h2 className="feature-card38-text1">{props.title}</h2>
        <span className="feature-card38-text2">{props.description}</span>
        <Link href="/contact">
          <a className="feature-card38-link">{props.action}</a>
        </Link>
      </div>
      <style jsx>
        {`
          .feature-card38-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-halfunit);
            align-items: center;
            padding-top: 8px;
            flex-direction: column;
          }
          .feature-card38-icon1 {
            fill: var(--dl-color-primary-700);
            width: var(--dl-layout-size-small);
            height: var(--dl-layout-size-small);
          }
          .feature-card38-text1 {
            color: var(--dl-color-theme-neutral-light);
            font-style: normal;
            margin-top: var(--dl-layout-space-unit);
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-layout-space-unit);
          }
          .feature-card38-text2 {
            color: var(--dl-color-primary-700);
            font-size: 16px;
          }
          .feature-card38-link {
            fill: var(--dl-color-theme-neutral-light);
            color: var(--dl-color-theme-neutral-light);
            font-size: 1.25rem;
            font-weight: 500;
            text-decoration: none;
          }

          @media (max-width: 480px) {
            .feature-card38-text2 {
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

FeatureCard38.defaultProps = {
  rootClassName: '',
  title: 'SmartPhone and Tablet Repairs',
  description:
    'For expert iPad and iPhone repairs, trust Enrich Tech Solutions. Whether you have an Android or Apple device, we provide top-notch repair services, upgrades, and advice. Our skilled technicians have the knowledge and tools to fix not only laptops but also tablets, smartwatches, and smartphones.',
  action: 'CONTACT',
}

FeatureCard38.propTypes = {
  rootClassName: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  action: PropTypes.string,
}

export default FeatureCard38
