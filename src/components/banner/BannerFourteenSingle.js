import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

const BannerFourteenSingle = ({ data, spaceBottomClass }) => {
  return (
    <div className={clsx('single-banner', spaceBottomClass)}>
      <Link to={process.env.PUBLIC_URL + data.link}>
        <img
          src={process.env.PUBLIC_URL + data.image}
          alt=""
          style={{
            position: 'relative',
          }}
        />
        <div
          className="banner-overlay"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.4)',
          }}
        />
      </Link>
      <div className="banner-content banner-dark h-50 d-flex flex-column justify-content-between">
        <h3
          style={{
            color: 'white',
          }}
        >
          {data.title}
        </h3>
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
