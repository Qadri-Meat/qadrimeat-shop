import { Fragment, useState, useEffect } from 'react';
import Paginator from 'react-hooks-paginator';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
  getSortedProducts,
  searchProducts,
} from '../../helpers/product';
import SEO from '../../components/seo';
import LayoutOne from '../../layouts/LayoutOne';
import Breadcrumb from '../../wrappers/breadcrumb/Breadcrumb';
import ShopSidebar from '../../wrappers/product/ShopSidebar';
import ShopTopbar from '../../wrappers/product/ShopTopbar';
import ShopProducts from '../../wrappers/product/ShopProducts';

const Shop = () => {
  const pageLimit = 15;
  let { pathname, search } = useLocation();

  const queryParams = new URLSearchParams(search);
  const category = queryParams.get('category') || '';

  const [layout, setLayout] = useState('grid three-column');
  const [sortType, setSortType] = useState('category');
  const [sortValue, setSortValue] = useState(category);
  const [filterSortType, setFilterSortType] = useState('');
  const [filterSortValue, setFilterSortValue] = useState('');
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const { products } = useSelector((state) => state.product);
  const [name, setName] = useState('');

  const getLayout = (layout) => {
    setLayout(layout);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    const newOffset = (newPage - 1) * pageLimit;
    setOffset(newOffset);
    window.scrollTo(0, 0);
  };

  const getSortParams = (sortType, sortValue) => {
    setSortType(sortType);
    setSortValue(sortValue);
  };

  const getFilterSortParams = (sortType, sortValue) => {
    setFilterSortType(sortType);
    setFilterSortValue(sortValue);
  };
  const handleSearchName = (newMessage) => {
    setName(newMessage);
  };

  useEffect(() => {
    let sortedProducts = getSortedProducts(
      products,
      sortType,
      sortValue
    );
    const filterSortedProducts = getSortedProducts(
      sortedProducts,
      filterSortType,
      filterSortValue
    );
    sortedProducts = filterSortedProducts;
    setSortedProducts(sortedProducts);
    setCurrentData(sortedProducts.slice(offset, offset + pageLimit));
  }, [
    offset,
    products,
    sortType,
    sortValue,
    filterSortType,
    filterSortValue,
  ]);

  useEffect(() => {
    let sortedProducts = getSortedProducts(
      products,
      'category',
      category
    );
    const filterSortedProducts = getSortedProducts(
      sortedProducts,
      filterSortType,
      filterSortValue
    );
    let searchedProducts = searchProducts(products, name);
    console.log(searchedProducts, name);
    sortedProducts = filterSortedProducts;
    setSortedProducts(sortedProducts);
    setCurrentData(sortedProducts.slice(offset, offset + pageLimit));
  }, [
    offset,
    products,
    category,
    filterSortType,
    filterSortValue,
    name,
  ]);

  useEffect(() => {
    let searchedProducts = searchProducts(products, name);
    console.log(searchedProducts, name);
    setSortedProducts(searchedProducts);
    setCurrentData(
      searchedProducts.slice(offset, offset + pageLimit)
    );
  }, [products, name, offset]);

  return (
    <Fragment>
      <SEO
        titleTemplate="Shop Page"
        description="Shop page of flone react minimalist eCommerce template."
      />

      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb
          pages={[
            { label: 'Home', path: process.env.PUBLIC_URL + '/' },
            {
              label: 'Shop',
              path: process.env.PUBLIC_URL + pathname,
            },
          ]}
        />

        <div className="shop-area pt-95 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 order-2 order-lg-1">
                {/* shop sidebar */}
                <ShopSidebar
                  products={products}
                  getSortParams={getSortParams}
                  sideSpaceClass="mr-30"
                  searchValue={handleSearchName}
                />
              </div>
              <div className="col-lg-9 order-1 order-lg-2">
                {/* shop topbar default */}
                <ShopTopbar
                  getLayout={getLayout}
                  getFilterSortParams={getFilterSortParams}
                  productCount={products.length}
                  sortedProductCount={currentData.length}
                />

                {/* shop page content default */}
                <ShopProducts
                  layout={layout}
                  products={currentData}
                />

                {/* shop product pagination */}
                <div className="pro-pagination-style text-center mt-30">
                  <Paginator
                    totalRecords={sortedProducts.length}
                    pageLimit={pageLimit}
                    pageNeighbours={2}
                    setOffset={setOffset}
                    currentPage={currentPage}
                    setCurrentPage={handlePageChange}
                    pageContainerClass="mb-0 mt-0"
                    pagePrevText="«"
                    pageNextText="»"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default Shop;
