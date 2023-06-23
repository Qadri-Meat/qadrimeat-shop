import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";

const BannerOneSingle = ({ data, spaceBottomClass }) => {
  return (
    <div className={clsx("single-banner", spaceBottomClass)}>
      <Link to={process.env.PUBLIC_URL + data.link}>
        <img src={process.env.PUBLIC_URL + data.image} alt="" />
      </Link>
      <div style={{ color: "black" }} className="banner-content">
        <h3 style={{ color: "black" }}>{data.title}</h3>
        <h4 style={{ color: "black" }}>
          {data.subtitle} <span style={{ color: "black" }}>{data.price}</span>
        </h4>
        <Link
          style={{ color: "black" }}
          to={process.env.PUBLIC_URL + data.link}
        >
          <i style={{ color: "black" }} className="fa fa-long-arrow-right" />
        </Link>
      </div>
    </div>
  );
};

BannerOneSingle.propTypes = {
  data: PropTypes.shape({}),
  spaceBottomClass: PropTypes.string,
};

export default BannerOneSingle;
