import React from "react";

const CheckoutForm = () => {
  return (
    <>
      <div className="col-lg-7">
        <div className="billing-info-wrap">
          <h3>Billing Details</h3>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="billing-info mb-20">
                <label>First Name</label>
                <input type="text" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="billing-info mb-20">
                <label>Last Name</label>
                <input type="text" />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="billing-info mb-20">
                <label>Company Name</label>
                <input type="text" />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="billing-select mb-20">
                <label>Country</label>
                <select>
                  <option>Select a country</option>
                  <option>Azerbaijan</option>
                  <option>Bahamas</option>
                  <option>Bahrain</option>
                  <option>Bangladesh</option>
                  <option>Barbados</option>
                </select>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="billing-info mb-20">
                <label>Street Address</label>
                <input
                  className="billing-address"
                  placeholder="House number and street name"
                  type="text"
                />
                <input placeholder="Apartment, suite, unit etc." type="text" />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="billing-info mb-20">
                <label>Town / City</label>
                <input type="text" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="billing-info mb-20">
                <label>State / County</label>
                <input type="text" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="billing-info mb-20">
                <label>Postcode / ZIP</label>
                <input type="text" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="billing-info mb-20">
                <label>Phone</label>
                <input type="text" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="billing-info mb-20">
                <label>Email Address</label>
                <input type="text" />
              </div>
            </div>
          </div>

          <div className="additional-info-wrap">
            <h4>Additional information</h4>
            <div className="additional-info">
              <label>Order notes</label>
              <textarea
                placeholder="Notes about your order, e.g. special notes for delivery. "
                name="message"
                defaultValue={""}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutForm;
