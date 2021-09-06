import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
    <section className="no-padding one-third-screen position-relative">
            <div className="opacity-full bg-gradient-fast-blue-purple z-index-0"></div>
            <div className="container h-100">
                <div className="row align-items-end justify-content-center h-100">
                    <div className="col-12 col-xl-6 col-lg-7 col-md-10 page-title-large text-center">
                        <span className="margin-15px-bottom alt-font text-white opacity-8 d-block">we are a detail oriented</span>
                        <h1 className="text-white alt-font font-weight-500 letter-spacing-minus-1 margin-5-rem-bottom sm-margin-3-rem-bottom">Infrastructure Consultancy</h1>
                        <span className="w-1px h-80px d-inline-block bg-white margin-5-rem-bottom sm-margin-3-rem-bottom sm-h-50px"></span>
                    </div>
                </div>
            </div>
            <video muted className="html-video" poster="../img/about-us.jpg">
                <source type="video/mp4" src="video/video.mp4" />
                <source type="video/webm" src="video/video.webm" />
            </video>
        </section>

        <section className="pt-0 margin-75px-top lg-no-margin-top">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-12 bg-light-gray background-no-repeat background-position-right-bottom padding-90px-lr padding-8-rem-tb lg-padding-5-half-rem-lr wow animate__fadeIn" data-wow-delay="0.2s" style={{backgroundImage:`url(images/blog-post-layout-01-img-11.png)`}}>
                    <i className="fas fa-quote-left text-fast-blue icon-extra-medium margin-30px-bottom"></i>
                    <h5 className="alt-font text-extra-dark-gray font-weight-500">About Us</h5>
                    <div className="alt-font">
                    Waterways, is a multidisciplinary consultancy firm. We provide services in planning and designing of Water Supply, Wastewa- ter management, Sewerage System, Stormwater management, Canal and Irrigation network, MEP, PMC, Urban Infrastructure development and GIS-related work for national and international infrastructure development projects.
                    We aim to provide solutions for the optimum utilization of water with the right use of technology that is best suited to the client’s requirements and needs.
                    Waterways provide a solution to critical issues faced by our clients, both large and small. Our unique approach is not only what differentiates us, but also what makes us successful. We provide a broad range of services and solutions to help organi- zations facilitate change, achieve their vision and optimize performance and productivity.
                    Our Expert has vast experience in providing services related to Detailed Engineering of PDN, Preparation of DPRs, Construc- tion Supervision, Project Management Consultancy, in the field of infrastructure development.
                     </div>
                </div>
                
            </div>
           
        </div>
    </section>
</Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
