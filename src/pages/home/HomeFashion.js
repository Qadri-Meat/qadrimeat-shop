import { Fragment } from "react";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import HeroSliderEighteen from "wrappers/hero-slider/HeroSliderEighteen";
import BannerFourteen from "wrappers/banner/BannerFourteen";
import FeatureIconTwo from "wrappers/feature-icon/FeatureIconTwo";
import ImageSliderOne from "wrappers/image-slider/ImageSliderOne";
import BlogFeatured from "wrappers/blog-featured/BlogFeatured";

const HomeFashion = () => {
  return (
    <Fragment>
      <SEO
        titleTemplate="Fashion Home"
        description="Fashion home of flone react minimalist eCommerce template."
      />
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-1"
      >
        {/* hero slider */}
        <HeroSliderEighteen />

        {/* banner */}
        <BannerFourteen spaceTopClass="pt-95" spaceBottomClass="pb-70" />

        {/* blog featured */}
        <BlogFeatured spaceBottomClass="pb-55" />

        {/* feature icon */}
        <FeatureIconTwo spaceTopClass="pt-100" spaceBottomClass="pb-60" />

        {/* image slider */}
        <ImageSliderOne />
      </LayoutOne>
    </Fragment>
  );
};

export default HomeFashion;
