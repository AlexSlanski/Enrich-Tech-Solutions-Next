import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Hero10 = (props) => {
  return (
    <>
      <div
        className={`hero10-header1 thq-section-padding ${props.rootClassName} `}
      >
        <div className="hero10-max-width thq-section-max-width">
          <div className="hero10-container thq-flex-row">
            <div className="hero10-column">
              <main className="hero10-content">
                <h2 className="hero10-heading thq-heading-1">
                  {props.heading ?? (
                    <Fragment>
                      <span className="hero10-text1">
                        1. VERB &quot;To enrich something means to improve its
                        quality, usually by adding something to it.&quot;
                      </span>
                    </Fragment>
                  )}
                </h2>
                <p className="hero10-content1 thq-body-large">
                  {props.content1 ?? (
                    <Fragment>
                      <span className="hero10-text4">
                        Enrich Tech Solutions is a customer-focused tech company
                        that specialises in expert device repair, IT support,
                        and technology services for both home and business
                        needs. Our team of skilled technicians is dedicated to
                        providing top-notch services to ensure customer
                        satisfaction.
                      </span>
                    </Fragment>
                  )}
                </p>
              </main>
              <div className="hero10-actions">
                <Link href="/contact">
                  <a className="hero10-link1 thq-button-outline">
                    <span className="thq-body-small">
                      {props.action2 ?? (
                        <Fragment>
                          <span className="hero10-text2">REPAIR MY DEVICE</span>
                        </Fragment>
                      )}
                    </span>
                  </a>
                </Link>
                <Link href="/services">
                  <a className="hero10-link2 thq-button-outline">
                    <span className="thq-body-small">
                      {props.action21 ?? (
                        <Fragment>
                          <span className="hero10-text3">FIND OUT MORE</span>
                        </Fragment>
                      )}
                    </span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .hero10-header1 {
            padding: var(--dl-layout-space-threeunits);
            background-color: var(--dl-color-primary-enblue);
          }
          .hero10-max-width {
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .hero10-container {
            animation-name: fadeInLeft;
            animation-delay: 0s;
            animation-duration: 700ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .hero10-column {
            gap: 24px;
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .hero10-content {
            gap: 24px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .hero10-heading {
            fill: var(--dl-color-theme-secondary2);
            color: var(--dl-color-theme-secondary2);
            align-self: center;
            font-style: italic;
            text-align: center;
            font-family: 'Inter';
            font-weight: 400;
          }
          .hero10-content1 {
            align-self: center;
            text-align: center;
            font-family: 'Inter';
          }
          .hero10-actions {
            gap: var(--dl-layout-space-unit);
            display: none;
            align-items: flex-start;
          }
          .hero10-link1 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            transition: 0.3s;
            border-color: var(--dl-color-theme-secondary1);
            text-decoration: none;
          }

          .hero10-link2 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            transition: 0.3s;
            border-color: var(--dl-color-theme-secondary1);
            text-decoration: none;
          }

          .hero10-text1 {
            fill: var(--dl-color-gray-black);
            color: var(--dl-color-theme-accent1);
            display: inline-block;
            font-size: 30px;
            font-family: 'Inter';
          }
          .hero10-text2 {
            display: inline-block;
          }
          .hero10-text3 {
            display: inline-block;
          }
          .hero10-text4 {
            color: var(--dl-color-theme-secondary2);
            display: inline-block;
            font-size: 22px;
            font-family: 'Inter';
          }
          .hero10root-class-name1 {
            background-color: var(--dl-color-primary-enblue);
          }
          .hero10root-class-name2 {
            background-color: var(--dl-color-primary-enblue);
          }
          @media (max-width: 2560px) {
            .hero10-text1 {
              font-size: 14px;
            }
          }
          @media (max-width: 1920px) {
            .hero10-header1 {
              padding: var(--dl-layout-space-twounits);
            }
            .hero10-heading {
              align-self: center;
              text-align: center;
            }
            .hero10-content1 {
              align-self: center;
              text-align: center;
            }
            .hero10-text1 {
              color: var(--dl-color-theme-accent1);
              font-size: 30px;
              font-family: Inter;
            }
            .hero10-text4 {
              color: var(--dl-color-theme-secondary2);
              font-size: 20px;
              font-family: Inter;
            }
          }
          @media (max-width: 1366px) {
            .hero10-text1 {
              color: var(--dl-color-theme-accent2);
              font-size: 26px;
              font-family: Inter;
            }
            .hero10-text4 {
              color: var(--dl-color-theme-secondary2);
              font-size: 20px;
              font-family: Inter;
            }
          }
          @media (max-width: 1200px) {
            .hero10-header1 {
              padding: var(--dl-layout-space-oneandhalfunits);
            }
            .hero10-container {
              flex-direction: column;
            }
            .hero10-text1 {
              color: var(--dl-color-theme-accent2);
              font-size: 24px;
              font-family: Inter;
            }
            .hero10-text4 {
              color: var(--dl-color-theme-secondary2);
              font-size: 20px;
              font-family: Inter;
            }
          }
          @media (max-width: 900px) {
            .hero10-heading {
              align-self: center;
            }
            .hero10-content1 {
              align-self: center;
              text-align: center;
            }
            .hero10-actions {
              width: 100%;
              justify-content: center;
            }
            .hero10-text1 {
              color: var(--dl-color-theme-accent1);
              font-size: 18px;
              font-family: Inter;
            }
            .hero10-text4 {
              color: var(--dl-color-theme-secondary2);
              font-size: 18px;
              font-family: Inter;
            }
          }
          @media (max-width: 480px) {
            .hero10-header1 {
              height: var(--dl-layout-size-xxlarge);
              padding: var(--dl-layout-space-oneandhalfunits);
            }
            .hero10-content {
              align-self: center;
            }
            .hero10-heading {
              fill: var(--dl-color-primary1-blue80);
              color: var(--dl-color-primary1-blue80);
              height: auto;
              font-style: italic;
              text-align: center;
              font-weight: 400;
            }
            .hero10-content1 {
              text-align: center;
            }
            .hero10-text1 {
              color: var(--dl-color-theme-accent2);
              font-size: 18px;
              font-family: Inter;
            }
            .hero10-text4 {
              color: var(--dl-color-theme-secondary2);
              font-size: 18px;
              font-family: Inter;
            }
            .hero10root-class-name1 {
              height: auto;
              padding: var(--dl-layout-space-twounits);
            }
            .hero10root-class-name2 {
              height: auto;
              padding: 0px;
            }
          }
          @media (max-width: 479px) {
            .hero10-actions {
              flex-direction: column;
            }
            .hero10-link1 {
              width: 100%;
            }
            .hero10-link2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Hero10.defaultProps = {
  rootClassName: '',
  heading: undefined,
  action2: undefined,
  action21: undefined,
  content1: undefined,
}

Hero10.propTypes = {
  rootClassName: PropTypes.string,
  heading: PropTypes.element,
  action2: PropTypes.element,
  action21: PropTypes.element,
  content1: PropTypes.element,
}

export default Hero10
