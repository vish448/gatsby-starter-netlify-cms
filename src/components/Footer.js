import React from 'react'
import { Link } from 'gatsby'

const Footer = class extends React.Component {
  render() {
    return (
      <>
      <footer className="footer-dark bg-slate-blue">
            <div className="footer-top padding-seven-tb lg-padding-eight-tb sm-padding-50px-tb">
                <div className="container">
                    <div className="row justify-content-center">
                        
                        <div className="col-12 col-lg-3 col-sm-6 order-5 order-lg-0 text-md-center text-lg-left last-paragraph-no-margin">
                            <a href="index.html" className="footer-logo margin-25px-bottom margin-5px-top d-inline-block"><img src="../img/wwlogo.png" data-at2x="../img/wwlogo.png" alt="" width="300" height="200" style={{height: "200px !important;"}} /></a>
                            
                            <p>&copy; Copyright 2021 <a href="index.html" className="text-decoration-line-bottom text-white">Waterwaysinfra</a></p>
                        </div>
                       
                        
                        <div className="col-12 col-lg offset-xl-1 col-md-3 col-sm-4 order-1 order-lg-0 md-margin-40px-bottom xs-margin-25px-bottom">
                            <span className="alt-font font-weight-500 d-block text-white margin-20px-bottom xs-margin-10px-bottom">Company</span>
                            <ul>
                                <li><a href="about">About Waterwaysinfra</a></li>
                                <li><a href="our-services">Our services</a></li>
                                <li><a href="our-projects">Our Projects</a></li>
                                <li><a href="contact-us">Contact us</a></li>
                            </ul>
                        </div>
                       
                        
                        
                        <div className="col-12 col-lg col-md-3 col-sm-6 order-4 order-lg-0 xs-margin-25px-bottom">
                            <span className="alt-font font-weight-500 d-block text-white margin-20px-bottom xs-margin-10px-bottom">Services</span>
                            <ul>
                                <li><a href="/water-supply">Water Suppy Network</a></li>
                                <li><a href="#">Sewage Netwrok</a></li>
                                <li><a href="#">Strom Water Network</a></li>
                                <li><a href="#">Canal Network and irrigation</a></li>
								<li><a href="#">PMC</a></li>
								<li><a href="#">MEP</a></li>
                            </ul>
                        </div>
                                               
                    </div>
                </div>
            </div>
        </footer>
        <a className="scroll-top-arrow" href="javascript:void(0);"><i className="feather icon-feather-arrow-up"></i></a>
        </>
    )
  }
}

export default Footer
