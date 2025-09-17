import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const TrustedTechPartner = (props) => {
  return (
    <>
      <div className="trusted-tech-partner-trusted-tech-partner">
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          loading="eager"
          className="trusted-tech-partner-image"
        />
        <img
          alt={props.detailsImageAlt}
          src={props.detailsImageSrc}
          className="trusted-tech-partner-details-image"
        />
      </div>
      <style jsx>
        {`
          .trusted-tech-partner-trusted-tech-partner {
            width: 100%;
            display: none;
            position: relative;
            align-items: center;
            padding-top: var(--dl-layout-space-threeunits);
            margin-bottom: var(--dl-layout-space-fiveunits);
            justify-content: space-between;
            background-color: var(--dl-color-primary-enblue);
          }
          .trusted-tech-partner-image {
            width: 565px;
            height: 770px;
            display: none;
            align-self: flex-end;
            object-fit: cover;
          }
          .trusted-tech-partner-details-image {
            width: 500px;
            height: 500px;
            display: none;
            object-fit: cover;
            margin-left: 0px;
            margin-right: var(--dl-layout-space-fourunits);
            border-radius: var(--dl-layout-radius-round);
          }
          @media (max-width: 2560px) {
            .trusted-tech-partner-trusted-tech-partner {
              margin: var(--dl-layout-space-unit);
              max-width: 100%;
            }
            .trusted-tech-partner-image {
              top: 940px;
              right: 4px;
              width: 473px;
              height: 642px;
              display: none;
            }
            .trusted-tech-partner-details-image {
              height: 500px;
              margin-left: 0px;
              margin-right: 0px;
            }
          }
          @media (max-width: 1366px) {
            .trusted-tech-partner-trusted-tech-partner {
              width: 100%;
              margin: var(--dl-layout-space-unit);
              padding: 0px;
              max-width: auto;
            }
            .trusted-tech-partner-image {
              width: auto;
              height: 550px;
            }
            .trusted-tech-partner-details-image {
              width: 350px;
              height: 350px;
              padding: 0px;
            }
          }
          @media (max-width: 1200px) {
            .trusted-tech-partner-trusted-tech-partner {
              width: auto;
              max-width: auto;
              margin-top: 0px;
              margin-left: 0px;
              padding-top: var(--dl-layout-space-threeunits);
              margin-right: 0px;
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
              flex-direction: row;
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .trusted-tech-partner-image {
              top: 794px;
              right: 0px;
              height: 500px;
              align-self: flex-end;
            }
            .trusted-tech-partner-details-image {
              width: 350px;
              height: 350px;
              margin-top: 0px;
              margin-left: 0px;
              margin-right: var(--dl-layout-space-twounits);
              padding-left: 0px;
              margin-bottom: 0px;
              padding-right: 0px;
            }
          }
          @media (max-width: 900px) {
            .trusted-tech-partner-trusted-tech-partner {
              width: auto;
              margin-top: var(--dl-layout-space-twounits);
              align-items: center;
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              flex-direction: column;
              justify-content: center;
            }
            .trusted-tech-partner-image {
              top: 1220px;
              right: -22px;
              width: auto;
              height: 300px;
              display: none;
            }
            .trusted-tech-partner-details-image {
              margin-top: var(--dl-layout-space-threeunits);
              margin-left: 0px;
              margin-right: 0px;
              padding-left: 0px;
              padding-right: 0px;
            }
          }
          @media (max-width: 480px) {
            .trusted-tech-partner-trusted-tech-partner {
              width: auto;
              max-width: auto;
              margin-top: 0px;
              margin-left: 0px;
            }
            .trusted-tech-partner-image {
              top: 664px;
              right: 27px;
              width: auto;
              height: 270px;
              margin: auto;
              display: none;
            }
            .trusted-tech-partner-details-image {
              margin-top: var(--dl-layout-space-unit);
              padding-top: 0px;
              margin-right: 0px;
              padding-left: 0px;
              padding-right: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

TrustedTechPartner.defaultProps = {
  imageAlt: 'image',
  imageSrc: '/heroimage-rb1500h-600w.webp',
  detailsImageAlt: 'image',
  detailsImageSrc:
    'https://images.unsplash.com/photo-1535957998253-26ae1ef29506?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDMzfHx0ZWNoJTIwcGFydG5lcnxlbnwwfHx8fDE3MDU0MTI1Nzh8MA&ixlib=rb-4.0.3&w=500',
}

TrustedTechPartner.propTypes = {
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  detailsImageAlt: PropTypes.string,
  detailsImageSrc: PropTypes.string,
}

export default TrustedTechPartner
