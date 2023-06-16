import React, { useState } from "react";

function BillingForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "",
    streetAddress: "",
    apartment: "",
    city: "",
    state: "",
    postcode: "",
    phone: "",
    email: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // You can perform further actions with the form data object, such as sending it to a server via API, etc.
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="billing-info mb-20">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="billing-info mb-20">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="billing-info mb-20">
            <label>Company Name</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="billing-select mb-20">
            <label>Country</label>
            <select
              name="country"
              value={formData.country}
              onChange={handleInputChange}
            >
              <option>Select a country</option>
              <option>Azerbaijan</option>
              <option>Bahamas</option>
              <option>Bahrain</option>
              <option>Bangladesh</option>
              <option>Barbados</option>
            </select>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="billing-info mb-20">
            <label>Street Address</label>
            <input
              className="billing-address"
              placeholder="House number and street name"
              type="text"
              name="streetAddress"
              value={formData.streetAddress}
              onChange={handleInputChange}
            />
            <input
              placeholder="Apartment, suite, unit etc."
              type="text"
              name="apartment"
              value={formData.apartment}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="billing-info mb-20">
            <label>Town / City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="billing-info mb-20">
              <label>State / County</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="billing-info mb-20">
              <label>Postcode / ZIP</label>
              <input
                type="text"
                name="postcode"
                value={formData.postcode}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="billing-info mb-20">
              <label>Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="billing-info mb-20">
              <label>Email Address</label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default BillingForm;
