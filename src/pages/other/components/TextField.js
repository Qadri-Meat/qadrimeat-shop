const TextField = ({ controlId, label, placeholder, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={controlId}>{label}</label>
      <input
        type="text"
        className={`form-control ${error ? "is-invalid" : ""}`}
        id={controlId}
        placeholder={placeholder}
        {...rest}
      />
      {error && <p className="invalid-feedback">{error}</p>}
    </div>
  );
};
export default TextField;

// import React from "react";
// import { Form } from "react-bootstrap";

// const TextField = (props) => {
//   return (
//     <>
//       <div className="billing-info mb-20">
//         <Form.Group controlId={props.controlId}>
//           <Form.Label>{props.label}</Form.Label>
//           <Form.Control {...props} />
//         </Form.Group>
//       </div>
//       <p>{props.error}</p>
//     </>
//   );
// };

// export default TextField;
