import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Header11 from '../components/header11'
import FeatureCard34 from '../components/feature-card34'
import FeatureCard33 from '../components/feature-card33'
import FeatureCard32 from '../components/feature-card32'
import FeatureCard31 from '../components/feature-card31'
import FeatureCard314 from '../components/feature-card314'
import FeatureCard36 from '../components/feature-card36'
import FeatureCard38 from '../components/feature-card38'
import FeatureCard39 from '../components/feature-card39'
import FeatureCard310 from '../components/feature-card310'
import FeatureCard313 from '../components/feature-card313'
import FeatureCard311 from '../components/feature-card311'
import FeatureCard37 from '../components/feature-card37'
import TestimonialCard1 from '../components/testimonial-card1'
import TestimonialCard11 from '../components/testimonial-card11'
import TestimonialCard111 from '../components/testimonial-card111'
import Footer3 from '../components/footer3'

const Services = (props) => {
  return (
    <>
      <div className="services-container10">
        <Head>
          <title>
            Services - Market Harborough Computer Repair | Apple Service | Tech
            help
          </title>
          <meta
            name="description"
            content="Experts in Computer repair, Apple Service, Gaming PC Builds. Offering advice, solutions, tech support and sustainable practices to keep you connected."
          />
          <meta
            property="og:title"
            content="Services - Market Harborough Computer Repair | Apple Service | Tech help"
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
        <Header11 rootClassName="header11root-class-name2"></Header11>
        <div className="services-details">
          <div className="services-container11">
            <h1 className="services-text10">
              <span>Our Services</span>
              <br></br>
            </h1>
            <span className="services-text13">
              welcome to ENRICH TECH SOLUTIONS
            </span>
          </div>
          <div className="services-container12">
            <a
              href="mailto:info@enrichtech.co.uk?subject=Contact from website"
              className="services-hero-button11 button"
            >
              REPAIR MY DEVICE
            </a>
            <a href="tel:01858437028" className="services-hero-button12 button">
              CALL US NOW
            </a>
          </div>
        </div>
        <div className="services-container13">
          <div className="services-container14">
            <div className="services-services-columns">
              <div className="services-container15">
                <Link href="/tech-support">
                  <a title="Laptop Repair">
                    <FeatureCard34
                      tech="Tech Support"
                      action="Learn More"
                      description="With over a decade of expertise in repairing laptops of various makes and models, you can rely on our seasoned team to swiftly bring your tech issues back under control and running correctly."
                      rootClassName="feature-card34root-class-name"
                      className="services-component11"
                    ></FeatureCard34>
                  </a>
                </Link>
                <FeatureCard33
                  action="CONTACT"
                  heading="Service for all your Apple devices - we love all things Apple as much as all other tech! For your upgrades, repairs and solutions think of us. All your beautiful Apple machine think of Enrich Tech Solutions!"
                  description="With over a decade of experience repairing laptops, we specialize in fixing various models from traditional to ultrabooks. Our services include screen replacements, power issues, and cooling upgrades. We prioritize repair over replacement for cost-effectiveness and environmental sustainability."
                  rootClassName="feature-card33root-class-name"
                ></FeatureCard33>
                <Link href="/apple-service">
                  <a title="Apple Service">
                    <FeatureCard32
                      tech="Tech Support"
                      text={
                        <Fragment>
                          <span className="services-text14">
                            Our team at Enrich Tech Solutions is dedicated to
                            providing comprehensive support for all your Apple
                            devices. We share your passion for everything Apple
                            and are here to assist with upgrades, repairs, and
                            solutions. You can trust us with all your beloved
                            Apple devices!
                          </span>
                        </Fragment>
                      }
                      apple="Service for all your Apple devices, iMac to iPad, iPod or MacBook Pro. All your beautiful Apple machines we can fix them all instore"
                      action="LEARN MORE"
                      heading="Our team at Enrich Tech Solutions is dedicated to providing comprehensive support for all your Apple devices. We share your passion for everything Apple and are here to assist with upgrades, repairs, and solutions. You can trust us with all your beloved Apple devices!"
                      description="Professional IT solutions around Leicestershire, Northamptonshire and Warwickshire. We can be available for call-out and support, for repairs, installing equipment and systems, for help and advice and purchasing. Give us a call if you have any questions."
                      rootClassName="rootClassName"
                      className="services-component13"
                    ></FeatureCard32>
                  </a>
                </Link>
                <FeatureCard31
                  text={
                    <Fragment>
                      <Link href="/contact">
                        <a className="services-link3">
                          <span>SEE MORE</span>
                          <br></br>
                        </a>
                      </Link>
                    </Fragment>
                  }
                  title="Gaming PC"
                  action="CONTACT"
                  description="From epic gaming PC builds to simulation rigs and rendering stations, Enrich Tech Solutions can turn your tech dreams into reality. Each build is meticulously crafted in-house using top-quality branded components to ensure you have everything you need to elevate your experience. If you would like a quote for a build, information on options and timescales, please contact us."
                  rootClassName="feature-card31root-class-name2"
                ></FeatureCard31>
                <FeatureCard314
                  description="Computer Repairs; our team of IT experts are here to solve all your PC and laptop issues. From diagnosing problems to enhancing performance, we take a systematic approach to guarantee a seamless computing experience. Let us transform your tech troubles into success stories."
                  rootClassName="feature-card314root-class-name"
                ></FeatureCard314>
                <FeatureCard36
                  action="TESTIMONIALS"
                  description="Experiencing problems with your storage devices, such as external drives or laptop drives? Whether it's slow performance or locked storage, we specialize in data recovery services that can be a lifesaver. From ticking hard drives to jammed or damaged ones, our experts are skilled at getting your data moving again and recovered."
                  rootClassName="feature-card36root-class-name"
                ></FeatureCard36>
                <FeatureCard38
                  action="CONTACT"
                  description="For expert iPad and iPhone repairs, trust Enrich Tech Solutions. Whether you have an Android or Apple device, we provide top-notch repair services, upgrades, and advice. Our skilled technicians have the knowledge and tools to fix not only laptops but also tablets, smartwatches, and smartphones."
                  rootClassName="feature-card38root-class-name1"
                ></FeatureCard38>
                <FeatureCard39
                  action="CONTACT"
                  description="Printer maintenance and repair services for various printer models, including head alignment, cleaning, and unclogging. We also provide Laser Drum Parts and Transfer belts replacement services. If you are facing the common 'printer cannot be found' issue, our expert team can assist you in resolving all your printer-related issues."
                  rootClassName="feature-card39root-class-name"
                ></FeatureCard39>
                <FeatureCard310
                  description="In today's technology-driven world, computer viruses such as malware, spyware, trojans, and phishing attacks are becoming more prevalent. Our team provides expert guidance, support, and virus removal services to combat these threats. Reach out to us for assistance - we're here to support you."
                  rootClassName="feature-card310root-class-name"
                ></FeatureCard310>
                <FeatureCard313
                  title="Computer Service and Repair"
                  action="SEE MORE"
                  description="Expert repair and maintenance services for audio and Hi-Fi systems, specializing in restoring vintage and modern models by cleaning and replacing components like capacitors, belts, speakers, and cabinets. Convenient home visits available for setups or repairs to enhance your audio experience."
                  rootClassName="feature-card313root-class-name1"
                ></FeatureCard313>
                <FeatureCard311
                  description="Expert repair and maintenance services for audio and Hi-Fi systems, specializing in restoring vintage and modern models by cleaning and replacing components like capacitors, belts, speakers, and cabinets. Convenient home visits available for setups or repairs to enhance your audio experience."
                  rootClassName="feature-card311root-class-name2"
                ></FeatureCard311>
                <FeatureCard37
                  title="Secure Cloud Back-ups"
                  action="LEARN MORE"
                  description="We partner with Amazon Web Services to ensure top-notch data security and storage for your valuable information, meeting industry standards. AWS Cloud computing offers scalability and cost-effectiveness, ideal for modern businesses looking to grow."
                  rootClassName="feature-card37root-class-name"
                ></FeatureCard37>
              </div>
            </div>
          </div>
        </div>
        <div className="services-container16">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1594636797501-ef436e157819?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDM3fHxnYW1pbmclMjBwY3xlbnwwfHx8fDE3MDU0MDUyNjV8MA&amp;ixlib=rb-4.0.3&amp;w=500"
            className="services-details-image"
          />
          <Link href="/contact">
            <a className="services-link4">
              <strong className="services-details-sub-heading">
                At Enrich Tech Solutions, we reckon we can fix just about
                anything, well that&apos;s our optimistic approach anyway, but
                we do believe there is always a way. We are dedicated to more
                than just repairing devices; we wish to make connections, and
                bring back loved devices, cherished memories, and reignite your
                passion for technology. Our tech hub is where creativity
                intersects with expertise, and every gadget gets a new lease on
                life.
              </strong>
            </a>
          </Link>
          <h1 className="services-heading">
            <span>What they’re saying</span>
            <br></br>
            <span></span>
          </h1>
          <div className="services-container17">
            <TestimonialCard1
              pictureSrc="https://images.unsplash.com/photo-1557053910-d9eadeed1c58?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHdvbWFuJTIwcG9ydHJhaXR8ZW58MHx8fHwxNjI2NDUxOTgy&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName2"
            ></TestimonialCard1>
            <TestimonialCard11 rootClassName="testimonial-card11root-class-name"></TestimonialCard11>
            <TestimonialCard111 rootClassName="testimonial-card111root-class-name"></TestimonialCard111>
          </div>
        </div>
        <div className="services-container18">
          <div className="services-banner">
            <div className="services-container19"></div>
            <img
              alt="image"
              src="/enrich%20logo-02-300h.webp"
              className="services-image"
            />
          </div>
        </div>
        <div className="services-container20">
          <div className="services-footer">
            <Footer3
              link13={
                <Fragment>
                  <span className="services-link13">
                    <span>Sitemap</span>
                    <br></br>
                  </span>
                </Fragment>
              }
              rootClassName="footer3root-class-name3"
            ></Footer3>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .services-container10 {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-primary-enblue);
          }
          .services-details {
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
          .services-container11 {
            flex: 1;
            width: auto;
            height: auto;
            display: flex;
            flex-direction: column;
          }
          .services-text10 {
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
          .services-text13 {
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
          .services-container12 {
            display: flex;
            align-self: center;
            align-items: flex-start;
          }
          .services-hero-button11 {
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
          .services-hero-button11:hover {
            color: var(--dl-color-gray-white);
            border-color: rgba(41, 20, 119, 0.9);
            background-color: var(--dl-color-primary1-blue100);
          }
          .services-hero-button12 {
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
          .services-hero-button12:hover {
            color: var(--dl-color-gray-white);
            border-color: rgba(41, 20, 119, 0.9);
            background-color: var(--dl-color-primary1-blue100);
          }
          .services-container13 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .services-container14 {
            width: 100%;
            height: 100%;
            display: flex;
            padding: var(--dl-layout-space-fiveunits);
            align-items: flex-start;
            justify-content: center;
            background-color: var(--dl-color-primary-enblue);
          }
          .services-services-columns {
            width: 90%;
            height: auto;
            display: flex;
            opacity: 0.8;
            padding: var(--dl-layout-space-fiveunits);
            max-width: auto;
            align-items: center;
            margin-left: 0px;
            margin-right: 0px;
            animation-name: slideInLeft;
            flex-direction: column;
            animation-delay: 0s;
            animation-duration: 1.3s;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .services-container15 {
            flex: 1;
            width: 100%;
            margin: var(--dl-layout-space-fourunits);
            display: grid;
            grid-gap: var(--dl-layout-space-twounits);
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .services-component11 {
            text-decoration: none;
          }
          .services-component13 {
            text-decoration: none;
          }
          .services-text14 {
            display: inline-block;
            font-size: 16px;
          }
          .services-link3 {
            display: inline-block;
          }
          .services-container16 {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-threeunits);
            max-width: var(--dl-layout-size-maxwidth);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .services-details-image {
            width: 500px;
            height: 500px;
            margin-top: var(--dl-layout-space-twounits);
            object-fit: cover;
            margin-left: 0px;
            border-radius: var(--dl-layout-radius-round);
            margin-bottom: var(--dl-layout-space-fourunits);
          }
          .services-link4 {
            display: contents;
          }
          .services-details-sub-heading {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            width: 88%;
            margin: var(--dl-layout-space-twounits);
            font-size: 17px;
            align-self: center;
            text-align: center;
            line-height: 1.5;
            text-decoration: none;
          }
          .services-heading {
            fill: var(--dl-color-primary-700);
            color: var(--dl-color-primary-700);
            margin-bottom: var(--dl-layout-space-twounits);
          }
          .services-container17 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-layout-space-twounits);
            grid-template-columns: 1fr 1fr 1fr;
          }
          .services-container18 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .services-banner {
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
          .services-container19 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-layout-space-sixunits);
            flex-direction: column;
            justify-content: space-between;
          }
          .services-image {
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
          .services-container20 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .services-footer {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
          }
          .services-link13 {
            display: inline-block;
          }
          @media (max-width: 2560px) {
            .services-details {
              padding-top: var(--dl-layout-space-threeunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .services-hero-button11 {
              align-self: center;
            }
            .services-hero-button12 {
              align-self: center;
            }
            .services-container14 {
              padding-top: var(--dl-layout-space-fiveunits);
            }
            .services-services-columns {
              margin-left: var(--dl-layout-space-twounits);
              padding-top: var(--dl-layout-space-threeunits);
              margin-right: var(--dl-layout-space-twounits);
            }
            .services-details-image {
              width: 370px;
              height: 370px;
              margin-left: 0px;
              margin-right: 0px;
            }
          }
          @media (max-width: 1920px) {
            .services-details {
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .services-text13 {
              color: var(--dl-color-primary-700);
              font-size: 24px;
              font-style: normal;
              font-weight: 500;
              letter-spacing: 3px;
              text-transform: uppercase;
            }
            .services-container14 {
              background-repeat: no-repeat;
            }
            .services-services-columns {
              width: 88%;
              padding: var(--dl-layout-space-twounits);
            }
          }
          @media (max-width: 1366px) {
            .services-details {
              width: 100%;
              margin: 0px;
            }
            .services-text10 {
              color: var(--dl-color-theme-secondary1);
            }
            .services-text13 {
              color: var(--dl-color-primary-700);
              font-size: 22px;
              font-style: normal;
              font-weight: 500;
              letter-spacing: 3px;
              text-transform: uppercase;
            }
            .services-hero-button11 {
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
            .services-hero-button12 {
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
            .services-container14 {
              height: auto;
            }
            .services-services-columns {
              width: 100%;
            }
            .services-details-image {
              width: 350px;
              height: 350px;
              padding: 0px;
            }
          }
          @media (max-width: 1200px) {
            .services-details {
              width: 100%;
              max-width: auto;
              padding-top: var(--dl-layout-space-threeunits);
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .services-hero-button11 {
              align-self: center;
            }
            .services-hero-button12 {
              align-self: center;
              padding-top: var(--dl-layout-space-oneandhalfunits);
              padding-left: 37px;
              padding-right: 37px;
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
            }
            .services-container14 {
              background-size: contain;
            }
            .services-services-columns {
              width: auto;
              margin-left: var(--dl-layout-space-twounits);
              padding-top: var(--dl-layout-space-threeunits);
              margin-right: var(--dl-layout-space-twounits);
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-unit);
            }
            .services-container15 {
              grid-template-columns: 1fr 1fr;
            }
            .services-details-image {
              width: 350px;
              height: 350px;
              padding-left: 0px;
              padding-right: 0px;
            }
            .services-details-sub-heading {
              font-size: 17px;
              align-self: flex-start;
              text-align: center;
              line-height: 1.5;
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              text-decoration: none;
            }
            .services-heading {
              text-align: center;
            }
            .services-container17 {
              grid-template-columns: 1fr;
            }
            .services-banner {
              flex-direction: column;
            }
            .services-container19 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-layout-space-threeunits);
            }
            .services-image {
              width: var(--dl-layout-size-xxlarge);
              height: var(--dl-layout-size-xxlarge);
            }
          }
          @media (max-width: 900px) {
            .services-details {
              width: 100%;
              align-items: center;
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              flex-direction: column;
              justify-content: center;
            }
            .services-text13 {
              color: var(--dl-color-primary-700);
              font-size: 20px;
              font-style: normal;
              font-weight: 500;
              letter-spacing: 3px;
              text-transform: uppercase;
            }
            .services-container14 {
              background-repeat: space;
            }
            .services-services-columns {
              margin-left: var(--dl-layout-space-halfunit);
              padding-top: var(--dl-layout-space-unit);
              margin-right: var(--dl-layout-space-halfunit);
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
            }
            .services-container16 {
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
            .services-details-image {
              margin-top: var(--dl-layout-space-threeunits);
              margin-left: 0px;
              padding-left: 0px;
              padding-right: 0px;
            }
            .services-details-sub-heading {
              font-size: 17px;
              text-align: center;
              line-height: 1.5;
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              text-decoration: none;
            }
            .services-banner {
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
          }
          @media (max-width: 480px) {
            .services-details {
              width: 100%;
              max-width: 100%;
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .services-text10 {
              color: var(--dl-color-theme-secondary1);
              font-size: 25px;
            }
            .services-text13 {
              fill: var(--dl-color-primary-700);
              color: var(--dl-color-primary-700);
              font-size: 17px;
              font-style: normal;
              align-items: center;
              font-weight: 500;
              letter-spacing: 2px;
              text-transform: uppercase;
            }
            .services-container12 {
              flex: 1;
              align-self: center;
              align-items: center;
              flex-direction: row-reverse;
              justify-content: center;
            }
            .services-hero-button11 {
              padding: 14px;
              font-size: 0.75rem;
              margin-left: 10px;
            }
            .services-hero-button12 {
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
            .services-container14 {
              width: auto;
              height: auto;
              padding: var(--dl-layout-space-unit);
            }
            .services-services-columns {
              height: auto;
              padding: 20px;
              align-self: flex-start;
              margin-left: var(--dl-layout-space-halfunit);
              margin-right: var(--dl-layout-space-halfunit);
              flex-direction: column-reverse;
              justify-content: flex-start;
              background-color: transparent;
            }
            .services-container15 {
              margin: 0px;
              grid-template-columns: 1fr;
            }
            .services-text14 {
              font-size: 14px;
            }
            .services-container16 {
              padding-top: var(--dl-layout-space-twounits);
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-twounits);
            }
            .services-details-image {
              width: 320px;
              height: 320px;
              display: none;
              margin-top: var(--dl-layout-space-unit);
              padding-top: 0px;
              margin-right: 0px;
              padding-left: 0px;
              padding-right: 0px;
            }
            .services-details-sub-heading {
              color: var(--dl-color-theme-secondary1);
              font-size: 13px;
              line-height: 1.5;
              margin-left: var(--dl-layout-space-twounits);
              margin-right: var(--dl-layout-space-twounits);
              margin-bottom: var(--dl-layout-space-twounits);
              text-decoration: none;
            }
            .services-banner {
              height: auto;
              padding-top: var(--dl-layout-space-twounits);
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-twounits);
            }
            .services-image {
              width: var(--dl-layout-size-xlarge);
              height: var(--dl-layout-size-xlarge);
            }
          }
        `}
      </style>
    </>
  )
}

export default Services
