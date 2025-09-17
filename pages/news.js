import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Header11 from '../components/header11'
import Team1 from '../components/team1'
import Gallery7 from '../components/gallery7'
import Footer3 from '../components/footer3'

const News = (props) => {
  return (
    <>
      <div className="news-container1">
        <Head>
          <title>
            News - Market Harborough Computer Repair | Apple Service | Tech help
          </title>
          <meta
            name="description"
            content="Experts in Computer repair, Apple Service, Gaming PC Builds. Offering advice, solutions, tech support and sustainable practices to keep you connected."
          />
          <meta
            property="og:title"
            content="News - Market Harborough Computer Repair | Apple Service | Tech help"
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
        <Header11 rootClassName="header11root-class-name4"></Header11>
        <div className="news-details">
          <div className="news-container2">
            <h1 className="news-text10">
              <span>News</span>
              <br></br>
            </h1>
            <span className="news-text13">
              welcome to ENRICH TECH SOLUTIONS
            </span>
          </div>
          <div className="news-container3">
            <a
              href="mailto:info@enrichtech.co.uk?subject=Contact from website"
              className="news-hero-button11 button"
            >
              REPAIR MY DEVICE
            </a>
            <a href="tel:01858437028" className="news-hero-button12 button">
              CALL US NOW
            </a>
          </div>
        </div>
        <div className="news-container4">
          <Link href="/contact">
            <a className="news-link1">
              <strong className="news-details-sub-heading">
                <span>
                  We are steadily setting up our new site,
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  our new location and new offerings.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  Why not come and visit our new store in the Harborough Market!
                </span>
                <br></br>
                <span>Please check back to keep up to date.</span>
              </strong>
            </a>
          </Link>
          <div className="news-social-bar">
            <a
              href="https://www.instagram.com/enrichtechuk/"
              target="_blank"
              rel="noreferrer noopener"
              className="news-link2"
            >
              <svg viewBox="0 0 877.7142857142857 1024" className="news-icon1">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/enrichtechsolutions/"
              target="_blank"
              rel="noreferrer noopener"
              className="news-link3"
            >
              <svg viewBox="0 0 602.2582857142856 1024" className="news-icon3">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </a>
            <a
              href="https://www.enrichtech.co.uk/"
              target="_blank"
              rel="noreferrer noopener"
              className="news-link4"
            >
              <svg viewBox="0 0 877.7142857142857 1024" className="news-icon5">
                <path d="M585.143 857.143c-5.714-33.143-27.429-147.429-80-284.571-0.571 0-1.714 0.571-2.286 0.571 0 0-222.286 77.714-294.286 234.286-3.429-2.857-8.571-6.286-8.571-6.286 65.143 53.143 148 85.714 238.857 85.714 52 0 101.143-10.857 146.286-29.714zM479.429 510.286c-9.143-21.143-19.429-42.286-30.286-63.429-193.143 57.714-378.286 53.143-384.571 53.143-0.571 4-0.571 8-0.571 12 0 96 36.571 184 96 250.286v0c102.286-182.286 304.571-247.429 304.571-247.429 5.143-1.714 10.286-2.857 14.857-4.571zM418.286 389.143c-65.143-115.429-134.286-209.143-139.429-216-104.571 49.143-182.286 145.714-206.857 261.714 9.714 0 166.286 1.714 346.286-45.714zM809.143 571.429c-8-2.286-112.571-35.429-233.714-16.571 49.143 135.429 69.143 245.714 73.143 268 84-56.571 143.429-146.857 160.571-251.429zM349.143 148c-0.571 0-0.571 0-1.143 0.571 0 0 0.571-0.571 1.143-0.571zM686.286 230.857c-65.714-58.286-152.571-93.714-247.429-93.714-30.286 0-60 4-88.571 10.857 5.714 7.429 76.571 100.571 140.571 218.286 141.143-52.571 194.286-133.714 195.429-135.429zM813.714 508c-1.143-88.571-32.571-170.286-85.143-234.286-1.143 1.143-61.143 88-209.143 148.571 8.571 17.714 17.143 36 25.143 54.286 2.857 6.286 5.143 13.143 8 19.429 129.143-16.571 256.571 11.429 261.143 12zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer noopener"
              className="news-link5"
            >
              <svg viewBox="0 0 1024 1024" className="news-icon7">
                <path d="M1013.8 307.2c0 0-10-70.6-40.8-101.6-39-40.8-82.6-41-102.6-43.4-143.2-10.4-358.2-10.4-358.2-10.4h-0.4c0 0-215 0-358.2 10.4-20 2.4-63.6 2.6-102.6 43.4-30.8 31-40.6 101.6-40.6 101.6s-10.2 82.8-10.2 165.8v77.6c0 82.8 10.2 165.8 10.2 165.8s10 70.6 40.6 101.6c39 40.8 90.2 39.4 113 43.8 82 7.8 348.2 10.2 348.2 10.2s215.2-0.4 358.4-10.6c20-2.4 63.6-2.6 102.6-43.4 30.8-31 40.8-101.6 40.8-101.6s10.2-82.8 10.2-165.8v-77.6c-0.2-82.8-10.4-165.8-10.4-165.8zM406.2 644.8v-287.8l276.6 144.4-276.6 143.4z"></path>
              </svg>
            </a>
          </div>
        </div>
        <Team1
          member1={
            <Fragment>
              <span className="news-text21">Richard Buxton</span>
            </Fragment>
          }
          member2={
            <Fragment>
              <span className="news-text22">Copilot</span>
            </Fragment>
          }
          member3={
            <Fragment>
              <span className="news-text23">David Manning</span>
            </Fragment>
          }
          member4={
            <Fragment>
              <span className="news-text24">Laura Bracey</span>
            </Fragment>
          }
          member5={
            <Fragment>
              <span className="news-text25">Full name</span>
            </Fragment>
          }
          member6={
            <Fragment>
              <span className="news-text26">Full name</span>
            </Fragment>
          }
          member7={
            <Fragment>
              <span className="news-text27">Full name</span>
            </Fragment>
          }
          member8={
            <Fragment>
              <span className="news-text28">Full name</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="news-text29">Join Our Team Today!</span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="news-text30">
                Meet our team of engineers and tech specialists.
              </span>
            </Fragment>
          }
          content3={
            <Fragment>
              <span className="news-text31">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="news-text32">Meet Our Team</span>
            </Fragment>
          }
          heading2={
            <Fragment>
              <span className="news-text33">We’re hiring!</span>
            </Fragment>
          }
          member1Job={
            <Fragment>
              <span className="news-text34">
                Managing Director &amp; Head Technician
              </span>
            </Fragment>
          }
          member1Src="https://images.unsplash.com/photo-1692055464184-fffe790a8733?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIzfHxyaWNoYXJkJTIwbWFsZSUyMHRlY2glMjBmb3VuZGVyfGVufDB8fHx8MTc1MDQxMjcwOHww&amp;ixlib=rb-4.1.0&amp;w=1500"
          member2Job={
            <Fragment>
              <span className="news-text35">AI support manager</span>
            </Fragment>
          }
          member2Src="https://images.unsplash.com/photo-1725272333736-3e6d9228f147?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDYxfHxlbWlseSUyMGZlbWFsZSUyMHRlY2h8ZW58MHx8fHwxNzUwNDEyMzk5fDA&amp;ixlib=rb-4.1.0&amp;w=1500"
          member3Job={
            <Fragment>
              <span className="news-text36">Partner &amp; Technician</span>
            </Fragment>
          }
          member4Job={
            <Fragment>
              <span className="news-text37">Customer Relations Manager</span>
            </Fragment>
          }
          member5Job={
            <Fragment>
              <span className="news-text38">Job title</span>
            </Fragment>
          }
          member6Job={
            <Fragment>
              <span className="news-text39">Job title</span>
            </Fragment>
          }
          member7Job={
            <Fragment>
              <span className="news-text40">Job title</span>
            </Fragment>
          }
          member8Job={
            <Fragment>
              <span className="news-text41">Job title</span>
            </Fragment>
          }
          actionContent={
            <Fragment>
              <span className="news-text42">Open positions</span>
            </Fragment>
          }
          member1Content={
            <Fragment>
              <span className="news-text43">
                Richard is a forward-thinking leader who is passionate about
                technology and innovation.
              </span>
            </Fragment>
          }
          member2Content={
            <Fragment>
              <span className="news-text44">
                Copilot has a keen eye when troubleshooting and advising the
                team
              </span>
            </Fragment>
          }
          member3Content={
            <Fragment>
              <span className="news-text45">
                David has a keen eye for detail and ensures all repairs are done
                to perfection.
              </span>
            </Fragment>
          }
          member4Content={
            <Fragment>
              <span className="news-text46">
                Laura is dedicated to providing exceptional customer service and
                building strong relationships.
              </span>
            </Fragment>
          }
          member5Content={
            <Fragment>
              <span className="news-text47">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </span>
            </Fragment>
          }
          member6Content={
            <Fragment>
              <span className="news-text48">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </span>
            </Fragment>
          }
          member7Content={
            <Fragment>
              <span className="news-text49">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </span>
            </Fragment>
          }
          member8Content={
            <Fragment>
              <span className="news-text50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </span>
            </Fragment>
          }
        ></Team1>
        <div className="news-gallery-card">
          <Gallery7
            image1Src="/enrichlogo2-1500w.webp"
            image2Src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDY3fHxjb21wdXRlcnN8ZW58MHx8fHwxNzE4Mjc2MzYyfDA&amp;ixlib=rb-4.0.3&amp;w=1500"
            image3Src="https://images.unsplash.com/photo-1591156336060-c8c4298d1c77?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQyfHxjb21wdXRlcnN8ZW58MHx8fHwxNzE4MjcwOTYxfDA&amp;ixlib=rb-4.0.3&amp;w=1500"
            image4Src="https://images.unsplash.com/photo-1603025832572-c5ba1fb6be8b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwOHx8Y29tcHV0ZXJzfGVufDB8fHx8MTcxODI3NjM5OXww&amp;ixlib=rb-4.0.3&amp;w=1500"
            image5Src="https://images.unsplash.com/photo-1491472253230-a044054ca35f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyMXx8Y29tcHV0ZXJzfGVufDB8fHx8MTcxODI3NjQwOXww&amp;ixlib=rb-4.0.3&amp;w=1500"
            image6Src="https://images.unsplash.com/photo-1522198648249-0657d7ff242a?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyMHx8Y29tcHV0ZXJzfGVufDB8fHx8MTcxODI3NjM5OXww&amp;ixlib=rb-4.0.3&amp;w=1500"
            image7Src="https://images.unsplash.com/photo-1487611459768-bd414656ea10?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDcwfHxjb21wdXRlcnN8ZW58MHx8fHwxNzE4Mjc2MzYyfDA&amp;ixlib=rb-4.0.3&amp;w=1500"
          ></Gallery7>
        </div>
        <div className="news-footer">
          <Footer3
            link13={
              <Fragment>
                <span className="news-link13">
                  <span>Sitemap</span>
                  <br></br>
                </span>
              </Fragment>
            }
            rootClassName="footer3root-class-name2"
          ></Footer3>
        </div>
      </div>
      <style jsx>
        {`
          .news-container1 {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .news-details {
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
          .news-container2 {
            flex: 1;
            width: auto;
            height: auto;
            display: flex;
            flex-direction: column;
          }
          .news-text10 {
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
          .news-text13 {
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
          .news-container3 {
            display: flex;
            align-self: center;
            align-items: flex-start;
          }
          .news-hero-button11 {
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
          .news-hero-button11:hover {
            color: var(--dl-color-gray-white);
            border-color: rgba(41, 20, 119, 0.9);
            background-color: var(--dl-color-primary1-blue100);
          }
          .news-hero-button12 {
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
          .news-hero-button12:hover {
            color: var(--dl-color-gray-white);
            border-color: rgba(41, 20, 119, 0.9);
            background-color: var(--dl-color-primary1-blue100);
          }
          .news-container4 {
            flex: 1;
            width: 100%;
            height: auto;
            display: flex;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
            padding-bottom: 0px;
            background-color: var(--dl-color-primary-enblue);
          }
          .news-link1 {
            display: contents;
          }
          .news-details-sub-heading {
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
          .news-social-bar {
            width: 88%;
            height: 100%;
            display: flex;
            padding: var(--dl-layout-space-threeunits);
            align-self: center;
            justify-content: center;
          }
          .news-link2 {
            display: contents;
          }
          .news-icon1 {
            fill: #d9d9d9;
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
            margin-right: var(--dl-layout-space-twounits);
            text-decoration: none;
          }
          .news-link3 {
            display: contents;
          }
          .news-icon3 {
            fill: #d9d9d9;
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
            margin-right: var(--dl-layout-space-twounits);
            text-decoration: none;
          }
          .news-link4 {
            display: contents;
          }
          .news-icon5 {
            fill: #d9d9d9;
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
            margin-right: var(--dl-layout-space-twounits);
            text-decoration: none;
          }
          .news-link5 {
            display: contents;
          }
          .news-icon7 {
            fill: #d9d9d9;
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
            text-decoration: none;
          }
          .news-text21 {
            display: inline-block;
          }
          .news-text22 {
            display: inline-block;
          }
          .news-text23 {
            display: inline-block;
          }
          .news-text24 {
            display: inline-block;
          }
          .news-text25 {
            display: inline-block;
          }
          .news-text26 {
            display: inline-block;
          }
          .news-text27 {
            display: inline-block;
          }
          .news-text28 {
            display: inline-block;
          }
          .news-text29 {
            display: inline-block;
          }
          .news-text30 {
            display: inline-block;
          }
          .news-text31 {
            display: inline-block;
          }
          .news-text32 {
            display: inline-block;
          }
          .news-text33 {
            display: inline-block;
          }
          .news-text34 {
            display: inline-block;
          }
          .news-text35 {
            display: inline-block;
          }
          .news-text36 {
            display: inline-block;
          }
          .news-text37 {
            display: inline-block;
          }
          .news-text38 {
            display: inline-block;
          }
          .news-text39 {
            display: inline-block;
          }
          .news-text40 {
            display: inline-block;
          }
          .news-text41 {
            display: inline-block;
          }
          .news-text42 {
            display: inline-block;
          }
          .news-text43 {
            display: inline-block;
          }
          .news-text44 {
            display: inline-block;
          }
          .news-text45 {
            display: inline-block;
          }
          .news-text46 {
            display: inline-block;
          }
          .news-text47 {
            display: inline-block;
          }
          .news-text48 {
            display: inline-block;
          }
          .news-text49 {
            display: inline-block;
          }
          .news-text50 {
            display: inline-block;
          }
          .news-gallery-card {
            width: 100%;
            height: 100%;
            display: flex;
            padding: var(--dl-layout-space-threeunits);
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-primary-enblue);
          }
          .news-footer {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .news-link13 {
            display: inline-block;
          }
          @media (max-width: 2560px) {
            .news-details {
              width: 100%;
              margin: 0px;
              padding-top: var(--dl-layout-space-threeunits);
              padding-left: var(--dl-layout-space-fiveunits);
              padding-right: var(--dl-layout-space-fiveunits);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .news-hero-button11 {
              align-self: center;
            }
            .news-hero-button12 {
              align-self: center;
            }
            .news-container4 {
              padding-top: var(--dl-layout-space-threeunits);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
          }
          @media (max-width: 1920px) {
            .news-details {
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .news-text13 {
              color: var(--dl-color-primary-700);
              font-size: 24px;
              font-style: normal;
              font-weight: 500;
              letter-spacing: 3px;
              text-transform: uppercase;
            }
            .news-text35 {
              font-family: Inter;
            }
            .news-gallery-card {
              padding: var(--dl-layout-space-threeunits);
            }
          }
          @media (max-width: 1366px) {
            .news-details {
              width: 100%;
              margin: 0px;
            }
            .news-text10 {
              color: var(--dl-color-theme-secondary1);
            }
            .news-text13 {
              color: var(--dl-color-primary-700);
              font-size: 22px;
              font-style: normal;
              font-weight: 500;
              letter-spacing: 3px;
              text-transform: uppercase;
            }
            .news-hero-button11 {
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
            .news-hero-button12 {
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
          }
          @media (max-width: 1200px) {
            .news-details {
              width: 100%;
              max-width: auto;
              padding-top: var(--dl-layout-space-threeunits);
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .news-hero-button11 {
              align-self: center;
            }
            .news-hero-button12 {
              align-self: center;
              padding-top: var(--dl-layout-space-oneandhalfunits);
              padding-left: 37px;
              padding-right: 37px;
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
            }
            .news-details-sub-heading {
              font-size: 17px;
              align-self: flex-start;
              text-align: center;
              line-height: 1.5;
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              text-decoration: none;
            }
          }
          @media (max-width: 900px) {
            .news-details {
              width: 100%;
              align-items: center;
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              flex-direction: column;
              justify-content: center;
            }
            .news-text13 {
              color: var(--dl-color-primary-700);
              font-size: 20px;
              font-style: normal;
              font-weight: 500;
              letter-spacing: 3px;
              text-transform: uppercase;
            }
            .news-details-sub-heading {
              font-size: 17px;
              text-align: center;
              line-height: 1.5;
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              text-decoration: none;
            }
            .news-social-bar {
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
          }
          @media (max-width: 480px) {
            .news-details {
              width: 100%;
              max-width: 100%;
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .news-text10 {
              color: var(--dl-color-theme-secondary1);
              font-size: 25px;
            }
            .news-text13 {
              fill: var(--dl-color-primary-700);
              color: var(--dl-color-primary-700);
              font-size: 17px;
              font-style: normal;
              align-items: center;
              font-weight: 500;
              letter-spacing: 2px;
              text-transform: uppercase;
            }
            .news-container3 {
              flex: 1;
              align-self: center;
              align-items: center;
              flex-direction: row-reverse;
              justify-content: center;
            }
            .news-hero-button11 {
              padding: 14px;
              font-size: 0.75rem;
              margin-left: 10px;
            }
            .news-hero-button12 {
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
            .news-container4 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .news-details-sub-heading {
              width: 88%;
              font-size: 13px;
              align-self: center;
              margin-left: var(--dl-layout-space-twounits);
              margin-right: var(--dl-layout-space-twounits);
              margin-bottom: var(--dl-layout-space-twounits);
            }
            .news-social-bar {
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

export default News
