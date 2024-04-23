import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  getIndividualCategories,
  getIndividualTags,
} from '../../helpers/product';
import ShopSearch from '../../components/product/ShopSearch';
import ShopCategories from '../../components/product/ShopCategories';
import ShopTag from '../../components/product/ShopTag';

const ShopSidebar = ({
  products,
  getSortParams,
  sideSpaceClass,
  search,
  setSearch,
}) => {
  const uniqueCategories = getIndividualCategories(products);
  const uniqueTags = getIndividualTags(products);

  return (
    <div className={clsx('sidebar-style', sideSpaceClass)}>
      {/* shop search */}
      <ShopSearch search={search} setSearch={setSearch} />

      {/* filter by categories */}
      <ShopCategories
        categories={uniqueCategories}
        getSortParams={getSortParams}
      />

      {/* filter by color */}
      <ShopColor
        colors={uniqueColors}
        getSortParams={getSortParams}
      />

      {/* filter by size */}
      <ShopSize sizes={uniqueSizes} getSortParams={getSortParams} />

      {/* filter by tag */}
      <ShopTag tags={uniqueTags} getSortParams={getSortParams} />
    </div>
  );
};

ShopSidebar.propTypes = {
  getSortParams: PropTypes.func,
  products: PropTypes.array,
  sideSpaceClass: PropTypes.string,
};

export default ShopSidebar;
