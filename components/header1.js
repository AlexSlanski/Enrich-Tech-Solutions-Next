import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import MobileMenu from './mobile-menu'
import NavigationLinks from './navigation-links'

const Header1 = (props) => {
  return (
    <>
      <header
        data-role="Header"
        className={`header1-header1 ${props.rootClassName} `}
      >
        <div data-role="BurgerMenu" className="header1-burger-menu">
          <MobileMenu rootClassName="mobile-menuroot-class-name"></MobileMenu>
          <svg viewBox="0 0 1024 1024" className="header1-icon1">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <header data-role="Header" className="header1-header2">
          <img
            alt={props.enrichtech1}
            src={props.imageSrc4}
            className="header1-image"
          />
          <div className="header1-container1">
            <div className="header1-container2">
              <div className="header1-container3">
                <div className="header1-container4">
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
              <div className="header1-nav">
                <NavigationLinks
                  text="Home"
                  text1="Services"
                  text4="News"
                  rootClassName="rootClassName17"
                ></NavigationLinks>
              </div>
            </div>
          </div>
          <div className="header1-container5">
            <div className="header1-contact">
              <span className="header1-text1">Contact Us</span>
              <span className="header1-text2">info@enrichtech.co.uk</span>
              <span className="header1-text3">01858 437028</span>
            </div>
            <div className="header1-container6">
              <div className="header1-icon-group">
                <a
                  href="https://www.facebook.com/enrichtechsolutions/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="header1-icon3"
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
                    className="header1-icon5"
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
          .header1-header1 {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 100%;
            align-items: center;
            justify-content: space-between;
            background-color: #010c22;
          }
          .header1-burger-menu {
            display: none;
          }
          .header1-icon1 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
            display: none;
          }
          .header1-header2 {
            width: 100%;
            height: 240px;
            display: flex;
            position: sticky;
            max-width: 100%;
            align-items: center;
            justify-content: space-between;
            background-color: #010c22;
          }
          .header1-image {
            width: auto;
            height: 100%;
            object-fit: cover;
            padding-left: var(--dl-layout-space-unit);
          }
          .header1-container1 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .header1-container2 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .header1-container3 {
            display: none;
          }
          .header1-container4 {
            display: contents;
          }
          .header1-nav {
            display: flex;
          }
          .header1-container5 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            padding-right: var(--dl-layout-space-unit);
            flex-direction: column;
          }
          .header1-contact {
            height: 89px;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-layout-space-unit);
            flex-direction: column;
            justify-content: flex-start;
          }
          .header1-text1 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-weight: 700;
            margin-bottom: var(--dl-layout-space-unit);
          }
          .header1-text2 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            margin-bottom: var(--dl-layout-space-unit);
          }
          .header1-text3 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
          }
          .header1-container6 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .header1-icon3 {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
            margin-right: var(--dl-layout-space-oneandhalfunits);
            text-decoration: none;
          }
          .header1-icon5 {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
            margin-right: var(--dl-layout-space-oneandhalfunits);
            text-decoration: none;
          }
          .header1root-class-name {
            width: 100%;
            max-width: auto;
            align-self: center;
            background-color: #010c22;
          }
          .header1root-class-name1 {
            width: 100%;
            align-self: center;
          }
          .header1root-class-name2 {
            width: 100%;
            align-self: center;
          }
          .header1root-class-name3 {
            width: 100%;
            align-self: center;
          }
          .header1root-class-name4 {
            width: 100%;
          }
          .header1root-class-name5 {
            align-self: center;
          }
          .header1root-class-name6 {
            width: 100%;
            max-width: auto;
            align-self: center;
            background-color: #010c23;
          }
          .header1root-class-name7 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
          }
          .header1root-class-name12 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
          }
          .header1root-class-name13 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
          }
          .header1root-class-name14 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
          }
          .header1root-class-name15 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
          }
          .header1root-class-name16 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
          }
          .header1root-class-name17 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
          }
          .header1root-class-name18 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
          }
          @media (max-width: 2560px) {
            .header1-header1 {
              max-width: 100%;
            }
            .header1-header2 {
              max-width: 100%;
            }
          }
          @media (max-width: 1200px) {
            .header1-icon1 {
              display: flex;
            }
            .header1-image {
              width: auto;
            }
          }
          @media (max-width: 900px) {
            .header1-header1 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .header1-burger-menu {
              flex: 1;
              display: flex;
              align-self: center;
              margin-left: var(--dl-layout-space-unit);
              margin-right: var(--dl-layout-space-unit);
              justify-content: center;
            }
            .header1-icon1 {
              fill: #d9d9d9;
              width: 25px;
              height: 33px;
              align-self: center;
              padding-left: 0px;
              flex-direction: row;
            }
            .header1-header2 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .header1-image {
              width: auto;
            }
            .header1-nav {
              display: none;
            }
          }
          @media (max-width: 480px) {
            .header1-header1 {
              width: 100%;
              max-width: auto;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: Unt;
              background-color: #010c22;
            }
            .header1-burger-menu {
              width: var(--dl-layout-size-small);
              align-self: center;
              margin-left: var(--dl-layout-space-unit);
              margin-right: var(--dl-layout-space-unit);
              padding-right: 0px;
              justify-content: center;
            }
            .header1-icon1 {
              fill: #d9d9d9;
              width: 27px;
              height: 40px;
              padding-right: 0px;
              justify-content: center;
            }
            .header1-header2 {
              width: 100%;
              height: var(--dl-layout-size-large);
              max-width: auto;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: Unt;
              background-color: #010c22;
            }
            .header1-image {
              width: auto;
              padding-left: 0px;
            }
            .header1-container5 {
              padding-right: var(--dl-layout-space-halfunit);
            }
            .header1-contact {
              height: 112px;
              align-self: flex-end;
              align-items: flex-end;
              padding-top: var(--dl-layout-space-unit);
              margin-bottom: 0px;
            }
            .header1-text2 {
              color: var(--dl-color-theme-secondary1);
              font-size: 12px;
            }
            .header1-text3 {
              font-size: 17px;
            }
            .header1-container6 {
              opacity: 1;
            }
            .header1-icon-group {
              align-self: flex-end;
            }
          }
        `}
      </style>
    </>
  )
}

Header1.defaultProps = {
  rootClassName1: '',
  imageSrc4: '/enrich%20logo-04-300h.webp',
  enrichtech1: 'image',
  rootClassName: '',
}

Header1.propTypes = {
  rootClassName1: PropTypes.string,
  imageSrc4: PropTypes.string,
  enrichtech1: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Header1
