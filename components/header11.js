import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import MobileMenu from './mobile-menu'
import NavigationLinks from './navigation-links'

const Header11 = (props) => {
  return (
    <>
      <header
        data-role="Header"
        className={`header11-header1 ${props.rootClassName} `}
      >
        <div data-role="BurgerMenu" className="header11-burger-menu">
          <MobileMenu rootClassName="mobile-menuroot-class-name1"></MobileMenu>
          <svg viewBox="0 0 1024 1024" className="header11-icon1">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <header data-role="Header" className="header11-header2">
          <img
            alt={props.enrichtech1}
            src={props.imageSrc4}
            className="header11-image"
          />
          <div className="header11-container1">
            <div className="header11-container2">
              <div className="header11-container3">
                <div className="header11-container4">
                  <React.Fragment>
                    <React.Fragment>
                      <header>
                        <a className="logo" href="#">
                          Enrich Tech Solutions
                        </a>
                      </header>
                    </React.Fragment>
                  </React.Fragment>
                </div>
              </div>
              <div className="header11-nav">
                <NavigationLinks
                  text="Home"
                  text1="Services"
                  text4="News"
                  rootClassName="rootClassName18"
                ></NavigationLinks>
              </div>
            </div>
          </div>
          <div className="header11-container5">
            <div className="header11-contact">
              <span className="header11-text1">info@enrichtech.co.uk</span>
              <span className="header11-text2">01858 437028</span>
            </div>
            <div className="header11-container6">
              <div className="header11-icon-group">
                <a
                  href="https://www.facebook.com/enrichtechsolutions/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="header11-icon3"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/enrichtechuk"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="header11-icon5"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </header>
      </header>
      <style jsx>
        {`
          .header11-header1 {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 100%;
            align-items: center;
            justify-content: space-between;
            background-color: #010c22;
          }
          .header11-burger-menu {
            display: none;
          }
          .header11-icon1 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
            display: none;
          }
          .header11-header2 {
            width: 100%;
            height: 200px;
            display: flex;
            position: sticky;
            max-width: 100%;
            align-items: center;
            justify-content: space-between;
            background-color: #010c22;
          }
          .header11-image {
            width: auto;
            height: 100%;
            object-fit: cover;
            padding-left: var(--dl-layout-space-unit);
          }
          .header11-container1 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .header11-container2 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .header11-container3 {
            display: none;
          }
          .header11-container4 {
            display: contents;
          }
          .header11-nav {
            display: flex;
          }
          .header11-container5 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            padding-right: var(--dl-layout-space-unit);
            flex-direction: column;
          }
          .header11-contact {
            height: auto;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-layout-space-unit);
            flex-direction: column;
            justify-content: flex-start;
          }
          .header11-text1 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            margin-bottom: var(--dl-layout-space-unit);
          }
          .header11-text2 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
          }
          .header11-container6 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .header11-icon3 {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
            margin-right: var(--dl-layout-space-oneandhalfunits);
            text-decoration: none;
          }
          .header11-icon5 {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
            margin-right: var(--dl-layout-space-oneandhalfunits);
            text-decoration: none;
          }

          @media (max-width: 2560px) {
            .header11-header1 {
              max-width: 100%;
            }
            .header11-header2 {
              max-width: 100%;
            }
          }
          @media (max-width: 1920px) {
            .header11-header2 {
              height: 175px;
              z-index: 1;
            }
            .header11root-class-name {
              z-index: 1;
              position: static;
            }
          }
          @media (max-width: 1366px) {
            .header11-header2 {
              height: 150px;
            }
          }
          @media (max-width: 1200px) {
            .header11-icon1 {
              display: flex;
            }
            .header11-header2 {
              height: 120px;
            }
            .header11-image {
              width: auto;
            }
          }
          @media (max-width: 900px) {
            .header11-header1 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .header11-burger-menu {
              flex: 1;
              display: flex;
              align-self: center;
              margin-left: var(--dl-layout-space-unit);
              margin-right: var(--dl-layout-space-unit);
              justify-content: center;
            }
            .header11-icon1 {
              fill: #d9d9d9;
              width: 25px;
              height: 33px;
              align-self: center;
              padding-left: 0px;
              flex-direction: row;
            }
            .header11-header2 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .header11-image {
              width: auto;
            }
            .header11-nav {
              display: none;
            }
          }
          @media (max-width: 480px) {
            .header11-header1 {
              width: 100%;
              max-width: auto;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: Unt;
              background-color: #010c22;
            }
            .header11-burger-menu {
              width: var(--dl-layout-size-small);
              align-self: center;
              margin-left: var(--dl-layout-space-unit);
              margin-right: var(--dl-layout-space-unit);
              padding-right: 0px;
              justify-content: center;
            }
            .header11-icon1 {
              fill: #d9d9d9;
              width: 27px;
              height: 40px;
              padding-right: 0px;
              justify-content: center;
            }
            .header11-header2 {
              width: 100%;
              height: var(--dl-layout-size-large);
              display: flex;
              max-width: auto;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              flex-direction: row;
              padding-bottom: 0px;
              background-color: #010c22;
            }
            .header11-image {
              width: auto;
              display: flex;
              padding-left: 0px;
              flex-direction: row;
              justify-content: center;
            }
            .header11-container5 {
              padding-right: var(--dl-layout-space-halfunit);
            }
            .header11-contact {
              height: auto;
              align-self: flex-end;
              align-items: flex-end;
              padding-top: var(--dl-layout-space-unit);
              margin-bottom: 0px;
            }
            .header11-text1 {
              color: var(--dl-color-theme-secondary1);
              font-size: 12px;
            }
            .header11-text2 {
              font-size: 17px;
            }
            .header11-container6 {
              opacity: 1;
            }
            .header11-icon-group {
              align-self: flex-end;
            }
          }
        `}
      </style>
    </>
  )
}

Header11.defaultProps = {
  rootClassName: '',
  enrichtech1: 'image',
  rootClassName1: '',
  imageSrc4: '/enrich%20logo-04-200h.webp',
}

Header11.propTypes = {
  rootClassName: PropTypes.string,
  enrichtech1: PropTypes.string,
  rootClassName1: PropTypes.string,
  imageSrc4: PropTypes.string,
}

export default Header11
