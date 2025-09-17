import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Gallery7 = (props) => {
  return (
    <>
      <div className="gallery7-gallery3 thq-section-padding">
        <div className="gallery7-max-width">
          <div className="gallery7-container1">
            <div className="gallery7-content">
              <div className="gallery7-container2">
                <img
                  alt={props.image1Alt}
                  src={props.image1Src}
                  className="gallery7-image1 thq-img-ratio-1-1"
                />
                <img
                  alt={props.image2Alt}
                  src={props.image2Src}
                  className="gallery7-image2 thq-img-ratio-1-1"
                />
              </div>
              <div className="gallery7-container3">
                <img
                  alt={props.image3Alt}
                  src={props.image3Src}
                  className="gallery7-image3 thq-img-ratio-4-3"
                />
                <img
                  alt={props.image4Alt}
                  src={props.image4Src}
                  className="gallery7-image4 thq-img-ratio-1-1"
                />
                <img
                  alt={props.image5Alt}
                  src={props.image5Src}
                  className="gallery7-image5 thq-img-ratio-4-3"
                />
              </div>
              <div className="gallery7-container4">
                <img
                  alt={props.image6Alt}
                  src={props.image6Src}
                  className="gallery7-image6 thq-img-ratio-1-1"
                />
                <img
                  alt={props.image7Alt}
                  src={props.image7Src}
                  className="gallery7-image7 thq-img-ratio-1-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .gallery7-gallery3 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .gallery7-max-width {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .gallery7-container1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .gallery7-content {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .gallery7-container2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .gallery7-image1 {
            width: 100%;
            height: 450px;
            object-fit: cover;
          }
          .gallery7-image2 {
            width: 100%;
            height: 440px;
            object-fit: cover;
          }
          .gallery7-container3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: auto;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .gallery7-image3 {
            width: 100%;
            height: 240px;
            object-fit: cover;
          }
          .gallery7-image4 {
            width: 100%;
            height: 440px;
            object-fit: cover;
          }
          .gallery7-image5 {
            width: 100%;
            height: 240px;
            object-fit: cover;
          }
          .gallery7-container4 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: auto;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .gallery7-image6 {
            width: 100%;
            height: 450px;
            align-self: flex-start;
            object-fit: cover;
          }
          .gallery7-image7 {
            width: 100%;
            height: 440px;
            object-fit: cover;
          }
          @media (max-width: 1200px) {
            .gallery7-content {
              align-items: center;
              flex-direction: column;
            }
            .gallery7-container2 {
              width: 100%;
            }
            .gallery7-image1 {
              flex: 0 0 auto;
              width: 100%;
            }
            .gallery7-container3 {
              width: 100%;
            }
            .gallery7-container4 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Gallery7.defaultProps = {
  image3Src:
    'https://images.unsplash.com/photo-1620365602462-40d8f2cdd84c?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDMwfHxjb21wdXRlcnN8ZW58MHx8fHwxNzE4MjcwOTYxfDA&ixlib=rb-4.0.3&w=1500',
  image7Alt: 'image',
  image4Src:
    'https://images.unsplash.com/photo-1627281796892-39e266ee50be?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxjb21wdXRlcnN8ZW58MHx8fHwxNzE4MjcwODgzfDA&ixlib=rb-4.0.3&w=1500',
  image7Src:
    'https://images.unsplash.com/photo-1566647387313-9fda80664848?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxjb21wdXRlcnN8ZW58MHx8fHwxNzE4MjcwODgzfDA&ixlib=rb-4.0.3&w=1500',
  image1Alt: 'PlaceholderImage1302',
  image2Src:
    'https://images.unsplash.com/photo-1591238372338-22d30c883a86?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQzfHxjb21wdXRlcnN8ZW58MHx8fHwxNzE4MjcwOTYxfDA&ixlib=rb-4.0.3&w=1500',
  image4Alt: 'image',
  image3Alt: 'image',
  image5Alt: 'image5',
  image2Alt: 'image6',
  image5Src:
    'https://images.unsplash.com/photo-1613068687893-5e85b4638b56?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ1fHxjb21wdXRlcnN8ZW58MHx8fHwxNzE4MjcwOTYxfDA&ixlib=rb-4.0.3&w=1500',
  image6Src:
    'https://images.unsplash.com/photo-1494173853739-c21f58b16055?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI5fHxjb21wdXRlcnN8ZW58MHx8fHwxNzE4MjcwOTYxfDA&ixlib=rb-4.0.3&w=1500',
  image1Src: '/enrich%20logo-01-1500w.webp',
  image6Alt: 'image',
}

Gallery7.propTypes = {
  image3Src: PropTypes.string,
  image7Alt: PropTypes.string,
  image4Src: PropTypes.string,
  image7Src: PropTypes.string,
  image1Alt: PropTypes.string,
  image2Src: PropTypes.string,
  image4Alt: PropTypes.string,
  image3Alt: PropTypes.string,
  image5Alt: PropTypes.string,
  image2Alt: PropTypes.string,
  image5Src: PropTypes.string,
  image6Src: PropTypes.string,
  image1Src: PropTypes.string,
  image6Alt: PropTypes.string,
}

export default Gallery7
