import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Footer3 = (props) => {
  return (
    <>
      <div
        className={`footer3-footer4 thq-section-padding ${props.rootClassName} `}
      >
        <div className="footer3-max-width thq-section-max-width">
          <div className="footer3-content">
            <div className="footer3-logo">
              <img
                alt={props.image1Alt}
                src={props.image1Src}
                className="footer3-image1"
              />
            </div>
            <div className="footer3-links">
              <Link href="/">
                <a className="footer3-link6 thq-body-small">{props.a1home}</a>
              </Link>
              <Link href="/about">
                <a className="footer3-link7 thq-body-small">{props.a2about}</a>
              </Link>
              <Link href="/news">
                <a className="footer3-link8 thq-body-small">
                  {props.a3Careers}
                </a>
              </Link>
              <Link href="/contact">
                <a className="footer3-link9 thq-body-small">
                  {props.a4Contact}
                </a>
              </Link>
              <Link href="/services">
                <a className="footer3-link10 thq-body-small">
                  {props.a5Gallery}
                </a>
              </Link>
            </div>
            <div className="footer3-social-links">
              <a
                href="https://www.facebook.com/enrichtechsolutions/"
                target="_blank"
                rel="noreferrer noopener"
                className="footer3-link14"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="footer3-icon1 thq-icon-small"
                >
                  <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/enrichtechuk"
                target="_blank"
                rel="noreferrer noopener"
                className="footer3-link15"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="footer3-icon3 thq-icon-small"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="thq-icon-small"
              >
                <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
              </svg>
            </div>
          </div>
          <div className="footer3-credits">
            <div className="thq-divider-horizontal"></div>
            <div className="footer3-row">
              <div className="footer3-footer-links">
                <span className="footer3-content3 thq-body-small">
                  © 2024 Enrich Tech Solutions
                </span>
                <span className="footer3-link11 thq-body-small">
                  {props.privacyLink}
                </span>
                <span className="footer3-link12 thq-body-small">
                  {props.termsLink}
                </span>
                <a
                  href="https://www.enrichtech.co.uk/sitemap.xml"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer3-link131 thq-body-small"
                >
                  {props.link13 ?? (
                    <Fragment>
                      <span className="footer3-link132">
                        <span>Sitemap</span>
                        <br></br>
                      </span>
                    </Fragment>
                  )}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .footer3-footer4 {
            gap: 80px;
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-layout-space-fiveunits);
            overflow: auto;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
            background-color: #d9d9d9;
          }
          .footer3-max-width {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .footer3-content {
            gap: 32px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .footer3-logo {
            gap: 24px;
            width: auto;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .footer3-image1 {
            height: var(--dl-layout-size-large);
            border-radius: var(--dl-layout-radius-round);
          }
          .footer3-links {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-items: flex-start;
          }
          .footer3-link6 {
            font-family: 'Inter';
            text-decoration: none;
          }
          .footer3-link7 {
            font-family: 'Inter';
            text-decoration: none;
          }
          .footer3-link8 {
            font-family: 'Inter';
            text-decoration: none;
          }
          .footer3-link9 {
            font-family: 'Inter';
            text-decoration: none;
          }
          .footer3-link10 {
            font-family: 'Inter';
            text-decoration: none;
          }
          .footer3-social-links {
            gap: var(--dl-layout-space-unit);
            display: flex;
            flex-grow: 1;
            align-items: center;
            justify-content: flex-end;
          }
          .footer3-link14 {
            display: contents;
          }
          .footer3-icon1 {
            text-decoration: none;
          }
          .footer3-link15 {
            display: contents;
          }
          .footer3-icon3 {
            text-decoration: none;
          }
          .footer3-credits {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .footer3-row {
            gap: 24px;
            display: flex;
            align-items: flex-start;
          }
          .footer3-footer-links {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
          }
          .footer3-content3 {
            font-family: 'Inter';
          }
          .footer3-link11 {
            font-family: 'Inter';
          }
          .footer3-link12 {
            font-family: 'Inter';
          }
          .footer3-link131 {
            font-family: 'Inter';
          }
          .footer3-link132 {
            display: inline-block;
          }
          .footer3root-class-name {
            width: 100%;
            margin-top: 0px;
            background-color: #d9d9d9;
          }

          @media (max-width: 1920px) {
            .footer3-footer4 {
              width: 100%;
            }
            .footer3-max-width {
              width: 100%;
            }
            .footer3-link6 {
              font-family: Inter;
              text-decoration: none;
            }
            .footer3-link7 {
              font-family: Inter;
              text-decoration: none;
            }
            .footer3-link8 {
              font-family: Inter;
              text-decoration: none;
            }
            .footer3-link9 {
              font-family: Inter;
              text-decoration: none;
            }
          }
          @media (max-width: 1366px) {
            .footer3-link10 {
              font-family: Inter;
              text-decoration: none;
            }
          }
          @media (max-width: 1200px) {
            .footer3-logo {
              width: auto;
            }
          }
          @media (max-width: 900px) {
            .footer3-content {
              flex-direction: column;
            }
            .footer3-row {
              flex-direction: column;
            }
            .footer3-footer-links {
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
          }
          @media (max-width: 480px) {
            .footer3-max-width {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .footer3-content {
              width: 100%;
            }
            .footer3-links {
              width: 100%;
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
          }
        `}
      </style>
    </>
  )
}

Footer3.defaultProps = {
  a4Contact: 'Contact',
  termsLink: 'Terms of Service',
  a3Careers: 'Careers',
  image1Alt: 'logo',
  privacyLink: 'Privacy Policy',
  a1home: 'Home',
  a5Gallery: 'Gallery',
  a2about: 'About',
  image1Src: '/enrich%20logo-03-200h.webp',
  rootClassName: '',
  link13: undefined,
}

Footer3.propTypes = {
  a4Contact: PropTypes.string,
  termsLink: PropTypes.string,
  a3Careers: PropTypes.string,
  image1Alt: PropTypes.string,
  privacyLink: PropTypes.string,
  a1home: PropTypes.string,
  a5Gallery: PropTypes.string,
  a2about: PropTypes.string,
  image1Src: PropTypes.string,
  rootClassName: PropTypes.string,
  link13: PropTypes.element,
}

export default Footer3
