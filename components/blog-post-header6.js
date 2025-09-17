import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const BlogPostHeader6 = (props) => {
  return (
    <>
      <div
        className={`blog-post-header6-blog-post-header3 thq-section-padding ${props.rootClassName} `}
      >
        <div className="blog-post-header6-max-width thq-section-max-width">
          <div className="blog-post-header6-breadcrumbs">
            <span className="blog-post-header6-category thq-body-small">
              {props.category ?? (
                <Fragment>
                  <span className="blog-post-header6-text5">Category</span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="blog-post-header6-content1 thq-flex-column">
            <h1 className="blog-post-header6-title thq-heading-1">
              {props.blogPostTitle ?? (
                <Fragment>
                  <span className="blog-post-header6-text7">
                    Latest Blog Posts
                  </span>
                </Fragment>
              )}
            </h1>
            <span className="blog-post-header6-read-time thq-body-small">
              {props.readTime ?? (
                <Fragment>
                  <span className="blog-post-header6-text3">5 min read</span>
                </Fragment>
              )}
            </span>
            <div className="blog-post-header6-content2">
              <img
                alt={props.avatarImageAlt}
                src={props.avatarImageSrc}
                className="blog-post-header6-author-image thq-img-round thq-img-ratio-1-1"
              />
              <div className="blog-post-header6-author">
                <span className="thq-body-small">Written by</span>
                <span className="thq-body-small">
                  {props.avatarName ?? (
                    <Fragment>
                      <span className="blog-post-header6-text6">Full name</span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="blog-post-header6-time">
                <span className="thq-body-small">
                  {props.date ?? (
                    <Fragment>
                      <span className="blog-post-header6-text4">
                        23 March 2024
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .blog-post-header6-blog-post-header3 {
            display: flex;
            position: relative;
            align-items: center;
          }
          .blog-post-header6-max-width {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .blog-post-header6-breadcrumbs {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: center;
          }
          .blog-post-header6-category {
            text-align: center;
          }
          .blog-post-header6-content1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .blog-post-header6-title {
            text-align: center;
          }
          .blog-post-header6-read-time {
            text-align: center;
          }
          .blog-post-header6-content2 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .blog-post-header6-author-image {
            width: var(--dl-layout-size-small);
            height: var(--dl-layout-size-small);
          }
          .blog-post-header6-author {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
          }
          .blog-post-header6-time {
            gap: 8px;
            display: flex;
            align-items: center;
          }
          .blog-post-header6-text3 {
            display: inline-block;
          }
          .blog-post-header6-text4 {
            display: inline-block;
          }
          .blog-post-header6-text5 {
            display: inline-block;
          }
          .blog-post-header6-text6 {
            display: inline-block;
          }
          .blog-post-header6-text7 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

BlogPostHeader6.defaultProps = {
  readTime: undefined,
  avatarImageAlt: 'PlaceholderImage3501',
  avatarImageSrc:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fHVzZXJ8ZW58MHx8fHwxNzEwOTQyNjEyfDA&ixlib=rb-4.0.3&w=200',
  rootClassName: '',
  date: undefined,
  category: undefined,
  avatarName: undefined,
  blogPostTitle: undefined,
}

BlogPostHeader6.propTypes = {
  readTime: PropTypes.element,
  avatarImageAlt: PropTypes.string,
  avatarImageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  date: PropTypes.element,
  category: PropTypes.element,
  avatarName: PropTypes.element,
  blogPostTitle: PropTypes.element,
}

export default BlogPostHeader6
