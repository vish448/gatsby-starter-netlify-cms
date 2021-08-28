import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import { StaticImage } from "gatsby-plugin-image"

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow:
              'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
            backgroundColor: 'rgb(255, 68, 0)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow:
              'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
            backgroundColor: 'rgb(255, 68, 0)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {subheading}
        </h3>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="title">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description}</h3>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>
                <Features gridItems={intro.blurbs} />
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                      See all products
                    </Link>
                  </div>
                </div>
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest stories
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  console.log(data)
  return (
     
      <Layout>
      <section className="p-0">
            <div className="swiper-container white-move mobileoff-fullscreen-top-space md-h-600px sm-h-500px" data-slider-options='{ "slidesPerView": 1, "loop": true, "pagination": { "el": ".swiper-pagination", "clickable": true }, "navigation": { "nextEl": ".swiper-button-next-nav", "prevEl": ".swiper-button-previous-nav" }, "autoplay": { "delay": 4500, "disableOnInteraction": false }, "keyboard": { "enabled": true, "onlyInViewport": true }, "effect": "slide" }'>
                <div className="swiper-wrapper">
                    
                    <div className="swiper-slide cover-background" style={{backgroundImage:"url(../img/slider1.jpg)"}}>
                        <div className="overlay-bg bg-gradient-dark-slate-blue"></div>
                        <div className="container h-100">
                            <div className="row h-100">
                                <div className="col-12 col-xl-6 col-lg-7 col-sm-8 h-100 d-flex justify-content-center flex-column">
                                    <p className="alt-font text-extra-medium text-white opacity-7 font-weight-300 margin-40px-bottom xs-margin-20px-bottom">What we do</p>
                                    <h2 className="alt-font text-shadow-double-large font-weight-600 text-white margin-55px-bottom w-90 md-w-100 md-no-text-shadow xs-margin-35px-bottom">Water Supply Network</h2>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="swiper-slide cover-background" style={{backgroundImage:`url(../img/slider2.jpg)`}}>
                        <div className="overlay-bg bg-gradient-dark-slate-blue"></div>
                        <div className="container h-100">
                            <div className="row h-100">
                                <div className="col-12 col-xl-6 col-lg-7 col-sm-8 h-100 d-flex justify-content-center flex-column">
                                    <p className="alt-font text-extra-medium text-white opacity-7 font-weight-300 margin-40px-bottom xs-margin-20px-bottom">What we do</p>
                                    <h2 className="alt-font text-shadow-double-large font-weight-600 text-white margin-55px-bottom w-90 md-w-100 md-no-text-shadow xs-margin-35px-bottom">Sewerage Network</h2>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="swiper-slide cover-background" style={{backgroundImage:`url(../img/slider3.jpg)`}}>
                        <div className="overlay-bg bg-gradient-dark-slate-blue"></div>
                        <div className="container h-100">
                            <div className="row h-100">
                                <div className="col-12 col-xl-6 col-lg-7 col-sm-8 h-100 d-flex justify-content-center flex-column">
                                    <p className="alt-font text-extra-medium text-white opacity-7 font-weight-300 margin-40px-bottom xs-margin-20px-bottom">What we do</p>
                                    <h2 className="alt-font text-shadow-double-large font-weight-600 text-white margin-55px-bottom w-90 md-w-100 md-no-text-shadow xs-margin-35px-bottom">Storm Water Network</h2>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                                            
                </div>
                 
                <div className="swiper-pagination swiper-light-pagination"></div>
            </div>
      </section>

      <section className="big-section wow animate__fadeIn">
          <div className="container">
              <div className="row justify-content-center wow animate__fadeIn">
                  <div className="col-12 col-xl-3 col-lg-4 col-sm-7 d-flex flex-column text-center text-lg-left md-margin-6-rem-bottom">
                      <div className="margin-20px-bottom sm-margin-10px-bottom">
                          <span className="alt-font text-medium text-gradient-sky-blue-pink text-uppercase font-weight-500">About company</span>
                      </div>
                      <h5 className="alt-font text-extra-dark-gray font-weight-600 margin-20px-bottom md-margin-30px-bottom xs-w-90 mx-auto mx-sm-0">We combine planning, design and thinking with right use of technology</h5>
                      <div className="mt-auto mx-auto mx-lg-0">
                          <a href="index.html" className="btn btn-fancy btn-small btn-transparent-light-gray">About Us</a>
                      </div>
                  </div>
                  <div className="col-12 col-xl-7 offset-xl-2 col-lg-8 last-paragraph-no-margin wow animate__fadeIn" data-wow-duration="0.3">
                      <div className="row row-cols-1 row-cols-lg-2 row-cols-sm-2">
                          
                          <div className="col margin-60px-bottom sm-margin-30px-bottom xs-margin-40px-bottom wow animate__fadeIn">
                              <div className="feature-box feature-box-left-icon">
                                  <div className="feature-box-icon">
                                      <i className="line-icon-Money-Bag icon-medium text-extra-light-gray margin-35px-bottom md-margin-15px-bottom sm-margin-10px-bottom"></i>
                                  </div>
                                  <div className="feature-box-content last-paragraph-no-margin">
                                      <span className="alt-font font-weight-500 margin-10px-bottom d-block text-extra-dark-gray">Effective strategy</span>
                                      <p>Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor.</p>
                                  </div>
                              </div>
                          </div>
                          
                          
                          <div className="col margin-60px-bottom sm-margin-30px-bottom xs-margin-40px-bottom wow animate__fadeIn" data-wow-delay="0.2s">
                              <div className="feature-box feature-box-left-icon">
                                  <div className="feature-box-icon">
                                      <i className="line-icon-Gear-2 icon-medium text-extra-light-gray margin-35px-bottom md-margin-15px-bottom sm-margin-10px-bottom"></i>
                                  </div>
                                  <div className="feature-box-content last-paragraph-no-margin">
                                      <span className="alt-font font-weight-500 margin-10px-bottom d-block text-extra-dark-gray">Unique approach</span>
                                      <p>Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor.</p>
                                  </div>
                              </div>
                          </div>
                          
                          
                          <div className="col xs-margin-40px-bottom wow animate__fadeIn" data-wow-delay="0.4s">
                              <div className="feature-box feature-box-left-icon">
                                  <div className="feature-box-icon">
                                      <i className="line-icon-Talk-Man icon-medium text-extra-light-gray margin-35px-bottom md-margin-15px-bottom sm-margin-10px-bottom"></i>
                                  </div>
                                  <div className="feature-box-content last-paragraph-no-margin">
                                      <span className="alt-font font-weight-500 margin-10px-bottom d-block text-extra-dark-gray">Infrastructure
                                        development</span>
                                      <p>Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor.</p>
                                  </div>
                              </div>
                          </div>
                          
                          
                          <div className="col wow animate__fadeIn" data-wow-delay="0.6s">
                              <div className="feature-box feature-box-left-icon">
                                  <div className="feature-box-icon">
                                      <i className="line-icon-Cursor-Click2 icon-medium text-extra-light-gray margin-35px-bottom md-margin-15px-bottom sm-margin-10px-bottom"></i>
                                  </div>
                                  <div className="feature-box-content last-paragraph-no-margin">
                                      <span className="alt-font font-weight-500 margin-10px-bottom d-block text-extra-dark-gray">Technology</span>
                                      <p>Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor.</p>
                                  </div>
                              </div>
                          </div>
                          
                      </div>
                  </div>
              </div>
          </div>
      </section>
      
      <section className="bg-light-blue border-top border-color-medium-gray">
            <div className="container">
							<div className="row justify-content-center">
								<div className="col-12 col-xl-5 col-lg-6 col-sm-8 text-center margin-5-rem-bottom wow animate__fadeIn">
											<span className="d-inline-block alt-font text-medium text-gradient-sky-blue-pink text-uppercase font-weight-500 margin-20px-bottom sm-margin-15px-bottom">Our Services</span>
										
									</div>
							</div>
                <div className="row">
                    <div className="col-12 tab-style-01 without-number wow animate__fadeIn">
                        
                        <ul className="nav nav-tabs text-uppercase justify-content-center text-center alt-font font-weight-500 margin-7-rem-bottom md-margin-5-rem-bottom sm-margin-20px-bottom">
                            <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#planning-tab">WSN</a><span className="tab-border bg-extra-dark-gray"></span></li>
                            <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#research-tab">Sewage Network</a><span className="tab-border bg-extra-dark-gray"></span></li>
                            <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#target-tab">SWN</a><span className="tab-border bg-extra-dark-gray"></span></li>
                            <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#campaign-tab">Canal Network and Irrigation</a><span className="tab-border bg-extra-dark-gray"></span></li>
														<li className="nav-item"><a className="nav-link" data-toggle="tab" href="#pmc-tab">PMC</a><span className="tab-border bg-extra-dark-gray"></span></li>
														<li className="nav-item"><a className="nav-link" data-toggle="tab" href="#mep-tab">MEP</a><span className="tab-border bg-extra-dark-gray"></span></li>
                        </ul>
                        
                        <div className="tab-content">
                            
                            <div id="planning-tab" className="tab-pane fade in active show">
                                <div className="row align-items-center">
                                    <div className="col-12 col-md-6 text-right sm-margin-40px-bottom">
                                        <img src="../img/wsn.jpg" alt="" />
                                    </div>
                                    <div className="col-12 col-lg-5 offset-lg-1 col-md-6 text-center text-sm-left">
                                        
                                        <h5 className="alt-font font-weight-600 text-extra-dark-gray margin-35px-bottom md-margin-30px-bottom">Water Supply Network</h5>
                                        <p className="w-85 lg-w-100">Water supply system and treatment<br/>
																					24X7 Water supply system<br/>
																					Urban Water supply<br/>
																					Rural Water supply<br/>
																					Hydraulic modelling and analysis.</p>
                                        <a href="/water-supply" className="btn btn-fancy btn-medium btn-dark-gray margin-20px-top">About WSN</a>
                                    </div>
                                </div>
                            </div>
                            
                            
                            <div id="research-tab" className="tab-pane fade">
                                <div className="row align-items-center">
                                    <div className="col-12 col-md-6 text-right sm-margin-40px-bottom">
                                        <img src="../img/sewagenetwork.png" alt="" />
                                    </div>
                                    <div className="col-12 col-lg-5 offset-lg-1 col-md-6">
                                        
                                        <h5 className="alt-font font-weight-600 text-extra-dark-gray margin-35px-bottom md-margin-30px-bottom">Sewage Network</h5>
                                        <p className="w-85 lg-w-100">Sewer Network and treatment<br/>
																					Urban Sewerage Network System<br/>
																					Rural Sanitation System<br/>
																					Residential townships<br/>
																					Industrial and Integrated Infrastructure<br/>
																					Recycle network system<br/>
																					Hydraulic modelling and analysis.</p>
                                        <a href="index.html" className="btn btn-fancy btn-medium btn-dark-gray margin-20px-top">About Sewage Network</a>
                                    </div>
                                </div>
                            </div>
                            
                            
                            <div id="target-tab" className="tab-pane fade">
                                <div className="row align-items-center">
                                    <div className="col-12 col-md-6 text-right sm-margin-40px-bottom">
                                        <img src="../img/svn.jpg" alt="" />
                                    </div>
                                    <div className="col-12 col-lg-5 offset-lg-1 col-md-6">
                                        
                                        <h5 className="alt-font font-weight-600 text-extra-dark-gray margin-35px-bottom md-margin-30px-bottom">Storm Water Networt</h5>
                                        <p className="w-85 lg-w-100">Storm water Management<br/>
																					Rain water harvesting</p>
                                        <a href="index.html" className="btn btn-fancy btn-medium btn-dark-gray margin-20px-top">About SVN</a>
                                    </div>
                                </div>
                            </div>
                            
                            
                            <div id="campaign-tab" className="tab-pane fade">
                                <div className="row align-items-center">
                                    <div className="col-12 col-md-6 text-right sm-margin-40px-bottom">
                                        <img src="../img/cni.jpg" alt="" />
                                    </div>
                                    <div className="col-12 col-lg-5 offset-lg-1 col-md-6">
                                        
                                        <h5 className="alt-font font-weight-600 text-extra-dark-gray margin-35px-bottom md-margin-30px-bottom">Canal Network and Irrigation</h5>
                                        <p className="w-85 lg-w-100">In order to assess the need for irrigation, several factors must be considered:<br/>
																					Weather conditions such as rain, humidity, evaporation<br/>
																					Weather forecasts<br/>
																					Crop capacity for water absorption<br/>
																					Water available in the soil<br/>
																					“Allowable” water de cit for issues such as crop resistance.</p>
                                        <a href="index.html" className="btn btn-fancy btn-medium btn-dark-gray margin-20px-top">About Canal Network</a>
                                    </div>
                                </div>
                            </div>
                            
														
                            <div id="pmc-tab" className="tab-pane fade">
															<div className="row align-items-center">
																	<div className="col-12 col-md-6 text-right sm-margin-40px-bottom">
																			<img src="../img/pmc.jpg" alt="" />
																	</div>
																	<div className="col-12 col-lg-5 offset-lg-1 col-md-6">
																			
																			<h5 className="alt-font font-weight-600 text-extra-dark-gray margin-35px-bottom md-margin-30px-bottom">Project Management Consultancy</h5>
																			<p className="w-85 lg-w-100">A project management consultant plays the role of a planner, advisor and a project management team leader to
																				conceptualize and implement solutions that relate to quality or process improvements.</p>
																			<a href="index.html" className="btn btn-fancy btn-medium btn-dark-gray margin-20px-top">About PMC</a>
																	</div>
															</div>
													</div>
													
													
													<div id="mep-tab" className="tab-pane fade">
														<div className="row align-items-center">
																<div className="col-12 col-md-6 text-right sm-margin-40px-bottom">
																		<img src="../img/mep.jpg" alt="" />
																</div>
																<div className="col-12 col-lg-5 offset-lg-1 col-md-6">
																		
																		<h5 className="alt-font font-weight-600 text-extra-dark-gray margin-35px-bottom md-margin-30px-bottom">Mechanical Electrical And Plumbing</h5>
																		<p className="w-85 lg-w-100">Mechanical engineering<br/>
																			Electrical engineering<br/>
																			Plumbing engineering</p>
																		<a href="index.html" className="btn btn-fancy btn-medium btn-dark-gray margin-20px-top">About MEP</a>
																</div>
														</div>
												</div>
												
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="padding-100px-tb lg-padding-90px-tb md-padding-75px-tb wow animate__fadeIn">
        <div className="container">
            <div className="row row-cols-1 row-cols-md-4 row-cols-sm-2 align-items-center justify-content-center">
                
                <div className="col text-center sm-margin-40px-bottom">
                    <h4 className="vertical-counter d-inline-flex text-extra-dark-gray alt-font appear font-weight-600 letter-spacing-minus-2px md-letter-spacing-normal mb-0" data-to="21"></h4>
                    <span className="alt-font text-uppercase text-small d-block margin-5px-top">completed Projects</span>
                </div>
                
                
                <div className="col text-center sm-margin-40px-bottom">
                    <h4 className="vertical-counter d-inline-flex text-extra-dark-gray alt-font appear font-weight-600 letter-spacing-minus-2px md-letter-spacing-normal mb-0" data-to="4"></h4>
                    <span className="alt-font text-uppercase text-small d-block margin-5px-top">Ongoing Projects</span>
                </div>
                
            </div>
        </div>
    </section>

    <section className="padding-100px-tb bg-light-blue border-top border-color-medium-gray lg-padding-90px-tb md-padding-75px-tb sm-padding-50px-tb wow animate__fadeIn">
            <div className="container">
								<div className="row justify-content-center">
									<div className="col-12 col-xl-5 col-lg-6 col-sm-8 text-center margin-5-rem-bottom wow animate__fadeIn">
											<span className="d-inline-block alt-font text-medium text-gradient-sky-blue-pink text-uppercase font-weight-500 margin-20px-bottom sm-margin-15px-bottom">Our Clients</span>
										
									</div>
							</div>
                <div className="row row-cols-1 row-cols-lg-4 row-cols-sm-2 client-logo-style-05">
                   
                    <div className="col text-center md-margin-40px-bottom xs-margin-50px-bottom wow animate__fadeIn">
                        <a href="#"><img src="../img/wasmo.jpeg" alt="" className="w-57" /></a>
                    </div>
                    
                   
                    <div className="col text-center md-margin-40px-bottom xs-margin-50px-bottom wow animate__fadeIn" data-wow-delay="0.2s">
                        <a href="#"><img src="../img/ssnl.png" alt="" className="w-57" /></a>
                    </div>
                    
                   
                    <div className="col text-center xs-margin-50px-bottom wow animate__fadeIn" data-wow-delay="0.4s">
                        <a href="#"><img src="../img/jalkranti.png" alt="" className="w-57" /></a>
                    </div>
                    
                   
                    <div className="col text-center wow animate__fadeIn" data-wow-delay="0.6s">
                        <a href="#"><img src="../img/amc.png" alt="" className="w-57" /></a>
                    </div>
                   
                </div>
            </div>
        </section>
      </Layout>
    
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
