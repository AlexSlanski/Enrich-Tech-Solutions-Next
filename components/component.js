import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import Features12 from './features12'
import FeatureCard34 from './feature-card34'

const AppComponent = (props) => {
  return (
    <>
      <div className={`component-container1 ${props.rootClassName} `}>
        <div className="component-container2">
          <div className="component-container3">
            <Features12
              rootClassName="features12root-class-name"
              featureVideoPoster="Enrich Tech Solutions is a leading tech repair company based in Leicester and Market Harborough. Specializing in professional IT solutions, we offer on-site support, equipment installations, expert advice, and assistance with purchases. Our dedicated team is committed to restoring your gadgets and rekindling your passion for technology."
            ></Features12>
            <FeatureCard34
              tech="Tech Support"
              description="Enrich Tech Solutions offers a comprehensive range of professional IT solutions across Leicester and Market Harborough, as well as surrounding areas in Leicestershire, Northamptonshire, and Warwickshire. Our services include on-site support for repairs, equipment and system installations, expert advice, and assistance with purchasing. Feel free to reach out to us with any inquiries or for assistance."
              rootClassName="feature-card34root-class-name2"
            ></FeatureCard34>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .component-container1 {
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .component-container2 {
            width: auto;
            height: auto;
            display: flex;
            padding: var(--dl-layout-space-fiveunits);
            align-items: flex-start;
            justify-content: center;
          }
          .component-container3 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            padding-bottom: 0px;
          }
          @media (max-width: 2560px) {
            .component-container2 {
              padding-top: var(--dl-layout-space-fiveunits);
            }
          }
          @media (max-width: 1200px) {
            .component-container2 {
              background-size: contain;
            }
          }
          @media (max-width: 900px) {
            .component-container2 {
              background-repeat: space;
            }
          }
          @media (max-width: 480px) {
            .component-container2 {
              width: auto;
              height: auto;
              padding: var(--dl-layout-space-unit);
              background-size: auto;
              background-repeat: no-repeat;
              background-position: top;
            }
          }
        `}
      </style>
    </>
  )
}

AppComponent.defaultProps = {
  rootClassName: '',
}

AppComponent.propTypes = {
  rootClassName: PropTypes.string,
}

export default AppComponent
