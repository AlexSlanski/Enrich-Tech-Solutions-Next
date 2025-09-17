import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const FeatureCard33 = (props) => {
  return (
    <>
      <div className={`feature-card33-feature-card ${props.rootClassName} `}>
        <svg viewBox="0 0 1024 1024" className="feature-card33-icon1">
          <path d="M512 810q18 0 30-12t12-30-12-30-30-12-30 12-12 30 12 30 30 12zM170 214v468h684v-468h-684zM854 768h170q0 34-26 60t-60 26h-852q-34 0-60-26t-26-60h170q-34 0-59-26t-25-60v-468q0-34 25-60t59-26h684q34 0 59 26t25 60v468q0 34-25 60t-59 26z"></path>
        </svg>
        <h2 className="feature-card33-text1">{props.title}</h2>
        <span className="feature-card33-text2">{props.description}</span>
        <Link href="/contact">
          <a className="feature-card33-link">{props.action}</a>
        </Link>
      </div>
      <style jsx>
        {`
          .feature-card33-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-halfunit);
            align-items: center;
            padding-top: 8px;
            flex-direction: column;
          }
          .feature-card33-icon1 {
            fill: var(--dl-color-primary-700);
            width: var(--dl-layout-size-small);
            height: var(--dl-layout-size-small);
          }
          .feature-card33-text1 {
            fill: var(--dl-color-theme-neutral-light);
            color: var(--dl-color-theme-neutral-light);
            font-size: 1.75rem;
            font-style: normal;
            margin-top: var(--dl-layout-space-unit);
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-layout-space-unit);
          }
          .feature-card33-text2 {
            fill: var(--dl-color-primary-700);
            color: var(--dl-color-primary-700);
            font-size: 16px;
            text-align: center;
          }
          .feature-card33-link {
            fill: var(--dl-color-theme-neutral-light);
            color: var(--dl-color-theme-neutral-light);
            font-size: 1.25rem;
            margin-top: var(--dl-layout-space-unit);
            font-weight: 500;
            text-decoration: none;
          }

          @media (max-width: 1920px) {
            .feature-card33-text1 {
              font-size: 1.75rem;
              font-style: normal;
              font-weight: 500;
            }
          }
          @media (max-width: 480px) {
            .feature-card33-text2 {
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

FeatureCard33.defaultProps = {
  action: 'CONTACT',
  rootClassName: '',
  description:
    'With over 10 years experience repairing laptops we have fixed a wide range of devices – from bulky pro models to modern lightweight ultrabooks. Screen replacements and upgrades, power issues and cooling. We are specialists in laptop repairs, and always advocate for repairing over replacing - it is more economical and better for the environment.',
  title: 'Laptop Repair',
}

FeatureCard33.propTypes = {
  action: PropTypes.string,
  rootClassName: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
}

export default FeatureCard33
