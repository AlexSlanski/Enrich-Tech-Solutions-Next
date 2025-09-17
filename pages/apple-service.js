import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Header1 from '../components/header1'
import Features12 from '../components/features12'
import FeatureCard34 from '../components/feature-card34'
import TestimonialCard1 from '../components/testimonial-card1'
import TestimonialCard11 from '../components/testimonial-card11'
import TestimonialCard111 from '../components/testimonial-card111'
import Footer3 from '../components/footer3'

const AppleService = (props) => {
  return (
    <>
      <div className="apple-service-container10">
        <Head>
          <title>
            Apple-Service - Market Harborough Computer Repair | Apple Service |
            Tech help
          </title>
          <meta
            name="description"
            content="Experts in Computer repair, Apple Service, Gaming PC Builds. Offering advice, solutions, tech support and sustainable practices to keep you connected."
          />
          <meta
            property="og:title"
            content="Apple-Service - Market Harborough Computer Repair | Apple Service | Tech help"
          />
          <meta
            property="og:description"
            content="We offer services, solutions and repairs, Apple devices, Gaming PC, music equipment, vintage Hi-Fi repair, home support call out, business calls and tech support. For advice, solutions and remedies. "
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d243ef5f-2f1b-4d97-8ed2-b32185f29299/5ca76068-1f48-4cb8-a6eb-493d5fed965c?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <Header1 rootClassName="header1root-class-name14"></Header1>
        <div className="apple-service-container11">
          <div className="apple-service-details">
            <div className="apple-service-container12">
              <h1 className="apple-service-text1">Apple Service</h1>
              <span className="apple-service-text2">
                OFFERED BY ENRICH TECH SOLUTIONS
              </span>
              <span className="apple-service-text3 sectionTitle">
                <span>Details</span>
                <br></br>
              </span>
            </div>
            <div className="apple-service-container13">
              <div className="apple-service-container14">
                <a
                  href="mailto:info@enrichtech.co.uk?subject=Contact from website"
                  className="apple-service-hero-button11 button"
                >
                  EMAIL US
                </a>
                <a
                  href="tel:01858437028"
                  className="apple-service-hero-button12 button"
                >
                  CALL US
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="apple-service-container15">
          <div className="apple-service-container16">
            <div className="apple-service-container17">
              <Features12
                rootClassName="features12root-class-name1"
                featureVideoPoster="Enrich Tech Solutions is a leading tech repair company based in Leicester and Market Harborough. Specializing in professional IT solutions, we offer on-site support, equipment installations, expert advice, and assistance with purchases. Our dedicated team is committed to restoring your gadgets and rekindling your passion for technology."
              ></Features12>
              <FeatureCard34
                tech="Apple Service"
                description="Enrich Tech Solutions provides a wide range of professional IT solutions in Leicester, Market Harborough, and nearby areas. They offer on-site support for repairs, installations, expert advice, and tech support. Contact them for inquiries or assistance."
                rootClassName="feature-card34root-class-name8"
              ></FeatureCard34>
            </div>
          </div>
        </div>
        <div className="apple-service-container18">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1594636797501-ef436e157819?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDM3fHxnYW1pbmclMjBwY3xlbnwwfHx8fDE3MDU0MDUyNjV8MA&amp;ixlib=rb-4.0.3&amp;w=500"
            className="apple-service-details-image"
          />
          <h1 className="apple-service-heading">
            <span>What they’re saying</span>
            <br></br>
            <span></span>
          </h1>
          <div className="apple-service-container19">
            <TestimonialCard1
              pictureSrc="https://images.unsplash.com/photo-1557053910-d9eadeed1c58?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHdvbWFuJTIwcG9ydHJhaXR8ZW58MHx8fHwxNjI2NDUxOTgy&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName3"
            ></TestimonialCard1>
            <TestimonialCard11 rootClassName="testimonial-card11root-class-name3"></TestimonialCard11>
            <TestimonialCard111 rootClassName="testimonial-card111root-class-name3"></TestimonialCard111>
          </div>
        </div>
        <div className="apple-service-container20">
          <div className="apple-service-banner">
            <div className="apple-service-container21"></div>
            <img
              alt="image"
              src="/enrich%20logo-02-300h.webp"
              className="apple-service-image"
            />
          </div>
        </div>
        <div className="apple-service-container22">
          <div className="apple-service-footer">
            <Footer3
              link13={
                <Fragment>
                  <span className="apple-service-link13">
                    <span>Sitemap</span>
                    <br></br>
                  </span>
                </Fragment>
              }
              rootClassName="footer3root-class-name9"
            ></Footer3>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .apple-service-container10 {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-primary-enblue);
          }
          .apple-service-container11 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .apple-service-details {
            width: 100%;
            display: flex;
            align-self: center;
            padding-top: var(--dl-layout-space-fiveunits);
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
            padding-bottom: 0px;
            justify-content: center;
            background-color: var(--dl-color-primary-enblue);
          }
          .apple-service-container12 {
            flex: 1;
            width: auto;
            height: auto;
            display: flex;
            flex-direction: column;
          }
          .apple-service-text1 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-size: 4rem;
            max-width: 450px;
            align-self: center;
            margin-top: var(--dl-layout-space-halfunit);
            text-align: center;
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .apple-service-text2 {
            fill: var(--dl-color-primary-700);
            color: var(--dl-color-primary-700);
            font-size: 2rem;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            padding-top: var(--dl-layout-space-unit);
            letter-spacing: 3px;
            padding-bottom: var(--dl-layout-space-unit);
            text-transform: uppercase;
          }
          .apple-service-text3 {
            fill: var(--dl-color-theme-accent2);
            color: var(--dl-color-theme-accent2);
            align-self: center;
            text-align: left;
            font-family: 'Raleway';
            margin-bottom: var(--dl-layout-space-oneandhalfunits);
          }
          .apple-service-container13 {
            display: flex;
            align-self: center;
            align-items: flex-start;
          }
          .apple-service-container14 {
            display: flex;
            align-self: center;
            align-items: flex-start;
          }
          .apple-service-hero-button11 {
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
          .apple-service-hero-button11:hover {
            color: var(--dl-color-gray-white);
            border-color: rgba(41, 20, 119, 0.9);
            background-color: var(--dl-color-primary1-blue100);
          }
          .apple-service-hero-button12 {
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
          .apple-service-hero-button12:hover {
            color: var(--dl-color-gray-white);
            border-color: rgba(41, 20, 119, 0.9);
            background-color: var(--dl-color-primary1-blue100);
          }
          .apple-service-container15 {
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .apple-service-container16 {
            width: auto;
            height: auto;
            display: flex;
            padding: var(--dl-layout-space-fiveunits);
            align-items: flex-start;
            justify-content: center;
          }
          .apple-service-container17 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            padding-bottom: 0px;
          }
          .apple-service-container18 {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-threeunits);
            max-width: var(--dl-layout-size-maxwidth);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .apple-service-details-image {
            width: 500px;
            height: 500px;
            margin-top: var(--dl-layout-space-fiveunits);
            object-fit: cover;
            margin-left: 0px;
            border-radius: var(--dl-layout-radius-round);
          }
          .apple-service-heading {
            fill: var(--dl-color-primary-700);
            color: var(--dl-color-primary-700);
            margin-bottom: var(--dl-layout-space-twounits);
          }
          .apple-service-container19 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-layout-space-twounits);
            grid-template-columns: 1fr 1fr 1fr;
          }
          .apple-service-container20 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .apple-service-banner {
            width: 100%;
            height: 100%;
            display: flex;
            padding: var(--dl-layout-space-threeunits);
            max-width: 100%;
            align-self: center;
            margin-top: var(--dl-layout-space-sixunits);
            align-items: center;
            margin-bottom: var(--dl-layout-space-sixunits);
            background-size: cover;
            justify-content: space-between;
            background-image: url('https://images.unsplash.com/photo-1519033628719-72e1861f20cf?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIzfHxjb21wdXRlcnN8ZW58MHx8fHwxNzE4MjcwODgzfDA&ixlib=rb-4.0.3&w=1500');
            background-position: bottom;
          }
          .apple-service-container21 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-layout-space-sixunits);
            flex-direction: column;
            justify-content: space-between;
          }
          .apple-service-image {
            width: 300px;
            height: 300px;
            object-fit: cover;
            flex-shrink: 0;
            border-radius: var(--dl-layout-radius-radius4);
            border-top-left-radius: var(--dl-layout-radius-round);
            border-top-right-radius: var(--dl-layout-radius-round);
            border-bottom-left-radius: var(--dl-layout-radius-round);
            border-bottom-right-radius: var(--dl-layout-radius-round);
          }
          .apple-service-container22 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .apple-service-footer {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
          }
          .apple-service-link13 {
            display: inline-block;
          }
          @media (max-width: 2560px) {
            .apple-service-details {
              max-width: 100%;
              margin-top: 0px;
              padding-bottom: 0px;
            }
            .apple-service-hero-button11 {
              align-self: center;
            }
            .apple-service-hero-button12 {
              align-self: center;
            }
            .apple-service-container16 {
              padding-top: var(--dl-layout-space-fiveunits);
            }
            .apple-service-details-image {
              width: 370px;
              height: 370px;
              margin-left: 0px;
              margin-right: 0px;
            }
          }
          @media (max-width: 1366px) {
            .apple-service-details {
              width: 100%;
              margin-top: 0px;
            }
            .apple-service-hero-button11 {
              text-align: center;
            }
            .apple-service-hero-button12 {
              text-align: center;
            }
            .apple-service-details-image {
              width: 350px;
              height: 350px;
              padding: 0px;
            }
          }
          @media (max-width: 1200px) {
            .apple-service-details {
              width: 100%;
              max-width: 991px;
              padding-top: var(--dl-layout-space-threeunits);
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .apple-service-hero-button11 {
              align-self: center;
            }
            .apple-service-hero-button12 {
              align-self: center;
            }
            .apple-service-container16 {
              background-size: contain;
            }
            .apple-service-details-image {
              width: 350px;
              height: 350px;
              padding-left: 0px;
              padding-right: 0px;
            }
            .apple-service-heading {
              text-align: center;
            }
            .apple-service-container19 {
              grid-template-columns: 1fr;
            }
            .apple-service-banner {
              flex-direction: column;
            }
            .apple-service-container21 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-layout-space-threeunits);
            }
            .apple-service-image {
              width: var(--dl-layout-size-xxlarge);
              height: var(--dl-layout-size-xxlarge);
            }
          }
          @media (max-width: 900px) {
            .apple-service-details {
              width: 767px;
              align-items: center;
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              flex-direction: column;
              justify-content: center;
            }
            .apple-service-text3 {
              text-align: center;
            }
            .apple-service-container16 {
              background-repeat: space;
            }
            .apple-service-container18 {
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
            .apple-service-details-image {
              margin-top: var(--dl-layout-space-threeunits);
              margin-left: 0px;
              padding-left: 0px;
              padding-right: 0px;
            }
            .apple-service-banner {
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
          }
          @media (max-width: 480px) {
            .apple-service-details {
              width: 100%;
              max-width: 100%;
            }
            .apple-service-text1 {
              color: var(--dl-color-theme-secondary1);
              font-size: 4rem;
            }
            .apple-service-text2 {
              fill: var(--dl-color-primary-700);
              color: var(--dl-color-primary-700);
              font-size: 1.7rem;
              font-style: normal;
              align-items: center;
              font-weight: 500;
              letter-spacing: 2px;
              text-transform: uppercase;
            }
            .apple-service-container13 {
              flex: 1;
              align-items: center;
              flex-direction: row-reverse;
              justify-content: center;
            }
            .apple-service-container14 {
              flex: 1;
              align-self: center;
              align-items: center;
              flex-direction: row-reverse;
              justify-content: center;
            }
            .apple-service-hero-button11 {
              margin: 0px;
              padding: 1.5rem;
              font-size: 0.75rem;
              padding-top: 1.5rem;
              padding-bottom: 1.5rem;
            }
            .apple-service-hero-button12 {
              color: var(--dl-color-theme-secondary1);
              margin: 0px;
              padding: 1.5rem;
              font-size: 0.75rem;
              font-weight: bold;
              padding-right: 1.5rem;
              text-decoration: none;
              background-color: rgb(1, 12, 34);
            }
            .apple-service-container16 {
              width: auto;
              height: auto;
              padding: var(--dl-layout-space-unit);
              background-size: auto;
              background-repeat: no-repeat;
              background-position: top;
            }
            .apple-service-container18 {
              padding-top: var(--dl-layout-space-twounits);
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-twounits);
            }
            .apple-service-details-image {
              width: 320px;
              height: 320px;
              display: none;
              margin-top: var(--dl-layout-space-unit);
              padding-top: 0px;
              margin-right: 0px;
              padding-left: 0px;
              padding-right: 0px;
            }
            .apple-service-banner {
              height: auto;
              padding-top: var(--dl-layout-space-twounits);
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-twounits);
            }
            .apple-service-image {
              width: var(--dl-layout-size-xlarge);
              height: var(--dl-layout-size-xlarge);
            }
          }
        `}
      </style>
    </>
  )
}

export default AppleService
