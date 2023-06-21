import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
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

function BillingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmitHandler = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="billing-info mb-20">
              <Form.Group controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  {...register("firstName")}
                  placeholder="First Name"
                />
              </Form.Group>
            </div>
            <p>{errors.firstName?.message}</p>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="billing-info mb-20">
              <Form.Group controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  {...register("lastName")}
                  placeholder="Last Name"
                ></Form.Control>
              </Form.Group>
            </div>
            <p>{errors.lastName?.message}</p>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="billing-info mb-20">
            <Form.Group controlId="company">
              <Form.Label>Company Name</Form.Label>
              <Form.Control
                {...register("company")}
                placeholder="Company Name"
              ></Form.Control>
            </Form.Group>
          </div>
          <p>{errors.company?.message}</p>
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
          <div className="billing-info mb-20">
            <Form.Group controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                {...register("address")}
                placeholder="Address"
              ></Form.Control>
            </Form.Group>
          </div>
          <p>{errors.address?.message}</p>
        </div>
        <div className="col-lg-12">
          <div className="billing-info mb-20">
            <Form.Group controlId="address">
              <Form.Label>City/Town</Form.Label>
              <Form.Control
                {...register("city")}
                placeholder="City/Town"
              ></Form.Control>
            </Form.Group>
          </div>
          <p>{errors.city?.message}</p>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="billing-info mb-20">
              <Form.Group controlId="address">
                <Form.Label>State/Country</Form.Label>
                <Form.Control
                  {...register("state")}
                  placeholder="State/Country"
                ></Form.Control>
              </Form.Group>
            </div>
            <p>{errors.state?.message}</p>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="billing-info mb-20">
              <Form.Group controlId="address">
                <Form.Label>Postal/ Zip code</Form.Label>
                <Form.Control
                  {...register("postal")}
                  placeholder="Postal/ Zip code"
                ></Form.Control>
              </Form.Group>
            </div>
            <p>{errors.postal?.message}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="billing-info mb-20">
              <Form.Group controlId="address">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  {...register("phone")}
                  placeholder="Phone"
                ></Form.Control>
              </Form.Group>
            </div>
            <p>{errors.phone?.message}</p>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="billing-info mb-20">
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  {...register("email")}
                  placeholder="Email"
                ></Form.Control>
              </Form.Group>
            </div>
            <p>{errors.email?.message}</p>
          </div>
        </div>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default BillingForm;
