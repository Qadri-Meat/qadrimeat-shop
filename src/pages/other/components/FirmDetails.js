import { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";

const FirmDetails = ({ spaceBottomClass }) => {
  const [modalStatus, isOpen] = useState(false);
  return (
    <div className={clsx("video-popup", spaceBottomClass)}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="video-popup__image">
              <img
                src={process.env.PUBLIC_URL + "/assets/images/others/firm.jpg"}
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="video-popup__content">
              <h2 className="title mb-30">About Our Firm's</h2>
              <p className="text mb-30">
                Qadri Meat is a meat shop and firm that provides a variety of
                meat products to its customers. It is located in Lahore,
                Pakistan, and has been in business for several years. Qadri Meat
                is known for its high-quality meat products, which are sourced
                from trusted suppliers and farms. Qadri Meat offer a range of
                meats, including beef, lamb, chicken, and goat, as well as
                processed meat products such as sausages, bacon, and deli meats.
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

FirmDetails.propTypes = {
  spaceBottomClass: PropTypes.string,
};

export default FirmDetails;
