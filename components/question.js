import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Question = (props) => {
  return (
    <>
      <div className={`question-container ${props.rootClassName} `}>
        <span className="question-text1 heading4">{props.question}</span>
        <span className="question-text2">
          {props.text ?? (
            <Fragment>
              <span className="question-text3">
                The repair time can vary depending on the complexity of the
                issue. We strive to complete repairs as quickly as possible,
                same day if parts are on hand.
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
      <style jsx>
        {`
          .question-container {
            gap: var(--dl-layout-space-unit);
            flex: 1;
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .question-text1 {
            color: var(--dl-color-theme-secondary1);
            align-self: flex-start;
            text-align: left;
            font-weight: 700;
            line-height: 1.6;
          }
          .question-text2 {
            color: var(--dl-color-primary-700);
            align-self: flex-start;
            text-align: left;
          }
          .question-text3 {
            display: inline-block;
          }

          @media (max-width: 1200px) {
            .question-text1 {
              align-self: center;
              text-align: center;
            }
            .question-text2 {
              align-self: center;
              text-align: center;
            }
          }
          @media (max-width: 900px) {
            .question-text1 {
              color: var(--dl-color-theme-secondary1);
              align-self: center;
              text-align: center;
              font-weight: 700;
              line-height: 1.6;
            }
            .question-text2 {
              align-self: center;
              text-align: center;
            }
          }
          @media (max-width: 480px) {
            .question-text1 {
              color: var(--dl-color-theme-secondary1);
              text-align: center;
              font-weight: 700;
              line-height: 1.6;
            }
            .question-text2 {
              color: var(--dl-color-primary-700);
              font-size: 13px;
              text-align: center;
            }
            .questionroot-class-name {
              align-self: flex-start;
            }
          }
        `}
      </style>
    </>
  )
}

Question.defaultProps = {
  text: undefined,
  rootClassName: '',
  question: 'What types of cars do you sell?',
}

Question.propTypes = {
  text: PropTypes.element,
  rootClassName: PropTypes.string,
  question: PropTypes.string,
}

export default Question
