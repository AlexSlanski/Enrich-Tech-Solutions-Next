import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Testimonial171 = (props) => {
  return (
    <>
      <div className="thq-section-padding">
        <div className="testimonial171-max-width thq-section-max-width">
          <div className="testimonial171-container10">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="testimonial171-text31">Testimonials</span>
                </Fragment>
              )}
            </h2>
            <span className="testimonial171-text11 thq-body-small">
              {props.content1 ?? (
                <Fragment>
                  <span className="testimonial171-text26">
                    Enrich Tech Solutions provided excellent service for our
                    company&apos;s laptops. Their technicians were knowledgeable
                    and efficient, solving our issues promptly.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="thq-grid-2">
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial171-card1"
                >
                  <div className="testimonial171-container12">
                    <img
                      alt={props.author1Alt}
                      src={props.author1Src}
                      className="testimonial171-image1"
                    />
                    <div className="testimonial171-container13">
                      <strong className="thq-body-large">
                        {props.author1Name ?? (
                          <Fragment>
                            <span className="testimonial171-text32">
                              John Doe
                            </span>
                          </Fragment>
                        )}
                      </strong>
                      <span className="thq-body-small">
                        {props.author1Position ?? (
                          <Fragment>
                            <span className="testimonial171-text37">
                              CEO, ABC Company
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                  <span className="testimonial171-text14 thq-body-small">
                    {props.review1 ?? (
                      <Fragment>
                        <span className="testimonial171-text35">
                          I highly recommend Enrich Tech Solutions for any tech
                          support needs.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial171-card2"
                >
                  <div className="testimonial171-container14">
                    <img
                      alt={props.author2Alt}
                      src={props.author2Src}
                      className="testimonial171-image2"
                    />
                    <div className="testimonial171-container15">
                      <strong className="thq-body-large">
                        {props.author2Name ?? (
                          <Fragment>
                            <span className="testimonial171-text25">
                              Jane Smith
                            </span>
                          </Fragment>
                        )}
                      </strong>
                      <span className="thq-body-small">
                        {props.author2Position ?? (
                          <Fragment>
                            <span className="testimonial171-text30">
                              Freelancer
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                  <span className="testimonial171-text17 thq-body-small">
                    {props.review2 ?? (
                      <Fragment>
                        <span className="testimonial171-text34">
                          I was impressed by the professionalism and expertise
                          of Enrich Tech Solutions&apos; team. They fixed my
                          gaming PC quickly and effectively.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial171-card3"
                >
                  <div className="testimonial171-container16">
                    <img
                      alt={props.author3Alt}
                      src={props.author3Src}
                      className="testimonial171-image3"
                    />
                    <div className="testimonial171-container17">
                      <strong className="thq-body-large">
                        {props.author3Name ?? (
                          <Fragment>
                            <span className="testimonial171-text29">
                              Michael Johnson
                            </span>
                          </Fragment>
                        )}
                      </strong>
                      <span className="thq-body-small">
                        {props.author3Position ?? (
                          <Fragment>
                            <span className="testimonial171-text27">
                              Small Business Owner
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                  <span className="testimonial171-text20 thq-body-small">
                    {props.review3 ?? (
                      <Fragment>
                        <span className="testimonial171-text33">
                          Enrich Tech Solutions helped streamline our IT
                          systems, providing valuable advice and support. Their
                          dedication to customer satisfaction is commendable.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial171-card4"
                >
                  <div className="testimonial171-container18">
                    <img
                      alt={props.author4Alt}
                      src={props.author4Src}
                      className="testimonial171-image4"
                    />
                    <div className="testimonial171-container19">
                      <strong className="thq-body-large">
                        {props.author4Name ?? (
                          <Fragment>
                            <span className="testimonial171-text28">
                              Sarah Lee
                            </span>
                          </Fragment>
                        )}
                      </strong>
                      <span className="thq-body-small">
                        {props.author4Position ?? (
                          <Fragment>
                            <span className="testimonial171-text36">
                              Student
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                  <span className="testimonial171-text23 thq-body-small">
                    {props.review4 ?? (
                      <Fragment>
                        <span className="testimonial171-text24">
                          As a student, I rely on my laptop for everything.
                          Enrich Tech Solutions saved the day when my laptop
                          crashed, restoring it to perfect condition.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .testimonial171-max-width {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .testimonial171-container10 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            max-width: 600px;
            align-items: center;
            margin-bottom: var(--dl-layout-space-fourunits);
            flex-direction: column;
          }
          .testimonial171-text11 {
            text-align: center;
          }
          .testimonial171-container12 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial171-image1 {
            width: var(--dl-layout-size-small);
            height: var(--dl-layout-size-small);
            object-fit: cover;
            border-radius: var(--dl-layout-radius-round);
          }
          .testimonial171-container13 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial171-text14 {
            text-align: left;
          }
          .testimonial171-container14 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial171-image2 {
            width: var(--dl-layout-size-small);
            height: var(--dl-layout-size-small);
            object-fit: cover;
            border-radius: var(--dl-layout-radius-round);
          }
          .testimonial171-container15 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial171-text17 {
            text-align: left;
          }
          .testimonial171-container16 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial171-image3 {
            width: var(--dl-layout-size-small);
            height: var(--dl-layout-size-small);
            object-fit: cover;
            border-radius: var(--dl-layout-radius-round);
          }
          .testimonial171-container17 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial171-text20 {
            text-align: left;
          }
          .testimonial171-container18 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial171-image4 {
            width: var(--dl-layout-size-small);
            height: var(--dl-layout-size-small);
            object-fit: cover;
            border-radius: var(--dl-layout-radius-round);
          }
          .testimonial171-container19 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial171-text23 {
            text-align: left;
          }
          .testimonial171-text24 {
            display: inline-block;
          }
          .testimonial171-text25 {
            display: inline-block;
          }
          .testimonial171-text26 {
            display: inline-block;
          }
          .testimonial171-text27 {
            display: inline-block;
          }
          .testimonial171-text28 {
            display: inline-block;
          }
          .testimonial171-text29 {
            display: inline-block;
          }
          .testimonial171-text30 {
            display: inline-block;
          }
          .testimonial171-text31 {
            display: inline-block;
          }
          .testimonial171-text32 {
            display: inline-block;
          }
          .testimonial171-text33 {
            display: inline-block;
          }
          .testimonial171-text34 {
            display: inline-block;
          }
          .testimonial171-text35 {
            display: inline-block;
          }
          .testimonial171-text36 {
            display: inline-block;
          }
          .testimonial171-text37 {
            display: inline-block;
          }
          @media (max-width: 1200px) {
            .testimonial171-container10 {
              margin-bottom: var(--dl-layout-space-threeunits);
            }
          }
          @media (max-width: 900px) {
            .testimonial171-container10 {
              margin-bottom: var(--dl-layout-space-oneandhalfunits);
            }
            .testimonial171-card1 {
              width: 100%;
            }
            .testimonial171-card2 {
              width: 100%;
            }
            .testimonial171-card3 {
              width: 100%;
            }
            .testimonial171-card4 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Testimonial171.defaultProps = {
  review4: undefined,
  author2Name: undefined,
  author2Src:
    'https://images.unsplash.com/photo-1445052693476-5134dfe40f70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjUzODQwMnw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Src:
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjUzODQwM3w&ixlib=rb-4.0.3&q=80&w=1080',
  author3Alt: 'Image of Michael Johnson',
  content1: undefined,
  author3Position: undefined,
  author4Name: undefined,
  author2Alt: 'Image of Jane Smith',
  author3Name: undefined,
  author2Position: undefined,
  heading1: undefined,
  author1Name: undefined,
  author1Alt: 'Image of John Doe',
  review3: undefined,
  author4Alt: 'Image of Sarah Lee',
  review2: undefined,
  review1: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1543569128-1221ed287623?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjUzODQwMnw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Position: undefined,
  author4Src:
    'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjUzODQwMnw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Position: undefined,
}

Testimonial171.propTypes = {
  review4: PropTypes.element,
  author2Name: PropTypes.element,
  author2Src: PropTypes.string,
  author3Src: PropTypes.string,
  author3Alt: PropTypes.string,
  content1: PropTypes.element,
  author3Position: PropTypes.element,
  author4Name: PropTypes.element,
  author2Alt: PropTypes.string,
  author3Name: PropTypes.element,
  author2Position: PropTypes.element,
  heading1: PropTypes.element,
  author1Name: PropTypes.element,
  author1Alt: PropTypes.string,
  review3: PropTypes.element,
  author4Alt: PropTypes.string,
  review2: PropTypes.element,
  review1: PropTypes.element,
  author1Src: PropTypes.string,
  author4Position: PropTypes.element,
  author4Src: PropTypes.string,
  author1Position: PropTypes.element,
}

export default Testimonial171
