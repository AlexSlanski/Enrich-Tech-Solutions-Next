import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const ContactForm10 = (props) => {
  return (
    <>
      <div
        className={`contact-form10-contact11 thq-section-padding ${props.rootClassName} `}
      >
        <div className="contact-form10-max-width thq-section-max-width">
          <div className="contact-form10-content1">
            <form
              name="NAME"
              action="https://formsubmit.co/18680ff3b5674f8a33b1d535c6af496d "
              method="POST"
              className="contact-form10-form thq-card"
            >
              <div className="contact-form10-input1">
                <label
                  htmlFor="contact-form-10-name"
                  className="contact-form10-text10 thq-body-small"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="contact-form-10-name"
                  name="NAME"
                  required="true"
                  placeholder="Name"
                  className="thq-input"
                />
              </div>
              <div className="contact-form10-input2">
                <label
                  htmlFor="contact-form-10-email"
                  className="contact-form10-text11 thq-body-small"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="contact-form-10-email"
                  name="EMAIL"
                  required="true"
                  placeholder="Email"
                  className="contact-form10-text-input2 thq-input"
                />
              </div>
              <div className="contact-form10-container">
                <div className="contact-form10-input3">
                  <label
                    htmlFor="contact-form-10-options"
                    className="contact-form10-text12 thq-body-small"
                  >
                    Choose topic
                  </label>
                  <select
                    id="contact-form-10-options"
                    name="TOPIC"
                    placeholder="Select one"
                    className="thq-select"
                  >
                    <option value="Appt">Book Appointment</option>
                    <option value="Support">Customer Service</option>
                  </select>
                </div>
              </div>
              <div className="contact-form10-input4">
                <label
                  htmlFor="contact-form-10-message"
                  className="contact-form10-text13 thq-body-small"
                >
                  Message
                </label>
                <textarea
                  id="contact-form-10-message"
                  name="MESSAGE"
                  rows="3"
                  placeholder="Enter your message"
                  className="contact-form10-textarea thq-input"
                ></textarea>
              </div>
              <div className="contact-form10-checkbox1">
                <input
                  type="checkbox"
                  id="contact-form-10-check"
                  checked="true"
                  required="true"
                  className="thq-checkbox"
                />
                <label
                  htmlFor="contact-form-10-check"
                  className="contact-form10-text14 thq-body-small"
                >
                  I accept the Terms
                </label>
              </div>
              <button
                type="submit"
                className="contact-form10-button thq-button-filled"
              >
                <span className="thq-body-small">
                  {props.submitAction ?? (
                    <Fragment>
                      <span className="contact-form10-text20">Submit</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </form>
            <div className="contact-form10-content2 thq-card">
              <div className="contact-form10-row1 thq-flex-row">
                <div className="contact-form10-content3">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="contact-form10-icon1 thq-icon-small"
                  >
                    <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                  </svg>
                  <div className="contact-form10-contact-info1">
                    <h3 className="contact-form10-text15 thq-heading-3">
                      Email
                    </h3>
                    <span className="contact-form10-email thq-body-small">
                      {props.email ?? (
                        <Fragment>
                          <span className="contact-form10-text19">
                            info@enrichtech.co.uk
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <div className="contact-form10-content4">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="contact-form10-icon3 thq-icon-small"
                  >
                    <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
                  </svg>
                  <div className="contact-form10-contact-info2">
                    <h3 className="contact-form10-text16 thq-heading-3">
                      Phone
                    </h3>
                    <span className="contact-form10-phone thq-body-small">
                      {props.phone ?? (
                        <Fragment>
                          <span className="contact-form10-text21">
                            <span>01858 437028</span>
                            <br></br>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <div>
                  <svg
                    viewBox="0 0 1024 1024"
                    className="contact-form10-icon5 thq-icon-small"
                  >
                    <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
                  </svg>
                  <div className="contact-form10-contact-info3">
                    <h3 className="contact-form10-text17 thq-heading-3">
                      Shop
                    </h3>
                    <span className="contact-form10-address thq-body-small">
                      {props.address ?? (
                        <Fragment>
                          <span className="contact-form10-text18">
                            Unit G11 Market Hall, Northampton Road, Market
                            Harborough, LE16 9HB
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <div className="thq-flex-row contact-form10-row2">
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1718.3891262515149!2d-0.9169383052131506!3d52.47607195635483!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877715f17981d87%3A0x293f27f945d5c3af!2sEnrich%20Tech%20Solutions%20Limited!5e0!3m2!1sen!2suk!4v1727258347811!5m2!1sen!2suk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"'
                  title="Map"
                  className="contact-form10-iframe thq-img-ratio-16-9"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .contact-form10-contact11 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            padding: var(--dl-layout-space-fourunits);
            overflow: hidden;
            position: relative;
            flex-direction: column;
          }
          .contact-form10-max-width {
            display: flex;
            flex-direction: column;
          }
          .contact-form10-content1 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .contact-form10-form {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .contact-form10-input1 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-form10-text10 {
            fill: var(--dl-color-gray-white);
            color: var(--dl-color-gray-white);
            font-style: normal;
            font-family: 'Inter';
            font-weight: 500;
            text-transform: capitalize;
          }
          .contact-form10-input2 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-form10-text11 {
            fill: var(--dl-color-gray-white);
            color: var(--dl-color-gray-white);
            font-style: normal;
            font-family: 'Inter';
            font-weight: 500;
          }
          .contact-form10-text-input2 {
            background-color: var(--dl-color-theme-neutral-light);
          }
          .contact-form10-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-form10-input3 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-form10-text12 {
            fill: var(--dl-color-gray-white);
            color: var(--dl-color-gray-white);
            font-family: 'Inter';
          }
          .contact-form10-input4 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-form10-text13 {
            fill: var(--dl-color-gray-white);
            color: var(--dl-color-gray-white);
            font-family: 'Inter';
          }
          .contact-form10-textarea {
            width: 384px;
            height: 179px;
          }
          .contact-form10-checkbox1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
          }
          .contact-form10-text14 {
            fill: var(--dl-color-gray-white);
            color: var(--dl-color-gray-white);
            font-family: 'Inter';
          }
          .contact-form10-button {
            background-color: var(--dl-color-primary1-blue80);
          }
          .contact-form10-content2 {
            align-items: stretch;
          }
          .contact-form10-row1 {
            align-items: flex-start;
          }
          .contact-form10-icon1 {
            fill: var(--dl-color-gray-white);
            width: 32px;
            height: 32px;
          }
          .contact-form10-contact-info1 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-form10-text15 {
            fill: var(--dl-color-gray-white);
            color: var(--dl-color-gray-white);
            font-family: 'Inter';
          }
          .contact-form10-email {
            fill: var(--dl-color-gray-white);
            color: var(--dl-color-gray-white);
            font-family: 'Inter';
          }
          .contact-form10-icon3 {
            fill: var(--dl-color-gray-white);
            width: 32px;
            height: 32px;
          }
          .contact-form10-contact-info2 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-form10-text16 {
            fill: var(--dl-color-gray-white);
            color: var(--dl-color-gray-white);
            font-family: 'Inter';
          }
          .contact-form10-phone {
            fill: var(--dl-color-gray-white);
            color: var(--dl-color-gray-white);
            font-family: 'Inter';
          }
          .contact-form10-icon5 {
            fill: var(--dl-color-gray-white);
            width: 32px;
            height: 32px;
          }
          .contact-form10-contact-info3 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-form10-text17 {
            fill: var(--dl-color-gray-white);
            color: var(--dl-color-gray-white);
            font-family: 'Inter';
          }
          .contact-form10-address {
            fill: var(--dl-color-gray-white);
            color: var(--dl-color-gray-white);
            font-family: 'Inter';
          }
          .contact-form10-iframe {
            width: 100%;
            height: auto;
            min-height: 450px;
            object-fit: cover;
          }
          .contact-form10-text18 {
            display: inline-block;
          }
          .contact-form10-text19 {
            display: inline-block;
          }
          .contact-form10-text20 {
            display: inline-block;
            font-family: 'Inter';
          }
          .contact-form10-text21 {
            display: inline-block;
          }
          .contact-form10root-class-name {
            opacity: 0.8;
          }
          @media (max-width: 2560px) {
            .contact-form10root-class-name {
              width: 80%;
            }
          }
          @media (max-width: 1920px) {
            .contact-form10root-class-name {
              margin-bottom: var(--dl-layout-space-threeunits);
            }
          }
          @media (max-width: 1200px) {
            .contact-form10-form {
              width: 50%;
            }
            .contact-form10-container {
              gap: var(--dl-layout-space-twounits);
              width: 100%;
              flex-direction: row;
            }
            .contact-form10-input3 {
              gap: var(--dl-layout-space-halfunit);
              width: 100%;
              flex-direction: column;
            }
            .contact-form10-content2 {
              width: 50%;
            }
            .contact-form10-row1 {
              flex-direction: column;
            }
            .contact-form10-content3 {
              width: 50%;
            }
            .contact-form10-contact-info1 {
              width: 50%;
            }
            .contact-form10-content4 {
              width: 50%;
            }
            .contact-form10-row2 {
              width: 100%;
            }
          }
          @media (max-width: 900px) {
            .contact-form10-input3 {
              width: 100%;
            }
            .contact-form10-row2 {
              width: 100%;
            }
          }
          @media (max-width: 480px) {
            .contact-form10-contact11 {
              padding: var(--dl-layout-space-twounits);
            }
            .contact-form10-max-width {
              max-width: auto;
            }
            .contact-form10-content1 {
              flex-direction: column;
            }
            .contact-form10-form {
              width: 100%;
              padding: 0px;
            }
            .contact-form10-text10 {
              color: var(--dl-color-gray-white);
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 500;
              text-transform: capitalize;
            }
            .contact-form10-text11 {
              color: var(--dl-color-gray-white);
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 500;
            }
            .contact-form10-input3 {
              width: 100%;
            }
            .contact-form10-text12 {
              color: var(--dl-color-gray-white);
              font-size: 14px;
              font-family: Inter;
            }
            .contact-form10-text13 {
              color: var(--dl-color-gray-white);
              font-size: 14px;
              font-family: Inter;
            }
            .contact-form10-content2 {
              width: 100%;
              padding: 0px;
            }
            .contact-form10-row1 {
              flex-direction: column;
            }
            .contact-form10-content3 {
              width: 100%;
            }
            .contact-form10-text15 {
              color: var(--dl-color-gray-white);
              font-size: 20px;
              font-family: Inter;
            }
            .contact-form10-content4 {
              width: 100%;
            }
            .contact-form10-text16 {
              color: var(--dl-color-gray-white);
              font-size: 20px;
              font-family: Inter;
            }
            .contact-form10-text17 {
              color: var(--dl-color-gray-white);
              font-size: 20px;
              font-family: Inter;
            }
            .contact-form10-row2 {
              width: 100%;
              align-items: stretch;
              flex-direction: column;
            }
            .contact-form10-text18 {
              font-size: 14px;
            }
            .contact-form10-text19 {
              font-size: 14px;
            }
            .contact-form10-text21 {
              font-size: 14px;
            }
            .contact-form10root-class-name {
              width: 95%;
            }
          }
        `}
      </style>
    </>
  )
}

ContactForm10.defaultProps = {
  address: undefined,
  email: undefined,
  rootClassName: '',
  submitAction: undefined,
  phone: undefined,
}

ContactForm10.propTypes = {
  address: PropTypes.element,
  email: PropTypes.element,
  rootClassName: PropTypes.string,
  submitAction: PropTypes.element,
  phone: PropTypes.element,
}

export default ContactForm10
