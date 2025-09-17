import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Header11 from '../components/header11'
import ContactForm10 from '../components/contact-form10'
import TestimonialCard22 from '../components/testimonial-card22'
import TestimonialCard42 from '../components/testimonial-card42'
import Footer3 from '../components/footer3'

const Contact = (props) => {
  return (
    <>
      <div className="contact-container10">
        <Head>
          <title>
            Contact - Market Harborough Computer Repair | Apple Service | Tech
            help
          </title>
          <meta
            name="description"
            content="Experts in Computer repair, Apple Service, Gaming PC Builds. Offering advice, solutions, tech support and sustainable practices to keep you connected."
          />
          <meta
            property="og:title"
            content="Contact - Market Harborough Computer Repair | Apple Service | Tech help"
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
        <Header11 rootClassName="header11root-class-name3"></Header11>
        <div className="contact-details">
          <div className="contact-container11">
            <h1 className="contact-text10">
              <span>Contact us</span>
              <br></br>
            </h1>
            <span className="contact-text13">
              welcome to ENRICH TECH SOLUTIONS
            </span>
          </div>
          <div className="contact-container12">
            <a
              href="mailto:info@enrichtech.co.uk?subject=Contact from website"
              className="contact-hero-button11 button"
            >
              REPAIR MY DEVICE
            </a>
            <a href="tel:01858437028" className="contact-hero-button12 button">
              CALL US NOW
            </a>
          </div>
        </div>
        <ContactForm10
          email={
            <Fragment>
              <span className="contact-text14">info@enrichtech.co.uk</span>
            </Fragment>
          }
          phone={
            <Fragment>
              <span className="contact-text15">
                <span>01858 437028</span>
                <br></br>
              </span>
            </Fragment>
          }
          address={
            <Fragment>
              <span className="contact-text18">
                Unit G11 Harborough Market Hall, Northampton Road, Market
                Harborough, LE16 9HB
              </span>
            </Fragment>
          }
          submitAction={
            <Fragment>
              <span className="contact-text19">Submit</span>
            </Fragment>
          }
          rootClassName="contact-form10root-class-name"
        ></ContactForm10>
        <Link href="/contact">
          <a className="contact-link">
            <strong className="contact-details-sub-heading">
              <span>
                Enrich Tech Solutions - for all things tech - Computer service,
                IT Helpdesk, Tech Repairs and Solutions, and more.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                Our professional and friendly technicians are based in Market
                Harborough, Leicestershire and serve the Midlands and beyond.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>Contact us, we&apos;ll be happy to help.</span>
            </strong>
          </a>
        </Link>
        <div className="contact-testimonial">
          <div className="contact-container13">
            <div className="contact-container14">
              <div className="contact-container15">
                <TestimonialCard22
                  name="Helen"
                  text={
                    <Fragment>
                      <span className="contact-text25">
                        Richard really knows his stuff! So helpful, had real
                        problems with a forgotten password, all sorted at a good
                        price. Recommend if anyone has problems with an iPhone.
                        Totally brilliant!!
                      </span>
                    </Fragment>
                  }
                  quote="Richard has helped me with all my devices and equipment. Such a great help. The service is a delight and top professional."
                  profileSrc="https://images.unsplash.com/photo-1615489011343-118156bde304?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIzOXx8cG9ydHJhaXQlMjBibGFjayUyMGFuZCUyMHdoaXRlfGVufDB8fHx8MTcwNzc1NTkyOHww&amp;ixlib=rb-4.0.3&amp;h=200"
                  rootClassName="rootClassName1"
                ></TestimonialCard22>
              </div>
              <TestimonialCard22
                name="Harinder"
                text={
                  <Fragment>
                    <span className="contact-text26">
                      Really knows his stuff, great business, great support. Has
                      built several computers and outfitted us with lots of
                      extras and recommendations. Always a pleasure.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </Fragment>
                }
                quote="Really knows his stuff, great business, great support. Has built several computers and outfitted us with lots of extras and recommendations. Always a pleasure. "
                profileSrc="https://images.unsplash.com/photo-1614950338741-653dae296776?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExNnx8aW5kaWFuJTIwcG9ydHJhaXQlMjBibGFjayUyMGFuZCUyMHdoaXRlfGVufDB8fHx8MTcwNzc1NjMwNXww&amp;ixlib=rb-4.0.3&amp;h=200"
                rootClassName="rootClassName2"
              ></TestimonialCard22>
            </div>
            <div className="contact-container16">
              <TestimonialCard42
                name="Georgia"
                quote="I highly recommend EnRich's excellent service. My cherished MacBook Pro, which seemed doomed, has been brought back to life, thanks to Richard's expertise. It now operates as if it were brand new, just as he assured me there was still plenty of life left in it. This saved me thousands that I would have had to spend on a replacement. "
                pictureAlt="Georgia"
                pictureSrc="https://images.unsplash.com/photo-1496361060943-f0ae4e7228f4?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDkxfHxMYWR5fGVufDB8fHx8MTcwNzc1NTMxOHww&amp;ixlib=rb-4.0.3&amp;h=200"
                profileSrc="https://images.unsplash.com/photo-1553184118-d20774c4c1db?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxwb3J0cmFpdCUyMGJ3fGVufDB8fHx8MTYyNjQ1MjI0MA&amp;ixlib=rb-1.2.1&amp;h=1200"
                rootClassName="rootClassName"
              ></TestimonialCard42>
            </div>
          </div>
        </div>
        <div className="contact-container17">
          <div className="contact-container18">
            <div className="contact-container19">
              <React.Fragment>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d662.5176601058213!2d-0.9183452524947664!3d52.476863504894155!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877715f17981d87%3A0x293f27f945d5c3af!2sEnrich%20Tech%20Solutions%20Limited!5e0!3m2!1sen!2suk!4v1727188273118!5m2!1sen!2suk"
                  width={600}
                  height={450}
                  style={{ border: '0' }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrer-policy="no-referrer-when-downgrade"
                />
              </React.Fragment>
            </div>
          </div>
        </div>
        <div className="contact-bar"></div>
        <div className="contact-footer">
          <Footer3
            link13={
              <Fragment>
                <span className="contact-link13">
                  <span>Sitemap</span>
                  <br></br>
                </span>
              </Fragment>
            }
            rootClassName="footer3root-class-name4"
          ></Footer3>
        </div>
      </div>
      <style jsx>
        {`
          .contact-container10 {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-primary-enblue);
          }
          .contact-details {
            width: 100%;
            display: flex;
            align-self: center;
            padding-top: 0px;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
            padding-bottom: 0px;
            justify-content: center;
            background-color: var(--dl-color-primary-enblue);
          }
          .contact-container11 {
            flex: 1;
            width: auto;
            height: auto;
            display: flex;
            flex-direction: column;
          }
          .contact-text10 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-size: 35px;
            max-width: 450px;
            align-self: center;
            margin-top: var(--dl-layout-space-halfunit);
            text-align: center;
            margin-bottom: var(--dl-layout-space-halfunit);
            text-transform: capitalize;
          }
          .contact-text13 {
            fill: var(--dl-color-primary-700);
            color: var(--dl-color-primary-700);
            font-size: 25px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            padding-top: var(--dl-layout-space-unit);
            letter-spacing: 3px;
            padding-bottom: var(--dl-layout-space-unit);
            text-transform: uppercase;
          }
          .contact-container12 {
            display: flex;
            align-self: center;
            align-items: flex-start;
          }
          .contact-hero-button11 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-size: 16px;
            align-self: center;
            margin-top: 30px;
            text-align: left;
            transition: 0.3s;
            font-weight: bold;
            padding-top: 1.5rem;
            border-color: var(--dl-color-gray-white);
            border-width: 1px;
            margin-right: var(--dl-layout-space-oneandhalfunits);
            padding-left: 29px;
            border-radius: 45px;
            margin-bottom: 30px;
            padding-right: 29px;
            padding-bottom: 1.5rem;
            text-decoration: none;
            background-color: rgb(1, 12, 34);
          }
          .contact-hero-button11:hover {
            color: var(--dl-color-gray-white);
            border-color: rgba(41, 20, 119, 0.9);
            background-color: var(--dl-color-primary1-blue100);
          }
          .contact-hero-button12 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-size: 16px;
            align-self: center;
            margin-top: 30px;
            text-align: left;
            transition: 0.3s;
            font-weight: bold;
            margin-left: var(--dl-layout-space-oneandhalfunits);
            padding-top: 1.5rem;
            border-color: var(--dl-color-gray-white);
            border-width: 1px;
            padding-left: 3rem;
            border-radius: 45px;
            margin-bottom: 30px;
            padding-right: 3rem;
            padding-bottom: 1.5rem;
            text-decoration: none;
            background-color: rgb(1, 12, 34);
          }
          .contact-hero-button12:hover {
            color: var(--dl-color-gray-white);
            border-color: rgba(41, 20, 119, 0.9);
            background-color: var(--dl-color-primary1-blue100);
          }
          .contact-text14 {
            display: inline-block;
            font-family: 'Inter';
          }
          .contact-text15 {
            display: inline-block;
            font-family: 'Inter';
          }
          .contact-text18 {
            display: inline-block;
            font-family: 'Inter';
          }
          .contact-text19 {
            display: inline-block;
            font-family: 'Inter';
          }
          .contact-link {
            display: contents;
          }
          .contact-details-sub-heading {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            width: 88%;
            font-size: 17px;
            align-self: center;
            margin-top: 0px;
            text-align: center;
            line-height: 1.5;
            margin-left: 0px;
            margin-right: 0px;
            margin-bottom: var(--dl-layout-space-fourunits);
            text-decoration: none;
          }
          .contact-testimonial {
            width: 100%;
            height: 100%;
            display: flex;
            padding-top: var(--dl-layout-space-twounits);
            margin-bottom: 0px;
            padding-bottom: var(--dl-layout-space-twounits);
            background-size: cover;
            justify-content: center;
            background-image: url('https://images.unsplash.com/photo-1487611459768-bd414656ea10?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI0fHx0eXBpbmd8ZW58MHx8fHwxNzI3MjU3NDM1fDA&ixlib=rb-4.0.3&w=1500');
            background-position: center;
          }
          .contact-container13 {
            display: flex;
            padding: var(--dl-layout-space-threeunits);
            max-width: var(--dl-layout-size-maxwidth);
            align-items: stretch;
            justify-content: space-between;
          }
          .contact-container14 {
            flex: 2;
            height: auto;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-layout-space-twounits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .contact-container15 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-layout-space-twounits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .contact-text25 {
            display: inline-block;
          }
          .contact-text26 {
            display: inline-block;
          }
          .contact-container16 {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .contact-container17 {
            flex: 0 0 auto;
            width: 600px;
            height: 450px;
            display: none;
            align-self: center;
          }
          .contact-container18 {
            flex: 1;
            width: 700px;
            height: 450px;
          }
          .contact-container19 {
            display: contents;
          }
          .contact-bar {
            width: 100%;
            height: auto;
            display: flex;
            max-width: 100%;
            min-height: auto;
            align-items: center;
            padding-top: var(--dl-layout-space-twounits);
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-twounits);
            justify-content: space-between;
          }
          .contact-footer {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .contact-link13 {
            display: inline-block;
          }
          @media (max-width: 2560px) {
            .contact-details {
              width: 100%;
              margin: 0px;
              padding-top: var(--dl-layout-space-threeunits);
              padding-left: var(--dl-layout-space-fiveunits);
              padding-right: var(--dl-layout-space-fiveunits);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .contact-hero-button11 {
              align-self: center;
            }
            .contact-hero-button12 {
              align-self: center;
            }
            .contact-testimonial {
              height: 100%;
            }
            .contact-container17 {
              width: 600px;
              height: 450px;
              align-self: center;
            }
            .contact-container18 {
              width: 600px;
              height: 450px;
              margin-top: 0px;
            }
          }
          @media (max-width: 1920px) {
            .contact-details {
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .contact-text13 {
              color: var(--dl-color-primary-700);
              font-size: 24px;
              font-style: normal;
              font-weight: 500;
              letter-spacing: 3px;
              text-transform: uppercase;
            }
          }
          @media (max-width: 1366px) {
            .contact-details {
              width: 100%;
              margin: 0px;
            }
            .contact-text10 {
              color: var(--dl-color-theme-secondary1);
            }
            .contact-text13 {
              color: var(--dl-color-primary-700);
              font-size: 22px;
              font-style: normal;
              font-weight: 500;
              letter-spacing: 3px;
              text-transform: uppercase;
            }
            .contact-hero-button11 {
              color: var(--dl-color-theme-secondary1);
              padding: var(--dl-layout-space-unit);
              font-size: 14px;
              text-align: center;
              font-weight: bold;
              padding-top: var(--dl-layout-space-oneandhalfunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
              text-decoration: none;
              background-color: rgb(1, 12, 34);
            }
            .contact-hero-button12 {
              color: var(--dl-color-theme-secondary1);
              font-size: 14px;
              text-align: center;
              font-weight: bold;
              padding-top: var(--dl-layout-space-oneandhalfunits);
              padding-left: 37px;
              padding-right: 37px;
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
              text-decoration: none;
              background-color: rgb(1, 12, 34);
            }
            .contact-testimonial {
              height: 100%;
            }
            .contact-container17 {
              width: 600px;
              height: 450px;
              align-self: center;
            }
            .contact-container18 {
              width: 600px;
              height: 450px;
            }
          }
          @media (max-width: 1200px) {
            .contact-details {
              width: 100%;
              max-width: auto;
              padding-top: var(--dl-layout-space-threeunits);
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .contact-hero-button11 {
              align-self: center;
            }
            .contact-hero-button12 {
              align-self: center;
              padding-top: var(--dl-layout-space-oneandhalfunits);
              padding-left: 37px;
              padding-right: 37px;
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
            }
            .contact-details-sub-heading {
              font-size: 17px;
              align-self: flex-start;
              text-align: center;
              line-height: 1.5;
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              text-decoration: none;
            }
            .contact-testimonial {
              height: 100%;
            }
            .contact-container13 {
              flex-direction: column;
            }
            .contact-container14 {
              margin-right: 0px;
              margin-bottom: var(--dl-layout-space-twounits);
            }
            .contact-container17 {
              width: 600px;
              height: 450px;
            }
            .contact-container18 {
              width: 600px;
              height: 450px;
            }
            .contact-bar {
              height: 100%;
              flex-direction: column;
            }
          }
          @media (max-width: 900px) {
            .contact-details {
              width: 100%;
              align-items: center;
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              flex-direction: column;
              justify-content: center;
            }
            .contact-text13 {
              color: var(--dl-color-primary-700);
              font-size: 20px;
              font-style: normal;
              font-weight: 500;
              letter-spacing: 3px;
              text-transform: uppercase;
            }
            .contact-details-sub-heading {
              font-size: 17px;
              text-align: center;
              line-height: 1.5;
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              text-decoration: none;
            }
            .contact-testimonial {
              height: 100%;
            }
            .contact-container13 {
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
            .contact-container18 {
              flex: 1;
              width: 600px;
              height: 450px;
              margin-bottom: var(--dl-layout-space-twounits);
            }
            .contact-bar {
              height: 100%;
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
          }
          @media (max-width: 480px) {
            .contact-details {
              width: 100%;
              max-width: 100%;
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .contact-text10 {
              color: var(--dl-color-theme-secondary1);
              font-size: 25px;
            }
            .contact-text13 {
              fill: var(--dl-color-primary-700);
              color: var(--dl-color-primary-700);
              font-size: 17px;
              font-style: normal;
              align-items: center;
              font-weight: 500;
              letter-spacing: 2px;
              text-transform: uppercase;
            }
            .contact-container12 {
              flex: 1;
              align-self: center;
              align-items: center;
              flex-direction: row-reverse;
              justify-content: center;
            }
            .contact-hero-button11 {
              padding: 14px;
              font-size: 0.75rem;
              margin-left: 10px;
            }
            .contact-hero-button12 {
              color: var(--dl-color-theme-secondary1);
              font-size: 0.75rem;
              margin-top: 20px;
              font-weight: bold;
              padding-top: var(--dl-layout-space-unit);
              margin-right: 10px;
              padding-left: var(--dl-layout-space-oneandhalfunits);
              margin-bottom: 20px;
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-unit);
              text-decoration: none;
              background-color: rgb(1, 12, 34);
            }
            .contact-text14 {
              font-size: 14px;
            }
            .contact-text15 {
              font-size: 14px;
            }
            .contact-text18 {
              font-size: 14px;
            }
            .contact-details-sub-heading {
              width: 88%;
              font-size: 13px;
              align-self: center;
              margin-left: var(--dl-layout-space-twounits);
              margin-right: var(--dl-layout-space-twounits);
              margin-bottom: var(--dl-layout-space-twounits);
            }
            .contact-testimonial {
              height: 100%;
            }
            .contact-container13 {
              height: auto;
              max-width: auto;
              padding-top: var(--dl-layout-space-twounits);
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-twounits);
            }
            .contact-text25 {
              font-size: 15px;
            }
            .contact-text26 {
              font-size: 14px;
            }
            .contact-container17 {
              width: 450px;
              height: 450px;
              margin-bottom: var(--dl-layout-space-twounits);
            }
            .contact-container18 {
              width: 450px;
              height: 450px;
              align-self: center;
              padding-left: 0px;
            }
            .contact-bar {
              width: 100%;
              height: auto;
              max-width: auto;
              padding-top: var(--dl-layout-space-twounits);
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-twounits);
            }
          }
        `}
      </style>
    </>
  )
}

export default Contact
