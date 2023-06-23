import { forwardRef } from "react";
import { Form } from "react-bootstrap";
import { Controller } from "react-hook-form";

const TextField = forwardRef((props, ref) => {
  const { id, label, errors, control, ...inputProps } = props;

  return (
    <>
      <div className="custom-textfield mb-20">
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label>{label}</Form.Label>
          <Controller
            control={control}
            name="username"
            defaultValue=""
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <Form.Control
                onChange={onChange}
                value={value}
                ref={ref}
                isInvalid={errors.username}
                placeholder="Enter user name"
              />
            )}
          />
          <Form.Text className="text-muted">Login name</Form.Text>
          <Form.Control.Feedback type="invalid">
            {errors.username?.message}
          </Form.Control.Feedback>
        </Form.Group>
      </div>
    </>
  );
});

export default TextField;
