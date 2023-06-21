import React from "react";
import BillingForm from "./BillingForm";

const CheckoutForm = () => {
  return (
    <>
      <div className="col-lg-7">
        <div className="billing-info-wrap">
          <h3>Billing Details</h3>
          <div className="row">
            <BillingForm />
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
