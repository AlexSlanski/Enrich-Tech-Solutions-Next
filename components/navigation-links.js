import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const NavigationLinks = (props) => {
  return (
    <>
      <nav className={`navigation-links-nav ${props.rootClassName} `}>
        <Link href="/">
          <a className="navigation-links-link1">{props.text}</a>
        </Link>
        <Link href="/about">
          <a className="navigation-links-link2">{props.text2}</a>
        </Link>
        <Link href="/services">
          <a className="navigation-links-link3">{props.text1}</a>
        </Link>
        <Link href="/contact">
          <a className="navigation-links-link4">{props.text3}</a>
        </Link>
        <Link href="/news">
          <a className="navigation-links-link5">{props.text4}</a>
        </Link>
      </nav>
      <style jsx>
        {`
          .navigation-links-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navigation-links-link1 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            text-decoration: none;
          }
          .navigation-links-link2 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            margin-left: var(--dl-layout-space-twounits);
            text-decoration: none;
          }
          .navigation-links-link3 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            margin-left: var(--dl-layout-space-twounits);
            text-decoration: none;
          }
          .navigation-links-link4 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            margin-left: var(--dl-layout-space-twounits);
            text-decoration: none;
          }
          .navigation-links-link5 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            margin-left: var(--dl-layout-space-twounits);
            text-decoration: none;
          }

          .navigation-linksroot-class-name15 {
            top: -3px;
            fill: var(--dl-color-theme-secondary1);
            left: -102px;
            color: var(--dl-color-theme-secondary1);
            position: absolute;
            align-self: center;
          }
          .navigation-linksroot-class-name16 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
          }
          .navigation-linksroot-class-name17 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
          }
          .navigation-linksroot-class-name18 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
          }
          @media (max-width: 2560px) {
            .navigation-linksroot-class-name15 {
              top: -3px;
              left: -115px;
            }
          }
          @media (max-width: 1920px) {
            .navigation-linksroot-class-name16 {
              fill: var(--dl-color-theme-accent1);
              color: var(--dl-color-theme-accent1);
            }
          }
          @media (max-width: 1366px) {
            .navigation-linksroot-class-name16 {
              fill: var(--dl-color-theme-accent1);
              color: var(--dl-color-theme-accent1);
            }
          }
          @media (max-width: 1200px) {
            .navigation-linksroot-class-name16 {
              fill: var(--dl-color-theme-accent1);
              color: var(--dl-color-theme-accent1);
            }
          }
          @media (max-width: 900px) {
            .navigation-links-nav {
              align-items: flex-start;
              flex-direction: column;
            }
            .navigation-links-link1 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .navigation-links-link2 {
              margin-left: 0;
              margin-bottom: var(--dl-layout-space-unit);
            }
            .navigation-links-link3 {
              margin-left: 0;
              margin-bottom: var(--dl-layout-space-unit);
            }
            .navigation-links-link4 {
              margin-left: 0;
              margin-bottom: var(--dl-layout-space-unit);
            }
            .navigation-links-link5 {
              margin-left: 0;
              margin-bottom: var(--dl-layout-space-unit);
            }
            .navigation-linksroot-class-name15 {
              top: -13px;
              flex: 0;
              left: -69px;
              position: absolute;
            }
            .navigation-linksroot-class-name16 {
              fill: var(--dl-color-theme-accent1);
              color: var(--dl-color-theme-accent1);
            }
          }
          @media (max-width: 480px) {
            .navigation-linksroot-class-name16 {
              fill: var(--dl-color-theme-accent1);
              color: var(--dl-color-theme-accent1);
              width: var(--dl-layout-size-large);
              height: var(--dl-layout-size-xxlarge);
            }
          }
        `}
      </style>
    </>
  )
}

NavigationLinks.defaultProps = {
  text: 'Home',
  text3: 'Contact',
  text2: 'About',
  rootClassName: '',
  text4: 'News',
  text1: 'Services',
}

NavigationLinks.propTypes = {
  text: PropTypes.string,
  text3: PropTypes.string,
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
  text4: PropTypes.string,
  text1: PropTypes.string,
}

export default NavigationLinks
