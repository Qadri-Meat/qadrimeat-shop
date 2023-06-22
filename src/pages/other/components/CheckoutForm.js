import React from "react";
import TextField from "./TextField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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

const CheckoutForm = () => {
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
    <>
      <div className="col-lg-7">
        <div className="billing-info-wrap">
          <h3>Billing Details</h3>
          <div className="row">
            <form onSubmit={handleSubmit(onSubmitHandler)}>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <TextField
                    {...register("firstName")}
                    controlId="firstName"
                    label="First Name"
                    placeholder="First Name"
                    error={errors.firstName?.message}
                  />
                </div>

                <div className="col-lg-6 col-md-6">
                  <TextField
                    {...register("lastName")}
                    controlId="lastName"
                    label="Last Name"
                    placeholder="Last Name"
                    error={errors.lastName?.message}
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <TextField
                  {...register("company")}
                  controlId="company"
                  label="Company"
                  placeholder="Company"
                  error={errors.company?.message}
                />
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
                <TextField
                  {...register("address")}
                  controlId="address"
                  label="Address"
                  placeholder="Address"
                  error={errors.address?.message}
                />
              </div>
              <div className="col-lg-12">
                <TextField
                  {...register("city")}
                  controlId="city"
                  label="City"
                  placeholder="City"
                  error={errors.city?.message}
                />
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <TextField
                    {...register("state")}
                    controlId="address"
                    label="State/Country"
                    placeholder="State/Country"
                    error={errors.state?.message}
                  />
                </div>

                <div className="col-lg-6 col-md-6">
                  <TextField
                    {...register("postal")}
                    controlId="address"
                    label="Postal/ Zip code"
                    placeholder="Postal/ Zip code"
                    error={errors.postal?.message}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <TextField
                    {...register("phone")}
                    controlId="address"
                    label="Phone"
                    placeholder="Phone"
                    error={errors.phone?.message}
                  />
                </div>

                <div className="col-lg-6 col-md-6">
                  <TextField
                    {...register("email")}
                    controlId="email"
                    label="Email"
                    placeholder="Email"
                    error={errors.email?.message}
                  />
                </div>
              </div>

              <input type="submit" value="Submit" />
            </form>
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
    </>
  );
};

export default CheckoutForm;
