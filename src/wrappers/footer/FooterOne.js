import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";
import Logo from "components/header/Logo";

const FooterOne = ({
  backgroundColorClass,
  spaceTopClass,
  spaceBottomClass,
  spaceLeftClass,
  spaceRightClass,
  containerClass,
  extraFooterClass,
  sideMenu,
}) => {
  return (
    <footer
      className={clsx(
        "footer-area",
        backgroundColorClass,
        spaceTopClass,
        spaceBottomClass,
        extraFooterClass,
        spaceLeftClass,
        spaceRightClass
      )}
    >
      <div className={`${containerClass ? containerClass : "container"}`}>
        <div className="row">
          <div
            // className={`${
            //   sideMenu ? "col-xl-2 col-sm-4" : "col-lg-2 col-sm-4"
            // }`}
            className={`${
              sideMenu ? "col-xl-3 col-sm-8" : "col-lg-4 col-sm-6"
            }`}
          >
            <p className="my-2">
              <i className="fa fa-phone me-2" /> +92 304 4014345
            </p>
            <p className="my-2">
              <i className="fa fa-inbox me-2" />
              qadrimeat@gmail.com
            </p>
            <p className="my-2">
              <i className="fa fa-location-arrow me-2" />
              Street 113, Sector N Dha Phase 1, Lahore, Punjab 54030, Pakistan.
            </p>
            <Logo imageUrl="/assets/images/logo/logo.png" logoClass="logo" />
            <p className="my-2">
              &copy; {new Date().getFullYear()} Qadri Meat. All Rights Reserved
            </p>
          </div>
          <div
            className={`${
              sideMenu ? "col-xl-2 col-sm-4" : "col-lg-2 col-sm-4"
            }`}
          >
            <div className="footer-widget mb-30 ml-30">
              <div className="footer-title">
                <h3>ABOUT US</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/about"}>About us</Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/contact"}>
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className={`${
              sideMenu ? "col-xl-2 col-sm-4" : "col-lg-2 col-sm-4"
            }`}
          >
            <div
              className={`${
                sideMenu
                  ? "footer-widget mb-30 ml-95"
                  : "footer-widget mb-30 ml-50"
              }`}
            >
              <div className="footer-title">
                <h3>USEFUL LINKS</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/return"}>Returns</Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/faqs"}>FAQs</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className={`${
              sideMenu ? "col-xl-3 col-sm-8" : "col-lg-4 col-sm-6"
            }`}
          >
            <div className="container d-flex flex-column justify-content-center align-items-center h-100">
              <div className="footer-title">
                <h3>FOLLOW US</h3>
              </div>
              <div className="footer-social">
                <ul className="d-flex gap-4 justify-content-center">
                  <li>
                    <a href="//www.facebook.com">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="//www.instagram.com/">
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

FooterOne.propTypes = {
  backgroundColorClass: PropTypes.string,
  containerClass: PropTypes.string,
  extraFooterClass: PropTypes.string,
  sideMenu: PropTypes.bool,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
  spaceLeftClass: PropTypes.string,
  spaceRightClass: PropTypes.string,
};

export default FooterOne;
