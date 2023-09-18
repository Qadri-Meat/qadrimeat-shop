import PropTypes from "prop-types";
import clsx from "clsx";

const RefundPolicy = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div className={clsx("welcome-area", spaceTopClass, spaceBottomClass)}>
      <div className="container">
        <div className="welcome-content text-center">
          <h1>Refund Policy</h1>
          <p>
            We have a 2-day return policy, which means you have 2 days after
            receiving your item to request a return.
          </p>
          <br></br>
          <p>
            To be eligible for a return, your item must be in the same condition
            that you received it, unworn or unused, with tags, and in its
            original packaging. You’ll also need the receipt or proof of
            purchase.
          </p>
          <br></br>
          <p>To start a return, you can contact us at qadrimeat@gmail.com.</p>
          <br></br>
          <p>
            If your return is accepted, we’ll send you a return shipping label,
            as well as instructions on how and where to send your package. Items
            sent back to us without first requesting a return will not be
            accepted.
          </p>
          <br></br>
          <p>
            You can always contact us for any return question at
            qadrimeat@gmail.com.
          </p>
          <br></br>
          <h3>Damages and issues</h3>
          <p>
            Please inspect your order upon reception and contact us immediately
            if the item is defective, damaged or if you receive the wrong item,
            so that we can evaluate the issue and make it right.
          </p>
          <br></br>
          <h3>Exchanges</h3>
          <p>
            The fastest way to ensure you get what you want is to return the
            item you have, and once the return is accepted, make a separate
            purchase for the new item.
          </p>
          <br></br>
          <h3>Refunds</h3>
          <p>
            We will notify you once we’ve received and inspected your return,
            and let you know if the refund was approved or not. If approved,
            you’ll be automatically refunded on your original payment method
            within 10 business days. Please remember it can take some time for
            your bank or credit card company to process and post the refund too.
            If more than 15 business days have passed since we’ve approved your
            return, please contact us at qadrimeat@gmail.com.
          </p>
        </div>
      </div>
    </div>
  );
};

RefundPolicy.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
};

export default RefundPolicy;
