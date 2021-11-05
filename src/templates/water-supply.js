import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const WaterSupplyTemplate = ({ title, content, contentComponent }) => {
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

WaterSupplyTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const WaterSupplyPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
    <section className="no-padding extra-small-screen position-relative">
        <div className="opacity-full bg-gradient-fast-blue-purple z-index-0"></div>
        <div className="container h-100">
            <div className="row align-items-end justify-content-center h-100">
                <div className="col-12 col-xl-6 col-lg-7 col-md-10 page-title-large text-center">
                    
                    <h1 className="text-white alt-font font-weight-500 letter-spacing-minus-1 margin-5-rem-bottom sm-margin-3-rem-bottom">Water Supply</h1>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div className="container">
            <div className="row align-items-center justify-content-center">
                <div className="col-12 col-lg-7 col-md-9 md-margin-7-rem-bottom">
                    <span className="alt-font margin-20px-bottom text-gradient-sky-blue-pink d-inline-block text-uppercase font-weight-500 letter-spacing-1px">Water Supply</span>
                    <p>Wise water solutions are needed in the current context of competition for access to water. From design to reality, our experts provide a complete range of services of innovative and cost-effective solutions to meet sustainable develop- ment issues and client’s expectations in the field of water supply and other integrated infrastructure such as:</p>
                    <ul>
                        <li>Water supply system and treatment</li>
                        <li>24X7 Water supply system</li>
                        <li>Urban Water supply</li>
                        <li>Rural Water supply</li>
                        <li>Hydraulic modelling and analysis</li>
                    </ul>
                </div>
                <div className="col-12 col-lg-5 col-md-9 padding-55px-lr md-padding-5px-left sm-padding-50px-right">
                    <img className="border-radius-6px" src="../img/slider3.jpg" alt=""/>
            </div>
            </div>
        </div>
    </section>


    </Layout>
  )
}

WaterSupplyPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default WaterSupplyPage

export const WaterSupplyPageQuery = graphql`
  query WaterSupplyPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
