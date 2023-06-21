import { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";

const AboutQadriDetails = ({ spaceBottomClass }) => {
  const [modalStatus, isOpen] = useState(false);
  return (
    <div className={clsx("video-popup", spaceBottomClass)}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="video-popup__image">
              <img
                src={process.env.PUBLIC_URL + "/assets/images/others/meat.jpg"}
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="video-popup__content">
              <h2 className="title mb-30">Welcome To Qadri Meat</h2>
              <p className="text mb-30">
                Qadri Meat is a specialty store chain, retailing wide variety of
                meat cuts and related products. Fresh, premium quality prime
                beef, mutton and chicken along with Ready to Cook meat products.
                Our primary objective is to provide the customers with finest
                quality meat slaughtered and handled in a hygienic environment.
                In addition to this, we also provide the customers with a wide
                range of meat cuts to choose from. With Qadri Meat, you have got
                it all!
              </p>
              <div className="link mb-30">
                <Link to={process.env.PUBLIC_URL + "/about"}>
                  More About Us
                </Link>
              </div>
              <ModalVideo
                channel="youtube"
                isOpen={modalStatus}
                videoId="feOScd2HdiU"
                onClose={() => isOpen(false)}
              />
              <button onClick={() => isOpen(true)}>
                <i className="fa fa-play-circle"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AboutQadriDetails.propTypes = {
  spaceBottomClass: PropTypes.string,
};

export default AboutQadriDetails;
