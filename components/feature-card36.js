import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const FeatureCard36 = (props) => {
  return (
    <>
      <div className={`feature-card36-feature-card ${props.rootClassName} `}>
        <svg viewBox="0 0 1024 1024" className="feature-card36-icon1">
          <path d="M576 256l-128-128h-448v832h1024v-704h-448zM704 704h-128v128h-128v-128h-128v-128h128v-128h128v128h128v128z"></path>
        </svg>
        <h2 className="feature-card36-text1">{props.title}</h2>
        <span className="feature-card36-text2">{props.description}</span>
        <Link href="/contact">
          <a className="feature-card36-link">{props.action}</a>
        </Link>
      </div>
      <style jsx>
        {`
          .feature-card36-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-halfunit);
            align-items: center;
            flex-direction: column;
          }
          .feature-card36-icon1 {
            fill: var(--dl-color-primary-700);
            width: var(--dl-layout-size-small);
            height: var(--dl-layout-size-small);
          }
          .feature-card36-text1 {
            fill: var(--dl-color-theme-neutral-light);
            color: var(--dl-color-theme-neutral-light);
            font-size: 29px;
            font-style: normal;
            margin-top: var(--dl-layout-space-unit);
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-layout-space-unit);
          }
          .feature-card36-text2 {
            fill: var(--dl-color-primary-700);
            color: var(--dl-color-primary-700);
            font-size: 16px;
          }
          .feature-card36-link {
            fill: var(--dl-color-theme-neutral-light);
            color: var(--dl-color-theme-neutral-light);
            font-size: 1.25rem;
            margin-top: var(--dl-layout-space-unit);
            font-weight: 500;
            text-decoration: none;
          }

          @media (max-width: 480px) {
            .feature-card36-text2 {
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

FeatureCard36.defaultProps = {
  title: 'Data Recovery',
  description:
    "Experiencing problems with your storage devices, such as external drives or laptop drives? Whether it's slow performance or locked storage, we specialize in data recovery services that can be a lifesaver. From ticking hard drives to jammed or damaged ones, our experts are skilled at getting your data moving again and recovered.",
  rootClassName: '',
  action: 'CONTACT',
}

FeatureCard36.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  rootClassName: PropTypes.string,
  action: PropTypes.string,
}

export default FeatureCard36
