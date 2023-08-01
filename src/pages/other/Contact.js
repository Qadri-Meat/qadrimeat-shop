import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";

const Contact = () => {
  let { pathname } = useLocation();
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <Fragment>
      <SEO
        titleTemplate="Contact"
        description="Contact page of flone react minimalist eCommerce template."
      />
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb
          pages={[
            { label: "Home", path: process.env.PUBLIC_URL + "/" },
            { label: "Contact", path: process.env.PUBLIC_URL + pathname },
          ]}
        />
        <div className="contact-area pt-100 pb-100">
          <div className="container">
            <div className="custom-row-2">
              {/* ... The rest of the code remains unchanged ... */}
              <div className="col-12 col-lg-8 col-md-7">
                <div className="contact-form">
                  <div className="contact-title mb-30">
                    <h2>Get In Touch</h2>
                  </div>
                  <form
                    className="contact-form-style"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className="row">
                      <div className="col-lg-6">
                        <Controller
                          name="name"
                          control={control}
                          defaultValue=""
                          rules={{ required: "Name is required" }}
                          render={({ field }) => (
                            <input {...field} placeholder="Name*" type="text" />
                          )}
                        />
                        {errors.name && <p>{errors.name.message}</p>}
                      </div>
                      <div className="col-lg-6">
                        <Controller
                          name="email"
                          control={control}
                          defaultValue=""
                          rules={{
                            required: "Email is required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Invalid email address",
                            },
                          }}
                          render={({ field }) => (
                            <input
                              {...field}
                              placeholder="Email*"
                              type="email"
                            />
                          )}
                        />
                        {errors.email && <p>{errors.email.message}</p>}
                      </div>
                      <div className="col-lg-12">
                        <Controller
                          name="subject"
                          control={control}
                          defaultValue=""
                          rules={{ required: "Subject is required" }}
                          render={({ field }) => (
                            <input
                              {...field}
                              placeholder="Subject*"
                              type="text"
                            />
                          )}
                        />
                        {errors.subject && <p>{errors.subject.message}</p>}
                      </div>
                      <div className="col-lg-12">
                        <Controller
                          name="message"
                          control={control}
                          defaultValue=""
                          rules={{ required: "Message is required" }}
                          render={({ field }) => (
                            <textarea {...field} placeholder="Your Message*" />
                          )}
                        />
                        {errors.message && <p>{errors.message.message}</p>}
                        <button className="submit" type="submit">
                          SEND
                        </button>
                        {isSubmitSuccessful && (
                          <p className="form-message">
                            Form submitted successfully!
                          </p>
                        )}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default Contact;
