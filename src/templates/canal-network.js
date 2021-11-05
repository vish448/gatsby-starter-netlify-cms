import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const canalNetworkTemplate = ({ title, content, contentComponent }) => {
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

canalNetworkTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const canalNetworkPage = ({ data }) => {
  const { markdownRemark: post } = data
  console.log(data);
  
  return (
    <Layout>
    
    <section className="no-padding extra-small-screen position-relative">
        <div className="opacity-full bg-gradient-fast-blue-purple z-index-0"></div>
        <div className="container h-100">
            <div className="row align-items-end justify-content-center h-100">
                <div className="col-12 col-xl-12 col-md-10 page-title-large text-center">
                    
                    <h1 className="text-white alt-font font-weight-500 letter-spacing-minus-1 margin-5-rem-bottom sm-margin-3-rem-bottom">Canal Network and Irrigation</h1>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div className="container">
            <div className="row align-items-center justify-content-center">
                <div className="col-12 col-lg-6 col-md-9 md-margin-7-rem-bottom">
                    <span className="alt-font margin-20px-bottom text-gradient-sky-blue-pink d-inline-block text-uppercase font-weight-500 letter-spacing-1px">Canal Network and Irrigation</span>
                    <p>The purpose of irrigation is to supply an adequate amount of water when rainfall is not sufficient or timely to meet the crops’ water needs. Since the 1980s, one of Dole’s priorities has been to develop a more scientific approach to better schedule the irrigation of bananas and to apply water only when and where necessary as a way to compensate for water deficiencies in the soil.
                    </p>
                    <ul>
                        <li>In order to assess the need for irrigation, several factors must be considered:</li>
                        <li>Weather conditions such as rain, humidity, evaporation</li>
                        <li>Weather forecasts</li>
                        <li>Crop capacity for water absorption</li>
                        <li>Water available in the soil</li>
                        <li>“Allowable” water deficit for issues such as crop resistance.</li>
                    </ul>
                </div>
                <div className="col-12 col-lg-5 col-md-9 padding-55px-lr md-padding-5px-left sm-padding-50px-right">
                    <img className="border-radius-6px" src="../img/cni.jpg" alt=""/>
            </div>
            </div>
        </div>
    </section>


    </Layout>
  )
}

canalNetworkPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default canalNetworkPage

export const canalNetworkPageQuery = graphql`
  query canalNetworkPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
