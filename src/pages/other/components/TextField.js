import React from "react";
import { Form } from "react-bootstrap";

const TextField = (props) => {
  return (
    <>
      <div className="billing-info mb-20">
        <Form.Group controlId={props.controlId}>
          <Form.Label>{props.label}</Form.Label>
          <Form.Control {...props} />
        </Form.Group>
      </div>
      <p>{props.error}</p>
    </>
  );
};

export default TextField;
