import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const OurServicesTemplate = ({ title, content, contentComponent }) => {
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

OurServicesTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const OurServicesPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
    <section className="no-padding extra-small-screen position-relative">
        <div className="opacity-full bg-gradient-fast-blue-purple z-index-0"></div>
        <div className="container h-100">
            <div className="row align-items-end justify-content-center h-100">
                <div className="col-12 col-xl-6 col-lg-7 col-md-10 page-title-large text-center">
                    <span className="margin-15px-bottom alt-font text-white opacity-8 d-block">we are a detail oriented</span>
                    <h1 className="text-white alt-font font-weight-500 letter-spacing-minus-1 margin-5-rem-bottom sm-margin-3-rem-bottom">Infrastructure Consultancy</h1>
                </div>
            </div>
        </div>
        <video muted className="html-video" poster="../img/about-us.jpg">
            <source type="video/mp4" src="video/video.mp4" />
            <source type="video/webm" src="video/video.webm" />
        </video>
    </section>

    <section>
        <div className="container">
            <div className="row align-items-center justify-content-center">
                <div className="col-12 col-lg-5 col-md-9 md-margin-7-rem-bottom">
                    <span className="alt-font margin-20px-bottom text-gradient-sky-blue-pink d-inline-block text-uppercase font-weight-500 letter-spacing-1px">Experience consultancy</span>
                    <h4 className="alt-font font-weight-600 text-extra-dark-gray w-95">We help our clients build systemetic solutions</h4>
                    <a href="#services" className="btn btn-medium btn-dark-gray margin-15px-top btn-round-edge section-link">Our services<i className="feather icon-feather-arrow-right icon-very-small right-icon"></i></a>
                </div>
                
                <div className="col-12 col-lg-7 col-md-9 padding-55px-lr md-padding-5px-left sm-padding-50px-right">
                    <img className="border-radius-6px" src="../img/wsn.jpg" alt=""/>
                </div>
            </div>
        </div>
    </section>

    <section className="bg-light-gray wow animate__fadeIn" id="services">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6 text-center margin-5-rem-bottom sm-margin-3-rem-bottom">
                        <span className="alt-font margin-10px-bottom d-inline-block text-uppercase font-weight-500 text-gradient-sky-blue-pink letter-spacing-1px">Unlimited Possibilities</span>
                        <h5 className="alt-font text-extra-dark-gray font-weight-600 letter-spacing-minus-1px">Our Services</h5>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-lg-3 row-cols-md-1 justify-content-center margin-two-bottom ">
                    <div className="col col-md-9 md-margin-30px-bottom xs-margin-15px-bottom wow animate__fadeIn">
                        <div className="feature-box text-left box-shadow-large box-shadow-double-large-hover bg-white padding-4-rem-all lg-padding-3-rem-all md-padding-4-half-rem-all">
                            <div className="feature-box-content">
                                <span className="margin-15px-bottom d-block text-extra-medium">01</span>
                                <h6 className="alt-font font-weight-600 d-block text-extra-dark-gray">Water Supply</h6>
                                <p>The availability of dependable and affordable water is a non-negotiable condition for any infrastructure development.</p>
                                <div className="h-1px bg-medium-gray margin-25px-bottom w-100"></div>
                                <a className="text-small font-weight-500 text-uppercase alt-font d-block text-extra-dark-gray" href="/water-supply">More info<i className="feather icon-feather-arrow-right icon-extra-small float-right"></i></a>
                            </div>
                            <div className="feature-box-overlay bg-white"></div>
                        </div>
                    </div>
                    <div className="col col-md-9 md-margin-30px-bottom xs-margin-15px-bottom wow animate__fadeIn margin-two-bottom " data-wow-delay="0.2s">
                        <div className="feature-box text-left box-shadow-large box-shadow-double-large-hover bg-white padding-4-rem-all lg-padding-3-rem-all md-padding-4-half-rem-all">
                            <div className="feature-box-content">
                                <span className="margin-15px-bottom d-block text-extra-medium">02</span>
                                <h6 className="alt-font font-weight-600 d-block text-extra-dark-gray">Sewage and Sanitation</h6>
                                <p>Appropriate management of sewage and sanitation is critical for a quality of life and environmental health.</p>
                                <div className="h-1px bg-medium-gray margin-25px-bottom w-100"></div>
                                <a className="text-small font-weight-500 text-uppercase alt-font d-block text-extra-dark-gray" href="/sewage-network">More info<i className="feather icon-feather-arrow-right icon-extra-small float-right"></i></a>
                            </div>
                            <div className="feature-box-overlay bg-white"></div>
                        </div>
                    </div>
  
                    <div className="col col-md-9 wow animate__fadeIn margin-two-bottom " data-wow-delay="0.4s">
                        <div className="feature-box text-left box-shadow-large box-shadow-double-large-hover bg-white padding-4-rem-all lg-padding-3-rem-all md-padding-4-half-rem-all">
                            <div className="feature-box-content">
                                <span className="margin-15px-bottom d-block text-extra-medium">03</span>
                                <h6 className="alt-font font-weight-600 d-block text-extra-dark-gray">Storm water Management</h6>
                                <p>Efficient stormwater management is vital for ensuring proper functioning and life of roads and infrastructure.</p>
                                <div className="h-1px bg-medium-gray margin-25px-bottom w-100"></div>
                                <a className="text-small font-weight-500 text-uppercase alt-font d-block text-extra-dark-gray" href="/swn">More info<i className="feather icon-feather-arrow-right icon-extra-small float-right"></i></a>
                            </div>
                            <div className="feature-box-overlay bg-white"></div>
                        </div>
                    </div>

                    <div className="col col-md-9 wow animate__fadeIn margin-two-bottom " data-wow-delay="0.4s">
                        <div className="feature-box text-left box-shadow-large box-shadow-double-large-hover bg-white padding-4-rem-all lg-padding-3-rem-all md-padding-4-half-rem-all">
                            <div className="feature-box-content">
                                <span className="margin-15px-bottom d-block text-extra-medium">04</span>
                                <h6 className="alt-font font-weight-600 d-block text-extra-dark-gray">Canal Network and Irrigation</h6>
                                <p>The purpose of irrigation: to supply an adequate amount of water when rainfall is not sufficient.</p>
                                <div className="h-1px bg-medium-gray margin-25px-bottom w-100"></div>
                                <a className="text-small font-weight-500 text-uppercase alt-font d-block text-extra-dark-gray" href="/canal-network">More info<i className="feather icon-feather-arrow-right icon-extra-small float-right"></i></a>
                            </div>
                            <div className="feature-box-overlay bg-white"></div>
                        </div>
                    </div>

                    <div className="col col-md-9 wow animate__fadeIn margin-two-bottom " data-wow-delay="0.4s">
                        <div className="feature-box text-left box-shadow-large box-shadow-double-large-hover bg-white padding-4-rem-all lg-padding-3-rem-all md-padding-4-half-rem-all">
                            <div className="feature-box-content">
                                <span className="margin-15px-bottom d-block text-extra-medium">05</span>
                                <h6 className="alt-font font-weight-600 d-block text-extra-dark-gray">Project Management Consultancy</h6>
                                <p>A PM consultant plays the role of a planner and advisor of a project management.</p>
                                <div className="h-1px bg-medium-gray margin-25px-bottom w-100"></div>
                                <a className="text-small font-weight-500 text-uppercase alt-font d-block text-extra-dark-gray" href="/pmc">More info<i className="feather icon-feather-arrow-right icon-extra-small float-right"></i></a>
                            </div>
                            <div className="feature-box-overlay bg-white"></div>
                        </div>
                    </div>

                    <div className="col col-md-9 wow animate__fadeIn margin-two-bottom " data-wow-delay="0.4s">
                        <div className="feature-box text-left box-shadow-large box-shadow-double-large-hover bg-white padding-4-rem-all lg-padding-3-rem-all md-padding-4-half-rem-all">
                            <div className="feature-box-content">
                                <span className="margin-15px-bottom d-block text-extra-medium">06</span>
                                <h6 className="alt-font font-weight-600 d-block text-extra-dark-gray">Mechanical Electrical And Plumbing</h6>
                                <p>Mechanical engineering, Electrical engineering, Plumbing engineering</p>
                                <div className="h-1px bg-medium-gray margin-25px-bottom w-100"></div>
                                <a className="text-small font-weight-500 text-uppercase alt-font d-block text-extra-dark-gray" href="/mep">More info<i className="feather icon-feather-arrow-right icon-extra-small float-right"></i></a>
                            </div>
                            <div className="feature-box-overlay bg-white"></div>
                        </div>
                    </div>

                </div>
            </div>
      
        </section>

    </Layout>
  )
}

OurServicesPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default OurServicesPage

export const ourServicesPageQuery = graphql`
  query OurServicesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
