import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Header1 from '../components/header1'
import AppComponent from '../components/component'
import TestimonialCard1 from '../components/testimonial-card1'
import TestimonialCard11 from '../components/testimonial-card11'
import TestimonialCard111 from '../components/testimonial-card111'
import Footer3 from '../components/footer3'

const TechSupport = (props) => {
  return (
    <>
      <div className="tech-support-container10">
        <Head>
          <title>
            Tech-Support - Market Harborough Computer Repair | Apple Service |
            Tech help
          </title>
          <meta
            name="description"
            content="Experts in Computer repair, Apple Service, Gaming PC Builds. Offering advice, solutions, tech support and sustainable practices to keep you connected."
          />
          <meta
            property="og:title"
            content="Tech-Support - Market Harborough Computer Repair | Apple Service | Tech help"
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
        <Header1 rootClassName="header1root-class-name13"></Header1>
        <div className="tech-support-container11">
          <div className="tech-support-details">
            <div className="tech-support-container12">
              <h1 className="tech-support-text1">Tech Support</h1>
              <span className="tech-support-text2">
                OFFERED BY ENRICH TECH SOLUTIONS
              </span>
              <span className="tech-support-text3 sectionTitle">
                <span>Details</span>
                <br></br>
              </span>
            </div>
            <div className="tech-support-container13">
              <div className="tech-support-container14">
                <a
                  href="mailto:info@enrichtech.co.uk?subject=Contact from website"
                  className="tech-support-hero-button11 button"
                >
                  EMAIL US
                </a>
                <a
                  href="tel:01858437028"
                  className="tech-support-hero-button12 button"
                >
                  CALL US
                </a>
              </div>
            </div>
            <Link href="/contact">
              <a className="tech-support-link">
                <strong className="tech-support-details-sub-heading">
                  At Enrich Tech Solutions, we are confident in our ability to
                  repair a wide range of devices and gadgets. Our dedicated team
                  believes in finding solutions for any tech issue, no matter
                  how challenging it may seem. Beyond just fixing devices, we
                  aim to create connections, restore beloved gadgets, and
                  reignite your enthusiasm for technology. Our tech hub is where
                  innovation meets skill, ensuring that every device receives
                  the care it deserves.
                </strong>
              </a>
            </Link>
          </div>
        </div>
        <AppComponent></AppComponent>
        <div className="tech-support-container15">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1594636797501-ef436e157819?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDM3fHxnYW1pbmclMjBwY3xlbnwwfHx8fDE3MDU0MDUyNjV8MA&amp;ixlib=rb-4.0.3&amp;w=500"
            className="tech-support-details-image"
          />
          <h1 className="tech-support-heading">
            <span>What they’re saying</span>
            <br></br>
            <span></span>
          </h1>
          <div className="tech-support-container16">
            <TestimonialCard1
              pictureSrc="https://images.unsplash.com/photo-1557053910-d9eadeed1c58?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHdvbWFuJTIwcG9ydHJhaXR8ZW58MHx8fHwxNjI2NDUxOTgy&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName1"
            ></TestimonialCard1>
            <TestimonialCard11 rootClassName="testimonial-card11root-class-name2"></TestimonialCard11>
            <TestimonialCard111 rootClassName="testimonial-card111root-class-name2"></TestimonialCard111>
          </div>
        </div>
        <div className="tech-support-container17">
          <div className="tech-support-banner">
            <div className="tech-support-container18"></div>
            <img
              alt="image"
              src="/enrich%20logo-02-300h.webp"
              className="tech-support-image"
            />
          </div>
        </div>
        <div className="tech-support-container19">
          <div className="tech-support-footer">
            <Footer3
              link13={
                <Fragment>
                  <span className="tech-support-link13">
                    <span>Sitemap</span>
                    <br></br>
                  </span>
                </Fragment>
              }
              rootClassName="footer3root-class-name8"
            ></Footer3>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .tech-support-container10 {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-primary-enblue);
          }
          .tech-support-container11 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .tech-support-details {
            width: 100%;
            display: flex;
            align-self: center;
            padding-top: var(--dl-layout-space-threeunits);
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: 0px;
            justify-content: center;
            background-color: var(--dl-color-primary-enblue);
          }
          .tech-support-container12 {
            flex: 1;
            width: auto;
            height: auto;
            display: flex;
            flex-direction: column;
          }
          .tech-support-text1 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-size: 4rem;
            max-width: 450px;
            align-self: center;
            margin-top: var(--dl-layout-space-halfunit);
            text-align: center;
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .tech-support-text2 {
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
          .tech-support-text3 {
            fill: var(--dl-color-theme-accent2);
            color: var(--dl-color-theme-accent2);
            align-self: center;
            text-align: left;
            font-family: 'Raleway';
            margin-bottom: var(--dl-layout-space-oneandhalfunits);
          }
          .tech-support-container13 {
            display: flex;
            align-self: center;
            align-items: flex-start;
          }
          .tech-support-container14 {
            display: flex;
            align-self: center;
            align-items: flex-start;
          }
          .tech-support-hero-button11 {
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
          .tech-support-hero-button11:hover {
            color: var(--dl-color-gray-white);
            border-color: rgba(41, 20, 119, 0.9);
            background-color: var(--dl-color-primary1-blue100);
          }
          .tech-support-hero-button12 {
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
          .tech-support-hero-button12:hover {
            color: var(--dl-color-gray-white);
            border-color: rgba(41, 20, 119, 0.9);
            background-color: var(--dl-color-primary1-blue100);
          }
          .tech-support-link {
            display: contents;
          }
          .tech-support-details-sub-heading {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            width: 88%;
            margin: var(--dl-layout-space-twounits);
            display: none;
            font-size: 17px;
            align-self: center;
            text-align: center;
            line-height: 1.5;
            text-decoration: none;
          }
          .tech-support-container15 {
            width: 100%;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-layout-space-threeunits);
            padding-left: var(--dl-layout-space-sixunits);
            padding-right: var(--dl-layout-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-sixunits);
            justify-content: center;
          }
          .tech-support-details-image {
            width: 500px;
            height: 500px;
            margin-top: 0px;
            object-fit: cover;
            margin-left: 0px;
            border-radius: var(--dl-layout-radius-round);
            margin-bottom: var(--dl-layout-space-sixunits);
          }
          .tech-support-heading {
            fill: var(--dl-color-primary-700);
            color: var(--dl-color-primary-700);
            margin-bottom: var(--dl-layout-space-twounits);
          }
          .tech-support-container16 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-layout-space-twounits);
            grid-template-columns: 1fr 1fr 1fr;
          }
          .tech-support-container17 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .tech-support-banner {
            width: 100%;
            height: 494px;
            display: flex;
            padding: var(--dl-layout-space-threeunits);
            max-width: 100%;
            align-self: center;
            margin-top: 0px;
            align-items: center;
            margin-bottom: 0px;
            background-size: cover;
            justify-content: space-between;
            background-image: url('https://images.unsplash.com/photo-1519033628719-72e1861f20cf?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIzfHxjb21wdXRlcnN8ZW58MHx8fHwxNzE4MjcwODgzfDA&ixlib=rb-4.0.3&w=1500');
            background-position: bottom;
          }
          .tech-support-container18 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-layout-space-sixunits);
            flex-direction: column;
            justify-content: space-between;
          }
          .tech-support-image {
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
          .tech-support-container19 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .tech-support-footer {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
          }
          .tech-support-link13 {
            display: inline-block;
          }
          @media (max-width: 2560px) {
            .tech-support-details {
              padding-top: var(--dl-layout-space-threeunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .tech-support-hero-button11 {
              align-self: center;
            }
            .tech-support-hero-button12 {
              align-self: center;
            }
            .tech-support-details-image {
              height: 500px;
              margin-left: 0px;
              margin-right: 0px;
            }
          }
          @media (max-width: 1366px) {
            .tech-support-details {
              width: 100%;
              margin-top: 0px;
            }
            .tech-support-hero-button11 {
              text-align: center;
            }
            .tech-support-hero-button12 {
              text-align: center;
            }
            .tech-support-details-image {
              width: 350px;
              height: 350px;
              padding: 0px;
            }
          }
          @media (max-width: 1200px) {
            .tech-support-details {
              width: 100%;
              max-width: 991px;
              padding-top: var(--dl-layout-space-threeunits);
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .tech-support-hero-button11 {
              align-self: center;
            }
            .tech-support-hero-button12 {
              align-self: center;
            }
            .tech-support-details-sub-heading {
              font-size: 17px;
              align-self: flex-start;
              text-align: center;
              line-height: 1.5;
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              text-decoration: none;
            }
            .tech-support-details-image {
              width: 350px;
              height: 350px;
              padding-left: 0px;
              padding-right: 0px;
            }
            .tech-support-heading {
              text-align: center;
            }
            .tech-support-container16 {
              grid-template-columns: 1fr;
            }
            .tech-support-banner {
              flex-direction: column;
            }
            .tech-support-container18 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-layout-space-threeunits);
            }
            .tech-support-image {
              width: var(--dl-layout-size-xxlarge);
              height: var(--dl-layout-size-xxlarge);
            }
          }
          @media (max-width: 900px) {
            .tech-support-details {
              width: 767px;
              align-items: center;
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              flex-direction: column;
              justify-content: center;
            }
            .tech-support-text3 {
              text-align: center;
            }
            .tech-support-details-sub-heading {
              font-size: 17px;
              text-align: center;
              line-height: 1.5;
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              text-decoration: none;
            }
            .tech-support-container15 {
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
            .tech-support-details-image {
              margin-top: var(--dl-layout-space-threeunits);
              margin-left: 0px;
              padding-left: 0px;
              padding-right: 0px;
            }
            .tech-support-banner {
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
          }
          @media (max-width: 480px) {
            .tech-support-details {
              width: 100%;
              max-width: 100%;
            }
            .tech-support-text2 {
              fill: var(--dl-color-primary-700);
              color: var(--dl-color-primary-700);
              font-size: 1.7rem;
              font-style: normal;
              align-items: center;
              font-weight: 500;
              letter-spacing: 2px;
              text-transform: uppercase;
            }
            .tech-support-container13 {
              flex: 1;
              align-items: center;
              flex-direction: row-reverse;
              justify-content: center;
            }
            .tech-support-container14 {
              flex: 1;
              align-self: center;
              align-items: center;
              flex-direction: row-reverse;
              justify-content: center;
            }
            .tech-support-hero-button11 {
              margin: 0px;
              padding: 1.5rem;
              font-size: 0.75rem;
              padding-top: 1.5rem;
              padding-bottom: 1.5rem;
            }
            .tech-support-hero-button12 {
              color: var(--dl-color-theme-secondary1);
              margin: 0px;
              padding: 1.5rem;
              font-size: 0.75rem;
              font-weight: bold;
              padding-right: 1.5rem;
              text-decoration: none;
              background-color: rgb(1, 12, 34);
            }
            .tech-support-details-sub-heading {
              color: var(--dl-color-theme-secondary1);
              display: none;
              font-size: 13px;
              line-height: 1.5;
              margin-left: var(--dl-layout-space-twounits);
              margin-right: var(--dl-layout-space-twounits);
              margin-bottom: var(--dl-layout-space-twounits);
              text-decoration: none;
            }
            .tech-support-container15 {
              padding-top: var(--dl-layout-space-twounits);
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-twounits);
            }
            .tech-support-details-image {
              width: 320px;
              height: 320px;
              display: none;
              margin-top: var(--dl-layout-space-unit);
              padding-top: 0px;
              margin-right: 0px;
              padding-left: 0px;
              padding-right: 0px;
            }
            .tech-support-banner {
              height: auto;
              padding-top: var(--dl-layout-space-twounits);
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-twounits);
            }
            .tech-support-image {
              width: var(--dl-layout-size-xlarge);
              height: var(--dl-layout-size-xlarge);
            }
          }
        `}
      </style>
    </>
  )
}

export default TechSupport
