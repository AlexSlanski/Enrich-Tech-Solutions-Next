import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Hero = (props) => {
  return (
    <>
      <div className={`hero-hero ${props.rootClassName} `}>
        <div
          data-thq="slider"
          data-autoplay="true"
          data-navigation="true"
          data-pagination="true"
          data-autoplay-delay="3700"
          data-disable-autoplay-on-interaction="false"
          className="hero-slider swiper"
        >
          <div
            data-thq="slider-wrapper"
            className="swiper-wrapper hero-slider-wrapper"
          >
            <div
              data-thq="slider-slide"
              className="hero-slider-slide1 swiper-slide"
            >
              <div className="hero-container10"></div>
              <h1 className="hero-hero-heading1 heading1">
                {props.heroHeading ?? (
                  <Fragment>
                    <span className="hero-text41">
                      Reliable Local Tech Services
                    </span>
                  </Fragment>
                )}
              </h1>
              <h2 className="hero-banner-heading1">
                {props.bannerHeading ?? (
                  <Fragment>
                    <span className="hero-text29">
                      Expert Tech Repairs and Support
                    </span>
                  </Fragment>
                )}
              </h2>
              <div className="hero-container11">
                <div className="hero-container12">
                  <a
                    href="mailto:info@enrichtech.co.uk?subject=Contact from website"
                    className="hero-hero-button110 button"
                  >
                    <span>
                      {props.heroButton12 ?? (
                        <Fragment>
                          <span className="hero-text31">REPAIR MY DEVICE</span>
                        </Fragment>
                      )}
                    </span>
                  </a>
                  <a
                    href="tel:01858437028"
                    className="hero-hero-button111 button"
                  >
                    <span>
                      {props.heroButton13 ?? (
                        <Fragment>
                          <span className="hero-text47">CALL US NOW</span>
                        </Fragment>
                      )}
                    </span>
                  </a>
                </div>
                <div className="hero-container13">
                  <a
                    href="mailto:info@enrichtech.co.uk?subject=Contact from website"
                    className="hero-hero-button112 button"
                  >
                    <span>
                      {props.heroButton14 ?? (
                        <Fragment>
                          <span className="hero-text37">EMAIL US</span>
                        </Fragment>
                      )}
                    </span>
                  </a>
                  <a
                    href="tel:01858437028"
                    className="hero-hero-button113 button"
                  >
                    <span>
                      {props.heroButton15 ?? (
                        <Fragment>
                          <span className="hero-text42">CALL US</span>
                        </Fragment>
                      )}
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div
              data-thq="slider-slide"
              className="hero-slider-slide2 swiper-slide"
            >
              <div className="hero-container14"></div>
              <h1 className="hero-hero-heading2 heading1">
                {props.heroHeading1 ?? (
                  <Fragment>
                    <span className="hero-text33">
                      Your Trusted Tech Partner
                    </span>
                  </Fragment>
                )}
              </h1>
              <h2 className="hero-banner-heading2">
                {props.bannerHeading1 ?? (
                  <Fragment>
                    <span className="hero-text36">
                      Expert Tech Repairs and Support
                    </span>
                  </Fragment>
                )}
              </h2>
              <div className="hero-container15">
                <a
                  href="mailto:info@enrichtech.co.uk?subject=Contact from website"
                  className="hero-hero-button114 button"
                >
                  <span>
                    {props.heroButton1 ?? (
                      <Fragment>
                        <span className="hero-text34">REPAIR MY DEVICE</span>
                      </Fragment>
                    )}
                  </span>
                </a>
                <a
                  href="tel:01858437028"
                  className="hero-hero-button115 button"
                >
                  <span>
                    {props.heroButton11 ?? (
                      <Fragment>
                        <span className="hero-text30">CALL US NOW</span>
                      </Fragment>
                    )}
                  </span>
                </a>
              </div>
              <div className="hero-container16">
                <div className="hero-container17">
                  <a
                    href="mailto:info@enrichtech.co.uk?subject=Contact from website"
                    className="hero-hero-button116 button"
                  >
                    <span>
                      {props.heroButton16 ?? (
                        <Fragment>
                          <span className="hero-text49">EMAIL US</span>
                        </Fragment>
                      )}
                    </span>
                  </a>
                  <a
                    href="tel:01858437028"
                    className="hero-hero-button117 button"
                  >
                    <span>
                      {props.heroButton17 ?? (
                        <Fragment>
                          <span className="hero-text28">CALL US</span>
                        </Fragment>
                      )}
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div
              data-thq="slider-slide"
              className="hero-slider-slide3 swiper-slide"
            >
              <div className="hero-container18">
                <div className="hero-container19"></div>
                <h1 className="hero-hero-heading3 heading1">
                  {props.heroHeading2 ?? (
                    <Fragment>
                      <span className="hero-text38">
                        {' '}
                        Repairs for all your Apple Devices
                      </span>
                    </Fragment>
                  )}
                </h1>
                <h2 className="hero-banner-heading3">
                  {props.bannerHeading2 ?? (
                    <Fragment>
                      <span className="hero-text46">
                        Expert Tech Repairs and Support
                      </span>
                    </Fragment>
                  )}
                </h2>
                <div className="hero-container20">
                  <a
                    href="mailto:info@enrichtech.co.uk?subject=Contact from website"
                    className="hero-hero-button118 button"
                  >
                    <span>
                      {props.heroButton18 ?? (
                        <Fragment>
                          <span className="hero-text26">REPAIR MY DEVICE</span>
                        </Fragment>
                      )}
                    </span>
                  </a>
                  <a
                    href="tel:01858437028"
                    className="hero-hero-button119 button"
                  >
                    <span>
                      {props.heroButton19 ?? (
                        <Fragment>
                          <span className="hero-text45">CALL US NOW</span>
                        </Fragment>
                      )}
                    </span>
                  </a>
                </div>
                <div className="hero-container21">
                  <a
                    href="mailto:info@enrichtech.co.uk?subject=Contact from website"
                    className="hero-hero-button120 button"
                  >
                    <span>
                      {props.heroButton110 ?? (
                        <Fragment>
                          <span className="hero-text40">EMAIL US</span>
                        </Fragment>
                      )}
                    </span>
                  </a>
                  <a
                    href="tel:01858437028"
                    className="hero-hero-button121 button"
                  >
                    <span>
                      {props.heroButton111 ?? (
                        <Fragment>
                          <span className="hero-text35">CALL US</span>
                        </Fragment>
                      )}
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div
              data-thq="slider-slide"
              className="hero-slider-slide4 swiper-slide"
            >
              <div className="hero-container22">
                <div className="hero-container23"></div>
                <h1 className="hero-hero-heading4 heading1">
                  {props.heroHeading3 ?? (
                    <Fragment>
                      <span className="hero-text39">
                        IT Solutions for your small business
                      </span>
                    </Fragment>
                  )}
                </h1>
                <h2 className="hero-banner-heading4">
                  {props.bannerHeading3 ?? (
                    <Fragment>
                      <span className="hero-text48">
                        Expert Tech Repairs and Support
                      </span>
                    </Fragment>
                  )}
                </h2>
                <div className="hero-container24">
                  <a
                    href="mailto:info@enrichtech.co.uk?subject=Contact from website"
                    className="hero-hero-button122 button"
                  >
                    <span>
                      {props.heroButton112 ?? (
                        <Fragment>
                          <span className="hero-text43">REPAIR MY DEVICE</span>
                        </Fragment>
                      )}
                    </span>
                  </a>
                  <a
                    href="tel:01858437028"
                    className="hero-hero-button123 button"
                  >
                    <span>
                      {props.heroButton113 ?? (
                        <Fragment>
                          <span className="hero-text27">CALL US NOW</span>
                        </Fragment>
                      )}
                    </span>
                  </a>
                </div>
                <div className="hero-container25">
                  <div className="hero-container26">
                    <a
                      href="mailto:info@enrichtech.co.uk?subject=Contact from website"
                      className="hero-hero-button124 button"
                    >
                      <span>
                        {props.heroButton114 ?? (
                          <Fragment>
                            <span className="hero-text32">EMAIL US</span>
                          </Fragment>
                        )}
                      </span>
                    </a>
                    <a
                      href="tel:01858437028"
                      className="hero-hero-button125 button"
                    >
                      <span>
                        {props.heroButton115 ?? (
                          <Fragment>
                            <span className="hero-text44">CALL US</span>
                          </Fragment>
                        )}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-thq="slider-pagination"
            className="hero-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
          >
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet swiper-pagination-bullet-active"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
          </div>
          <div
            data-thq="slider-button-next"
            className="swiper-button-next"
          ></div>
          <div
            data-thq="slider-button-prev"
            className="swiper-button-prev"
          ></div>
        </div>
      </div>
      <style jsx>
        {`
          .hero-hero {
            width: 100%;
            height: auto;
            position: relative;
            margin-top: 0px;
            min-height: auto;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .hero-slider {
            width: 100%;
            height: 750px;
            align-self: center;
            background-color: var(--dl-color-primary-enblue);
          }
          .hero-slider-slide1 {
            width: 100%;
            height: 750px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            background-size: cover;
            justify-content: flex-start;
            background-image: url('https://images.unsplash.com/photo-1614179924047-e1ab49a0a0cf?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQwfHxnYW1pbmd8ZW58MHx8fHwxNzE4Mjc5MDY5fDA&ixlib=rb-4.0.3&w=1500');
            background-repeat: no-repeat;
            background-position: center;
          }
          .hero-container10 {
            flex: 0 0 auto;
            width: 100%;
            height: 200px;
            display: grid;
          }
          .hero-hero-heading1 {
            color: var(--dl-color-gray-white);
            width: auto;
            height: auto;
            font-size: 69px;
            max-width: var(--dl-layout-size-maxwidth);
            align-self: center;
            text-align: center;
            font-family: 'Inter';
            line-height: 1.5;
            margin-bottom: var(--dl-layout-space-oneandhalfunits);
            text-transform: capitalize;
          }
          .hero-banner-heading1 {
            color: var(--dl-color-gray-white);
            font-size: 32px;
            align-self: center;
            font-style: italic;
            text-align: center;
            font-family: Inter;
            font-weight: 700;
            line-height: 1.15;
            text-transform: none;
            text-decoration: none;
          }
          .hero-container11 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-layout-space-sixunits);
            justify-content: center;
          }
          .hero-container12 {
            display: flex;
            align-self: center;
            align-items: flex-start;
          }
          .hero-hero-button110 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-size: 18px;
            align-self: center;
            margin-top: var(--dl-layout-space-twounits);
            text-align: left;
            transition: 0.3s;
            font-weight: bold;
            padding-top: 1.5rem;
            border-color: var(--dl-color-gray-white);
            border-width: 1px;
            margin-right: var(--dl-layout-space-oneandhalfunits);
            padding-left: 3rem;
            border-radius: 45px;
            padding-right: 3rem;
            padding-bottom: 1.5rem;
            text-decoration: none;
            background-color: rgb(1, 12, 34);
          }
          .hero-hero-button110:hover {
            color: var(--dl-color-gray-white);
            border-color: rgba(41, 20, 119, 0.9);
            background-color: var(--dl-color-primary1-blue100);
          }
          .hero-hero-button111 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-size: 18px;
            align-self: center;
            margin-top: var(--dl-layout-space-twounits);
            text-align: left;
            transition: 0.3s;
            font-weight: bold;
            margin-left: var(--dl-layout-space-oneandhalfunits);
            padding-top: 1.5rem;
            border-color: var(--dl-color-gray-white);
            border-width: 1px;
            padding-left: 3rem;
            border-radius: 45px;
            padding-right: 3rem;
            padding-bottom: 1.5rem;
            text-decoration: none;
            background-color: rgb(1, 12, 34);
          }
          .hero-hero-button111:hover {
            color: var(--dl-color-gray-white);
            border-color: rgba(41, 20, 119, 0.9);
            background-color: var(--dl-color-primary1-blue100);
          }
          .hero-container13 {
            display: none;
            align-self: center;
            align-items: flex-start;
          }
          .hero-hero-button112 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-size: 18px;
            align-self: center;
            margin-top: var(--dl-layout-space-twounits);
            text-align: left;
            transition: 0.3s;
            font-weight: bold;
            padding-top: 1.5rem;
            border-color: var(--dl-color-gray-white);
            border-width: 1px;
            margin-right: var(--dl-layout-space-oneandhalfunits);
            padding-left: 3rem;
            border-radius: 45px;
            padding-right: 3rem;
            padding-bottom: 1.5rem;
            text-decoration: none;
            background-color: transparent;
          }
          .hero-hero-button112:hover {
            color: var(--dl-color-gray-white);
            border-color: rgba(41, 20, 119, 0.9);
            background-color: var(--dl-color-primary1-blue100);
          }
          .hero-hero-button113 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-size: 18px;
            align-self: center;
            margin-top: var(--dl-layout-space-twounits);
            text-align: left;
            transition: 0.3s;
            font-weight: bold;
            margin-left: var(--dl-layout-space-oneandhalfunits);
            padding-top: 1.5rem;
            border-color: var(--dl-color-gray-white);
            border-width: 1px;
            padding-left: 3rem;
            border-radius: 45px;
            padding-right: 3rem;
            padding-bottom: 1.5rem;
            text-decoration: none;
            background-color: transparent;
          }
          .hero-hero-button113:hover {
            color: var(--dl-color-gray-white);
            border-color: rgba(41, 20, 119, 0.9);
            background-color: var(--dl-color-primary1-blue100);
          }
          .hero-slider-slide2 {
            width: 100%;
            height: 750px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            background-size: cover;
            justify-content: flex-start;
            background-image: url('https://images.unsplash.com/photo-1593062096033-9a26b09da705?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxtYWNib29rfGVufDB8fHx8MTcxNDczMDI1MXww&ixlib=rb-4.0.3&w=1500');
            background-repeat: no-repeat;
            background-position: center;
          }
          .hero-container14 {
            flex: 0 0 auto;
            width: 100%;
            height: 200px;
            display: flex;
            align-items: flex-start;
          }
          .hero-hero-heading2 {
            color: var(--dl-color-gray-white);
            width: auto;
            height: auto;
            font-size: 69px;
            max-width: var(--dl-layout-size-maxwidth);
            align-self: center;
            text-align: center;
            font-family: 'Inter';
            line-height: 1.5;
            margin-bottom: var(--dl-layout-space-oneandhalfunits);
            text-transform: capitalize;
          }
          .hero-banner-heading2 {
            color: var(--dl-color-gray-white);
            font-size: 32px;
            align-self: center;
            font-style: italic;
            text-align: center;
            font-family: Inter;
            font-weight: 700;
            line-height: 1.15;
            text-transform: none;
            text-decoration: none;
          }
          .hero-container15 {
            display: flex;
            align-self: center;
            align-items: flex-start;
          }
          .hero-hero-button114 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-size: 18px;
            align-self: center;
            margin-top: var(--dl-layout-space-twounits);
            text-align: left;
            transition: 0.3s;
            font-weight: bold;
            padding-top: 1.5rem;
            border-color: var(--dl-color-gray-white);
            border-width: 1px;
            margin-right: var(--dl-layout-space-oneandhalfunits);
            padding-left: 3rem;
            border-radius: 45px;
            padding-right: 3rem;
            padding-bottom: 1.5rem;
            text-decoration: none;
            background-color: rgb(1, 12, 34);
          }
          .hero-hero-button114:hover {
            color: var(--dl-color-gray-white);
            border-color: rgba(41, 20, 119, 0.9);
            background-color: var(--dl-color-primary1-blue100);
          }
          .hero-hero-button115 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-size: 18px;
            align-self: center;
            margin-top: var(--dl-layout-space-twounits);
            text-align: left;
            transition: 0.3s;
            font-weight: bold;
            margin-left: var(--dl-layout-space-oneandhalfunits);
            padding-top: 1.5rem;
            border-color: var(--dl-color-gray-white);
            border-width: 1px;
            padding-left: 3rem;
            border-radius: 45px;
            padding-right: 3rem;
            padding-bottom: 1.5rem;
            text-decoration: none;
            background-color: rgb(1, 12, 34);
          }
          .hero-hero-button115:hover {
            color: var(--dl-color-gray-white);
            border-color: rgba(41, 20, 119, 0.9);
            background-color: var(--dl-color-primary1-blue100);
          }
          .hero-container16 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: none;
            align-items: center;
            margin-bottom: var(--dl-layout-space-sixunits);
            justify-content: center;
          }
          .hero-container17 {
            display: flex;
            align-self: center;
            align-items: flex-start;
          }
          .hero-hero-button116 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-size: 18px;
            align-self: center;
            margin-top: var(--dl-layout-space-twounits);
            text-align: left;
            transition: 0.3s;
            font-weight: bold;
            padding-top: 1.5rem;
            border-color: var(--dl-color-gray-white);
            border-width: 1px;
            margin-right: var(--dl-layout-space-oneandhalfunits);
            padding-left: 3rem;
            border-radius: 45px;
            padding-right: 3rem;
            padding-bottom: 1.5rem;
            text-decoration: none;
            background-color: transparent;
          }
          .hero-hero-button116:hover {
            color: var(--dl-color-gray-white);
            border-color: rgba(41, 20, 119, 0.9);
            background-color: var(--dl-color-primary1-blue100);
          }
          .hero-hero-button117 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-size: 18px;
            align-self: center;
            margin-top: var(--dl-layout-space-twounits);
            text-align: left;
            transition: 0.3s;
            font-weight: bold;
            margin-left: var(--dl-layout-space-oneandhalfunits);
            padding-top: 1.5rem;
            border-color: var(--dl-color-gray-white);
            border-width: 1px;
            padding-left: 3rem;
            border-radius: 45px;
            padding-right: 3rem;
            padding-bottom: 1.5rem;
            text-decoration: none;
            background-color: transparent;
          }
          .hero-hero-button117:hover {
            color: var(--dl-color-gray-white);
            border-color: rgba(41, 20, 119, 0.9);
            background-color: var(--dl-color-primary1-blue100);
          }
          .hero-slider-slide3 {
            height: 750px;
            display: flex;
            background-size: cover;
            background-image: url('https://images.unsplash.com/photo-1595327656903-2f54e37ce09b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDU3fHx0ZWNofGVufDB8fHx8MTcxODI3ODY0M3ww&ixlib=rb-4.0.3&w=1500');
            background-position: center;
          }
          .hero-container18 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: column;
          }
          .hero-container19 {
            flex: 0 0 auto;
            width: 100%;
            height: 200px;
            display: flex;
            align-items: flex-start;
          }
          .hero-hero-heading3 {
            color: var(--dl-color-gray-white);
            width: auto;
            height: auto;
            font-size: 69px;
            max-width: var(--dl-layout-size-maxwidth);
            align-self: center;
            text-align: center;
            font-family: 'Inter';
            line-height: 1.5;
            margin-bottom: var(--dl-layout-space-oneandhalfunits);
            text-transform: capitalize;
          }
          .hero-banner-heading3 {
            color: var(--dl-color-gray-white);
            font-size: 32px;
            align-self: center;
            font-style: italic;
            text-align: center;
            font-family: Inter;
            font-weight: 700;
            line-height: 1.15;
            text-transform: none;
            text-decoration: none;
          }
          .hero-container20 {
            display: flex;
            align-self: center;
            align-items: flex-start;
          }
          .hero-hero-button118 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-size: 18px;
            align-self: center;
            margin-top: var(--dl-layout-space-twounits);
            text-align: left;
            transition: 0.3s;
            font-weight: bold;
            padding-top: 1.5rem;
            border-color: var(--dl-color-gray-white);
            border-width: 1px;
            margin-right: var(--dl-layout-space-oneandhalfunits);
            padding-left: 3rem;
            border-radius: 45px;
            padding-right: 3rem;
            padding-bottom: 1.5rem;
            text-decoration: none;
            background-color: rgb(1, 12, 34);
          }
          .hero-hero-button118:hover {
            color: var(--dl-color-gray-white);
            border-color: rgba(41, 20, 119, 0.9);
            background-color: var(--dl-color-primary1-blue100);
          }
          .hero-hero-button119 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-size: 18px;
            align-self: center;
            margin-top: var(--dl-layout-space-twounits);
            text-align: left;
            transition: 0.3s;
            font-weight: bold;
            margin-left: var(--dl-layout-space-oneandhalfunits);
            padding-top: 1.5rem;
            border-color: var(--dl-color-gray-white);
            border-width: 1px;
            padding-left: 3rem;
            border-radius: 45px;
            padding-right: 3rem;
            padding-bottom: 1.5rem;
            text-decoration: none;
            background-color: rgb(1, 12, 34);
          }
          .hero-hero-button119:hover {
            color: var(--dl-color-gray-white);
            border-color: rgba(41, 20, 119, 0.9);
            background-color: var(--dl-color-primary1-blue100);
          }
          .hero-container21 {
            display: none;
            align-self: center;
            align-items: flex-start;
          }
          .hero-hero-button120 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-size: 18px;
            align-self: center;
            margin-top: var(--dl-layout-space-twounits);
            text-align: left;
            transition: 0.3s;
            font-weight: bold;
            padding-top: 1.5rem;
            border-color: var(--dl-color-gray-white);
            border-width: 1px;
            margin-right: var(--dl-layout-space-oneandhalfunits);
            padding-left: 3rem;
            border-radius: 45px;
            padding-right: 3rem;
            padding-bottom: 1.5rem;
            text-decoration: none;
            background-color: transparent;
          }
          .hero-hero-button120:hover {
            color: var(--dl-color-gray-white);
            border-color: rgba(41, 20, 119, 0.9);
            background-color: var(--dl-color-primary1-blue100);
          }
          .hero-hero-button121 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-size: 18px;
            align-self: center;
            margin-top: var(--dl-layout-space-twounits);
            text-align: left;
            transition: 0.3s;
            font-weight: bold;
            margin-left: var(--dl-layout-space-oneandhalfunits);
            padding-top: 1.5rem;
            border-color: var(--dl-color-gray-white);
            border-width: 1px;
            padding-left: 3rem;
            border-radius: 45px;
            padding-right: 3rem;
            padding-bottom: 1.5rem;
            text-decoration: none;
            background-color: transparent;
          }
          .hero-hero-button121:hover {
            color: var(--dl-color-gray-white);
            border-color: rgba(41, 20, 119, 0.9);
            background-color: var(--dl-color-primary1-blue100);
          }
          .hero-slider-slide4 {
            height: 750px;
            display: flex;
            text-transform: capitalize;
            background-size: cover;
            background-image: url('https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHx0ZWNofGVufDB8fHx8MTcxODI3ODU5N3ww&ixlib=rb-4.0.3&w=1500');
            background-position: center;
          }
          .hero-container22 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: column;
          }
          .hero-container23 {
            flex: 0 0 auto;
            width: 100%;
            height: 200px;
            display: flex;
            align-items: flex-start;
          }
          .hero-hero-heading4 {
            color: var(--dl-color-gray-white);
            width: auto;
            height: auto;
            font-size: 69px;
            max-width: var(--dl-layout-size-maxwidth);
            align-self: center;
            text-align: center;
            font-family: 'Inter';
            line-height: 1.5;
            margin-bottom: var(--dl-layout-space-oneandhalfunits);
            text-transform: capitalize;
          }
          .hero-banner-heading4 {
            color: var(--dl-color-gray-white);
            font-size: 32px;
            align-self: center;
            font-style: italic;
            text-align: center;
            font-family: Inter;
            font-weight: 700;
            line-height: 1.15;
            text-transform: none;
            text-decoration: none;
          }
          .hero-container24 {
            display: flex;
            align-self: center;
            align-items: flex-start;
          }
          .hero-hero-button122 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-size: 18px;
            align-self: center;
            margin-top: var(--dl-layout-space-twounits);
            text-align: left;
            transition: 0.3s;
            font-weight: bold;
            padding-top: 1.5rem;
            border-color: var(--dl-color-gray-white);
            border-width: 1px;
            margin-right: var(--dl-layout-space-oneandhalfunits);
            padding-left: 3rem;
            border-radius: 45px;
            padding-right: 3rem;
            padding-bottom: 1.5rem;
            text-decoration: none;
            background-color: rgb(1, 12, 34);
          }
          .hero-hero-button122:hover {
            color: var(--dl-color-gray-white);
            border-color: rgba(41, 20, 119, 0.9);
            background-color: var(--dl-color-primary1-blue100);
          }
          .hero-hero-button123 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-size: 18px;
            align-self: center;
            margin-top: var(--dl-layout-space-twounits);
            text-align: left;
            transition: 0.3s;
            font-weight: bold;
            margin-left: var(--dl-layout-space-oneandhalfunits);
            padding-top: 1.5rem;
            border-color: var(--dl-color-gray-white);
            border-width: 1px;
            padding-left: 3rem;
            border-radius: 45px;
            padding-right: 3rem;
            padding-bottom: 1.5rem;
            text-decoration: none;
            background-color: rgb(1, 12, 34);
          }
          .hero-hero-button123:hover {
            color: var(--dl-color-gray-white);
            border-color: rgba(41, 20, 119, 0.9);
            background-color: var(--dl-color-primary1-blue100);
          }
          .hero-container25 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: none;
            align-items: center;
            margin-bottom: var(--dl-layout-space-sixunits);
            justify-content: center;
          }
          .hero-container26 {
            display: flex;
            align-self: center;
            align-items: flex-start;
          }
          .hero-hero-button124 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-size: 18px;
            align-self: center;
            margin-top: var(--dl-layout-space-twounits);
            text-align: left;
            transition: 0.3s;
            font-weight: bold;
            padding-top: 1.5rem;
            border-color: var(--dl-color-gray-white);
            border-width: 1px;
            margin-right: var(--dl-layout-space-oneandhalfunits);
            padding-left: 3rem;
            border-radius: 45px;
            padding-right: 3rem;
            padding-bottom: 1.5rem;
            text-decoration: none;
            background-color: transparent;
          }
          .hero-hero-button124:hover {
            color: var(--dl-color-gray-white);
            border-color: rgba(41, 20, 119, 0.9);
            background-color: var(--dl-color-primary1-blue100);
          }
          .hero-hero-button125 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-size: 18px;
            align-self: center;
            margin-top: var(--dl-layout-space-twounits);
            text-align: left;
            transition: 0.3s;
            font-weight: bold;
            margin-left: var(--dl-layout-space-oneandhalfunits);
            padding-top: 1.5rem;
            border-color: var(--dl-color-gray-white);
            border-width: 1px;
            padding-left: 3rem;
            border-radius: 45px;
            padding-right: 3rem;
            padding-bottom: 1.5rem;
            text-decoration: none;
            background-color: transparent;
          }
          .hero-hero-button125:hover {
            color: var(--dl-color-gray-white);
            border-color: rgba(41, 20, 119, 0.9);
            background-color: var(--dl-color-primary1-blue100);
          }
          .hero-slider-pagination {
            display: block;
          }
          .hero-text26 {
            display: inline-block;
          }
          .hero-text27 {
            display: inline-block;
          }
          .hero-text28 {
            display: inline-block;
          }
          .hero-text29 {
            display: inline-block;
          }
          .hero-text30 {
            display: inline-block;
          }
          .hero-text31 {
            display: inline-block;
          }
          .hero-text32 {
            display: inline-block;
          }
          .hero-text33 {
            display: inline-block;
          }
          .hero-text34 {
            display: inline-block;
          }
          .hero-text35 {
            display: inline-block;
          }
          .hero-text36 {
            display: inline-block;
          }
          .hero-text37 {
            display: inline-block;
          }
          .hero-text38 {
            display: inline-block;
          }
          .hero-text39 {
            display: inline-block;
          }
          .hero-text40 {
            display: inline-block;
          }
          .hero-text41 {
            display: inline-block;
          }
          .hero-text42 {
            display: inline-block;
          }
          .hero-text43 {
            display: inline-block;
          }
          .hero-text44 {
            display: inline-block;
          }
          .hero-text45 {
            display: inline-block;
          }
          .hero-text46 {
            display: inline-block;
          }
          .hero-text47 {
            display: inline-block;
          }
          .hero-text48 {
            display: inline-block;
          }
          .hero-text49 {
            display: inline-block;
          }
          @media (max-width: 2560px) {
            .hero-hero {
              height: 500px;
              min-height: auto;
            }
            .hero-slider {
              width: 100%;
              height: auto;
            }
            .hero-slider-slide1 {
              height: auto;
            }
            .hero-hero-heading1 {
              color: var(--dl-color-gray-white);
              height: auto;
              font-size: 69px;
              font-family: Inter;
              line-height: 1.5;
              text-transform: capitalize;
            }
            .hero-hero-button110 {
              align-self: center;
            }
            .hero-hero-button111 {
              align-self: center;
            }
            .hero-hero-button112 {
              align-self: center;
            }
            .hero-hero-button113 {
              align-self: center;
            }
            .hero-slider-slide2 {
              height: auto;
            }
            .hero-hero-heading2 {
              color: var(--dl-color-gray-white);
              height: auto;
              font-size: 69px;
              font-family: Inter;
              line-height: 1.5;
              text-transform: capitalize;
            }
            .hero-hero-button114 {
              align-self: center;
            }
            .hero-hero-button115 {
              align-self: center;
            }
            .hero-hero-button116 {
              align-self: center;
            }
            .hero-hero-button117 {
              align-self: center;
            }
            .hero-slider-slide3 {
              width: 100%;
              height: auto;
            }
            .hero-hero-heading3 {
              color: var(--dl-color-gray-white);
              height: auto;
              font-size: 69px;
              font-family: Inter;
              line-height: 1.5;
              text-transform: capitalize;
            }
            .hero-hero-button118 {
              align-self: center;
            }
            .hero-hero-button119 {
              align-self: center;
            }
            .hero-hero-button120 {
              align-self: center;
            }
            .hero-hero-button121 {
              align-self: center;
            }
            .hero-slider-slide4 {
              width: 100%;
              height: auto;
              text-transform: capitalize;
            }
            .hero-hero-heading4 {
              color: var(--dl-color-gray-white);
              height: auto;
              font-size: 69px;
              font-family: Inter;
              line-height: 1.5;
              text-transform: capitalize;
            }
            .hero-hero-button122 {
              align-self: center;
            }
            .hero-hero-button123 {
              align-self: center;
            }
            .hero-hero-button124 {
              align-self: center;
            }
            .hero-hero-button125 {
              align-self: center;
            }
          }
          @media (max-width: 1366px) {
            .hero-hero {
              width: 100%;
              height: 500px;
            }
            .hero-slider {
              width: 100%;
            }
            .hero-slider-slide1 {
              height: auto;
            }
            .hero-hero-heading1 {
              color: var(--dl-color-gray-white);
              width: 100%;
              font-size: 69px;
              font-family: Inter;
              line-height: 1.5;
            }
            .hero-hero-button110 {
              text-align: center;
            }
            .hero-hero-button111 {
              text-align: center;
            }
            .hero-hero-button112 {
              text-align: center;
            }
            .hero-hero-button113 {
              text-align: center;
            }
            .hero-slider-slide2 {
              height: auto;
            }
            .hero-hero-heading2 {
              color: var(--dl-color-gray-white);
              width: 100%;
              font-size: 69px;
              font-family: Inter;
              line-height: 1.5;
              text-transform: capitalize;
            }
            .hero-hero-button114 {
              text-align: center;
            }
            .hero-hero-button115 {
              text-align: center;
            }
            .hero-hero-button116 {
              text-align: center;
            }
            .hero-hero-button117 {
              text-align: center;
            }
            .hero-slider-slide3 {
              width: 100%;
              height: auto;
            }
            .hero-hero-heading3 {
              color: var(--dl-color-gray-white);
              width: 100%;
              font-size: 69px;
              font-family: Inter;
              line-height: 1.5;
              text-transform: capitalize;
            }
            .hero-hero-button118 {
              text-align: center;
            }
            .hero-hero-button119 {
              text-align: center;
            }
            .hero-hero-button120 {
              text-align: center;
            }
            .hero-hero-button121 {
              text-align: center;
            }
            .hero-slider-slide4 {
              width: 100%;
              height: auto;
            }
            .hero-hero-heading4 {
              color: var(--dl-color-gray-white);
              width: 100%;
              font-size: 69px;
              font-family: Inter;
              line-height: 1.5;
              text-transform: capitalize;
            }
            .hero-hero-button122 {
              text-align: center;
            }
            .hero-hero-button123 {
              text-align: center;
            }
            .hero-hero-button124 {
              text-align: center;
            }
            .hero-hero-button125 {
              text-align: center;
            }
          }
          @media (max-width: 1200px) {
            .hero-hero {
              height: 500px;
              flex-direction: column;
            }
            .hero-slider-slide1 {
              height: auto;
            }
            .hero-hero-heading1 {
              color: var(--dl-color-gray-white);
              width: 100%;
              font-size: 69px;
              text-align: center;
              font-family: Inter;
              line-height: 1.5;
              text-transform: capitalize;
            }
            .hero-hero-button110 {
              align-self: center;
            }
            .hero-hero-button111 {
              align-self: center;
            }
            .hero-hero-button112 {
              align-self: center;
            }
            .hero-hero-button113 {
              align-self: center;
            }
            .hero-slider-slide2 {
              height: auto;
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1593062096033-9a26b09da705?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxtYWNib29rfGVufDB8fHx8MTcxNDczMDI1MXww&ixlib=rb-4.0.3&w=1500');
            }
            .hero-hero-heading2 {
              color: var(--dl-color-gray-white);
              width: 100%;
              font-size: 69px;
              text-align: center;
              font-family: Inter;
              line-height: 1.5;
              text-transform: capitalize;
            }
            .hero-hero-button114 {
              align-self: center;
            }
            .hero-hero-button115 {
              align-self: center;
            }
            .hero-hero-button116 {
              align-self: center;
            }
            .hero-hero-button117 {
              align-self: center;
            }
            .hero-slider-slide3 {
              width: 100%;
              height: auto;
            }
            .hero-hero-heading3 {
              color: var(--dl-color-gray-white);
              width: 100%;
              font-size: 69px;
              text-align: center;
              font-family: Inter;
              line-height: 1.5;
              text-transform: capitalize;
            }
            .hero-hero-button118 {
              align-self: center;
            }
            .hero-hero-button119 {
              align-self: center;
            }
            .hero-hero-button120 {
              align-self: center;
            }
            .hero-hero-button121 {
              align-self: center;
            }
            .hero-slider-slide4 {
              width: 100%;
              height: auto;
            }
            .hero-hero-heading4 {
              color: var(--dl-color-gray-white);
              width: 100%;
              font-size: 69px;
              text-align: center;
              font-family: Inter;
              line-height: 1.5;
              text-transform: capitalize;
            }
            .hero-hero-button122 {
              align-self: center;
            }
            .hero-hero-button123 {
              align-self: center;
            }
            .hero-hero-button124 {
              align-self: center;
            }
            .hero-hero-button125 {
              align-self: center;
            }
          }
          @media (max-width: 900px) {
            .hero-hero {
              height: 500px;
            }
            .hero-slider {
              height: 550px;
            }
            .hero-slider-slide1 {
              height: auto;
            }
            .hero-container10 {
              height: 200px;
            }
            .hero-hero-heading1 {
              color: var(--dl-color-gray-white);
              width: 100%;
              font-size: 22px;
              font-family: Inter;
              line-height: 1.5;
              text-transform: capitalize;
            }
            .hero-slider-slide2 {
              height: auto;
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1593062096033-9a26b09da705?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxtYWNib29rfGVufDB8fHx8MTcxNDczMDI1MXww&ixlib=rb-4.0.3&w=1500');
            }
            .hero-container14 {
              height: 100px;
            }
            .hero-hero-heading2 {
              width: 100%;
              text-transform: capitalize;
            }
            .hero-slider-slide3 {
              width: 100%;
              height: auto;
            }
            .hero-container19 {
              height: 100px;
            }
            .hero-hero-heading3 {
              width: 100%;
              text-transform: capitalize;
            }
            .hero-slider-slide4 {
              width: 100%;
              height: auto;
            }
            .hero-container23 {
              height: 100px;
            }
            .hero-hero-heading4 {
              width: 100%;
              text-transform: capitalize;
            }
          }
          @media (max-width: 480px) {
            .hero-hero {
              width: 100%;
              height: auto;
              margin-top: 0px;
              min-height: auto;
            }
            .hero-slider {
              height: 300px;
              display: flex;
            }
            .hero-slider-wrapper {
              position: relative;
            }
            .hero-slider-slide1 {
              width: 100%;
              height: auto;
            }
            .hero-container10 {
              width: auto;
              height: 55px;
            }
            .hero-hero-heading1 {
              color: var(--dl-color-gray-white);
              width: 100%;
              height: auto;
              font-size: 24px;
              max-width: auto;
              font-family: Inter;
              line-height: 1.5;
            }
            .hero-banner-heading1 {
              font-size: 20px;
              font-style: italic;
              font-weight: 300;
            }
            .hero-container11 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .hero-container12 {
              flex: 1;
              align-self: center;
              align-items: center;
              flex-direction: row-reverse;
              justify-content: center;
            }
            .hero-hero-button110 {
              margin: 0px;
              padding: 1.5rem;
              font-size: 0.75rem;
            }
            .hero-hero-button111 {
              color: var(--dl-color-theme-secondary1);
              margin: 0px;
              padding: 1.5rem;
              font-size: 0.75rem;
              font-weight: bold;
              padding-right: 1.5rem;
              text-decoration: none;
              background-color: rgb(1, 12, 34);
            }
            .hero-container13 {
              flex: 1;
              align-self: center;
              align-items: center;
              flex-direction: row-reverse;
              justify-content: center;
            }
            .hero-hero-button112 {
              margin: 0px;
              padding: 1.5rem;
              font-size: 0.75rem;
            }
            .hero-hero-button113 {
              color: var(--dl-color-theme-secondary1);
              margin: 0px;
              padding: 1.5rem;
              font-size: 0.75rem;
              font-weight: bold;
              padding-right: 1.5rem;
              text-decoration: none;
              background-color: transparent;
            }
            .hero-slider-slide2 {
              width: 100%;
              height: auto;
            }
            .hero-container14 {
              width: auto;
              height: 55px;
            }
            .hero-hero-heading2 {
              color: var(--dl-color-gray-white);
              width: 100%;
              height: auto;
              font-size: 22px;
              max-width: auto;
              font-family: Inter;
              line-height: 1.5;
              text-transform: capitalize;
            }
            .hero-banner-heading2 {
              font-size: 20px;
              font-style: italic;
              font-weight: 300;
            }
            .hero-container15 {
              flex: 1;
              align-self: center;
              align-items: center;
              flex-direction: row-reverse;
              justify-content: center;
            }
            .hero-hero-button114 {
              margin: 0px;
              padding: 1.5rem;
              font-size: 0.75rem;
            }
            .hero-hero-button115 {
              color: var(--dl-color-theme-secondary1);
              margin: 0px;
              padding: 1.5rem;
              font-size: 0.75rem;
              font-weight: bold;
              padding-right: 1.5rem;
              text-decoration: none;
              background-color: rgb(1, 12, 34);
            }
            .hero-container16 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .hero-container17 {
              flex: 1;
              align-self: center;
              align-items: center;
              flex-direction: row-reverse;
              justify-content: center;
            }
            .hero-hero-button116 {
              margin: 0px;
              padding: 1.5rem;
              font-size: 0.75rem;
            }
            .hero-hero-button117 {
              color: var(--dl-color-theme-secondary1);
              margin: 0px;
              padding: 1.5rem;
              font-size: 0.75rem;
              font-weight: bold;
              padding-right: 1.5rem;
              text-decoration: none;
              background-color: transparent;
            }
            .hero-slider-slide3 {
              width: 100%;
              height: auto;
            }
            .hero-container19 {
              height: 55px;
            }
            .hero-hero-heading3 {
              color: var(--dl-color-gray-white);
              width: 100%;
              height: auto;
              font-size: 22px;
              max-width: auto;
              font-family: Inter;
              line-height: 1.5;
              text-transform: capitalize;
            }
            .hero-banner-heading3 {
              font-size: 20px;
              font-style: italic;
              font-weight: 300;
            }
            .hero-container20 {
              flex: 1;
              align-self: center;
              align-items: center;
              flex-direction: row-reverse;
              justify-content: center;
            }
            .hero-hero-button118 {
              margin: 0px;
              padding: 1.5rem;
              font-size: 0.75rem;
            }
            .hero-hero-button119 {
              color: var(--dl-color-theme-secondary1);
              margin: 0px;
              padding: 1.5rem;
              font-size: 0.75rem;
              font-weight: bold;
              padding-right: 1.5rem;
              text-decoration: none;
              background-color: rgb(1, 12, 34);
            }
            .hero-container21 {
              flex: 1;
              align-self: center;
              align-items: center;
              flex-direction: row-reverse;
              justify-content: center;
            }
            .hero-hero-button120 {
              margin: 0px;
              padding: 1.5rem;
              font-size: 0.75rem;
            }
            .hero-hero-button121 {
              color: var(--dl-color-theme-secondary1);
              margin: 0px;
              padding: 1.5rem;
              font-size: 0.75rem;
              font-weight: bold;
              padding-right: 1.5rem;
              text-decoration: none;
              background-color: transparent;
            }
            .hero-slider-slide4 {
              width: 100%;
              height: auto;
            }
            .hero-container23 {
              height: 55px;
            }
            .hero-hero-heading4 {
              color: var(--dl-color-gray-white);
              width: 100%;
              height: auto;
              font-size: 22px;
              max-width: auto;
              font-family: Inter;
              line-height: 1.5;
              text-transform: capitalize;
            }
            .hero-banner-heading4 {
              font-size: 20px;
              font-style: italic;
              font-weight: 300;
            }
            .hero-container24 {
              flex: 1;
              align-self: center;
              align-items: center;
              flex-direction: row-reverse;
              justify-content: center;
            }
            .hero-hero-button122 {
              margin: 0px;
              padding: 1.5rem;
              font-size: 0.75rem;
            }
            .hero-hero-button123 {
              color: var(--dl-color-theme-secondary1);
              margin: 0px;
              padding: 1.5rem;
              font-size: 0.75rem;
              font-weight: bold;
              padding-right: 1.5rem;
              text-decoration: none;
              background-color: rgb(1, 12, 34);
            }
            .hero-container25 {
              margin-bottom: var(--dl-layout-space-unit);
            }
            .hero-container26 {
              flex: 1;
              align-self: center;
              align-items: center;
              flex-direction: row-reverse;
              justify-content: center;
            }
            .hero-hero-button124 {
              margin: 0px;
              padding: 1.5rem;
              font-size: 0.75rem;
            }
            .hero-hero-button125 {
              color: var(--dl-color-theme-secondary1);
              margin: 0px;
              padding: 1.5rem;
              font-size: 0.75rem;
              font-weight: bold;
              padding-right: 1.5rem;
              text-decoration: none;
              background-color: transparent;
            }
          }
        `}
      </style>
    </>
  )
}

Hero.defaultProps = {
  heroButton18: undefined,
  heroButton113: undefined,
  heroButton17: undefined,
  bannerHeading: undefined,
  heroButton11: undefined,
  heroButton12: undefined,
  heroButton114: undefined,
  heroHeading1: undefined,
  heroButton1: undefined,
  heroButton111: undefined,
  bannerHeading1: undefined,
  heroButton14: undefined,
  heroHeading2: undefined,
  heroHeading3: undefined,
  heroButton110: undefined,
  heroHeading: undefined,
  heroButton15: undefined,
  rootClassName: '',
  heroButton112: undefined,
  heroButton115: undefined,
  heroButton19: undefined,
  bannerHeading2: undefined,
  heroButton13: undefined,
  bannerHeading3: undefined,
  heroButton16: undefined,
}

Hero.propTypes = {
  heroButton18: PropTypes.element,
  heroButton113: PropTypes.element,
  heroButton17: PropTypes.element,
  bannerHeading: PropTypes.element,
  heroButton11: PropTypes.element,
  heroButton12: PropTypes.element,
  heroButton114: PropTypes.element,
  heroHeading1: PropTypes.element,
  heroButton1: PropTypes.element,
  heroButton111: PropTypes.element,
  bannerHeading1: PropTypes.element,
  heroButton14: PropTypes.element,
  heroHeading2: PropTypes.element,
  heroHeading3: PropTypes.element,
  heroButton110: PropTypes.element,
  heroHeading: PropTypes.element,
  heroButton15: PropTypes.element,
  rootClassName: PropTypes.string,
  heroButton112: PropTypes.element,
  heroButton115: PropTypes.element,
  heroButton19: PropTypes.element,
  bannerHeading2: PropTypes.element,
  heroButton13: PropTypes.element,
  bannerHeading3: PropTypes.element,
  heroButton16: PropTypes.element,
}

export default Hero
