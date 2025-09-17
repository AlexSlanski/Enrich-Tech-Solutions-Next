import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Hero1 = (props) => {
  return (
    <>
      <div className={`hero1-header13 ${props.rootClassName} `}>
        <video
          src={props.video1Src}
          loop="true"
          muted="true"
          poster={props.video1Poster}
          autoPlay="true"
          className="hero1-video"
        ></video>
        <div className="hero1-content thq-section-padding">
          <div className="hero1-max-width">
            <div className="hero1-column1">
              <h1 className="hero1-text10 thq-heading-1">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="hero1-text15">
                      Your one-stop shop for expert device repair, IT support,
                      and technology services.
                    </span>
                  </Fragment>
                )}
              </h1>
            </div>
            <div className="hero1-column2">
              <p className="hero1-text11 thq-body-large">
                {props.content1 ?? (
                  <Fragment>
                    <span className="hero1-text16">
                      <br className="hero1-text17"></br>
                      <span className="hero1-text18">
                        We believe
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="hero1-text19">
                        technology
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="hero1-text20">
                        should empower, Not Frustrate
                      </span>
                      <span className="hero1-text21">  </span>
                      <br className="hero1-text22"></br>
                      <span className="hero1-text23"> </span>
                    </span>
                  </Fragment>
                )}
              </p>
              <div className="hero1-actions">
                <Link href="/contact">
                  <a className="hero1-link1 thq-button-filled">
                    <span className="hero1-text12 thq-body-small">
                      {props.action1 ?? (
                        <Fragment>
                          <span className="hero1-text14">Repair my device</span>
                        </Fragment>
                      )}
                    </span>
                  </a>
                </Link>
                <button className="hero1-button2 thq-button-outline">
                  <Link href="/about">
                    <a className="hero1-link2 thq-body-small">
                      {props.action2 ?? (
                        <Fragment>
                          <span className="hero1-text24">Learn More</span>
                        </Fragment>
                      )}
                    </a>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .hero1-header13 {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .hero1-video {
            width: 100%;
            height: auto;
            max-height: 850px;
            min-height: 450px;
            object-fit: cover;
          }
          .hero1-content {
            top: 0px;
            left: 0px;
            right: 0px;
            bottom: 0px;
            margin: auto;
            display: flex;
            position: absolute;
            align-self: center;
            padding-top: 0px;
            padding-bottom: 0px;
            justify-content: center;
          }
          .hero1-max-width {
            width: auto;
            height: auto;
            display: grid;
            max-width: auto;
            align-self: center;
            grid-template-columns: 1fr 1fr;
          }
          .hero1-column1 {
            flex: 1;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .hero1-text10 {
            width: 817px;
            height: 145px;
            text-align: center;
            font-family: 'Inter';
          }
          .hero1-column2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: 792px;
            display: flex;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .hero1-text11 {
            width: 678px;
            align-self: flex-end;
            text-align: right;
            font-family: 'Inter';
          }
          .hero1-actions {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: flex-end;
          }
          .hero1-link1 {
            border-color: var(--dl-color-theme-primary1);
            border-width: 3px;
            text-decoration: none;
          }
          .hero1-text12 {
            font-family: 'Inter';
          }
          .hero1-button2 {
            border-width: 3px;
          }
          .hero1-link2 {
            font-family: 'Inter';
            text-decoration: none;
          }
          .hero1-text14 {
            display: inline-block;
          }
          .hero1-text15 {
            color: var(--dl-color-theme-secondary1);
            display: inline-block;
            font-size: 35px;
          }
          .hero1-text16 {
            display: inline-block;
            font-size: 24px;
          }
          .hero1-text18 {
            color: var(--dl-color-theme-neutral-light);
            font-style: italic;
            font-weight: 400;
          }
          .hero1-text19 {
            color: var(--dl-color-theme-neutral-light);
            font-style: italic;
            font-weight: 400;
          }
          .hero1-text20 {
            color: var(--dl-color-theme-neutral-light);
            font-style: italic;
            font-weight: 400;
          }
          .hero1-text21 {
            color: var(--dl-color-theme-neutral-light);
            font-style: italic;
            font-weight: 100;
          }
          .hero1-text23 {
            color: var(--dl-color-theme-neutral-light);
          }
          .hero1-text24 {
            display: inline-block;
          }
          .hero1root-class-name {
            height: 700px;
          }
          @media (max-width: 1920px) {
            .hero1-video {
              height: 700;
              min-height: 450px;
            }
            .hero1-content {
              top: 0px;
              left: 0px;
              right: 0px;
              width: auto;
              bottom: 0px;
              margin: auto;
              padding-top: 21px;
            }
            .hero1-max-width {
              width: auto;
              height: auto;
              display: grid;
              max-width: auto;
              grid-template-columns: 1fr 1fr;
            }
            .hero1-text10 {
              width: 739px;
              height: auto;
              text-align: left;
            }
            .hero1-column2 {
              width: auto;
            }
            .hero1-text11 {
              width: auto;
              height: auto;
              align-self: flex-end;
              text-align: right;
            }
            .hero1-actions {
              width: 100%;
              flex-direction: row;
              justify-content: flex-end;
            }
            .hero1-text15 {
              color: var(--dl-color-theme-secondary1);
              font-size: 35px;
            }
            .hero1-text16 {
              font-size: 21px;
            }
            .hero1-text17 {
              font-style: italic;
              font-weight: 100;
            }
            .hero1-text18 {
              font-style: italic;
              font-weight: 400;
            }
            .hero1-text19 {
              font-style: italic;
              font-weight: 400;
            }
            .hero1-text20 {
              font-style: italic;
              font-weight: 400;
            }
            .hero1-text21 {
              font-style: italic;
              font-weight: 100;
            }
            .hero1-text22 {
              font-style: italic;
              font-weight: 100;
            }
          }
          @media (max-width: 1366px) {
            .hero1-video {
              height: 500px;
            }
            .hero1-content {
              width: 100%;
              padding: var(--dl-layout-space-halfunit);
              position: absolute;
              padding-left: 8px;
            }
            .hero1-max-width {
              width: auto;
              height: auto;
              max-width: auto;
              margin-left: var(--dl-layout-space-fourunits);
              margin-right: var(--dl-layout-space-fourunits);
              grid-template-columns: 1fr 1fr;
            }
            .hero1-column1 {
              margin-left: var(--dl-layout-space-oneandhalfunits);
            }
            .hero1-text10 {
              width: auto;
              height: auto;
              text-align: left;
              margin-bottom: 0px;
              padding-bottom: 0px;
            }
            .hero1-text11 {
              width: 578px;
              height: auto;
              text-align: right;
            }
            .hero1-text15 {
              color: var(--dl-color-theme-secondary1);
              font-size: 25px;
            }
            .hero1-text16 {
              font-size: 21px;
            }
            .hero1-text17 {
              font-style: italic;
              font-weight: 100;
            }
            .hero1-text18 {
              font-style: italic;
              font-weight: 400;
            }
            .hero1-text19 {
              font-style: italic;
              font-weight: 400;
            }
            .hero1-text20 {
              font-style: italic;
              font-weight: 400;
            }
            .hero1-text21 {
              font-style: italic;
              font-weight: 100;
            }
            .hero1-text22 {
              font-style: italic;
              font-weight: 100;
            }
            .hero1root-class-name {
              height: auto;
            }
          }
          @media (max-width: 1200px) {
            .hero1-max-width {
              width: auto;
              height: auto;
              max-width: auto;
              margin-left: 0px;
              margin-right: 0px;
              grid-template-columns: 1fr 1fr;
            }
            .hero1-text10 {
              width: 100%;
              height: auto;
              font-size: 30px;
              text-align: left;
            }
            .hero1-column2 {
              width: 474px;
              height: 162px;
              align-self: flex-end;
              margin-top: 13px;
            }
            .hero1-text11 {
              width: auto;
              text-align: right;
            }
            .hero1-actions {
              align-self: center;
              justify-content: center;
            }
            .hero1-text15 {
              color: var(--dl-color-theme-secondary1);
              font-size: 30px;
            }
            .hero1-text16 {
              font-size: 18px;
            }
            .hero1-text17 {
              font-style: italic;
              font-weight: 100;
            }
            .hero1-text18 {
              font-style: italic;
              font-weight: 400;
            }
            .hero1-text19 {
              font-style: italic;
              font-weight: 400;
            }
            .hero1-text20 {
              font-style: italic;
              font-weight: 400;
            }
            .hero1-text21 {
              font-style: italic;
              font-weight: 100;
            }
            .hero1-text22 {
              font-style: italic;
              font-weight: 100;
            }
            .hero1root-class-name {
              height: auto;
            }
          }
          @media (max-width: 991px) {
            .hero1-video {
              min-height: 580px;
            }
          }
          @media (max-width: 900px) {
            .hero1-video {
              height: 450px;
              min-height: 350px;
            }
            .hero1-content {
              left: 0px;
              right: 0px;
              margin: auto;
            }
            .hero1-max-width {
              width: auto;
              height: auto;
              margin-left: var(--dl-layout-space-unit);
              margin-right: var(--dl-layout-space-unit);
              grid-template-rows: 1fr 1fr;
              grid-template-columns: 1fr;
            }
            .hero1-column1 {
              margin-left: 0px;
            }
            .hero1-text10 {
              width: auto;
              height: auto;
              align-self: center;
              text-align: center;
            }
            .hero1-column2 {
              width: auto;
              height: auto;
              align-self: flex-end;
              align-items: flex-end;
            }
            .hero1-text11 {
              fill: transparent;
              color: transparent;
              width: auto;
              align-self: stretch;
              text-align: center;
            }
            .hero1-actions {
              flex-direction: row;
            }
            .hero1-button2 {
              fill: var(--dl-color-theme-neutral-light);
              color: var(--dl-color-theme-neutral-light);
              background-color: var(--dl-color-theme-primary1);
            }
            .hero1-text14 {
              font-size: 14px;
            }
            .hero1-text15 {
              color: var(--dl-color-theme-secondary1);
            }
            .hero1-text24 {
              font-size: 14px;
            }
          }
          @media (max-width: 767px) {
            .hero1-video {
              min-height: 400px;
            }
            .hero1-max-width {
              flex-direction: column;
            }
            .hero1-text10 {
              text-align: center;
            }
            .hero1-text11 {
              text-align: center;
            }
            .hero1-actions {
              width: 100%;
              justify-content: center;
            }
          }
          @media (max-width: 480px) {
            .hero1-header13 {
              display: flex;
            }
            .hero1-video {
              height: 500px;
              min-height: 400px;
            }
            .hero1-content {
              margin: 0px;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
            }
            .hero1-max-width {
              width: auto;
              height: auto;
              max-width: auto;
              align-self: center;
              align-items: center;
              margin-left: 0px;
              margin-right: 0px;
              flex-direction: column;
              justify-content: center;
              grid-template-columns: 1fr;
            }
            .hero1-column1 {
              height: auto;
              flex-direction: row;
            }
            .hero1-text10 {
              width: auto;
              height: auto;
              font-size: 20px;
              text-align: center;
              padding-left: 0px;
            }
            .hero1-column2 {
              align-self: center;
            }
            .hero1-text11 {
              width: auto;
              display: grid;
              align-self: center;
              text-align: center;
            }
            .hero1-actions {
              width: auto;
            }
            .hero1-link1 {
              font-size: 14px;
              text-align: center;
            }
            .hero1-text12 {
              fill: var(--dl-color-theme-neutral-light);
              color: var(--dl-color-theme-neutral-light);
            }
            .hero1-button2 {
              fill: var(--dl-color-theme-neutral-light);
              color: var(--dl-color-theme-neutral-light);
              text-align: center;
              border-width: 3px;
              background-color: var(--dl-color-theme-primary1);
            }
            .hero1-text14 {
              font-size: 14px;
            }
            .hero1-text15 {
              color: var(--dl-color-theme-secondary1);
              font-size: 20px;
            }
            .hero1-text16 {
              color: var(--dl-color-gray-white);
              font-size: 14px;
            }
            .hero1-text17 {
              font-style: italic;
              font-weight: 100;
            }
            .hero1-text18 {
              font-style: italic;
              font-weight: 400;
            }
            .hero1-text19 {
              font-style: italic;
              font-weight: 400;
            }
            .hero1-text20 {
              font-style: italic;
              font-weight: 400;
            }
            .hero1-text21 {
              font-style: italic;
              font-weight: 100;
            }
            .hero1-text22 {
              font-style: italic;
              font-weight: 100;
            }
            .hero1-text24 {
              font-size: 14px;
            }
            .hero1root-class-name {
              height: 500px;
            }
          }
          @media (max-width: 479px) {
            .hero1-video {
              min-height: 250px;
            }
            .hero1-actions {
              flex-direction: column;
            }
            .hero1-link1 {
              width: 100%;
            }
            .hero1-button2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Hero1.defaultProps = {
  action1: undefined,
  heading1: undefined,
  video1Src:
    'https://videos.pexels.com/video-files/6755161/6755161-hd_1920_1080_25fps.mp4',
  content1: undefined,
  action2: undefined,
  rootClassName: '',
  video1Poster: '',
}

Hero1.propTypes = {
  action1: PropTypes.element,
  heading1: PropTypes.element,
  video1Src: PropTypes.string,
  content1: PropTypes.element,
  action2: PropTypes.element,
  rootClassName: PropTypes.string,
  video1Poster: PropTypes.string,
}

export default Hero1
