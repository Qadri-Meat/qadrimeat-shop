import PropTypes from "prop-types";
import { Helmet, HelmetProvider } from "react-helmet-async";

const SEO = ({ title, titleTemplate, description }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {title} | {titleTemplate}
        </title>
        <meta name="description" content={description} />
      </Helmet>
    </HelmetProvider>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  titleTemplate: PropTypes.string,
  description: PropTypes.string,
};

SEO.defaultProps = {
  title: "Qadri Meat",
  titleTemplate: "Premium Halal Meats",
  description:
    "Explore our wide range of premium halal meats at Qadri Meat's product page. From succulent beef cuts to tender lamb and juicy chicken, find the perfect ingredients to elevate your culinary creations. Shop now and experience the true essence of quality and authenticity.",
};

export default SEO;
