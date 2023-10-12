import { Fragment } from 'react';
import SEO from '../../components/seo';
import LayoutOne from '../../layouts/LayoutOne';
import HeroSliderEighteen from 'wrappers/hero-slider/HeroSliderEighteen';
import BannerFourteen from 'wrappers/banner/BannerFourteen';
import FeatureIconTwo from 'wrappers/feature-icon/FeatureIconTwo';
import ImageSliderOne from 'wrappers/image-slider/ImageSliderOne';
import NewProductGrid from 'wrappers/product/NewProductGrid';

const Home = () => {
  return (
    <Fragment>
      <SEO
        titleTemplate="Your Trusted Bucher Shop for Premium Halal Meats"
        description="Welcome to Qadri Meat, your one-stop destination for the finest selection of halal meats. Explore our premium cuts of beef, lamb, chicken, and more, carefully sourced and handpicked to ensure unmatched quality and freshness. Shop with confidence and savor the taste of authentic halal meats that meet our stringent standards. Order online and experience the convenience of doorstep delivery."
      />
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-1"
      >
        {/* hero slider */}
        <HeroSliderEighteen />

        {/* banner */}
        <BannerFourteen
          spaceTopClass="pt-95"
          spaceBottomClass="pb-70"
        />

        {/* product grid */}
        <NewProductGrid limit={5} />

        {/* feature icon */}
        <FeatureIconTwo
          spaceTopClass="pt-100"
          spaceBottomClass="pb-60"
        />

        {/* image slider */}
        <ImageSliderOne />
      </LayoutOne>
    </Fragment>
  );
};

export default Home;
