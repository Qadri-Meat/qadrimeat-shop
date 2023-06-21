import PropTypes from "prop-types";
import clsx from "clsx";

const SectionTitleWithText = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div className={clsx("welcome-area", spaceTopClass, spaceBottomClass)}>
      <div className="container">
        <div className="welcome-content text-center">
          <h5>Who Are We</h5>
          <h1>Welcome To Qadri Meats</h1>
          <p>
            Qadri Meat is a specialty store chain, retailing wide variety of
            meat cuts and related products. Fresh, premium quality prime beef,
            mutton and chicken along with Ready to Cook meat products. Our
            primary objective is to provide the customers with finest quality
            meat slaughtered and handled in a hygienic environment. In addition
            to this, we also provide the customers with a wide range of meat
            cuts to choose from. With Qadri Meat, you have got it all!{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

SectionTitleWithText.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
};

export default SectionTitleWithText;
