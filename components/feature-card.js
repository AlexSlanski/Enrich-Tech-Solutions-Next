import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const FeatureCard = (props) => {
  return (
    <>
      <div className={`feature-card-feature-card ${props.rootClassName} `}>
        <div className="feature-card-container">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="feature-card-icon1"
          >
            <path d="M6 22h12l-6-6z" fill="currentColor"></path>
            <path
              d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v-2H3V5h18v12h-4v2h4c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2"
              fill="currentColor"
            ></path>
          </svg>
          <h4 className="feature-card-heading heading4 heading3">
            {props.heading}
          </h4>
          <span className="feature-card-text1">
            {props.text ?? (
              <Fragment>
                <span className="feature-card-text2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  lorem lorem, malesuada in metus vitae, scelerisque accumsan
                  ipsum.
                </span>
              </Fragment>
            )}
          </span>
        </div>
      </div>
      <style jsx>
        {`
          .feature-card-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-twounits);
            position: relative;
            transition: 0.3s;
            align-items: flex-start;
            border-radius: var(--dl-layout-radius-radius8);
            flex-direction: row;
            justify-content: flex-start;
          }
          .feature-card-feature-card:hover {
            background-color: var(--dl-color-primary-700);
          }
          .feature-card-container {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .feature-card-icon1 {
            fill: var(--dl-color-primary-700);
            color: var(--dl-color-primary-700);
            width: 33px;
            height: 33px;
          }
          .feature-card-heading {
            fill: var(--dl-color-theme-neutral-light);
            color: var(--dl-color-theme-neutral-light);
            transition: 0.3s;
            line-height: 28px;
          }
          .feature-card-heading:hover {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
          }
          .feature-card-text1 {
            fill: var(--dl-color-primary-700);
            color: var(--dl-color-primary-700);
            transition: 0.3s;
          }
          .feature-card-text1:hover {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
          }
          .feature-card-text2 {
            display: inline-block;
          }
          .feature-cardroot-class-name {
            height: 250px;
          }
          .feature-cardroot-class-name1 {
            height: 250px;
          }
          .feature-cardroot-class-name2 {
            height: 250px;
          }
          .feature-cardroot-class-name3 {
            height: 250px;
          }
          .feature-cardroot-class-name4 {
            height: 250px;
          }
          .feature-cardroot-class-name5 {
            height: 250px;
          }
          @media (max-width: 1920px) {
            .feature-card-feature-card {
              height: auto;
              display: flex;
            }
            .feature-card-heading {
              fill: var(--dl-color-gray-black);
              color: var(--dl-color-gray-black);
              line-height: 28px;
            }
            .feature-cardroot-class-name {
              height: 270px;
            }
            .feature-cardroot-class-name1 {
              height: 270px;
            }
            .feature-cardroot-class-name2 {
              height: 270px;
            }
            .feature-cardroot-class-name3 {
              height: 270px;
            }
            .feature-cardroot-class-name4 {
              height: 270px;
            }
            .feature-cardroot-class-name5 {
              height: 270px;
            }
          }
          @media (max-width: 1200px) {
            .feature-card-feature-card {
              padding: var(--dl-layout-space-oneandhalfunits);
            }
          }
          @media (max-width: 900px) {
            .feature-card-feature-card {
              flex-direction: row;
            }
            .feature-card-container {
              flex-direction: column;
            }
          }
          @media (max-width: 480px) {
            .feature-card-container {
              flex-direction: column;
            }
            .feature-card-icon1 {
              fill: var(--dl-color-primary1-blue80);
              color: var(--dl-color-primary1-blue80);
              align-self: center;
            }
            .feature-card-heading {
              fill: var(--dl-color-theme-neutral-light);
              color: var(--dl-color-theme-neutral-light);
              align-self: center;
              text-align: center;
            }
            .feature-card-text1 {
              fill: var(--dl-color-theme-neutral-light);
              color: var(--dl-color-theme-neutral-light);
              font-size: 12px;
              align-self: center;
              text-align: center;
            }
            .feature-cardroot-class-name {
              height: auto;
            }
          }
        `}
      </style>
    </>
  )
}

FeatureCard.defaultProps = {
  rootClassName: '',
  text: undefined,
  heading: 'Tech Support and Advice',
}

FeatureCard.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.element,
  heading: PropTypes.string,
}

export default FeatureCard
