import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const FeatureCard37 = (props) => {
  return (
    <>
      <div className={`feature-card37-feature-card ${props.rootClassName} `}>
        <svg viewBox="0 0 1024 1024" className="feature-card37-icon1">
          <path d="M598 554h128l-214-212-214 212h128v172h172v-172zM826 428q82 6 140 67t58 145q0 88-63 151t-151 63h-554q-106 0-181-75t-75-181q0-94 67-169t161-85q42-78 118-126t166-48q108 0 201 76t113 182z"></path>
        </svg>
        <h2 className="feature-card37-text1">{props.title}</h2>
        <span className="feature-card37-text2">{props.description}</span>
        <a
          href="https://docs.aws.amazon.com/aws-backup/latest/devguide/s3-backups.html"
          target="_blank"
          rel="noreferrer noopener"
          className="feature-card37-link"
        >
          {props.action}
        </a>
      </div>
      <style jsx>
        {`
          .feature-card37-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-halfunit);
            transition: 0.3s;
            align-items: center;
            flex-direction: column;
          }
          .feature-card37-feature-card:hover {
            background-color: var(--dl-color-theme-accent2);
          }
          .feature-card37-icon1 {
            fill: var(--dl-color-primary-700);
            width: var(--dl-layout-size-small);
            height: var(--dl-layout-size-small);
          }
          .feature-card37-text1 {
            fill: var(--dl-color-theme-neutral-light);
            color: var(--dl-color-theme-neutral-light);
            font-size: 29px;
            font-style: normal;
            margin-top: var(--dl-layout-space-unit);
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-layout-space-unit);
          }
          .feature-card37-text2 {
            fill: var(--dl-color-primary-700);
            color: var(--dl-color-primary-700);
            font-size: 16px;
            text-align: center;
          }
          .feature-card37-link {
            fill: var(--dl-color-theme-neutral-light);
            color: var(--dl-color-theme-neutral-light);
            font-size: 1.25rem;
            margin-top: var(--dl-layout-space-unit);
            font-weight: 500;
            text-decoration: none;
          }

          @media (max-width: 480px) {
            .feature-card37-text2 {
              font-size: 14px;
              text-align: center;
            }
            .feature-card37-link {
              fill: var(--dl-color-theme-neutral-light);
              color: var(--dl-color-theme-neutral-light);
              font-size: 1.25rem;
              font-weight: 500;
              text-decoration: none;
            }
          }
        `}
      </style>
    </>
  )
}

FeatureCard37.defaultProps = {
  action: 'LEARN MORE',
  rootClassName: '',
  title: 'Secure Cloud Back-ups',
  description:
    'We collaborate with Amazon Web Services to deliver cutting-edge data security, guaranteeing the protection of all your valuable information to the most stringent industry norms. Your essential data will be stored in robust and limitless storage. The scalability and cost-efficiency of AWS Cloud computing are precisely what contemporary businesses require for expansion.',
}

FeatureCard37.propTypes = {
  action: PropTypes.string,
  rootClassName: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
}

export default FeatureCard37
