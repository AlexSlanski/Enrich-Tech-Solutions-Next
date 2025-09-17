import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const FeatureCard34 = (props) => {
  return (
    <>
      <div className={`feature-card34-feature-card ${props.rootClassName} `}>
        <svg viewBox="0 0 1024 1024" className="feature-card34-icon1">
          <path d="M704 640c-64 64-64 128-128 128s-128-64-192-128-128-128-128-192 64-64 128-128-128-256-192-256-192 192-192 192c0 128 131.5 387.5 256 512s384 256 512 256c0 0 192-128 192-192s-192-256-256-192z"></path>
        </svg>
        <h2 className="feature-card34-text1">{props.tech}</h2>
        <span className="feature-card34-text2">{props.description}</span>
        <Link href="/contact">
          <a className="feature-card34-link">{props.action}</a>
        </Link>
      </div>
      <style jsx>
        {`
          .feature-card34-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-halfunit);
            align-items: center;
            flex-direction: column;
          }
          .feature-card34-icon1 {
            fill: var(--dl-color-primary-700);
            width: var(--dl-layout-size-small);
            height: var(--dl-layout-size-small);
          }
          .feature-card34-text1 {
            fill: var(--dl-color-theme-neutral-light);
            color: var(--dl-color-theme-neutral-light);
            font-size: 1.75rem;
            font-style: normal;
            margin-top: var(--dl-layout-space-unit);
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-layout-space-unit);
          }
          .feature-card34-text2 {
            fill: var(--dl-color-primary-700);
            color: var(--dl-color-primary-700);
            font-size: 16px;
            text-align: center;
          }
          .feature-card34-link {
            fill: var(--dl-color-theme-neutral-light);
            color: var(--dl-color-theme-neutral-light);
            font-size: 1.25rem;
            margin-top: var(--dl-layout-space-unit);
            font-weight: 500;
            text-decoration: none;
          }

          .feature-card34root-class-name2 {
            width: 70%;
            opacity: 0.8;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: 240px;
            padding-right: 240px;
            padding-bottom: var(--dl-layout-space-fourunits);
            background-color: rgb(217, 217, 217);
          }

          .feature-card34root-class-name8 {
            width: 70%;
            opacity: 0.8;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: 240px;
            padding-right: 240px;
            padding-bottom: var(--dl-layout-space-fourunits);
            background-color: rgb(217, 217, 217);
          }
          @media (max-width: 2560px) {
            .feature-card34-text2 {
              font-size: 16px;
            }
          }
          @media (max-width: 1920px) {
            .feature-card34-text1 {
              font-size: 1.75rem;
              font-style: normal;
              font-weight: 500;
            }
            .feature-card34-text2 {
              font-size: 16px;
            }
            .feature-card34-link {
              font-size: 1.25rem;
              font-weight: 500;
              text-decoration: none;
            }
          }
          @media (max-width: 900px) {
            .feature-card34root-class-name2 {
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
            .feature-card34root-class-name8 {
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
          }
          @media (max-width: 480px) {
            .feature-card34-text1 {
              font-size: 20px;
            }
            .feature-card34-text2 {
              fill: var(--dl-color-primary-700);
              color: var(--dl-color-primary-700);
              font-size: 14px;
              text-align: center;
            }
            .feature-card34root-class-name2 {
              padding-top: 0px;
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-twounits);
            }
            .feature-card34root-class-name8 {
              padding-top: 0px;
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-twounits);
            }
          }
        `}
      </style>
    </>
  )
}

FeatureCard34.defaultProps = {
  action: 'CONTACT',
  tech: 'Tech Support',
  description:
    'Enrich Tech Solutions offers a comprehensive range of professional IT solutions across Leicester and Market Harborough, as well as surrounding areas in Leicestershire, Northamptonshire, and Warwickshire. Our services include on-site support for repairs, equipment and system installations, expert advice, and assistance with purchasing. Feel free to reach out to us with any inquiries or for assistance.',
  rootClassName: '',
}

FeatureCard34.propTypes = {
  action: PropTypes.string,
  tech: PropTypes.string,
  description: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default FeatureCard34
