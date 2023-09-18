import { Suspense, lazy } from "react";
import ScrollToTop from "./helpers/scroll-top";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// home pages
const Home = lazy(() => import("./pages/home/Home"));

//FAQs Pages
const Faqs = lazy(() => import("./pages/other/Faqs"));

//Return Pages
const Return = lazy(() => import("./pages/other/Return"));

// shop pages
const Shop = lazy(() => import("./pages/shop/Shop"));

// product pages
const Product = lazy(() => import("./pages/shop-product/Product"));
const ProductTabLeft = lazy(() =>
  import("./pages/shop-product/ProductTabLeft")
);
const ProductTabRight = lazy(() =>
  import("./pages/shop-product/ProductTabRight")
);
const ProductSticky = lazy(() => import("./pages/shop-product/ProductSticky"));
const ProductSlider = lazy(() => import("./pages/shop-product/ProductSlider"));
const ProductFixedImage = lazy(() =>
  import("./pages/shop-product/ProductFixedImage")
);

// other pages
const About = lazy(() => import("./pages/other/About"));
const Contact = lazy(() => import("./pages/other/Contact"));

const Cart = lazy(() => import("./pages/other/Cart"));
const Wishlist = lazy(() => import("./pages/other/Wishlist"));
const Compare = lazy(() => import("./pages/other/Compare"));
const Checkout = lazy(() => import("./pages/other/Checkout"));
const Order = lazy(() => import("./pages/other/Order"));

const NotFound = lazy(() => import("./pages/other/NotFound"));

const App = () => {
  return (
    <Router>
      <ScrollToTop>
        <Suspense
          fallback={
            <div className="flone-preloader-wrapper">
              <div className="flone-preloader">
                <span></span>
                <span></span>
              </div>
            </div>
          }
        >
          <Routes>
            <Route path={process.env.PUBLIC_URL + "/"} element={<Home />} />
            {/* Shop pages */}
            <Route path={process.env.PUBLIC_URL + "/shop"} element={<Shop />} />

            {/* FAQs pages */}
            <Route path={process.env.PUBLIC_URL + "/faqs"} element={<Faqs />} />

            {/* FAQs pages */}
            <Route
              path={process.env.PUBLIC_URL + "/return"}
              element={<Return />}
            />

            {/* Shop product pages */}
            <Route
              path={process.env.PUBLIC_URL + "/product/:id"}
              element={<Product />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/product-tab-left/:id"}
              element={<ProductTabLeft />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/product-tab-right/:id"}
              element={<ProductTabRight />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/product-sticky/:id"}
              element={<ProductSticky />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/product-slider/:id"}
              element={<ProductSlider />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/product-fixed-image/:id"}
              element={<ProductFixedImage />}
            />

            {/* Other pages */}
            <Route
              path={process.env.PUBLIC_URL + "/about"}
              element={<About />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/contact"}
              element={<Contact />}
            />

            <Route
              path={process.env.PUBLIC_URL + "/cart"}
              element={<Cart customProp={"beef"} />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/wishlist"}
              element={<Wishlist customProp={"chicken"} />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/compare"}
              element={<Compare />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/checkout"}
              element={<Checkout customProp={"mutton"} />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/order/:id"}
              element={<Order />}
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </ScrollToTop>
    </Router>
  );
};

export default App;
