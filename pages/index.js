import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Header11 from '../components/header11'
import Hero1 from '../components/hero1'
import Hero10 from '../components/hero10'
import FeatureCard from '../components/feature-card'
import Question from '../components/question'
import GalleryCard3 from '../components/gallery-card3'
import Footer3 from '../components/footer3'

const Home = (props) => {
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>
            Market Harborough Computer Repair | Apple Service | Tech help
          </title>
          <meta
            name="description"
            content="Experts in Computer repair, Apple Service, Gaming PC Builds. Offering advice, solutions, tech support and sustainable practices to keep you connected."
          />
          <meta
            property="og:title"
            content="Market Harborough Computer Repair | Apple Service | Tech help"
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
        <Header11 rootClassName="header11root-class-name"></Header11>
        <div className="home-container2">
          <div className="home-container3">
            <React.Fragment>
              <React.Fragment>
                {/* Google Tag Manager */}
                <Script>{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5N8NS9QK');`}</Script>
                {/* End Google Tag Manager */}
                <meta
                  name="keywords"
                  content="Computer Shop, Gaming PC Build, Tech Support, Data Recovery Services, IT Services, Mobile and Tablet Repair, Gaming PC Setup, Apple Macbook Repair, Apple iMac Service, Computer Tune-Up Services, CCTV Service, Laptop Repair Services, Hi-Fi Repair Services, Computer repair Market Harborough, Computer repair, Apple repair, Apple Service, Apple Mac Repairs, Laptop repair, Laptop Service, Gaming PC Build, IT Solutions, IT Services, Gaming PC, Tech Shop, Hi-Fi, Stereo, Amplifier, Amp, CD Player, Turntable, Tech, Market Harborough, Leicestershire, Tech support and advice"
                />
              </React.Fragment>
            </React.Fragment>
          </div>
        </div>
        <Hero1
          action1={
            <Fragment>
              <span className="home-text10">Repair my device</span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="home-text11">Learn More</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text12">
                <br className="home-text13"></br>
                <span className="home-text14">
                  We believe that technology should empower, not frustrate
                </span>
                <br></br>
                <span>Based in Market Harborough and Leicester City</span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text17">
                Your one-stop shop for expert computer and device repair, remote
                support, and technology services.
              </span>
            </Fragment>
          }
          video1Src="https://videos.pexels.com/video-files/6755161/6755161-hd_1920_1080_25fps.mp4"
          rootClassName="hero1root-class-name"
        ></Hero1>
        <div className="home-services-features Content">
          <Hero10
            action2={
              <Fragment>
                <span className="home-text18">REPAIR MY DEVICE</span>
              </Fragment>
            }
            heading={
              <Fragment>
                <span className="home-text19">
                  1. VERB &quot;To enrich something means to improve its
                  quality, usually by adding something to it.&quot;
                </span>
              </Fragment>
            }
            action21={
              <Fragment>
                <span className="home-text20">FIND OUT MORE</span>
              </Fragment>
            }
            content1={
              <Fragment>
                <span className="home-text21">
                  Enrich Tech Solutions is a customer-focused tech company that
                  specialises in expert device repair, IT support, and
                  technology services for both home and business needs. Our team
                  of skilled technicians is dedicated to providing top-notch
                  services to ensure customer satisfaction.
                </span>
              </Fragment>
            }
            image1Src="https://images.unsplash.com/photo-1553484771-371a605b060b?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzMzMzI4MXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
            rootClassName="hero10root-class-name2"
          ></Hero10>
          <div className="home-container4">
            <h2 className="home-features-heading heading2">
              {' '}
              Services We Offer
            </h2>
            <span className="home-features-sub-heading">
              Choose us for professional tech support and advice, friendly
              service and fast turnaround time.
            </span>
          </div>
          <div id="Services Home" className="home-container5">
            <Link href="/apple-service">
              <a>
                <FeatureCard
                  text={
                    <Fragment>
                      <span className="home-text22">
                        We&apos;ve got you covered for all your Apple gadgets!
                        Our team of Apple fans is here to take care of your
                        devices with upgrades, fixes, and personalized
                        solutions.
                      </span>
                    </Fragment>
                  }
                  heading="Apple Repairs and Service"
                  subHeading="At Enrich Tech Solutions, we understand the importance of your Apple devices and are dedicated to providing comprehensive support for all your Apple products. Our team consists of passionate Apple enthusiasts who are ready to assist you with upgrades, repairs, and solutions tailored to your specific needs. You can trust us with all your beloved Apple devices, knowing that we are committed to ensuring they are in top-notch condition."
                  rootClassName="feature-cardroot-class-name1"
                  className="home-feature-card2"
                ></FeatureCard>
              </a>
            </Link>
            <Link href="/tech-support">
              <a>
                <FeatureCard
                  text={
                    <Fragment>
                      <span className="home-text23">
                        Get top-notch tech support for all your needs. Our
                        expert technicians are here to make sure your devices
                        work like a charm. Reach out to us today for dependable
                        solutions.
                      </span>
                    </Fragment>
                  }
                  heading="Tech Support and Advice"
                  subHeading="Expert tech support and guidance at Enrich Tech Solutions – your ultimate source for professional assistance and top-notch service. Recognizing the essential role of reliable tech support in today's digital landscape, we stand ready to be your trusted tech partner. Contact us at Enrich Tech Solutions today."
                  rootClassName="feature-cardroot-class-name"
                  className="home-feature-card3"
                ></FeatureCard>
              </a>
            </Link>
            <Link href="/news">
              <a>
                <FeatureCard
                  text={
                    <Fragment>
                      <span className="home-text24">
                        Enrich Tech Solutions is a leading tech company based in
                        Market Harborough and Leicester City, specializing in
                        professional device repair, IT support, and technology
                        services for both residential and commercial clients.
                        Our highly skilled technicians are dedicated to
                        delivering exceptional services to guarantee customer
                        satisfaction.
                      </span>
                    </Fragment>
                  }
                  heading="Gaming PC "
                  subHeading="At Enrich Tech Solutions, we don't just sell gaming PCs; we build them. Our expert team understands the intricate needs of gaming performance, ensuring that each component is meticulously selected to create a custom-built gaming rig that not only fits your style but also surpasses the competition. Whether you're looking for a £5000 behemoth rig or a budget-friendly entry build, we have the expertise to set you up for victory."
                  rootClassName="feature-cardroot-class-name2"
                  className="home-feature-card5"
                ></FeatureCard>
              </a>
            </Link>
            <FeatureCard
              text={
                <Fragment>
                  <span className="home-text25">
                    Enhance your computer&apos;s performance with our upgrade
                    and maintenance services. Consider a tune-up every 12-24
                    months to ensure smooth and secure operation. Upgrade to a
                    Solid State Drive (SSD) for a significant speed boost.
                  </span>
                </Fragment>
              }
              heading="Computer Service, Maintenance and Repair"
              subHeading="For Laptop and Computer Repairs; when it comes to PCs and laptops, we are your personal IT magicians. Fault finding, troubleshooting and optimizing performance, we undertake a methodical approach to ensure your computing experience is flawess. Let us turn your nightmares into tech dreams."
              rootClassName="feature-cardroot-class-name4"
            ></FeatureCard>
            <FeatureCard
              text={
                <Fragment>
                  <span className="home-text26">
                    Our team is here to make sure you have a great experience,
                    whether you come to our Leicester or Market Harborough
                    locations, or choose our callout service, one-on-one
                    tutoring, or ongoing support. We&apos;re always ready to
                    help with a smile!
                  </span>
                </Fragment>
              }
              heading="Callout Services"
              subHeading="Our team is dedicated to delivering a welcoming and attentive service to guarantee a positive experience. Whether you visit us in Leicester city or Market Harborough, or opt for our callout service, one-to-one tutoring, or ongoing support, we are here to assist you with a smile."
              rootClassName="feature-cardroot-class-name5"
            ></FeatureCard>
            <Link href="/about">
              <a>
                <FeatureCard
                  text={
                    <Fragment>
                      <span className="home-text27">
                        Top-notch hi-fi and stereo repair services for music
                        lovers. Expertly fix speakers, amps, and audio gear to
                        keep the tunes flowing. From instruments to DJ
                        equipment, HiFi and audio kit. Reach out for help or
                        repairs.
                      </span>
                    </Fragment>
                  }
                  heading="Hi-Fi and Vintage Stereo Repair"
                  subHeading="For audiophiles and music lovers, our hi-fi and stereo repair services are a symphony of expertise. Let the music play on as we meticulously restore the harmony to your speakers, amplifiers, and audio equipment. Our love of tech extends into musical kit, electrical musical intruments, DJ controllers and mixers, Stereo, Amps, CD Players, Turntables - give us a call if you need advice or repairs."
                  rootClassName="feature-cardroot-class-name3"
                  className="home-feature-card6"
                ></FeatureCard>
              </a>
            </Link>
          </div>
          <div className="home-faq1">
            <div className="home-faq-container">
              <Link href="/services">
                <a className="home-link5 button">VIEW ALL SERVICES</a>
              </Link>
              <div className="home-faq2">
                <div className="home-container6">
                  <span className="home-text28 sectionTitle">
                    <span>FAQ</span>
                    <br></br>
                  </span>
                  <h2 className="home-text31 heading2">Common questions</h2>
                  <span className="home-text32">
                    <span>
                      Here are some of the most common questions that we get.
                    </span>
                    <br></br>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </div>
                <div className="home-container7">
                  <Question
                    text={
                      <Fragment>
                        <span className="home-text43">
                          We offer support, upgrades optimisations and repairs
                          for all manner of tech. This not only includes all
                          manner of computers and laptops, be they Apple,
                          Windows or Linux OS; but also musical equipment,
                          stereo and Hi-Fi systems, CD players, Turntables, DJ
                          kit, Amps, tablets and phones and tablets as well.
                          Anything with an electrical current, if it is playing
                          up, or needs some TLC, we are here to help.
                        </span>
                      </Fragment>
                    }
                    answer="Yes, we provide a 6 month warranty for all our repair services. Please contact us for more details."
                    question="What types of tech repairs do you offer?"
                    rootClassName="questionroot-class-name"
                  ></Question>
                  <Question
                    text={
                      <Fragment>
                        <span className="home-text44">
                          Yes, we are more than happy to give tech advice, one
                          to one tech support and solutions for all manner of
                          issues for home or business uses.
                        </span>
                      </Fragment>
                    }
                    answer="We offer repairs for all manner of tech, be it computers or laptops, Apple, Windows or Linux OS, musical equipment, stereo and Hi-Fi systems, CD players, Turntables, DJ kit, Amps, tablets and phones as well!"
                    question="Do you provide tech support and advice?"
                  ></Question>
                  <Question
                    text={
                      <Fragment>
                        <span className="home-text45">
                          The repair time can vary depending on the complexity
                          of the issue. We strive to complete repairs as quickly
                          as possible, same day if parts are on hand.
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </Fragment>
                    }
                    answer="The repair time can vary depending on the complexity of the issue. We strive to complete repairs as quickly as possible, same day if parts are on hand. "
                    question="How long does it take to repair a device?"
                  ></Question>
                  <Question
                    text={
                      <Fragment>
                        <span className="home-text46">
                          Yes, we provide a 6 month warranty for all our repair
                          services. Also for device and computer sales and we
                          match supplier warranties like for like. Please
                          contact us for more details.
                        </span>
                      </Fragment>
                    }
                    answer="Yes, we provide a 6 month warranty for all our repair services. Please contact us for more details."
                    question="Do you offer warranty for your repairs?"
                  ></Question>
                  <Question
                    text={
                      <Fragment>
                        <span className="home-text47">
                          Although we recommend scheduling appointments, we also
                          welcome walk-ins. Please be advised that there might
                          be a waiting period based on our current workload.
                        </span>
                      </Fragment>
                    }
                    answer="Yes, we provide a 6 month warranty for all our repair services. Please contact us for more details."
                    question="Can I bring my device for repair without an appointment?"
                  ></Question>
                </div>
              </div>
            </div>
          </div>
          <div className="home-stats">
            <div className="home-stat1">
              <h3 className="home-text48">
                <span>1000+</span>
                <br></br>
              </h3>
              <span className="home-text51">Happy clients</span>
              <span className="home-text52">
                We are always happy to help and happy to support. We can come
                out to you or you may come and visit us at our store in
                Leicester or Market Harborough. 
              </span>
            </div>
            <div className="home-stat2">
              <h3 className="home-text53">1000+</h3>
              <span className="home-text54">Devices Repaired</span>
              <span className="home-text55">
                We have repaired a wide range of devices, all your laptops,
                Gaming computers, printers, Macs, tablets, and phones for
                thousands of satisfied customers over the years.
              </span>
            </div>
            <div className="home-stat3">
              <h3 className="home-text56">10+</h3>
              <span className="home-text57">Years</span>
              <span className="home-text58">
                Extensive expertise in IT, tech repairs, system administration,
                and support. Our team is well-versed in hardware and computer
                systems, always eager to assist.
              </span>
            </div>
            <div className="home-stat4">
              <h3 className="home-text59">100s</h3>
              <span className="home-text60">Home support callouts</span>
              <span className="home-text61">
                Home and business visits for your convenience, to help with any
                issues with your tech. 
              </span>
            </div>
          </div>
        </div>
        <div id="Services gallery" className="home-services-gallery">
          <div className="home-gallery">
            <span className="home-gallery-sub-heading">
              <span>
                Some delicious images of things in bits
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                -
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>and other things beautifully whole</span>
            </span>
            <div id="Image gallery" className="home-container8">
              <GalleryCard3
                imageAlt="Phone Repair"
                imageSrc="https://images.unsplash.com/photo-1588515603068-adb330f26e92?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fGlwaG9uZSUyMHJlcGFpcnxlbnwwfHx8fDE3MDU0MDUzMjh8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="rootClassName"
              ></GalleryCard3>
              <GalleryCard3
                imageAlt="Phone Repair"
                imageSrc="https://images.unsplash.com/photo-1563770660941-20978e870e26?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fGNvbXB1dGVyJTIwcmVwYWlyfGVufDB8fHx8MTcwNTQwNDM0NXww&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="rootClassName3"
              ></GalleryCard3>
              <GalleryCard3
                imageAlt="PC Repair"
                imageSrc="https://images.unsplash.com/photo-1494173853739-c21f58b16055?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwNDYzNDEyNXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                rootClassName="rootClassName11"
              ></GalleryCard3>
              <GalleryCard3
                imageAlt="Gaming PC"
                imageSrc="https://images.unsplash.com/photo-1587202372775-e229f172b9d7?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDd8fGdhbWluZyUyMHBjfGVufDB8fHx8MTcwNTQwNTI2NHww&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="rootClassName9"
              ></GalleryCard3>
              <GalleryCard3
                imageSrc="https://images.unsplash.com/photo-1583413230419-11fff3f13086?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwNDYzNDEyNXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                rootClassName="rootClassName2"
              ></GalleryCard3>
              <GalleryCard3
                imageSrc="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwNDYzNDEyNXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                rootClassName="rootClassName4"
              ></GalleryCard3>
              <GalleryCard3
                imageAlt="HOME CALLOT"
                imageSrc="https://images.unsplash.com/photo-1504610926078-a1611febcad3?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwNDYzNDEyNXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                rootClassName="rootClassName5"
              ></GalleryCard3>
              <GalleryCard3
                imageSrc="https://images.unsplash.com/photo-1588587921053-453ee6651233?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDUyfHxnYW1pbmclMjBwY3xlbnwwfHx8fDE3MDU0MDUzOTF8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="rootClassName1"
              ></GalleryCard3>
              <GalleryCard3
                imageSrc="https://images.unsplash.com/photo-1504639725590-34d0984388bd?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwNDYzNDEyNXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                rootClassName="rootClassName10"
              ></GalleryCard3>
              <GalleryCard3
                imageAlt="HOME CALL SERIVCE"
                imageSrc="https://images.unsplash.com/photo-1597049176495-60ca7846c7ba?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE5fHxnYW1pbmclMjBwY3xlbnwwfHx8fDE3MDU0MDUyNjR8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="rootClassName6"
              ></GalleryCard3>
              <GalleryCard3
                imageAlt="Home callout"
                imageSrc="https://images.unsplash.com/photo-1620283084854-3585542e25ba?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE3fHxjb21wdXRlciUyMHJlcGFpcnxlbnwwfHx8fDE3MDU0MDQzNDV8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="rootClassName7"
              ></GalleryCard3>
              <GalleryCard3
                imageSrc="https://images.unsplash.com/photo-1457433575995-8407028a9970?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwNDYzNDEyNXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                rootClassName="rootClassName8"
              ></GalleryCard3>
            </div>
            <Link href="/services">
              <a className="home-link6 button">VIEW ALL SERVICES</a>
            </Link>
            <div className="home-container9">
              <a
                href="mailto:info@enrichtech.co.uk?subject=Contact from website"
                className="home-hero-button11 button"
              >
                REPAIR MY DEVICE
              </a>
              <a href="tel:01858437028" className="home-hero-button12 button">
                CALL US NOW
              </a>
            </div>
          </div>
        </div>
        <Footer3
          link13={
            <Fragment>
              <span className="home-link13">
                <span>Sitemap</span>
                <br></br>
              </span>
            </Fragment>
          }
          rootClassName="footer3root-class-name1"
        ></Footer3>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            display: flex;
            overflow: auto;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-primary-enblue);
          }
          .home-container2 {
            width: auto;
          }
          .home-container3 {
            display: contents;
          }
          .home-text10 {
            display: inline-block;
          }
          .home-text11 {
            display: inline-block;
          }
          .home-text12 {
            color: var(--dl-color-theme-secondary1);
            display: inline-block;
          }
          .home-text14 {
            font-style: italic;
            font-weight: 100;
            text-transform: capitalize;
          }
          .home-text17 {
            color: var(--dl-color-theme-secondary1);
            display: inline-block;
            font-size: 37px;
          }
          .home-services-features {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            padding: 150px;
            align-items: center;
            padding-top: var(--dl-layout-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: flex-start;
            background-color: var(--dl-color-primary-enblue);
          }
          .home-text18 {
            display: inline-block;
          }
          .home-text19 {
            fill: var(--dl-color-gray-black);
            color: var(--dl-color-theme-accent2);
            display: inline-block;
            font-size: 28px;
          }
          .home-text20 {
            display: inline-block;
          }
          .home-text21 {
            color: var(--dl-color-theme-secondary1);
            display: inline-block;
            font-size: 24px;
            font-family: 'Inter';
          }
          .home-container4 {
            width: 1359px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-features-heading {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-size: 30px;
            font-family: 'Raleway';
            line-height: 1.6;
            margin-bottom: var(--dl-layout-space-oneandhalfunits);
          }
          .home-features-sub-heading {
            fill: var(--dl-color-primary-700);
            color: var(--dl-color-primary-700);
            font-size: 18px;
            text-align: left;
            line-height: 1.6;
          }
          .home-container5 {
            width: 90%;
            height: 600px;
            display: grid;
            grid-gap: var(--dl-layout-space-twounits);
            background-size: cover;
            background-image: url('https://images.unsplash.com/photo-1611572789411-6240f6cea970?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE5fHxzaW1wbGV8ZW58MHx8fHwxNzUwMzQ1OTUwfDA&ixlib=rb-4.1.0&w=1400');
            background-repeat: no-repeat;
            grid-template-rows: 1fr 1fr;
            background-position: center;
            grid-template-columns: 1fr 1fr 1fr;
          }
          .home-feature-card2 {
            text-decoration: none;
          }
          .home-text22 {
            color: var(--dl-color-gray-black);
            display: inline-block;
          }
          .home-feature-card3 {
            text-decoration: none;
          }
          .home-text23 {
            color: var(--dl-color-gray-black);
            display: inline-block;
          }
          .home-feature-card5 {
            text-decoration: none;
          }
          .home-text24 {
            color: var(--dl-color-gray-black);
            display: inline-block;
          }
          .home-text25 {
            color: var(--dl-color-gray-black);
            display: inline-block;
          }
          .home-text26 {
            color: var(--dl-color-gray-black);
            display: inline-block;
          }
          .home-feature-card6 {
            text-decoration: none;
          }
          .home-text27 {
            color: var(--dl-color-gray-black);
            display: inline-block;
          }
          .home-faq1 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-faq-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-threeunits);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-link5 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-size: 18px;
            align-self: center;
            text-align: center;
            transition: 0.3s;
            font-weight: bold;
            padding-top: 1.5rem;
            border-color: var(--dl-color-gray-white);
            border-width: 1px;
            padding-left: 3rem;
            border-radius: 45px;
            padding-right: 3rem;
            grid-row-start: 3;
            padding-bottom: 1.5rem;
            text-decoration: none;
            background-color: rgb(1, 12, 34);
            grid-column-start: 2;
          }
          .home-link5:hover {
            color: var(--dl-color-gray-white);
            border-color: rgba(41, 20, 119, 0.9);
            background-color: var(--dl-color-primary1-blue100);
          }
          .home-faq2 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: flex-start;
            padding-top: var(--dl-layout-space-fourunits);
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-fourunits);
          }
          .home-container6 {
            display: flex;
            max-width: 35%;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text28 {
            fill: var(--dl-color-theme-accent2);
            color: var(--dl-color-theme-accent2);
            font-family: 'Raleway';
            margin-bottom: var(--dl-layout-space-oneandhalfunits);
          }
          .home-text31 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-family: 'Raleway';
            line-height: 1.6;
            margin-bottom: var(--dl-layout-space-oneandhalfunits);
          }
          .home-text32 {
            fill: var(--dl-color-primary-700);
            color: var(--dl-color-primary-700);
            font-size: 18px;
            text-align: left;
            line-height: 1.6;
          }
          .home-container7 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text43 {
            display: inline-block;
          }
          .home-text44 {
            display: inline-block;
          }
          .home-text45 {
            display: inline-block;
          }
          .home-text46 {
            display: inline-block;
          }
          .home-text47 {
            display: inline-block;
          }
          .home-stats {
            width: 100%;
            display: none;
            padding: var(--dl-layout-space-twounits);
            grid-gap: var(--dl-layout-space-twounits);
            max-width: var(--dl-layout-size-maxwidth);
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .home-stat1 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text48 {
            fill: var(--dl-color-gray-white);
            color: var(--dl-color-gray-white);
            font-size: 3rem;
          }
          .home-text51 {
            fill: var(--dl-color-primary-700);
            color: var(--dl-color-primary-700);
            font-size: 1.15rem;
            margin-top: var(--dl-layout-space-halfunit);
            text-align: center;
          }
          .home-text52 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-size: 1rem;
            margin-top: var(--dl-layout-space-halfunit);
            text-align: center;
          }
          .home-stat2 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text53 {
            color: var(--dl-color-gray-white);
            font-size: 3rem;
          }
          .home-text54 {
            fill: var(--dl-color-primary-700);
            color: var(--dl-color-primary-700);
            font-size: 1.15rem;
            margin-top: var(--dl-layout-space-halfunit);
            text-align: center;
          }
          .home-text55 {
            color: var(--dl-color-theme-secondary1);
            font-size: 1rem;
            text-align: center;
          }
          .home-stat3 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text56 {
            fill: var(--dl-color-gray-white);
            color: var(--dl-color-gray-white);
            font-size: 3rem;
          }
          .home-text57 {
            fill: var(--dl-color-primary-700);
            color: var(--dl-color-primary-700);
            font-size: 1.15rem;
          }
          .home-text58 {
            color: var(--dl-color-theme-secondary1);
            font-size: 1rem;
            text-align: center;
          }
          .home-stat4 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text59 {
            color: var(--dl-color-gray-white);
            font-size: 3rem;
          }
          .home-text60 {
            color: var(--dl-color-primary-700);
            font-size: 1.15rem;
          }
          .home-text61 {
            color: var(--dl-color-theme-secondary1);
            font-size: 1rem;
            text-align: center;
          }
          .home-services-gallery {
            flex: auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-gallery {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-fourunits);
            align-items: center;
            padding-top: var(--dl-layout-space-threeunits);
            padding-left: var(--dl-layout-space-threeunits);
            margin-bottom: var(--dl-layout-space-sixunits);
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
          }
          .home-gallery-sub-heading {
            fill: var(--dl-color-primary-700);
            color: var(--dl-color-primary-700);
            font-size: 24px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
            line-height: 1.6;
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
          }
          .home-container8 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-layout-space-unit);
            margin-top: var(--dl-layout-space-twounits);
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .home-link6 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-size: 18px;
            align-self: center;
            margin-top: var(--dl-layout-space-twounits);
            text-align: center;
            transition: 0.3s;
            font-weight: bold;
            padding-top: 1.5rem;
            border-color: var(--dl-color-gray-white);
            border-width: 1px;
            padding-left: 3rem;
            border-radius: 45px;
            padding-right: 3rem;
            grid-row-start: 3;
            padding-bottom: 1.5rem;
            text-decoration: none;
            background-color: rgb(1, 12, 34);
            grid-column-start: 2;
          }
          .home-link6:hover {
            color: var(--dl-color-gray-white);
            border-color: rgba(41, 20, 119, 0.9);
            background-color: var(--dl-color-primary1-blue100);
          }
          .home-container9 {
            display: flex;
            align-self: center;
            align-items: flex-start;
          }
          .home-hero-button11 {
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
          .home-hero-button11:hover {
            color: var(--dl-color-gray-white);
            border-color: rgba(41, 20, 119, 0.9);
            background-color: var(--dl-color-primary1-blue100);
          }
          .home-hero-button12 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            width: auto;
            font-size: 16px;
            align-self: center;
            margin-top: 30px;
            text-align: center;
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
          .home-hero-button12:hover {
            color: var(--dl-color-gray-white);
            border-color: rgba(41, 20, 119, 0.9);
            background-color: var(--dl-color-primary1-blue100);
          }
          .home-link13 {
            display: inline-block;
          }
          @media (max-width: 2560px) {
            .home-services-features {
              width: auto;
              max-width: 100%;
            }
            .home-text19 {
              font-size: 14px;
            }
            .home-features-heading {
              font-family: Raleway;
              line-height: 1.6;
            }
            .home-features-sub-heading {
              color: var(--dl-color-primary-700);
              font-size: 22px;
              line-height: 1.6;
            }
            .home-faq-container {
              margin: var(--dl-layout-space-unit);
            }
            .home-link5 {
              align-self: center;
            }
            .home-services-gallery {
              width: 100%;
            }
            .home-gallery {
              margin: var(--dl-layout-space-unit);
            }
            .home-gallery-sub-heading {
              color: var(--dl-color-primary-700);
              font-size: 22px;
              font-style: normal;
              font-weight: 600;
              line-height: 1.6;
            }
            .home-link6 {
              align-self: center;
            }
            .home-hero-button11 {
              align-self: center;
            }
            .home-hero-button12 {
              align-self: center;
            }
          }
          @media (max-width: 1920px) {
            .home-text12 {
              font-size: 21px;
            }
            .home-text13 {
              font-style: italic;
              font-weight: 100;
              text-transform: capitalize;
            }
            .home-text14 {
              font-style: italic;
              font-weight: 100;
              text-transform: capitalize;
            }
            .home-text17 {
              color: var(--dl-color-theme-secondary1);
              font-size: 35px;
            }
            .home-services-features {
              width: 100%;
              padding-top: var(--dl-layout-space-sixunits);
              padding-left: var(--dl-layout-space-fiveunits);
              padding-right: var(--dl-layout-space-fiveunits);
              grid-template-columns: 1fr 1fr 1fr;
            }
            .home-text19 {
              color: var(--dl-color-theme-accent1);
              font-size: 30px;
              font-family: Inter;
            }
            .home-text21 {
              color: var(--dl-color-theme-secondary2);
              font-size: 20px;
              font-family: Inter;
            }
            .home-container4 {
              width: 100%;
            }
            .home-features-sub-heading {
              color: var(--dl-color-primary-700);
              font-size: 18px;
              line-height: 1.6;
            }
            .home-container5 {
              width: 90%;
              height: 650px;
              grid-template-rows: 1fr 1fr;
            }
            .home-link5 {
              position: relative;
              grid-column-start: 2;
            }
            .home-gallery {
              margin: var(--dl-layout-space-twounits);
            }
            .home-link6 {
              position: relative;
              grid-column-start: 2;
            }
          }
          @media (max-width: 1366px) {
            .home-text12 {
              font-size: 21px;
            }
            .home-text17 {
              color: var(--dl-color-theme-secondary1);
              font-size: 25px;
            }
            .home-services-features {
              width: 100%;
              padding-left: var(--dl-layout-space-threeunits);
              padding-right: var(--dl-layout-space-threeunits);
            }
            .home-text19 {
              color: var(--dl-color-theme-accent2);
              font-size: 26px;
              font-family: Inter;
            }
            .home-text21 {
              color: var(--dl-color-theme-secondary2);
              font-size: 20px;
              font-family: Inter;
            }
            .home-features-heading {
              color: var(--dl-color-theme-secondary1);
              font-size: 30px;
              font-family: Raleway;
              line-height: 1.6;
            }
            .home-features-sub-heading {
              fill: var(--dl-color-primary-700);
              color: var(--dl-color-primary-700);
            }
            .home-container5 {
              height: auto;
              grid-template-rows: 1fr 1fr 1fr;
              grid-template-columns: 1fr 1fr;
            }
            .home-faq-container {
              width: 100%;
            }
            .home-link5 {
              text-align: center;
            }
            .home-faq2 {
              max-width: 100%;
            }
            .home-link6 {
              text-align: center;
            }
            .home-hero-button11 {
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
            .home-hero-button12 {
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
            .home-text12 {
              font-size: 18px;
            }
            .home-text17 {
              color: var(--dl-color-theme-secondary1);
              font-size: 30px;
            }
            .home-services-features {
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
            .home-text19 {
              color: var(--dl-color-theme-accent2);
              font-size: 24px;
              font-family: Inter;
            }
            .home-text21 {
              color: var(--dl-color-theme-secondary2);
              font-size: 20px;
              font-family: Inter;
            }
            .home-container4 {
              width: auto;
            }
            .home-features-heading {
              color: var(--dl-color-theme-secondary1);
              font-size: 26px;
              font-family: Raleway;
              line-height: 1.6;
            }
            .home-features-sub-heading {
              fill: var(--dl-color-primary-700);
              color: var(--dl-color-primary-700);
              font-size: 17px;
              text-align: center;
              line-height: 1.6;
              padding-left: var(--dl-layout-space-threeunits);
              padding-right: var(--dl-layout-space-threeunits);
            }
            .home-container5 {
              height: auto;
              grid-template-rows: 1fr 1fr 1fr;
              grid-template-columns: 1fr 1fr;
            }
            .home-faq-container {
              width: 990px;
            }
            .home-link5 {
              align-self: center;
            }
            .home-faq2 {
              width: 990px;
              max-width: auto;
            }
            .home-text32 {
              text-align: center;
              padding-left: var(--dl-layout-space-threeunits);
              padding-right: var(--dl-layout-space-threeunits);
            }
            .home-text48 {
              text-align: center;
            }
            .home-text53 {
              text-align: center;
            }
            .home-text56 {
              text-align: center;
            }
            .home-text59 {
              text-align: center;
            }
            .home-gallery-sub-heading {
              text-align: center;
            }
            .home-container8 {
              grid-template-columns: 1fr 1fr 1fr;
            }
            .home-link6 {
              align-self: center;
            }
            .home-hero-button11 {
              align-self: center;
            }
            .home-hero-button12 {
              align-self: center;
              padding-top: var(--dl-layout-space-oneandhalfunits);
              padding-left: 39px;
              padding-right: 39px;
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
            }
          }
          @media (max-width: 900px) {
            .home-text10 {
              font-size: 14px;
            }
            .home-text11 {
              font-size: 14px;
            }
            .home-text17 {
              color: var(--dl-color-theme-secondary1);
            }
            .home-services-features {
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
            .home-text19 {
              color: var(--dl-color-theme-accent1);
              font-size: 18px;
              font-family: Inter;
            }
            .home-text21 {
              color: var(--dl-color-theme-secondary2);
              font-size: 18px;
              font-family: Inter;
            }
            .home-container4 {
              width: 100%;
            }
            .home-features-heading {
              color: var(--dl-color-theme-secondary1);
              font-size: 20px;
              font-family: Raleway;
              line-height: 1.6;
            }
            .home-features-sub-heading {
              fill: var(--dl-color-primary-700);
              color: var(--dl-color-primary-700);
              width: 100%;
              font-size: 14px;
              line-height: 1.6;
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
            }
            .home-container5 {
              height: auto;
              grid-template-columns: 1fr;
            }
            .home-faq-container {
              width: 100%;
            }
            .home-link5 {
              position: relative;
              grid-row-start: 7;
              grid-column-start: 1;
            }
            .home-faq2 {
              width: 100%;
              padding-top: var(--dl-layout-space-twounits);
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
              flex-direction: column;
              padding-bottom: var(--dl-layout-space-twounits);
            }
            .home-container6 {
              max-width: 100%;
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .home-text32 {
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
            }
            .home-stats {
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
              grid-template-columns: 1fr 1fr;
            }
            .home-text51 {
              text-align: center;
            }
            .home-text54 {
              text-align: center;
            }
            .home-text57 {
              text-align: center;
            }
            .home-text60 {
              text-align: center;
            }
            .home-gallery {
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
            .home-gallery-sub-heading {
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
            }
            .home-container8 {
              grid-template-columns: 1fr 1fr;
            }
            .home-link6 {
              position: relative;
              grid-row-start: 7;
              grid-column-start: 1;
            }
            .home-hero-button12 {
              padding: var(--dl-layout-space-oneandhalfunits);
            }
          }
          @media (max-width: 480px) {
            .home-text10 {
              font-size: 14px;
            }
            .home-text11 {
              font-size: 14px;
            }
            .home-text12 {
              color: var(--dl-color-gray-white);
              font-size: 14px;
            }
            .home-text17 {
              color: var(--dl-color-theme-secondary1);
              font-size: 20px;
            }
            .home-services-features {
              width: 90%;
              max-width: auto;
              padding-top: var(--dl-layout-space-fourunits);
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: 13px;
            }
            .home-text19 {
              color: var(--dl-color-theme-accent2);
              font-size: 18px;
              font-family: Inter;
            }
            .home-text21 {
              color: var(--dl-color-theme-secondary2);
              font-size: 18px;
              font-family: Inter;
            }
            .home-features-heading {
              color: var(--dl-color-theme-secondary1);
              font-size: 20px;
              text-align: center;
              font-family: Raleway;
              line-height: 1.6;
            }
            .home-features-sub-heading {
              fill: var(--dl-color-primary-700);
              color: var(--dl-color-primary-700);
              width: var(--dl-layout-size-xxlarge);
              font-size: 14px;
              line-height: 1.6;
            }
            .home-text23 {
              color: var(--dl-color-gray-black);
            }
            .home-faq-container {
              width: 100%;
              margin: 0px;
              padding: 0px;
            }
            .home-link5 {
              margin: 0px;
              padding-top: 1.5rem;
              padding-bottom: 1.5rem;
            }
            .home-faq2 {
              width: 100%;
            }
            .home-text31 {
              text-align: center;
            }
            .home-text32 {
              color: var(--dl-color-primary-700);
            }
            .home-container7 {
              flex-direction: column;
            }
            .home-stats {
              padding-top: var(--dl-layout-space-twounits);
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-twounits);
              grid-template-columns: 1fr;
            }
            .home-text52 {
              font-size: 0.75rem;
            }
            .home-text55 {
              font-size: 0.8rem;
            }
            .home-text58 {
              font-size: 0.8rem;
            }
            .home-text60 {
              font-size: 1.15rem;
            }
            .home-text61 {
              fill: var(--dl-color-theme-secondary1);
              color: var(--dl-color-theme-secondary1);
              font-size: 0.8rem;
            }
            .home-gallery {
              width: 100%;
              padding: var(--dl-layout-space-unit);
            }
            .home-gallery-sub-heading {
              font-size: 13px;
            }
            .home-container8 {
              grid-template-columns: 1fr 1fr;
            }
            .home-link6 {
              margin: 0px;
              padding-top: 1.5rem;
              padding-bottom: 1.5rem;
            }
            .home-container9 {
              flex: 1;
              align-self: center;
              align-items: center;
              flex-direction: row-reverse;
              justify-content: center;
            }
            .home-hero-button11 {
              padding: 14px;
              font-size: 0.75rem;
              margin-left: 10px;
            }
            .home-hero-button12 {
              color: var(--dl-color-theme-secondary1);
              width: 129px;
              font-size: 0.75rem;
              margin-top: 20px;
              text-align: center;
              font-weight: bold;
              padding-top: var(--dl-layout-space-unit);
              margin-right: 10px;
              padding-left: var(--dl-layout-space-oneandhalfunits);
              margin-bottom: 20px;
              padding-right: 12px;
              padding-bottom: var(--dl-layout-space-unit);
              text-decoration: none;
              background-color: rgb(1, 12, 34);
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
