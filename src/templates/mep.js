import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const mepTemplate = ({ title, content, contentComponent }) => {
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

mepTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const mepPage = ({ data }) => {
  const { markdownRemark: post } = data
  console.log(data);
  
  return (
    <Layout>
    
    <section className="no-padding extra-small-screen position-relative">
        <div className="opacity-full bg-gradient-fast-blue-purple z-index-0"></div>
        <div className="container h-100">
            <div className="row align-items-end justify-content-center h-100">
                <div className="col-12 col-xl-12 page-title-large text-center">
                    
                    <h1 className="text-white alt-font font-weight-500 letter-spacing-minus-1 margin-5-rem-bottom sm-margin-3-rem-bottom">Mechanical Electrical And Plumbing</h1>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div className="container">
            <div className="row align-items-center justify-content-center">
                <div className="col-12 col-lg-7 col-md-9 md-margin-7-rem-bottom">
                    <span className="alt-font margin-20px-bottom text-gradient-sky-blue-pink d-inline-block text-uppercase font-weight-500 letter-spacing-1px">Mechanical Electrical And Plumbing</span>
                    <p>MEP, or mechanical, electrical and plumbing engineering, are the three technical disciplines that encompass the systems that allow building interiors to be suitable for human use and occupancy. MEP systems turn buildings from empty rooms into comfortable spaces that welcoming and liveable, whether it’s a 50-storey building or a laboratory to work in.
                    </p>
                    <ul>
                        <li>Mechanical engineering</li>
                        <li>Electrical engineering</li>
                        <li>Plumbing engineering</li>
                    </ul>
                    
                </div>
                <div className="col-12 col-lg-5 col-md-9 padding-55px-lr md-padding-5px-left sm-padding-50px-right">
                    <img className="border-radius-6px" src="../img/pmc.jpg" alt=""/>
            </div>
            </div>
        </div>
    </section>


    </Layout>
  )
}

mepPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default mepPage

export const mepPageQuery = graphql`
  query mepPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
