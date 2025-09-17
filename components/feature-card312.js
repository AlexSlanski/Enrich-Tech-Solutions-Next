import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const FeatureCard312 = (props) => {
  return (
    <>
      <div className={`feature-card312-feature-card ${props.rootClassName} `}>
        <div className="feature-card312-container">
          <svg viewBox="0 0 1024 1024" className="feature-card312-icon1">
            <path d="M73.143 804.571h585.143v-73.143h-585.143v73.143zM73.143 512h585.143v-73.143h-585.143v73.143zM969.143 768c0-30.286-24.571-54.857-54.857-54.857s-54.857 24.571-54.857 54.857 24.571 54.857 54.857 54.857 54.857-24.571 54.857-54.857zM73.143 219.429h585.143v-73.143h-585.143v73.143zM969.143 475.429c0-30.286-24.571-54.857-54.857-54.857s-54.857 24.571-54.857 54.857 24.571 54.857 54.857 54.857 54.857-24.571 54.857-54.857zM969.143 182.857c0-30.286-24.571-54.857-54.857-54.857s-54.857 24.571-54.857 54.857 24.571 54.857 54.857 54.857 54.857-24.571 54.857-54.857zM1024 658.286v219.429h-1024v-219.429h1024zM1024 365.714v219.429h-1024v-219.429h1024zM1024 73.143v219.429h-1024v-219.429h1024z"></path>
          </svg>
        </div>
        <h2 className="feature-card312-text1">{props.title}</h2>
        <span className="feature-card312-text2">{props.description}</span>
        <Link href="/contact">
          <a className="feature-card312-link">{props.action}</a>
        </Link>
      </div>
      <style jsx>
        {`
          .feature-card312-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-halfunit);
            align-items: center;
            flex-direction: column;
          }
          .feature-card312-container {
            flex: 0 0 auto;
            width: auto;
            height: Small;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .feature-card312-icon1 {
            fill: var(--dl-color-primary-700);
            width: var(--dl-layout-size-small);
            height: var(--dl-layout-size-small);
          }
          .feature-card312-text1 {
            fill: var(--dl-color-theme-neutral-light);
            color: var(--dl-color-theme-neutral-light);
            font-style: normal;
            margin-top: var(--dl-layout-space-unit);
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-layout-space-unit);
          }
          .feature-card312-text2 {
            fill: var(--dl-color-primary-700);
            color: var(--dl-color-primary-700);
            font-size: 17px;
            text-align: center;
          }
          .feature-card312-link {
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

FeatureCard312.defaultProps = {
  title: 'Servers and Network Solutions',
  rootClassName: '',
  description:
    'Whether you need network setup for your business or home, we can assist with cabled or Mesh Wi-Fi networks. Our expertise extends to building servers, from small tower units to larger rack systems, along with configuration and ongoing maintenance. Additionally, we now provide AWS cloud solutions for a future-proof business server solution in the cloud. Feel free to reach out for migration details or to learn more.',
  action: 'CONTACT',
}

FeatureCard312.propTypes = {
  title: PropTypes.string,
  rootClassName: PropTypes.string,
  description: PropTypes.string,
  action: PropTypes.string,
}

export default FeatureCard312
