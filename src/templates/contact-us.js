import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const ContactUsTemplate = ({ title, content, contentComponent }) => {
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

ContactUsTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const ContactUsPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>

    
    <section className="no-padding extra-small-screen position-relative">
        <div className="opacity-full bg-gradient-fast-blue-purple z-index-0"></div>
        <div className="container h-100">
            <div className="row align-items-end justify-content-center h-100">
                <div className="col-12 col-xl-6 col-lg-7 col-md-10 page-title-large text-center">
                    
                    <h1 className="text-white alt-font font-weight-500 letter-spacing-minus-1 margin-5-rem-bottom sm-margin-3-rem-bottom">Get in touch with us</h1>
                </div>
            </div>
        </div>
    </section>

  <section>
    <div className="container">
        <div className="row row-cols-1 row-cols-lg-4 row-cols-sm-2">

        <div className="col">
          <div className="feature-box text-center">
            <a href="index.html" className="footer-logo margin-25px-bottom margin-5px-top d-inline-block">
              <img src="../img/wwlogo.png" data-at2x="../img/wwlogo.png" alt="" width="300" height="200" style={{height: "200px !important;"}} />
            </a>        
          </div>
        </div>

            <div className="col md-margin-50px-bottom sm-margin-30px-bottom">
                <div className="feature-box text-center">
                    <div className="feature-box-icon">
                        <i className="line-icon-Geo2-Love icon-extra-medium text-fast-blue margin-30px-bottom md-margin-15px-bottom sm-margin-10px-bottom"></i>
                    </div>
                    <div className="feature-box-content last-paragraph-no-margin">
                        <span className="alt-font font-weight-500 margin-10px-bottom d-block text-extra-dark-gray text-small text-uppercase">Waterways Infra</span>
                        <p className="d-inline-block w-70 lg-w-90 md-w-60 sm-w-80 xs-w-100">1005, Addore Aspire,<br /> Near Jhanavi Hotel, Panjrapole, Ahmedabad, Gujarat-380015(IN) </p>
                    </div>
                </div>
            </div>
      
            <div className="col md-margin-50px-bottom sm-margin-30px-bottom">
                <div className="feature-box text-center">
                    <div className="feature-box-icon">
                        <i className="line-icon-Headset icon-extra-medium text-fast-blue margin-30px-bottom md-margin-15px-bottom sm-margin-10px-bottom"></i>
                    </div>
                    <div className="feature-box-content last-paragraph-no-margin">
                        <span className="alt-font font-weight-500 margin-10px-bottom d-block text-extra-dark-gray text-small text-uppercase">Let's Talk</span>
                        <p>Phone: 079 4007 2293</p>
                    </div>
                </div>
            </div>
     
            <div className="col xs-margin-30px-bottom">
                <div className="feature-box text-center">
                    <div className="feature-box-icon">
                        <i className="line-icon-Mail-Read icon-extra-medium text-fast-blue margin-30px-bottom md-margin-15px-bottom sm-margin-10px-bottom"></i>
                    </div>
                    <div className="feature-box-content last-paragraph-no-margin">
                        <span className="alt-font font-weight-500 margin-10px-bottom d-block text-extra-dark-gray text-small text-uppercase">E-mail Us</span>
                        <p><a href="mailto:info@waterwaysinfra.com" className="text-sky-blue-hover">info@waterwaysinfra.com</a></p>
                    </div>
                </div>
            </div>
          
        </div>
    </div>
</section>
    </Layout>
  )
}

ContactUsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ContactUsPage

export const ContactUsPageQuery = graphql`
  query ContactUsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
