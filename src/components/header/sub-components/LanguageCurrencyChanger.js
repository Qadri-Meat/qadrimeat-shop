import PropTypes from "prop-types";

const LanguageCurrencyChanger = ({ currency }) => {
  return <div className="language-currency-wrap"></div>;
};

LanguageCurrencyChanger.propTypes = {
  currency: PropTypes.shape({}),
};

export default LanguageCurrencyChanger;
