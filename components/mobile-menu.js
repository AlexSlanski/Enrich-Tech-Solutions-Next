import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import NavigationLinks from './navigation-links'

const MobileMenu = (props) => {
  return (
    <>
      <div
        data-role="MobileMenu"
        className={`mobile-menu-mobile-menu ${props.rootClassName} `}
      >
        <div className="mobile-menu-nav">
          <div className="mobile-menu-container">
            <img
              alt={props.enrichtech1}
              src={props.imageSrc1}
              className="mobile-menu-image"
            />
            <div
              data-role="CloseMobileMenu"
              className="mobile-menu-close-mobile-menu"
            >
              <svg viewBox="0 0 1024 1024" className="mobile-menu-icon1">
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </svg>
            </div>
          </div>
          <NavigationLinks rootClassName="rootClassName16"></NavigationLinks>
        </div>
      </div>
      <style jsx>
        {`
          .mobile-menu-mobile-menu {
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: relative;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .mobile-menu-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .mobile-menu-container {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-layout-space-threeunits);
            justify-content: space-between;
          }
          .mobile-menu-image {
            width: var(--dl-layout-size-medium);
            height: var(--dl-layout-size-medium);
          }
          .mobile-menu-close-mobile-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .mobile-menu-icon1 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .mobile-menuroot-class-name {
            top: 0px;
            left: 0px;
            position: absolute;
          }
          .mobile-menuroot-class-name1 {
            top: 0px;
            left: 0px;
            position: absolute;
          }
          @media (max-width: 900px) {
            .mobile-menu-mobile-menu {
              height: auto;
              display: flex;
              background-color: var(--dl-color-primary-enblue);
            }
            .mobile-menu-icon1 {
              fill: var(--dl-color-theme-secondary1);
            }
            .mobile-menuroot-class-name {
              height: 400px;
              display: none;
              background-color: var(--dl-color-primary-enblue);
            }
            .mobile-menuroot-class-name1 {
              display: none;
              background-color: var(--dl-color-primary-enblue);
            }
          }
          @media (max-width: 480px) {
            .mobile-menu-mobile-menu {
              width: 100%;
              height: 100%;
              padding: 16px;
              background-color: var(--dl-color-primary-enblue);
            }
            .mobile-menu-nav {
              background-color: var(--dl-color-primary-enblue);
            }
            .mobile-menu-image {
              width: var(--dl-layout-size-small);
              height: var(--dl-layout-size-small);
            }
            .mobile-menu-icon1 {
              fill: var(--dl-color-theme-secondary1);
            }
            .mobile-menuroot-class-name {
              fill: var(--dl-color-theme-secondary1);
              color: var(--dl-color-theme-secondary1);
              height: 400px;
              display: none;
            }
            .mobile-menuroot-class-name1 {
              fill: var(--dl-color-theme-secondary1);
              color: var(--dl-color-theme-secondary1);
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}

MobileMenu.defaultProps = {
  rootClassName: '',
  imageSrc1: '/enrichlogo2-200h.webp',
  enrichtech1: 'image',
}

MobileMenu.propTypes = {
  rootClassName: PropTypes.string,
  imageSrc1: PropTypes.string,
  enrichtech1: PropTypes.string,
}

export default MobileMenu
