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
  let cartTotalPrice = 0;

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
        <div className="cart-main-area">
          <div className="container">
            <Fragment>
              {order && order.orderItems.length >= 1 ? (
                <div className="cart-main-area pb-100">
                  <div className="container">
                    <Fragment>
                      <h3 className="cart-page-title">
                        <b>Name:</b> {order.shippingDetails.firstName}{" "}
                        {order.shippingDetails.lastName}
                      </h3>
                      <h5 className="cart-page-title">
                        <b>Address:</b> {order.shippingDetails.address}
                      </h5>
                      <h5 className="cart-page-title">
                        <b>Phone:</b> {order.shippingDetails.phone}
                      </h5>
                      <div className="row">
                        <div className="col-12">
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

                                  discountedPrice != null
                                    ? (cartTotalPrice +=
                                        finalDiscountedPrice *
                                        orderItem.quantity)
                                    : (cartTotalPrice +=
                                        finalProductPrice * orderItem.quantity);
                                  return (
                                    <tr key={key}>
                                      <td className="product-thumbnail">
                                        <Link
                                          to={
                                            process.env.PUBLIC_URL +
                                            "/product/" +
                                            orderItem.id
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
                                            orderItem.id
                                          }
                                        >
                                          {orderItem.name}
                                        </Link>
                                        {orderItem.selectedProductColor &&
                                        orderItem.selectedProductSize ? (
                                          <div className="cart-item-variation">
                                            <span>
                                              Color:{" "}
                                              {orderItem.selectedProductColor}
                                            </span>
                                            <span>
                                              Size:{" "}
                                              {orderItem.selectedProductSize}
                                            </span>
                                          </div>
                                        ) : (
                                          ""
                                        )}
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
                                              finalProductPrice *
                                              orderItem.quantity
                                            ).toFixed(2)}
                                      </td>
                                    </tr>
                                  );
                                })}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="row pt-20">
                        <div className="col-lg-4 col-md-12">
                          <div className="grand-totall">
                            <div className="title-wrap">
                              <h4 className="cart-bottom-title section-bg-gary-cart">
                                Receipt
                              </h4>
                            </div>
                            <h5>
                              Total products{" "}
                              <span>
                                {currency.currencySymbol +
                                  cartTotalPrice.toFixed(2)}
                              </span>
                            </h5>

                            <h4 className="grand-totall-title">
                              Grand Total{" "}
                              <span>
                                {currency.currencySymbol +
                                  cartTotalPrice.toFixed(2)}
                              </span>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </Fragment>
                  </div>
                </div>
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
            </Fragment>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default Order;
