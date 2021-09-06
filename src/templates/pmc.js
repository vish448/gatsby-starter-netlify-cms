import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const pmcTemplate = ({ title, content, contentComponent }) => {
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

pmcTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const pmcPage = ({ data }) => {
  const { markdownRemark: post } = data
  console.log(data);
  
  return (
    <Layout>
    
    <section className="no-padding extra-small-screen position-relative">
        <div className="opacity-full bg-gradient-fast-blue-purple z-index-0"></div>
        <div className="container h-100">
            <div className="row align-items-end justify-content-center h-100">
                <div className="col-12 col-xl-12 col-lg-7 col-md-10 page-title-large text-center">
                    
                    <h1 className="text-white alt-font font-weight-500 letter-spacing-minus-1 margin-5-rem-bottom sm-margin-3-rem-bottom">Project Management Consultancy</h1>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div className="container">
            <div className="row align-items-center justify-content-center">
                <div className="col-12 col-lg-7 col-md-9 md-margin-7-rem-bottom">
                    <span className="alt-font margin-20px-bottom text-gradient-sky-blue-pink d-inline-block text-uppercase font-weight-500 letter-spacing-1px">Project Management Consultancy</span>
                    <p>A project management consultant plays the role of a planner, advisor and a project management team leader to conceptualize and implement solutions that relate to quality or process improvements.
                    </p>
                    <p>Project management consultants are valuable assets to any organization as they enable the stakeholders of a project to identify and rectify inefficiencies in processes and workflows.
                    </p>
                    <p>Project management consultant duties often involve managing a number of different projects simultaneously, which can be either enterprise-wide initiatives or business-specific projects.</p>
                    <p>Getting familiar with the client's business environment.</p>
                    <p>Ensuring the scope and schedule of projects are achievable within the given time and budget.</p>
                    <p>Undertaking periodic reviews to make sure that projects are on track.</p>
                    
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

pmcPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default pmcPage

export const pmcPageQuery = graphql`
  query pmcPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
