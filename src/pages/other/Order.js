import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import SEO from "../../components/seo";
import { getDiscountPrice } from "../../helpers/product";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { getOrder } from "store/slices/order-slice";

const Order = () => {
  let { pathname } = useLocation();
  let dispatch = useDispatch();
  let { id } = useParams();
  const currency = useSelector((state) => state.currency);
  const { details: order } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(getOrder(id));
  }, [dispatch, id]);

  return (
    <Fragment>
      <SEO
        titleTemplate="Cart"
        description="Cart page of flone react minimalist eCommerce template."
      />

      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb
          pages={[
            { label: "Home", path: process.env.PUBLIC_URL + "/" },
            { label: "Order", path: process.env.PUBLIC_URL + pathname },
          ]}
        />
        {order && (
          <div className="cart-main-area pt-90 pb-100">
            <div className="container">
              {order.orderItems.length >= 1 ? (
                <Fragment>
                  <h3 className="cart-page-title">Your cart items</h3>
                  <div className="row">
                    <div className="col-7">
                      <div className="table-content table-responsive cart-table-content">
                        <table>
                          <thead>
                            <tr>
                              <th>Image</th>
                              <th>Product Name</th>
                              <th>Unit Price</th>
                              <th>Subtotal</th>
                            </tr>
                          </thead>
                          <tbody>
                            {order.orderItems.map((orderItem, key) => {
                              const discountedPrice = getDiscountPrice(
                                orderItem.price,
                                orderItem.discount
                              );
                              const finalProductPrice = (
                                orderItem.price * currency.currencyRate
                              ).toFixed(2);
                              const finalDiscountedPrice = (
                                discountedPrice * currency.currencyRate
                              ).toFixed(2);
                              return (
                                <tr key={key}>
                                  <td className="product-thumbnail">
                                    <Link
                                      to={
                                        process.env.PUBLIC_URL +
                                        "/product/" +
                                        orderItem.product
                                      }
                                    >
                                      <img
                                        className="img-fluid"
                                        src={
                                          process.env.REACT_APP_IMAGE_URL +
                                          orderItem.image[0]
                                        }
                                        alt=""
                                      />
                                    </Link>
                                  </td>

                                  <td className="product-name">
                                    <Link
                                      to={
                                        process.env.PUBLIC_URL +
                                        "/product/" +
                                        orderItem.product
                                      }
                                    >
                                      {orderItem.name}
                                    </Link>
                                  </td>

                                  <td className="product-price-cart">
                                    {discountedPrice !== null ? (
                                      <Fragment>
                                        <span className="amount old">
                                          {currency.currencySymbol +
                                            finalProductPrice}
                                        </span>
                                        <span className="amount">
                                          {currency.currencySymbol +
                                            finalDiscountedPrice}
                                        </span>
                                      </Fragment>
                                    ) : (
                                      <span className="amount">
                                        {currency.currencySymbol +
                                          finalProductPrice}
                                      </span>
                                    )}
                                  </td>
                                  <td className="product-subtotal">
                                    {discountedPrice !== null
                                      ? currency.currencySymbol +
                                        (
                                          finalDiscountedPrice *
                                          orderItem.quantity
                                        ).toFixed(2)
                                      : currency.currencySymbol +
                                        (
                                          finalProductPrice * orderItem.quantity
                                        ).toFixed(2)}
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="col-5">
                      <div className="your-order-area">
                        <div className="your-order-wrap gray-bg-4">
                          <div className="your-order-product-info">
                            <div className="your-order-top">
                              <ul>
                                <li>Recipient</li>
                                <li>
                                  {order.shippingDetails.firstName}{" "}
                                  {order.shippingDetails.lastName}
                                </li>
                              </ul>
                            </div>
                            <div className="your-order-middle">
                              <ul>
                                <li>Phone Number</li>
                                <li>{order.shippingDetails.phone}</li>
                              </ul>
                            </div>
                            <div className="your-order-middle">
                              <ul>
                                <li>Shipping Address</li>
                                <li>{order.shippingDetails.address}</li>
                              </ul>
                            </div>
                            <div className="your-order-total">
                              <ul>
                                <li className="order-total">Total</li>
                                <li>
                                  {currency.currencySymbol +
                                    order.totalPrice.toFixed(2)}
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="payment-method"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Fragment>
              ) : (
                <div className="row">
                  <div className="col-lg-12">
                    <div className="item-empty-area text-center">
                      <div className="item-empty-area__icon mb-30">
                        <i className="pe-7s-cart"></i>
                      </div>
                      <div className="item-empty-area__text">
                        No items found in cart <br />{" "}
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
        )}
      </LayoutOne>
    </Fragment>
  );
};

export default Order;
