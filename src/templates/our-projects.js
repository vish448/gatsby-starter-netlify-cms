import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const OurProjectsTemplate = ({ title, content, contentComponent }) => {
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

OurProjectsTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const OurProjectsPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
    <section className="no-padding extra-small-screen position-relative">
        <div className="opacity-full bg-gradient-fast-blue-purple z-index-0"></div>
        <div className="container h-100">
            <div className="row align-items-end justify-content-center h-100">
                <div className="col-12 col-xl-6 col-lg-7 col-md-10 page-title-large text-center">
                    
                    <h1 className="text-white alt-font font-weight-500 letter-spacing-minus-1 margin-5-rem-bottom sm-margin-3-rem-bottom">Our Projects</h1>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div className="container">
            <div className="row justify-content-center">
                  <div className="col-12 col-lg-7 col-md-9 md-margin-7-rem-bottom">
                    <span className="alt-font margin-20px-bottom text-gradient-sky-blue-pink d-inline-block text-uppercase font-weight-500 letter-spacing-1px">Our Projects</span>
                    
                    <ul>
                        <li>Waterways solve each client’s issues by providing a comprehensive approach backed by our team of experienced professionals. Our process fosters collaboration and innovation to ensure we not only understand the core needs of clients, but also help them develop successfully. Read our success stories below.</li>
                        <li>Past Project of the team under various Organizations.</li>
                        <li>Preparation of Preliminary Detailed Report (PDR) including Planning, design, Estimate and tendering for water supply Project of Marathwada Area.</li>
                        <li>Preparation of Detailed Project Report (DPR) including Planning, design, Estimate and tendering for water supply Project of Gujarat for WASMO.</li>
                        <li>Planning and designing of Minors and Sub minors of different branch canals as Under Ground Pipe Lines including</li>
                        <li>Estimation and Costing under Sardar Sarovar Narmada Nigam Limited (SSNNL), Gujarat.</li>
                        <li>Preparation of DPR including Planning, Designing & Estimation of Water Supply Network and Sewer and Storm Water Network of Mehsana District for Model Command Area Development under JAL KRANTI ABHIYAN GOVT. OF INDIA.</li>
                        <li>Design, Estimation of Head Regulator & Cross Regulator for Canal Flows for different Branch Canal under Sardar Sarovar Narmada Nigam Limited (SSNNL),Gujarat.</li>

                        <li>Detailed Project Report including Planning, Designing, Estimating and Costing for Different Infrastructure Projects (Sewerage, Storm Water and Water) of Ahmedabad Municipal Corporation</li>

                        <li>Lambha Drainage Network Project Approximately 30 km, South Zone, Ahmedabad.</li>

                        <li>Vastral Storm Water Network, Approximately 60 km. South Zone,Ahmedabad</li>

                        <li>Danilimda Water Distribution Network Approximately 7 Km, SouthZone, Ahmedabad</li>

                        <li>Construct Under Ground Sump Arbudanagar, Bodakdev, Niyojannagar, Nikol, Satyam of New West & East Zone of Ahmedabad Municipal Corporation</li>

                        <li>Elevated Service Reservoir for the area Amraiwadi, East Zone of Ahmedabad</li>


                        <li>181.6 MLD Sewage Treatment Plant at Pirana Involved in Design of RCC Duct, and to prepare Bill of Quantity, estimates and tender documents</li>


                        <li>Civil Works of 106 MLD Sewage Treatment Plant at Vasna</li>

                        <li>Area Planning for Town Planning (TP) scheme no. 51 in Ahmedabad It is a land pooling mechanism for area plan- ning. It includes planning for Physical infrastructure, Social infrastructure, Plot size distribution, Reservation for public use etc., for Ahmedabad T.P.Scheme No. 51 Appropriate decentralized systems having high possibility of adoption were engineered. Major problems related to water and sanitation were attempted to be solved from the local resource availability. Financial viability of the options was checked with the primary and secondary data sources.</li>

                        <li>Ahmedabad Metro Project Development involved Study of techno-financial viability, Institutional Capacity Struc- turing, Private Sector participation mechanism study for metro rail project.</li>


                        <li>Scope of organized retail sector in Indian urban context for Tier II cities: A case study of Ahmedabad ,The aim of the research was to propose strategies for organized retail sectors (shopping mall) in urban arearation of Detailed Project Report (DPR) including Planning, design, Estimate and tendering for water supply Project of Gujarat.</li>

                    </ul>
                </div>
                <div className="col-12 col-lg-5 col-md-9 padding-55px-lr md-padding-5px-left sm-padding-50px-right">
                  <span className="alt-font margin-20px-bottom text-gradient-sky-blue-pink d-inline-block text-uppercase font-weight-500 letter-spacing-1px">On Going Projects</span>
                  <ul>
                      <li>Design of 50 KLD Sewerage Treatment Plant, Gujarat</li>
                      <li>Preparation of Detailed Project Report (DPR) inclusng Planning, Design, Estmate and tendering for water supply projects of Gujarat.</li>
                      <li>Consultancy work for Faniya Connectivity of Vanakbori Regional water supply Network.</li>
                      <li>Preparation of DPR including survey, investigation of soil, technical design of each component, Hydrological design of pipe line network under water supply scheme for Moradabad UP work.</li>
                  </ul>
                  <div>
                    <img className="border-radius-6px margin-20px-bottom" src="../img/cni.jpg" alt=""/>
                    <img className="border-radius-6px margin-20px-bottom" src="../img/pmc.jpg" alt=""/>
                  </div>
                </div>
            </div>
        </div>
    </section>


    </Layout>
  )
}

OurProjectsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default OurProjectsPage

export const OurProjectsPageQuery = graphql`
  query OurProjectsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
