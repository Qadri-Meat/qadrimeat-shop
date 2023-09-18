import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import RefundPolicy from "components/section-title/RefundPolicy";

const Return = () => {
  let { pathname } = useLocation();

  return (
    <Fragment>
      <SEO
        titleTemplate="My Account"
        description="My Account page of flone react minimalist eCommerce template."
      />
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb
          pages={[
            { label: "Home", path: process.env.PUBLIC_URL + "/" },
            { label: "Return", path: process.env.PUBLIC_URL + pathname },
          ]}
        />

        {/* section title with text */}
        <RefundPolicy spaceTopClass="pt-100" spaceBottomClass="pb-95" />
      </LayoutOne>
    </Fragment>
  );
};

export default Return;
