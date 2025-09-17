import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const FeatureCard32 = (props) => {
  return (
    <>
      <div className={`feature-card32-feature-card ${props.rootClassName} `}>
        <svg
          viewBox="0 0 796.0137142857142 1024"
          className="feature-card32-icon1"
        >
          <path d="M796 694.286c-14.286 45.143-37.143 93.143-70.286 142.857-49.143 74.857-98.286 112-146.857 112-19.429 0-45.714-6.286-80-18.286-33.714-12.571-62.857-18.286-86.286-18.286-22.857 0-50.286 6.286-81.143 18.857-31.429 13.143-56.571 19.429-75.429 19.429-58.857 0-115.429-49.714-172-148-55.429-98.286-84-193.714-84-287.429 0-87.429 21.714-158.286 64.571-213.714 42.857-54.857 96.571-82.286 162.286-82.286 28 0 61.143 5.714 101.143 17.143 39.429 11.429 65.714 17.143 78.857 17.143 16.571 0 44-6.286 81.714-19.429 37.714-12.571 70.857-19.429 98.857-19.429 45.714 0 86.286 12.571 121.714 37.143 20 13.714 40 33.143 59.429 57.143-29.714 25.143-51.429 47.429-65.143 67.429-24.571 35.429-37.143 74.857-37.143 118.286 0 46.857 13.143 89.714 39.429 127.429s56.571 61.714 90.286 72zM581.143 24c0 23.429-5.714 49.714-16.571 77.714-11.429 28.571-29.143 54.857-53.143 78.857-20.571 20.571-41.143 34.286-61.714 41.143-13.143 4-32.571 7.429-59.429 9.714 1.143-56.571 16-105.714 44.571-146.857s76.571-69.143 142.857-84.571c1.143 5.143 2.286 9.143 2.857 12.571 0 4 0.571 7.429 0.571 11.429z"></path>
        </svg>
        <h2 className="feature-card32-text1">{props.title}</h2>
        <span className="feature-card32-text2">
          {props.text ?? (
            <Fragment>
              <span className="feature-card32-text3">
                Comprehensive support for all your Apple devices - our team is
                passionate about everything Apple, just like you! Whether you
                need upgrades, repairs, or solutions, Enrich Tech Solutions is
                here for you. Trust us with all your beloved Apple devices!
              </span>
            </Fragment>
          )}
        </span>
        <Link href="/contact">
          <a className="feature-card32-link">{props.action}</a>
        </Link>
      </div>
      <style jsx>
        {`
          .feature-card32-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-halfunit);
            align-items: center;
            padding-top: 8px;
            flex-direction: column;
          }
          .feature-card32-icon1 {
            fill: var(--dl-color-primary-700);
            width: var(--dl-layout-size-small);
            height: var(--dl-layout-size-small);
          }
          .feature-card32-text1 {
            fill: var(--dl-color-theme-neutral-light);
            color: var(--dl-color-theme-neutral-light);
            font-size: 1.75rem;
            font-style: normal;
            margin-top: var(--dl-layout-space-unit);
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-layout-space-unit);
          }
          .feature-card32-text2 {
            fill: var(--dl-color-primary-700);
            color: var(--dl-color-primary-700);
            font-size: 17px;
          }
          .feature-card32-link {
            fill: var(--dl-color-theme-neutral-light);
            color: var(--dl-color-theme-neutral-light);
            font-size: 1.25rem;
            margin-top: var(--dl-layout-space-unit);
            font-weight: 500;
            text-decoration: none;
          }
          .feature-card32-text3 {
            display: inline-block;
          }
          .feature-card32root-class-name {
            background-color: transparent;
          }

          @media (max-width: 480px) {
            .feature-card32-text2 {
              fill: var(--dl-color-primary-700);
              color: var(--dl-color-primary-700);
              font-size: 15px;
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

FeatureCard32.defaultProps = {
  text: undefined,
  title: 'Apple Service',
  rootClassName: '',
  action: 'CONTACT',
}

FeatureCard32.propTypes = {
  text: PropTypes.element,
  title: PropTypes.string,
  rootClassName: PropTypes.string,
  action: PropTypes.string,
}

export default FeatureCard32
