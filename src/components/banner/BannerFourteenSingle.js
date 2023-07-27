import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";

const BannerFourteenSingle = ({ data, spaceBottomClass }) => {
  return (
    <div className={clsx("single-banner", spaceBottomClass)}>
      <Link to={process.env.PUBLIC_URL + data.link}>
        <img src={process.env.PUBLIC_URL + data.image} alt="" />
      </Link>
      <div className="banner-content banner-dark h-50 d-flex flex-column justify-content-between">
        <h3 style={{ color: "white" }}>{data.title}</h3>
        <Link to={data.link}>
          <i className="fa fa-long-arrow-right" />
        </Link>
      </div>
    </div>
  );
};

BannerFourteenSingle.propTypes = {
  data: PropTypes.shape({}),
  spaceBottomClass: PropTypes.string,
};

export default BannerFourteenSingle;
