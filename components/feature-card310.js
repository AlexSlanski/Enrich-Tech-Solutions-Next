import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const FeatureCard310 = (props) => {
  return (
    <>
      <div className={`feature-card310-feature-card ${props.rootClassName} `}>
        <svg viewBox="0 0 1024 1024" className="feature-card310-icon1">
          <path d="M1024 576v-64h-193.29c-5.862-72.686-31.786-139.026-71.67-192.25h161.944l70.060-280.24-62.090-15.522-57.94 231.76h-174.68c-0.892-0.694-1.796-1.374-2.698-2.056 6.71-19.502 10.362-40.422 10.362-62.194 0.002-105.76-85.958-191.498-191.998-191.498s-192 85.738-192 191.5c0 21.772 3.65 42.692 10.362 62.194-0.9 0.684-1.804 1.362-2.698 2.056h-174.68l-57.94-231.76-62.090 15.522 70.060 280.24h161.944c-39.884 53.222-65.806 119.562-71.668 192.248h-193.29v64h193.37c3.802 45.664 15.508 88.812 33.638 127.75h-123.992l-70.060 280.238 62.090 15.524 57.94-231.762h112.354c58.692 78.032 147.396 127.75 246.66 127.75s187.966-49.718 246.662-127.75h112.354l57.94 231.762 62.090-15.524-70.060-280.238h-123.992c18.13-38.938 29.836-82.086 33.636-127.75h193.37z"></path>
        </svg>
        <h2 className="feature-card310-text1">{props.title}</h2>
        <span className="feature-card310-text2">{props.description}</span>
        <Link href="/contact">
          <a className="feature-card310-link">{props.action}</a>
        </Link>
      </div>
      <style jsx>
        {`
          .feature-card310-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-halfunit);
            align-items: center;
            flex-direction: column;
          }
          .feature-card310-icon1 {
            fill: var(--dl-color-primary-700);
            width: var(--dl-layout-size-small);
            height: var(--dl-layout-size-small);
          }
          .feature-card310-text1 {
            fill: var(--dl-color-theme-neutral-light);
            color: var(--dl-color-theme-neutral-light);
            font-style: normal;
            margin-top: var(--dl-layout-space-unit);
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-layout-space-unit);
          }
          .feature-card310-text2 {
            fill: var(--dl-color-primary-700);
            color: var(--dl-color-primary-700);
            font-size: 16px;
          }
          .feature-card310-link {
            fill: var(--dl-color-theme-neutral-light);
            color: var(--dl-color-theme-neutral-light);
            font-size: 1.25rem;
            margin-top: var(--dl-layout-space-unit);
            font-weight: 500;
            text-decoration: none;
          }

          @media (max-width: 480px) {
            .feature-card310-text2 {
              font-size: 14px;
            }
            .feature-card310-link {
              font-size: 0.75rem;
              font-weight: 500;
              text-decoration: none;
            }
          }
        `}
      </style>
    </>
  )
}

FeatureCard310.defaultProps = {
  rootClassName: '',
  action: 'SEE MORE',
  description:
    "In today's technology-driven world, computer viruses such as malware, spyware, trojans, and phishing attacks are becoming more prevalent. Our team provides expert guidance, support, and virus removal services to combat these threats. Reach out to us for assistance - we're here to support you.",
  title: 'Virus removal and Recovery',
}

FeatureCard310.propTypes = {
  rootClassName: PropTypes.string,
  action: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
}

export default FeatureCard310
