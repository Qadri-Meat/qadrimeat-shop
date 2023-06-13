import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import SectionTitleWithText from "../../components/section-title/SectionTitleWithText";
import AboutQadriDetails from "./components/AboutQadriDetails";
import FirmDetails from "./components/FirmDetails";
import AboutFeature from "./components/AboutFeature";
import FeedBackDetails from "./components/FeedBackDetails";

const About = () => {
  let { pathname } = useLocation();

  return (
    <Fragment>
      <SEO
        titleTemplate="About us"
        description="About page of flone react minimalist eCommerce template."
      />
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb
          pages={[
            { label: "Home", path: process.env.PUBLIC_URL + "/" },
            { label: "About us", path: process.env.PUBLIC_URL + pathname },
          ]}
        />

        {/* section title with text */}
        <SectionTitleWithText spaceTopClass="pt-100" spaceBottomClass="pb-95" />

        {/* About Qadri meat Details */}
        <div style={{ paddingBottom: "40px" }}>
          <AboutQadriDetails />
        </div>

        {/* About Qadri meat Firm Details */}
        <div style={{ paddingBottom: "40px" }}>
          <FirmDetails />
        </div>

        {/* About Feature */}
        <AboutFeature />
        {/* <Feed Back Details /> */}
        <FeedBackDetails />
      </LayoutOne>
    </Fragment>
  );
};

export default About;
