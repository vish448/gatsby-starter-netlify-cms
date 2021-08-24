import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <>

      <header className="header-with-topbar">
            <div className="top-bar bg-light-gray border-bottom border-color-black-transparent d-none d-md-inline-block padding-35px-lr md-no-padding-lr">
                <div className="container-fluid nav-header-container">
                    <div className="d-flex flex-wrap align-items-center">
                        <div className="col-12 text-center text-sm-left col-sm-auto mr-auto pl-lg-0">
                            <ul className="social-icon padding-5px-tb">
                                <li><a className="text-neon-blue-hover" href="http://www.facebook.com" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                            </ul>
                        </div>
                        <div className="col-auto d-none d-sm-block text-right px-lg-0 font-size-0">
                            <div className="top-bar-contact">
                                <span className="top-bar-contact-list">
                                    <i className="feather icon-feather-phone-call icon-extra-small text-extra-dark-gray"></i>
                                    079 4007 2293
                                </span>
                                <span className="top-bar-contact-list d-none d-md-inline-block no-border-right pr-0">
                                    <i className="feather icon-feather-map-pin icon-extra-small text-extra-dark-gray"></i>
                                    1005, Addor Aspire, Near Jhanavi Hotel,
																		Panjrapole, Ahmedabad, Gujarat, 380015 (IN).
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg top-space navbar-light bg-white header-light fixed-top navbar-boxed header-reverse-scroll">
                <div className="container-fluid nav-header-container">
                    <div className="col-6 col-lg-2 mr-auto pl-lg-0">
                        <a className="navbar-brand" href="index.html">
														<img src="../img/logowwi.png" data-at2x="../img/logowwi.png" className="mobile-logo"alt="" />
														<img src="../img/logowwi.png" data-at2x="../img/logowwi.png" className="alt-logo" alt="" />
														<img src="../img/logowwi.png" data-at2x="../img/logowwi.png" className="default-logo" alt="" />
                        </a>
                    </div>
                    <div className="col-auto menu-order px-lg-0">
                        <button className="navbar-toggler float-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-label="Toggle navigation">
                            <span className="navbar-toggler-line"></span>
                            <span className="navbar-toggler-line"></span>
                            <span className="navbar-toggler-line"></span>
                            <span className="navbar-toggler-line"></span>
                        </button>
                        <div className=" collapse navbar-collapse justify-content-center" id="navbarNav">
                            <ul className="navbar-nav alt-font">
                                <li className="nav-item dropdown megamenu">
                                    <a href="/" className="nav-link">Home</a>
                                </li>
                                <li className="nav-item dropdown simple-dropdown">
                                    <a href="about" className="nav-link">About Us</a>
                                </li>
																<li className="nav-item dropdown simple-dropdown">
																		<a href="our-services" className="nav-link">Services</a>
																		<i className="fa fa-angle-down dropdown-toggle" data-toggle="dropdown" aria-hidden="true"></i>
																		<ul className="dropdown-menu" role="menu">
																				<li className="dropdown"><a href="#">Water Supply Network</a></li>
																				<li className="dropdown"><a href="#">Sewage Network</a></li>
																				<li className="dropdown"><a href="#">Storm Water Network</a></li>
																				<li className="dropdown"><a href="#">Canal Network & Irrigation </a></li>
																				<li className="dropdown"><a href="#">PMC</a></li>
																				<li className="dropdown"><a href="#">MEP</a></li>
																		</ul>
																</li>
																<li className="nav-item dropdown simple-dropdown">
																	<a href="#" className="nav-link">Projects</a>
															</li>
                                <li className="nav-item dropdown simple-dropdown">
                                    <a href="#" className="nav-link">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
      </>
      
    )
  }
}

export default Navbar
