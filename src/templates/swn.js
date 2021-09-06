import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const swnTemplate = ({ title, content, contentComponent }) => {
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

swnTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const swnPage = ({ data }) => {
  const { markdownRemark: post } = data
  console.log(data);
  
  return (
    <Layout>
    
    <section className="no-padding extra-small-screen position-relative">
        <div className="opacity-full bg-gradient-fast-blue-purple z-index-0"></div>
        <div className="container h-100">
            <div className="row align-items-end justify-content-center h-100">
                <div className="col-12 col-xl-6 col-lg-7 col-md-10 page-title-large text-center">
                    
                    <h1 className="text-white alt-font font-weight-500 letter-spacing-minus-1 margin-5-rem-bottom sm-margin-3-rem-bottom">Strom Water Management</h1>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div className="container">
            <div className="row align-items-center justify-content-center">
                <div className="col-12 col-lg-7 col-md-9 md-margin-7-rem-bottom">
                    <span className="alt-font margin-20px-bottom text-gradient-sky-blue-pink d-inline-block text-uppercase font-weight-500 letter-spacing-1px">Strom Water Network</span>
                    <p>In the urban areas efficient stormwater management is vital for ensuring proper functioning and designed life of roads and other infrastructure. It also contributes to environmentally sensitive planning and quality of life in the city areas. Integrated planning of stormwater management based on the principles of urban watershed management helps in ensuring the quality and life of infrastructure and overall quality of life. It also enhances the capability of a city to reduce the risk of flood disasters caused due to high-intensity rains. We specialize in preparing the stormwater man- agement master plans, detailed engineering reports and implementation management.
                    </p>
                    <ul>
                        <li>Storm water Management</li>
                        <li>Rain water harvesting</li>
                    </ul>
                </div>
                <div className="col-12 col-lg-5 col-md-9 padding-55px-lr md-padding-5px-left sm-padding-50px-right">
                    <img className="border-radius-6px" src="../img/wsn.jpg" alt=""/>
            </div>
            </div>
        </div>
    </section>


    </Layout>
  )
}

swnPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default swnPage

export const swnPageQuery = graphql`
  query swnPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
