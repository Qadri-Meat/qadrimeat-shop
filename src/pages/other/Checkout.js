import { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDiscountPrice } from "../../helpers/product";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { createOrder } from "store/slices/order-slice";
import { Form } from "react-bootstrap";

const schema = yup.object().shape({
  firstName: yup.string().required("First Name is Required"),
  lastName: yup.string().required("Last Name is Required"),
  company: yup.string().required("Company Name is Required"),
  country: yup
    .string()
    .required("Please Select Country")
    .matches(/^[A-Za-z ]*$/, "Please enter a valid country"), // Validate that the country name contains only letters and spaces
  address: yup.string().required("Please enter Address"),
  phone: yup
    .string()
    .required("Please enter Phone Number")
    .matches(/^\+[0-9]{1,3}-[0-9]{1,14}$/, "Please enter a valid phone number"), // Validate phone number with international format, e.g., +1-123456789
  email: yup.string().required("Please enter Email").email(),
  postal: yup
    .string()
    .required("Postal is Required")
    .matches(/^[0-9]{5}$/, "Please enter a valid postal code"), // Validate postal code with 5 digits
  state: yup.string().required("State is Required"),
  city: yup.string().required(),
});

const Checkout = ({ customProp }) => {
  const dispatch = useDispatch();

  const currency = useSelector((state) => state.currency);
  const { cartItems } = useSelector((state) => state.cart);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "Zubair",
      lastName: "Sheikh",
    },
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = (data) => {
    const newData = {
      phone: data.phone,
      shippingPrice: 0,
      totalPrice: cartTotalPrice.toFixed(2),
      deliveryTime: Date.now(),
      orderItems: [
        {
          name: cartItems.name,
          quantity: cartItems.quantity,
          price: cartItems.price,
          discount: cartItems.discount,
          image: cartItems.image,
          product: cartItems.id,
        },
      ],
      shippingDetails: data,
      type: "online",
      discount: 0,
    };
    console.log(newData);

    dispatch(createOrder(newData));
  };

  let cartTotalPrice = 0;

  console.log("Props....", customProp);

  let { pathname } = useLocation();

  return (
    <Fragment>
      <SEO
        titleTemplate="Checkout"
        description="Checkout page of flone react minimalist eCommerce template."
      />
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb
          pages={[
            { label: "Home", path: process.env.PUBLIC_URL + "/" },
            { label: "Checkout", path: process.env.PUBLIC_URL + pathname },
          ]}
        />
        <div className="checkout-area pt-95 pb-100">
          <div className="container">
            {cartItems && cartItems.length >= 1 ? (
              <form onSubmit={handleSubmit(onSubmitHandler)}>
                <div className="row">
                  <div className="col-lg-7">
                    <div className="billing-info-wrap">
                      <h3>Billing Details</h3>
                      <div className="row">
                        <div className="row">
                          {/* <CheckoutForm /> */}
                          <div className="col-lg-6 col-md-6">
                            <Form.Group controlId="firstName">
                              <Form.Label>{["First Name"]}</Form.Label>
                              <Form.Control
                                {...register("firstName")}
                                placeholder="firstName"
                              ></Form.Control>
                            </Form.Group>
                            <p className="validation-color">
                              {errors.firstName?.message}
                            </p>
                            {/* <TextField
                            ref={register}
                            name="firstName"
                            id="firstName"
                            label="First Name"
                            placeholder="First Name"
                            error={errors.firstName?.message}
                            /> */}
                          </div>

                          <div className="col-lg-6 col-md-6">
                            <Form.Group controlId="firstName">
                              <Form.Label>{["First Name"]}</Form.Label>
                              <Form.Control
                                {...register("firstName")}
                                placeholder="firstName"
                              ></Form.Control>
                            </Form.Group>
                            <p className="validation-color">
                              {errors.firstName?.message}
                            </p>
                            {/* <TextField
                              ref={register}
                              id="lastName"
                              label="Last Name"
                              placeholder="Last Name"
                              error={errors.lastName?.message}
                            /> */}
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <Form.Group controlId="company">
                            <Form.Label>{["Company Name"]}</Form.Label>
                            <Form.Control
                              {...register("company")}
                              placeholder="company"
                            ></Form.Control>
                          </Form.Group>
                          <p className="validation-color">
                            {errors.company?.message}
                          </p>
                          {/* <TextField
                            ref={register}
                            controlId="company"
                            label="Company"
                            placeholder="Company"
                            error={errors.company?.message}
                          /> */}
                        </div>
                        <div className="col-lg-12">
                          <div className="billing-select mb-20">
                            <label>Country</label>
                            <select name="country" {...register("country")}>
                              <option value="">Select a country</option>
                              <option value="Azerbaijan">Azerbaijan</option>
                              <option value="Bahamas">Bahamas</option>
                              <option value="Bahrain">Bahrain</option>
                              <option value="Bangladesh">Bangladesh</option>
                              <option value="Barbados">Barbados</option>
                            </select>
                          </div>
                          <p>{errors.country?.message}</p>
                        </div>
                        <div className="col-lg-12">
                          <Form.Group controlId="address">
                            <Form.Label>{["Address"]}</Form.Label>
                            <Form.Control
                              {...register("address")}
                              placeholder="Address"
                            ></Form.Control>
                          </Form.Group>
                          <p className="validation-color">
                            {errors.address?.message}
                          </p>
                          {/* <TextField
                            ref={register}
                            controlId="address"
                            label="Address"
                            placeholder="Address"
                            error={errors.address?.message}
                          /> */}
                        </div>
                        <div className="col-lg-12">
                          <Form.Group controlId="city">
                            <Form.Label>{["City"]}</Form.Label>
                            <Form.Control
                              {...register("city")}
                              placeholder="City"
                            ></Form.Control>
                          </Form.Group>
                          <p className="validation-color">
                            {errors.city?.message}
                          </p>
                          {/* <TextField
                            ref={register}
                            controlId="city"
                            label="City"
                            placeholder="City"
                            error={errors.city?.message}
                          /> */}
                        </div>
                        <div className="row">
                          <div className="col-lg-6 col-md-6">
                            <Form.Group controlId="state">
                              <Form.Label>{["State/Country"]}</Form.Label>
                              <Form.Control
                                {...register("state")}
                                placeholder="State/Country"
                              ></Form.Control>
                            </Form.Group>
                            <p className="validation-color">
                              {errors.state?.message}
                            </p>
                            {/* <TextField
                              ref={register}
                              controlId="state"
                              label="State/Country"
                              placeholder="State/Country"
                              error={errors.state?.message}
                            /> */}
                          </div>

                          <div className="col-lg-6 col-md-6">
                            <Form.Group controlId="postal">
                              <Form.Label>{["Postal/ Zip code"]}</Form.Label>
                              <Form.Control
                                {...register("postal")}
                                placeholder="Postal/ Zip code"
                              ></Form.Control>
                            </Form.Group>
                            <p className="validation-color">
                              {errors.postal?.message}
                            </p>
                            {/* <TextField
                              ref={register}
                              controlId="postal"
                              label="Postal/ Zip code"
                              placeholder="Postal/ Zip code"
                              error={errors.postal?.message}
                            /> */}
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6 col-md-6">
                            <Form.Group controlId="phone">
                              <Form.Label>{["Phone"]}</Form.Label>
                              <Form.Control
                                {...register("phone")}
                                placeholder="Phone"
                              ></Form.Control>
                            </Form.Group>
                            <p className="validation-color">
                              {errors.phone?.message}
                            </p>
                            {/* <TextField
                              ref={register}
                              controlId="phone"
                              label="Phone"
                              placeholder="Phone"
                              error={errors.phone?.message}
                            /> */}
                          </div>

                          <div className="col-lg-6 col-md-6">
                            <Form.Group controlId="email">
                              <Form.Label>{["Email"]}</Form.Label>
                              <Form.Control
                                {...register("email")}
                                placeholder="Email"
                              ></Form.Control>
                            </Form.Group>
                            <p className="validation-color">
                              {errors.email?.message}
                            </p>
                            {/* <TextField
                              ref={register}
                              controlId="email"
                              label="Email"
                              placeholder="Email"
                              error={errors.email?.message}
                            /> */}
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
                  <div className="col-lg-5">
                    <div className="your-order-area">
                      <h3>Your order</h3>
                      <div className="your-order-wrap gray-bg-4">
                        <div className="your-order-product-info">
                          <div className="your-order-top">
                            <ul>
                              <li>Product</li>
                              <li>Total</li>
                            </ul>
                          </div>
                          <div className="your-order-middle">
                            <ul>
                              {cartItems.map((cartItem, key) => {
                                const discountedPrice = getDiscountPrice(
                                  cartItem.price,
                                  cartItem.discount
                                );
                                const finalProductPrice = (
                                  cartItem.price * currency.currencyRate
                                ).toFixed(2);
                                const finalDiscountedPrice = (
                                  discountedPrice * currency.currencyRate
                                ).toFixed(2);
                                discountedPrice != null
                                  ? (cartTotalPrice +=
                                      finalDiscountedPrice * cartItem.quantity)
                                  : (cartTotalPrice +=
                                      finalProductPrice * cartItem.quantity);
                                return (
                                  <li key={key}>
                                    <span className="order-middle-left">
                                      {cartItem.name} X {cartItem.quantity}
                                    </span>{" "}
                                    <span className="order-price">
                                      {discountedPrice !== null
                                        ? currency.currencySymbol +
                                          (
                                            finalDiscountedPrice *
                                            cartItem.quantity
                                          ).toFixed(2)
                                        : currency.currencySymbol +
                                          (
                                            finalProductPrice *
                                            cartItem.quantity
                                          ).toFixed(2)}
                                    </span>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                          <div className="your-order-bottom">
                            <ul>
                              <li className="your-order-shipping">Shipping</li>
                              <li>Free shipping</li>
                            </ul>
                          </div>
                          <div className="your-order-total">
                            <ul>
                              <li className="order-total">Total</li>
                              <li>
                                {currency.currencySymbol +
                                  cartTotalPrice.toFixed(2)}
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="payment-method"></div>
                      </div>
                      <div className="place-order mt-25">
                        <button className="btn-hover" type="submit">
                          Place Order
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            ) : (
              <div className="row">
                <div className="col-lg-12">
                  <div className="item-empty-area text-center">
                    <div className="item-empty-area__icon mb-30">
                      <i className="pe-7s-cash"></i>
                    </div>
                    <div className="item-empty-area__text">
                      No items found in cart to checkout <br />{" "}
                      <Link to={process.env.PUBLIC_URL + "/shop"}>
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};
export default Checkout;
