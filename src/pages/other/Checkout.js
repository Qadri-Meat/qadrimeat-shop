import { Fragment, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDiscountPrice } from '../../helpers/product';
import SEO from '../../components/seo';
import LayoutOne from '../../layouts/LayoutOne';
import Breadcrumb from '../../wrappers/breadcrumb/Breadcrumb';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { createOrder, resetOrder } from 'store/slices/order-slice';
import { Form } from 'react-bootstrap';
import { deleteAllFromCart } from 'store/slices/cart-slice';

const schema = yup.object().shape({
  firstName: yup.string().required('First Name is Required'),
  lastName: yup.string().required('Last Name is Required'),
  country: yup
    .string()
    .required('Please Select Country')
    .matches(/^[A-Za-z ]*$/, 'Please enter a valid country'),
  address: yup.string().required('Please enter Address'),
  phone: yup
    .string()
    .required('Please enter Phone Number')
    .matches(
      /^[0-9+]*$/,
      'Please enter a valid numeric phone number'
    ),
  postalCode: yup
    .string()
    .required('Postal is Required')
    .matches(/^[0-9]{5}$/, 'Please enter a valid postal code'),
  state: yup.string(),
  city: yup.string().required(),
  notes: yup
    .string()
    .max(200, 'Message must be at most 200 characters'),
});

const Checkout = ({ customProp }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currency = useSelector((state) => state.currency);
  const { cartItems } = useSelector((state) => state.cart);
  const { success, details: order } = useSelector(
    (state) => state.order
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      country: 'Pakistan',
      postalCode: '54660',
      city: 'Lahore',
    },
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (success) {
      const orderId = order.id;
      dispatch(deleteAllFromCart());
      dispatch(resetOrder());
      navigate(`/order/${orderId}`);
    }
  });

  const onSubmitHandler = (data) => {
    const orderItems = cartItems.map((i) => {
      return {
        name: i.name, // Assuming cartItems is an array and you want to access the first item
        quantity: i.quantity,
        price: i.price,
        discount: i.discount,
        image: i.image,
        product: i.id,
        weight: i.weight,
      };
    });
    const newData = {
      phone: data.phone,
      shippingPrice: 0,
      totalPrice: cartTotalPrice.toFixed(2),
      deliveryTime: Date.now(),
      orderItems,
      shippingDetails: data,
      type: 'online',
      discount: 0,
    };

    dispatch(createOrder(newData));
  };

  let cartTotalPrice = 0;

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
            { label: 'Home', path: process.env.PUBLIC_URL + '/' },
            {
              label: 'Checkout',
              path: process.env.PUBLIC_URL + pathname,
            },
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
                          <div className="col-lg-12">
                            <Form.Group controlId="phone">
                              <Form.Label>{['Phone']}</Form.Label>
                              <Form.Control
                                {...register('phone')}
                                placeholder="Phone"
                              ></Form.Control>
                            </Form.Group>

                            <p style={{ color: 'red' }}>
                              {errors.phone?.message}
                            </p>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <Form.Group controlId="firstName">
                              <Form.Label>
                                {['First Name']}
                              </Form.Label>
                              <Form.Control
                                {...register('firstName')}
                                placeholder="First Name"
                              ></Form.Control>
                            </Form.Group>
                            <p style={{ color: 'red' }}>
                              {errors.firstName?.message}
                            </p>
                          </div>

                          <div className="col-lg-6 col-md-6">
                            <Form.Group controlId="lastName">
                              <Form.Label>{['Last Name']}</Form.Label>
                              <Form.Control
                                {...register('lastName')}
                                placeholder="Last Name"
                              ></Form.Control>
                            </Form.Group>
                            <p style={{ color: 'red' }}>
                              {errors.lastName?.message}
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-12">
                            <Form.Group controlId="address">
                              <Form.Label>{['Address']}</Form.Label>
                              <Form.Control
                                {...register('address')}
                                placeholder="Address"
                              ></Form.Control>
                            </Form.Group>
                            <p style={{ color: 'red' }}>
                              {errors.address?.message}
                            </p>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-lg-6 col-md-6">
                            <Form.Group controlId="city">
                              <Form.Label>{['City']}</Form.Label>
                              <Form.Control
                                {...register('city')}
                                disabled
                                defaultValue="Lahore"
                              ></Form.Control>
                            </Form.Group>
                            <p style={{ color: 'red' }}>
                              {errors.city?.message}
                            </p>
                          </div>

                          <div className="col-lg-6 col-md-6">
                            <Form.Group controlId="state">
                              <Form.Label>{['State']}</Form.Label>
                              <Form.Control
                                {...register('state')}
                                placeholder="State"
                                disabled
                                defaultValue="Punjab"
                              ></Form.Control>
                            </Form.Group>
                            <p style={{ color: 'red' }}>
                              {errors.state?.message}
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6 col-md-6">
                            <Form.Group controlId="postalCode">
                              <Form.Label>
                                {['Postal/ Zip code']}
                              </Form.Label>
                              <Form.Control
                                {...register('postalCode')}
                                placeholder="Postal/ Zip code"
                                disabled
                                defaultValue="54660"
                              ></Form.Control>
                            </Form.Group>
                            <p style={{ color: 'red' }}>
                              {errors.postalCode?.message}
                            </p>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <Form.Group controlId="country">
                              <Form.Label>{['Country']}</Form.Label>
                              <Form.Control
                                {...register('country')}
                                placeholder="Country"
                                disabled
                                defaultValue="Pakistan"
                              ></Form.Control>
                            </Form.Group>
                            <p style={{ color: 'red' }}>
                              {errors.country?.message}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="additional-info-wrap">
                        <h4>Additional information</h4>
                        <div className="additional-info">
                          <label>Order notes</label>
                          <textarea
                            {...register('notes')}
                            placeholder="Notes about your order, e.g. special notes for delivery. "
                            name="notes"
                            defaultValue={''}
                          />
                        </div>
                        <p style={{ color: 'red' }}>
                          {errors.notes?.message}
                        </p>
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
                                const discountedPrice =
                                  getDiscountPrice(
                                    cartItem.price,
                                    cartItem.discount
                                  );
                                const finalProductPrice = (
                                  cartItem.price *
                                  currency.currencyRate
                                ).toFixed(2);
                                const finalDiscountedPrice = (
                                  discountedPrice *
                                  currency.currencyRate
                                ).toFixed(2);
                                discountedPrice != null
                                  ? (cartTotalPrice +=
                                      finalDiscountedPrice *
                                      cartItem.quantity)
                                  : (cartTotalPrice +=
                                      finalProductPrice *
                                      cartItem.quantity);
                                return (
                                  <li key={key}>
                                    <span className="order-middle-left">
                                      {cartItem.name} X{' '}
                                      {cartItem.quantity}
                                    </span>{' '}
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
                              <li className="your-order-shipping">
                                Shipping
                              </li>
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
                      No items found in cart to checkout <br />{' '}
                      <Link to={process.env.PUBLIC_URL + '/shop'}>
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
