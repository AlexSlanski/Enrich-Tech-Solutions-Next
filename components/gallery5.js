import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Gallery5 = (props) => {
  return (
    <>
      <div
        className={`gallery5-gallery3 thq-section-padding ${props.rootClassName} `}
      >
        <div className="gallery5-max-width thq-section-max-width">
          <div className="gallery5-section-title">
            <h2 className="gallery5-text1 thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="gallery5-text3">Photo Gallery</span>
                </Fragment>
              )}
            </h2>
            <span className="gallery5-text2 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="gallery5-text4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="gallery5-container1">
            <div className="gallery5-content">
              <div className="gallery5-container2">
                <div className="gallery5-container3">
                  <img
                    alt={props.image1Alt}
                    src={props.image1Src}
                    className="gallery5-image1 thq-img-ratio-4-3"
                  />
                </div>
                <img
                  alt={props.image2Alt}
                  src={props.image2Src}
                  className="gallery5-image2 thq-img-ratio-1-1"
                />
              </div>
              <div className="gallery5-container4">
                <img
                  alt={props.image3Alt}
                  src={props.image3Src}
                  className="gallery5-image3 thq-img-ratio-1-1"
                />
                <img
                  alt={props.image4Alt}
                  src={props.image4Src}
                  className="gallery5-image4 thq-img-ratio-1-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .gallery5-gallery3 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .gallery5-max-width {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .gallery5-section-title {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: auto;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .gallery5-text1 {
            text-align: center;
          }
          .gallery5-text2 {
            text-align: center;
          }
          .gallery5-container1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .gallery5-content {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .gallery5-container2 {
            gap: HalfUnits;
            flex: 1;
            width: 100%;
            height: 902px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .gallery5-container3 {
            width: 100%;
            height: 40%;
            display: flex;
            align-items: center;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            justify-content: center;
          }
          .gallery5-image1 {
            width: 100%;
            height: 100%;
            max-width: 100%;
            align-self: center;
            max-height: 700px;
          }
          .gallery5-image2 {
            width: 100%;
            height: 60%;
            max-height: 700px;
            object-fit: cover;
          }
          .gallery5-container4 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: auto;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .gallery5-image3 {
            width: 100%;
            height: 440px;
            max-height: 700px;
            object-fit: cover;
          }
          .gallery5-image4 {
            width: 100%;
            height: 440px;
            max-height: 700px;
            object-fit: cover;
          }
          .gallery5-text3 {
            display: inline-block;
          }
          .gallery5-text4 {
            display: inline-block;
          }
          @media (max-width: 1200px) {
            .gallery5-content {
              align-items: center;
              flex-direction: column;
            }
            .gallery5-container2 {
              height: auto;
            }
            .gallery5-image1 {
              flex: 0 0 auto;
              width: 100%;
              height: 100%;
            }
            .gallery5-image2 {
              height: 100%;
            }
            .gallery5-container4 {
              width: 100%;
            }
          }
          @media (max-width: 900px) {
            .gallery5-section-title {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
          }
          @media (max-width: 480px) {
            .gallery5-image2 {
              max-height: 400px;
            }
          }
        `}
      </style>
    </>
  )
}

Gallery5.defaultProps = {
  rootClassName: '',
  image2Alt: 'image',
  image4Alt: 'image',
  image2Src:
    'https://images.unsplash.com/photo-1527066579998-dbbae57f45ce?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIzfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1400',
  image3Alt: 'image',
  heading1: undefined,
  content1: undefined,
  image4Src:
    'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1400',
  image1Src:
    'https://images.unsplash.com/photo-1561212044-bac5ef688a07?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIyfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1400',
  image1Alt: 'PlaceholderImage1302',
  image3Src:
    'https://images.unsplash.com/photo-1552083974-186346191183?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1400',
}

Gallery5.propTypes = {
  rootClassName: PropTypes.string,
  image2Alt: PropTypes.string,
  image4Alt: PropTypes.string,
  image2Src: PropTypes.string,
  image3Alt: PropTypes.string,
  heading1: PropTypes.element,
  content1: PropTypes.element,
  image4Src: PropTypes.string,
  image1Src: PropTypes.string,
  image1Alt: PropTypes.string,
  image3Src: PropTypes.string,
}

export default Gallery5
