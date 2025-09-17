import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Features12 = (props) => {
  return (
    <>
      <div
        className={`features12-layout349 thq-section-padding ${props.rootClassName} `}
      >
        <div className="features12-max-width thq-section-max-width">
          <video
            src={props.featureVideoSrc}
            loop="true"
            muted="true"
            poster={props.featureVideoPoster}
            autoPlay="true"
            className="features12-video thq-img-ratio-16-9"
          ></video>
        </div>
      </div>
      <style jsx>
        {`
          .features12-layout349 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .features12-max-width {
            gap: var(--dl-layout-space-threeunits);
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .features12-video {
            width: 100%;
          }
          .features12root-class-name {
            width: 70%;
            opacity: 0.8;
            padding-top: var(--dl-layout-space-fiveunits);
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            padding-bottom: 0px;
            background-color: rgb(217, 217, 217);
          }
          .features12root-class-name1 {
            width: 70%;
            opacity: 0.8;
            padding-top: var(--dl-layout-space-fiveunits);
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            padding-bottom: 0px;
            background-color: rgb(217, 217, 217);
          }
          @media (max-width: 1200px) {
            .features12-max-width {
              flex-direction: column;
            }
          }
          @media (max-width: 480px) {
            .features12-max-width {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .features12root-class-name {
              opacity: 0.8;
              padding-top: var(--dl-layout-space-twounits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: 0px;
            }
            .features12root-class-name1 {
              opacity: 0.8;
              padding-top: var(--dl-layout-space-twounits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

Features12.defaultProps = {
  rootClassName: '',
  featureVideoPoster:
    'https://images.pexels.com/videos/7682758/pictures/preview-0.jpg',
  featureVideoSrc:
    'https://videos.pexels.com/video-files/7682758/7682758-hd_1280_720_24fps.mp4',
}

Features12.propTypes = {
  rootClassName: PropTypes.string,
  featureVideoPoster: PropTypes.string,
  featureVideoSrc: PropTypes.string,
}

export default Features12
