import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Header1 from '../components/header1'
import Footer3 from '../components/footer3'

const GamingGallery = (props) => {
  return (
    <>
      <div className="gaming-gallery-container">
        <Head>
          <title>
            Gaming-Gallery - Market Harborough Computer Repair | Apple Service |
            Tech help
          </title>
          <meta
            name="description"
            content="Experts in Computer repair, Apple Service, Gaming PC Builds. Offering advice, solutions, tech support and sustainable practices to keep you connected."
          />
          <meta
            property="og:title"
            content="Gaming-Gallery - Market Harborough Computer Repair | Apple Service | Tech help"
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
        <Header1 rootClassName="header1root-class-name12"></Header1>
        <Footer3
          link13={
            <Fragment>
              <span className="gaming-gallery-link13">
                <span>Sitemap</span>
                <br></br>
              </span>
            </Fragment>
          }
          rootClassName="footer3root-class-name7"
        ></Footer3>
      </div>
      <style jsx>
        {`
          .gaming-gallery-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .gaming-gallery-link13 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default GamingGallery
