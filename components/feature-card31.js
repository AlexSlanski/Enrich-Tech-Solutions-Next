import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const FeatureCard31 = (props) => {
  return (
    <>
      <div className={`feature-card31-feature-card ${props.rootClassName} `}>
        <svg viewBox="0 0 1024 1024" className="feature-card31-icon1">
          <path d="M964.73 178.804c-93.902-109.45-233.21-178.804-388.73-178.804-282.77 0-512 229.23-512 512s229.23 512 512 512c155.52 0 294.828-69.356 388.728-178.804l-324.728-333.196 324.73-333.196zM704 120.602c39.432 0 71.398 31.964 71.398 71.398 0 39.432-31.966 71.398-71.398 71.398s-71.398-31.966-71.398-71.398c0-39.432 31.966-71.398 71.398-71.398z"></path>
        </svg>
        <h2 className="feature-card31-text1">{props.title}</h2>
        <span className="feature-card31-text2">{props.description}</span>
        <span className="feature-card31-text3">
          {props.text ?? (
            <Fragment>
              <Link href="/contact">
                <a>
                  <span className="feature-card31-text4">
                    <span>SEE MORE</span>
                  </span>
                </a>
              </Link>
            </Fragment>
          )}
        </span>
      </div>
      <style jsx>
        {`
          .feature-card31-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-halfunit);
            align-items: center;
            flex-direction: column;
          }
          .feature-card31-icon1 {
            fill: var(--dl-color-primary-700);
            width: var(--dl-layout-size-small);
            height: var(--dl-layout-size-small);
          }
          .feature-card31-text1 {
            fill: var(--dl-color-theme-neutral-light);
            color: var(--dl-color-theme-neutral-light);
            font-size: 29px;
            font-style: normal;
            margin-top: var(--dl-layout-space-unit);
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-layout-space-unit);
          }
          .feature-card31-text2 {
            fill: var(--dl-color-primary-700);
            color: var(--dl-color-primary-700);
            font-size: 16px;
          }
          .feature-card31-text3 {
            fill: var(--dl-color-theme-neutral-light);
            color: var(--dl-color-theme-neutral-light);
            font-size: 1.25rem;
            margin-top: var(--dl-layout-space-unit);
            font-weight: 500;
            text-decoration: none;
          }
          .feature-card31-text4 {
            display: inline-block;
          }

          @media (max-width: 1366px) {
            .feature-card31-text2 {
              font-size: 17px;
            }
          }
          @media (max-width: 1200px) {
            .feature-card31-text2 {
              font-size: 17px;
            }
          }
          @media (max-width: 480px) {
            .feature-card31-text2 {
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

FeatureCard31.defaultProps = {
  text: undefined,
  rootClassName: '',
  description:
    'From epic gaming PC builds to simulation rigs and rendering stations, Enrich Tech Solutions can turn your tech dreams into reality. Each build is meticulously crafted in-house using top-quality branded components to ensure you have everything you need to elevate your experience. If you would like a quote for a build, information on options and timescales, please contact us.',
  title: 'Gaming PC',
}

FeatureCard31.propTypes = {
  text: PropTypes.element,
  rootClassName: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
}

export default FeatureCard31
