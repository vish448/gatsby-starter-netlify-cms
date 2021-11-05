import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const SewageNetworkTemplate = ({ title, content, contentComponent }) => {
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

SewageNetworkTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const SewageNetworkPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
    <section className="no-padding extra-small-screen position-relative">
        <div className="opacity-full bg-gradient-fast-blue-purple z-index-0"></div>
        <div className="container h-100">
            <div className="row align-items-end justify-content-center h-100">
                <div className="col-12 col-xl-6 col-lg-7 col-md-10 page-title-large text-center">
                    
                    <h1 className="text-white alt-font font-weight-500 letter-spacing-minus-1 margin-5-rem-bottom sm-margin-3-rem-bottom">Sewage and Sanitation</h1>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div className="container">
            <div className="row align-items-center justify-content-center">
                <div className="col-12 col-lg-7 col-md-9 md-margin-7-rem-bottom">
                    <span className="alt-font margin-20px-bottom text-gradient-sky-blue-pink d-inline-block text-uppercase font-weight-500 letter-spacing-1px">Sewage Network</span>
                    <p>Appropriate management of sewage and sanitation is of critical importance for a sustainable quality of life and envi- ronmental health. Effective sanitation and sewage management can have a positive impact on the economic produc- tivity of the communities. We design master plans for sewage and waste-water management of cities.
                    </p>
                    <ul>
                        <li>Sewer Network and treatment</li>
                        <li>Urban Sewerage Network System</li>
                        <li>Rural Sanitation System</li>
                        <li>Residential townships</li>
                        <li>Industrial and Integrated Infrastructure</li>
                        <li>Recycle network system</li>
                        <li>Hydraulic modelling and analysis</li>
                    </ul>
                </div>
                <div className="col-12 col-lg-5 col-md-9 padding-55px-lr md-padding-5px-left sm-padding-50px-right">
                    <img className="border-radius-6px" src="../img/svn.jpg" alt=""/>
            </div>
            </div>
        </div>
    </section>


    </Layout>
  )
}

SewageNetworkPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default SewageNetworkPage

export const SewageNetworkPageQuery = graphql`
  query SewageNetworkPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
