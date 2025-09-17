import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const FeatureCard35 = (props) => {
  return (
    <>
      <div className={`feature-card35-feature-card ${props.rootClassName} `}>
        <svg
          viewBox="0 0 950.8571428571428 1024"
          className="feature-card35-icon1"
        >
          <path d="M731.429 841.143c0-20-16.571-36.571-36.571-36.571s-36.571 16.571-36.571 36.571 16.571 36.571 36.571 36.571 36.571-16.571 36.571-36.571zM877.714 841.143c0-20-16.571-36.571-36.571-36.571s-36.571 16.571-36.571 36.571 16.571 36.571 36.571 36.571 36.571-16.571 36.571-36.571zM950.857 713.143v182.857c0 30.286-24.571 54.857-54.857 54.857h-841.143c-30.286 0-54.857-24.571-54.857-54.857v-182.857c0-30.286 24.571-54.857 54.857-54.857h244c15.429 42.286 56 73.143 103.429 73.143h146.286c47.429 0 88-30.857 103.429-73.143h244c30.286 0 54.857 24.571 54.857 54.857zM765.143 342.857c-5.714 13.714-18.857 22.857-33.714 22.857h-146.286v256c0 20-16.571 36.571-36.571 36.571h-146.286c-20 0-36.571-16.571-36.571-36.571v-256h-146.286c-14.857 0-28-9.143-33.714-22.857-5.714-13.143-2.857-29.143 8-39.429l256-256c6.857-7.429 16.571-10.857 25.714-10.857s18.857 3.429 25.714 10.857l256 256c10.857 10.286 13.714 26.286 8 39.429z"></path>
        </svg>
        <h2 className="feature-card35-text1">{props.title}</h2>
        <span className="feature-card35-text2">{props.description}</span>
        <Link href="/contact">
          <a className="feature-card35-link">{props.action}</a>
        </Link>
      </div>
      <style jsx>
        {`
          .feature-card35-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-halfunit);
            align-items: center;
            flex-direction: column;
          }
          .feature-card35-icon1 {
            fill: var(--dl-color-primary-700);
            width: var(--dl-layout-size-small);
            height: var(--dl-layout-size-small);
          }
          .feature-card35-text1 {
            fill: var(--dl-color-theme-neutral-light);
            color: var(--dl-color-theme-neutral-light);
            font-style: normal;
            margin-top: var(--dl-layout-space-unit);
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-layout-space-unit);
          }
          .feature-card35-text2 {
            fill: var(--dl-color-primary-700);
            color: var(--dl-color-primary-700);
            font-size: 17px;
            text-align: center;
          }
          .feature-card35-link {
            fill: var(--dl-color-theme-neutral-light);
            color: var(--dl-color-theme-neutral-light);
            font-size: 0.75rem;
            margin-top: var(--dl-layout-space-unit);
            font-weight: 500;
            text-decoration: none;
          }
        `}
      </style>
    </>
  )
}

FeatureCard35.defaultProps = {
  title: 'Maintenance and Upgrades',
  rootClassName: '',
  action: 'CONTACT',
  description:
    'Enhance the performance of your older computers with our upgrade and maintenance services. Regular servicing, recommended every 12-24 months depending on usage, guarantees efficiency and security. One of our top upgrades includes replacing outdated hard drives with Solid State Drives (SSDs) that are fast, efficient, and reliable, resulting in a significant boost in computer speed.',
}

FeatureCard35.propTypes = {
  title: PropTypes.string,
  rootClassName: PropTypes.string,
  action: PropTypes.string,
  description: PropTypes.string,
}

export default FeatureCard35
