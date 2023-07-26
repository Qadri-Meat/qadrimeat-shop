import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";

const Faqs = () => {
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
            { label: "FAQs", path: process.env.PUBLIC_URL + pathname },
          ]}
        />

        <div className="myaccount-area pb-80 pt-100">
          <div className="container">
            <div className="row">
              <div className="ms-auto me-auto col-lg-9">
                <div className="myaccount-wrapper">
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item
                      eventKey="0"
                      className="single-my-account mb-20"
                    >
                      <Accordion.Header className="panel-heading">
                        <span>1 .</span> What is the guarantee that you provide
                        Halal and hygienic meat?{" "}
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="myaccount-info-wrapper">
                          <div className="account-info-wrapper">
                            <h5>
                              We have our own in-house panel of Muftis and a
                              team of Food Scientists and veterinarians to
                              ensure that all our products are certified Halal
                              and 100% safe for consumption. Meat One has its
                              own microbiological testing labs, ensuring meat is
                              properly check and is approved to be consumed by
                              our customers.
                            </h5>
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item
                      eventKey="1"
                      className="single-my-account mb-20"
                    >
                      <Accordion.Header className="panel-heading">
                        <span>2 .</span> What if a customer is not satisfied
                        with the purchase?{" "}
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="myaccount-info-wrapper">
                          <div className="account-info-wrapper">
                            <h5>
                              If you are unhappy with your purchase for any
                              reason, just return it with packaging or invoice
                              and get your money back or the meat is replaced!
                              No questions asked!
                            </h5>
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item
                      eventKey="2"
                      className="single-my-account mb-20"
                    >
                      <Accordion.Header className="panel-heading">
                        <span>3 .</span> Is the meat you provide freshest meat?{" "}
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="myaccount-info-wrapper">
                          <div className="account-info-wrapper">
                            <h5>
                              All our meat reaches the stores within 24 hrs of
                              slaughtering after going through all the quality
                              checks, in a temperature controlled van so it
                              always reaches you FRESH and without any
                              pollutants as the truck in sealed and temperature
                              is maintained to prevent degradation. This process
                              enables us to ensure maximum hygiene, and
                              freshness and this helps us to retain the taste of
                              meat!
                            </h5>
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item
                      eventKey="3"
                      className="single-my-account mb-20"
                    >
                      <Accordion.Header className="panel-heading">
                        <span>4 .</span> Is the meat you provide clean and
                        trimmed?{" "}
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="myaccount-info-wrapper">
                          <div className="account-info-wrapper">
                            <h5>
                              We do not charge you for any excess fat and bones.
                              We weigh the meat after removing them. Almost
                              12%-15% fat is removed so you more meat compared
                              to others, giving you 100% value for your money!
                            </h5>
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item
                      eventKey="4"
                      className="single-my-account mb-20"
                    >
                      <Accordion.Header className="panel-heading">
                        <span>5 .</span> Do you have home delivery service?{" "}
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="myaccount-info-wrapper">
                          <div className="account-info-wrapper">
                            <h5>
                              Call +92 304 4014345 or click qadrimeat.com to get
                              the freshest product delivered to your door in 90
                              minutes or less! The same excellent quality of
                              meat straight from our store – to your door!
                            </h5>
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item
                      eventKey="5"
                      className="single-my-account mb-20"
                    >
                      <Accordion.Header className="panel-heading">
                        <span>6 .</span> Is the meat you provide pure for sure?{" "}
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="myaccount-info-wrapper">
                          <div className="account-info-wrapper">
                            <h5>
                              Meat one commits to offer its customers pure Halal
                              meat with no contaminants and pollutants.
                            </h5>
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default Faqs;
