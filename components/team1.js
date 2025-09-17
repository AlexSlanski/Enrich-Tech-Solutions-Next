import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Team1 = (props) => {
  return (
    <>
      <div className="thq-section-padding">
        <div className="team1-max-width thq-section-max-width">
          <div className="team1-section-title">
            <span className="team1-text10 thq-body-small">
              {props.content1 ?? (
                <Fragment>
                  <span className="team1-text68">Join Our Team Today!</span>
                </Fragment>
              )}
            </span>
            <div className="team1-content10">
              <h2 className="team1-text11 thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="team1-text53">Meet Our Team</span>
                  </Fragment>
                )}
              </h2>
              <p className="team1-text12 thq-body-large">
                {props.content2 ?? (
                  <Fragment>
                    <span className="team1-text56">
                      Meet our team of engineers and tech specialists.
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
          <div className="team1-content11">
            <div className="team1-content12">
              <div className="team1-row1">
                <div className="team1-container1">
                  <div className="team1-card1">
                    <img
                      alt="Rich Buxton tech"
                      src="https://images.unsplash.com/photo-1598387746216-506f6bd47aad?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQzfHx0ZWNobmljaWFuJTIwZGlyZWN0b3J8ZW58MHx8fHwxNzUzOTU5NTk2fDA&amp;ixlib=rb-4.1.0&amp;w=500"
                      className="team1-rich-buxton thq-img-round thq-img-ratio-1-1"
                    />
                    <div className="team1-content13">
                      <div className="team1-title1">
                        <span className="team1-text13 thq-body-small">
                          {props.member1 ?? (
                            <Fragment>
                              <span className="team1-text54">
                                Richard Buxton
                              </span>
                            </Fragment>
                          )}
                        </span>
                        <span className="team1-text14 thq-body-small">
                          {props.member1Job ?? (
                            <Fragment>
                              <span className="team1-text65">
                                Managing Director &amp; Head Technician
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                      <span className="team1-text15 thq-body-small">
                        {props.member1Content ?? (
                          <Fragment>
                            <span className="team1-text66">
                              Richard is a forward-thinking leader who is
                              passionate about technology and innovation.
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="team1-social-icons1">
                      <svg
                        viewBox="0 0 877.7142857142857 1024"
                        className="thq-icon-small"
                      >
                        <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="team1-card2">
                    <img
                      alt="David Manning Technician"
                      src="https://images.unsplash.com/photo-1529421308418-eab98863cee4?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDM3fHx0ZWNobmljaWFuJTIwZGlyZWN0b3J8ZW58MHx8fHwxNzUzOTU5NTk2fDA&amp;ixlib=rb-4.1.0&amp;w=500"
                      className="team1-david-manning thq-img-round thq-img-ratio-1-1"
                    />
                    <div className="team1-content14">
                      <div className="team1-title2">
                        <span className="team1-text16 thq-body-small">
                          {props.member3 ?? (
                            <Fragment>
                              <span className="team1-text46">
                                David Manning
                              </span>
                            </Fragment>
                          )}
                        </span>
                        <span className="team1-text17 thq-body-small">
                          {props.member3Job ?? (
                            <Fragment>
                              <span className="team1-text52">
                                Partner &amp; Technician
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                      <span className="team1-text18 thq-body-small">
                        {props.member3Content ?? (
                          <Fragment>
                            <span className="team1-text41">
                              David has a keen eye for detail and ensures all
                              repairs are done to perfection.
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="team1-social-icons2">
                      <svg
                        viewBox="0 0 877.7142857142857 1024"
                        className="thq-icon-small"
                      >
                        <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="team1-container2">
                  <div className="team1-card3">
                    <img
                      alt={props.member4Alt}
                      src={props.member4Src}
                      className="team1-laura-brady thq-img-round thq-img-ratio-1-1"
                    />
                    <div className="team1-content15">
                      <div className="team1-title3">
                        <span className="team1-text19 thq-body-small">
                          {props.member4 ?? (
                            <Fragment>
                              <span className="team1-text42">Laura Bracey</span>
                            </Fragment>
                          )}
                        </span>
                        <span className="team1-text20 thq-body-small">
                          {props.member4Job ?? (
                            <Fragment>
                              <span className="team1-text67">
                                Customer Relations Manager
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                      <span className="team1-text21 thq-body-small">
                        {props.member4Content ?? (
                          <Fragment>
                            <span className="team1-text58">
                              Laura is dedicated to providing exceptional
                              customer service and building strong
                              relationships.
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="team1-social-icons3">
                      <svg
                        viewBox="0 0 877.7142857142857 1024"
                        className="thq-icon-small"
                      >
                        <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="team1-card4">
                    <img
                      alt={props.member2Alt}
                      src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fGNvbXB1dGVyfGVufDB8fHx8MTc1Mzk2MTU1MHww&amp;ixlib=rb-4.1.0&amp;w=500"
                      className="team1-placeholder-image1 thq-img-round thq-img-ratio-1-1"
                    />
                    <div className="team1-content16">
                      <div className="team1-title4">
                        <span className="team1-text22 thq-body-small">
                          {props.member2 ?? (
                            <Fragment>
                              <span className="team1-text64">Copilot</span>
                            </Fragment>
                          )}
                        </span>
                        <span className="team1-text23 thq-body-small">
                          {props.member2Job ?? (
                            <Fragment>
                              <span className="team1-text63">
                                AI support manager
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                      <span className="team1-text24 thq-body-small">
                        {props.member2Content ?? (
                          <Fragment>
                            <span className="team1-text47">
                              Copilot has a keen eye when troubleshooting and
                              advising the team
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="team1-social-icons4">
                      <svg
                        viewBox="0 0 877.7142857142857 1024"
                        className="thq-icon-small"
                      >
                        <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="team1-row2">
                <div className="team1-container3">
                  <div className="team1-card5">
                    <img
                      alt={props.member5Alt}
                      src={props.member5Src}
                      className="team1-placeholder-image2 thq-img-round thq-img-ratio-1-1"
                    />
                    <div className="team1-content17">
                      <div className="team1-title5">
                        <span className="team1-text25 thq-body-small">
                          {props.member5 ?? (
                            <Fragment>
                              <span className="team1-text43">Full name</span>
                            </Fragment>
                          )}
                        </span>
                        <span className="team1-text26 thq-body-small">
                          {props.member5Job ?? (
                            <Fragment>
                              <span className="team1-text69">Job title</span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                      <span className="team1-text27 thq-body-small">
                        {props.member5Content ?? (
                          <Fragment>
                            <span className="team1-text45">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Suspendisse varius enim in eros elementum
                              tristique.
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="team1-social-icons5">
                      <svg
                        viewBox="0 0 877.7142857142857 1024"
                        className="thq-icon-small"
                      >
                        <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 950.8571428571428 1024"
                        className="thq-icon-small"
                      >
                        <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="team1-card6">
                    <img
                      alt={props.member6Alt}
                      src={props.member6Src}
                      className="team1-placeholder-image3 thq-img-round thq-img-ratio-1-1"
                    />
                    <div className="team1-content18">
                      <div className="team1-title6">
                        <span className="team1-text28 thq-body-small">
                          {props.member6 ?? (
                            <Fragment>
                              <span className="team1-text57">Full name</span>
                            </Fragment>
                          )}
                        </span>
                        <span className="team1-text29 thq-body-small">
                          {props.member6Job ?? (
                            <Fragment>
                              <span className="team1-text49">Job title</span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                      <span className="team1-text30 thq-body-small">
                        {props.member6Content ?? (
                          <Fragment>
                            <span className="team1-text55">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Suspendisse varius enim in eros elementum
                              tristique.
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="team1-social-icons6">
                      <svg
                        viewBox="0 0 877.7142857142857 1024"
                        className="thq-icon-small"
                      >
                        <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 950.8571428571428 1024"
                        className="thq-icon-small"
                      >
                        <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="team1-container4">
                  <div className="team1-card7">
                    <img
                      alt={props.member7Alt}
                      src={props.member7Src}
                      className="team1-placeholder-image4 thq-img-round thq-img-ratio-1-1"
                    />
                    <div className="team1-content19">
                      <div className="team1-title7">
                        <span className="team1-text31 thq-body-small">
                          {props.member7 ?? (
                            <Fragment>
                              <span className="team1-text59">Full name</span>
                            </Fragment>
                          )}
                        </span>
                        <span className="team1-text32 thq-body-small">
                          {props.member7Job ?? (
                            <Fragment>
                              <span className="team1-text61">Job title</span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                      <span className="team1-text33 thq-body-small">
                        {props.member7Content ?? (
                          <Fragment>
                            <span className="team1-text60">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Suspendisse varius enim in eros elementum
                              tristique.
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="team1-social-icons7">
                      <svg
                        viewBox="0 0 877.7142857142857 1024"
                        className="thq-icon-small"
                      >
                        <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 950.8571428571428 1024"
                        className="thq-icon-small"
                      >
                        <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="team1-card8">
                    <img
                      alt={props.member8Alt}
                      src={props.member8Src}
                      className="team1-placeholder-image5 thq-img-round thq-img-ratio-1-1"
                    />
                    <div className="team1-content20">
                      <div className="team1-title8">
                        <span className="team1-text34 thq-body-small">
                          {props.member8 ?? (
                            <Fragment>
                              <span className="team1-text50">Full name</span>
                            </Fragment>
                          )}
                        </span>
                        <span className="team1-text35 thq-body-small">
                          {props.member8Job ?? (
                            <Fragment>
                              <span className="team1-text51">Job title</span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                      <span className="team1-text36 thq-body-small">
                        {props.member8Content ?? (
                          <Fragment>
                            <span className="team1-text48">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Suspendisse varius enim in eros elementum
                              tristique.
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="team1-social-icons8">
                      <svg
                        viewBox="0 0 877.7142857142857 1024"
                        className="thq-icon-small"
                      >
                        <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 950.8571428571428 1024"
                        className="thq-icon-small"
                      >
                        <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="team1-content21">
              <div className="team1-content22">
                <h2 className="thq-heading-2 team1-text37">
                  {props.heading2 ?? (
                    <Fragment>
                      <span className="team1-text44">We’re hiring!</span>
                    </Fragment>
                  )}
                </h2>
                <span className="thq-body-small team1-text38">
                  {props.content3 ?? (
                    <Fragment>
                      <span className="team1-text40">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <button className="team1-button thq-button-filled">
                <span className="thq-body-small">
                  {props.actionContent ?? (
                    <Fragment>
                      <span className="team1-text62">Open positions</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .team1-max-width {
            gap: var(--dl-layout-space-fiveunits);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .team1-section-title {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team1-text10 {
            font-family: 'Inter';
          }
          .team1-content10 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team1-text11 {
            font-family: 'Inter';
          }
          .team1-text12 {
            font-family: 'Inter';
          }
          .team1-content11 {
            gap: var(--dl-layout-space-sixunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team1-content12 {
            gap: 64px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .team1-row1 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: center;
          }
          .team1-container1 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .team1-card1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            max-width: 500px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team1-rich-buxton {
            width: 80px;
            height: 80px;
          }
          .team1-content13 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team1-title1 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team1-text13 {
            font-style: normal;
            font-family: 'Inter';
            font-weight: 600;
          }
          .team1-text14 {
            text-align: center;
            font-family: 'Inter';
          }
          .team1-text15 {
            text-align: center;
            font-family: 'Inter';
          }
          .team1-social-icons1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .team1-card2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            max-width: 500px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team1-david-manning {
            width: 80px;
            height: 80px;
          }
          .team1-content14 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team1-title2 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team1-text16 {
            font-style: normal;
            font-family: 'Inter';
            font-weight: 600;
          }
          .team1-text17 {
            text-align: center;
            font-family: 'Inter';
          }
          .team1-text18 {
            text-align: center;
            font-family: 'Inter';
          }
          .team1-social-icons2 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .team1-container2 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .team1-card3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            max-width: 500px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team1-laura-brady {
            width: 80px;
            height: 80px;
          }
          .team1-content15 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team1-title3 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team1-text19 {
            font-style: normal;
            font-family: 'Inter';
            font-weight: 600;
          }
          .team1-text20 {
            text-align: center;
            font-family: 'Inter';
          }
          .team1-text21 {
            text-align: center;
            font-family: 'Inter';
          }
          .team1-social-icons3 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .team1-card4 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            max-width: 500px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team1-placeholder-image1 {
            width: 80px;
            height: 80px;
          }
          .team1-content16 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team1-title4 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team1-text22 {
            font-style: normal;
            font-family: 'Inter';
            font-weight: 600;
          }
          .team1-text23 {
            text-align: center;
            font-family: 'Inter';
          }
          .team1-text24 {
            text-align: center;
            font-family: 'Inter';
          }
          .team1-social-icons4 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .team1-row2 {
            gap: var(--dl-layout-space-twounits);
            display: none;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: center;
          }
          .team1-container3 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .team1-card5 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            max-width: 500px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team1-placeholder-image2 {
            width: 80px;
            height: 80px;
          }
          .team1-content17 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team1-title5 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team1-text25 {
            font-style: normal;
            font-weight: 600;
          }
          .team1-text26 {
            text-align: center;
          }
          .team1-text27 {
            text-align: center;
          }
          .team1-social-icons5 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .team1-card6 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            max-width: 500px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team1-placeholder-image3 {
            width: 80px;
            height: 80px;
          }
          .team1-content18 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team1-title6 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team1-text28 {
            font-style: normal;
            font-weight: 600;
          }
          .team1-text29 {
            text-align: center;
          }
          .team1-text30 {
            text-align: center;
          }
          .team1-social-icons6 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .team1-container4 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .team1-card7 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            max-width: 500px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team1-placeholder-image4 {
            width: 80px;
            height: 80px;
          }
          .team1-content19 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team1-title7 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team1-text31 {
            font-style: normal;
            font-weight: 600;
          }
          .team1-text32 {
            text-align: center;
          }
          .team1-text33 {
            text-align: center;
          }
          .team1-social-icons7 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .team1-card8 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            max-width: 500px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team1-placeholder-image5 {
            width: 80px;
            height: 80px;
          }
          .team1-content20 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team1-title8 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team1-text34 {
            font-style: normal;
            font-weight: 600;
          }
          .team1-text35 {
            text-align: center;
          }
          .team1-text36 {
            text-align: center;
          }
          .team1-social-icons8 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .team1-content21 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: none;
            max-width: 800px;
            align-items: center;
            flex-direction: column;
          }
          .team1-content22 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team1-button {
            width: 100%;
            max-width: 300px;
          }
          .team1-text40 {
            display: inline-block;
          }
          .team1-text41 {
            display: inline-block;
          }
          .team1-text42 {
            display: inline-block;
          }
          .team1-text43 {
            display: inline-block;
          }
          .team1-text44 {
            display: inline-block;
          }
          .team1-text45 {
            display: inline-block;
          }
          .team1-text46 {
            display: inline-block;
          }
          .team1-text47 {
            display: inline-block;
          }
          .team1-text48 {
            display: inline-block;
          }
          .team1-text49 {
            display: inline-block;
          }
          .team1-text50 {
            display: inline-block;
          }
          .team1-text51 {
            display: inline-block;
          }
          .team1-text52 {
            display: inline-block;
          }
          .team1-text53 {
            display: inline-block;
          }
          .team1-text54 {
            display: inline-block;
          }
          .team1-text55 {
            display: inline-block;
          }
          .team1-text56 {
            display: inline-block;
          }
          .team1-text57 {
            display: inline-block;
          }
          .team1-text58 {
            display: inline-block;
          }
          .team1-text59 {
            display: inline-block;
          }
          .team1-text60 {
            display: inline-block;
          }
          .team1-text61 {
            display: inline-block;
          }
          .team1-text62 {
            display: inline-block;
          }
          .team1-text63 {
            display: inline-block;
          }
          .team1-text64 {
            display: inline-block;
          }
          .team1-text65 {
            display: inline-block;
          }
          .team1-text66 {
            display: inline-block;
          }
          .team1-text67 {
            display: inline-block;
          }
          .team1-text68 {
            display: inline-block;
          }
          .team1-text69 {
            display: inline-block;
          }
          @media (max-width: 1920px) {
            .team1-text10 {
              font-family: Inter;
            }
            .team1-text11 {
              font-family: Inter;
            }
            .team1-text12 {
              font-family: Inter;
            }
            .team1-container1 {
              align-items: flex-start;
              flex-direction: row;
              justify-content: center;
            }
            .team1-text13 {
              font-family: Inter;
            }
            .team1-text14 {
              font-family: Inter;
            }
            .team1-text15 {
              font-family: Inter;
            }
            .team1-text16 {
              font-family: Inter;
            }
            .team1-text17 {
              font-family: Inter;
            }
            .team1-text18 {
              font-family: Inter;
            }
            .team1-text19 {
              font-family: Inter;
            }
            .team1-text20 {
              font-family: Inter;
            }
            .team1-text21 {
              font-family: Inter;
            }
            .team1-text22 {
              font-family: Inter;
            }
            .team1-text24 {
              font-family: Inter;
            }
            .team1-row2 {
              display: none;
            }
            .team1-content21 {
              display: none;
            }
            .team1-text63 {
              font-family: Inter;
            }
          }
          @media (max-width: 991px) {
            .team1-content11 {
              gap: var(--dl-layout-space-fourunits);
            }
          }
          @media (max-width: 767px) {
            .team1-row1 {
              align-items: center;
              flex-direction: column;
            }
            .team1-row2 {
              align-items: center;
              flex-direction: column;
            }
          }
          @media (max-width: 480px) {
            .team1-max-width {
              display: flex;
            }
          }
          @media (max-width: 479px) {
            .team1-text10 {
              text-align: center;
            }
            .team1-text11 {
              text-align: center;
            }
            .team1-text12 {
              text-align: center;
            }
            .team1-container1 {
              flex-direction: column;
            }
            .team1-container2 {
              flex-direction: column;
            }
            .team1-container3 {
              flex-direction: column;
            }
            .team1-container4 {
              flex-direction: column;
            }
            .team1-text37 {
              text-align: center;
            }
            .team1-text38 {
              text-align: center;
            }
            .team1-button {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Team1.defaultProps = {
  content3: undefined,
  member8Alt: 'Member Alt',
  member3Content: undefined,
  member4: undefined,
  member5Alt: 'Member Alt',
  member6Src:
    'https://images.unsplash.com/photo-1486663845017-3eedaa78617f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MDQxMTc5M3w&ixlib=rb-4.1.0&q=80&w=1080',
  member5: undefined,
  member4Alt: 'Image of Sarah Brown, Customer Relations Manager',
  heading2: undefined,
  member5Content: undefined,
  member7Src:
    'https://images.unsplash.com/photo-1623330188314-8f4645626731?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MDQxMTc5M3w&ixlib=rb-4.1.0&q=80&w=1080',
  member3: undefined,
  member2Content: undefined,
  member8Content: undefined,
  member6Job: undefined,
  member8: undefined,
  member8Job: undefined,
  member3Job: undefined,
  heading1: undefined,
  member1: undefined,
  member6Content: undefined,
  content2: undefined,
  member6: undefined,
  member4Content: undefined,
  member5Src:
    'https://images.unsplash.com/photo-1616766098946-e4fabb7d6da0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MDQxMTc5Mnw&ixlib=rb-4.1.0&q=80&w=1080',
  member7: undefined,
  member7Alt: 'Member Alt',
  member7Content: undefined,
  member7Job: undefined,
  actionContent: undefined,
  member2Job: undefined,
  member2: undefined,
  member1Job: undefined,
  member6Alt: 'Member Alt',
  member1Content: undefined,
  member2Alt: 'Image of Emily Johnson, Head of IT Support',
  member8Src:
    'https://images.unsplash.com/photo-1497316730643-415fac54a2af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MDQxMTc5Mnw&ixlib=rb-4.1.0&q=80&w=1080',
  member4Src:
    'https://images.unsplash.com/photo-1635098995643-55593e2d161d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDUxfHxibG9uZGUlMjBmZW1hbGUlMjBvZmZpY2UlMjBjbG90aGluZ3xlbnwwfHx8fDE3NTQ2NjQ4NzV8MA&ixlib=rb-4.1.0&w=500',
  member4Job: undefined,
  content1: undefined,
  member5Job: undefined,
}

Team1.propTypes = {
  content3: PropTypes.element,
  member8Alt: PropTypes.string,
  member3Content: PropTypes.element,
  member4: PropTypes.element,
  member5Alt: PropTypes.string,
  member6Src: PropTypes.string,
  member5: PropTypes.element,
  member4Alt: PropTypes.string,
  heading2: PropTypes.element,
  member5Content: PropTypes.element,
  member7Src: PropTypes.string,
  member3: PropTypes.element,
  member2Content: PropTypes.element,
  member8Content: PropTypes.element,
  member6Job: PropTypes.element,
  member8: PropTypes.element,
  member8Job: PropTypes.element,
  member3Job: PropTypes.element,
  heading1: PropTypes.element,
  member1: PropTypes.element,
  member6Content: PropTypes.element,
  content2: PropTypes.element,
  member6: PropTypes.element,
  member4Content: PropTypes.element,
  member5Src: PropTypes.string,
  member7: PropTypes.element,
  member7Alt: PropTypes.string,
  member7Content: PropTypes.element,
  member7Job: PropTypes.element,
  actionContent: PropTypes.element,
  member2Job: PropTypes.element,
  member2: PropTypes.element,
  member1Job: PropTypes.element,
  member6Alt: PropTypes.string,
  member1Content: PropTypes.element,
  member2Alt: PropTypes.string,
  member8Src: PropTypes.string,
  member4Src: PropTypes.string,
  member4Job: PropTypes.element,
  content1: PropTypes.element,
  member5Job: PropTypes.element,
}

export default Team1
