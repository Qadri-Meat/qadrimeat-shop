import React, { useState } from "react";

const ShopSearch = ({ searchedProducts }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = () => {
    searchedProducts(searchInput);
  };

  return (
    <div className="sidebar-widget">
      <h4 className="pro-sidebar-title">Search </h4>
      <div className="pro-sidebar-search mb-50 mt-25">
        <form
          className="pro-sidebar-search-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          <input
            type="text"
            placeholder="Search here..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button type="submit">
            {" "}
            <i className="pe-7s-search" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ShopSearch;
