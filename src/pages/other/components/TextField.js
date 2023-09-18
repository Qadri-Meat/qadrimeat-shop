import { forwardRef } from "react";
import { Form } from "react-bootstrap";
import { Controller } from "react-hook-form";

const TextField = forwardRef((props, ref) => {
  const { id, label, errors, control, name, ...inputProps } = props;

  return (
    <>
      <div className="custom-textfield mb-20">
        <Form.Group className="mb-3" controlId={id}>
          <Form.Label>{label}</Form.Label>
          <Controller
            control={control}
            name={name} // Use the dynamic name prop here
            defaultValue=""
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <Form.Control
                onChange={onChange}
                value={value}
                ref={ref}
                isInvalid={errors[name]} // Use the dynamic name prop here
                placeholder={inputProps.placeholder}
              />
            )}
          />
          {inputProps.text && (
            <Form.Text className="text-muted">{inputProps.text}</Form.Text>
          )}
          <Form.Control.Feedback type="invalid">
            {errors[name]?.message}
          </Form.Control.Feedback>
        </Form.Group>
      </div>
    </>
  );
});

export default TextField;

// import { forwardRef } from "react";
// import { Form } from "react-bootstrap";
// import { Controller } from "react-hook-form";

// const TextField = forwardRef((props, ref) => {
//   const { id, label, errors, control, name, ...inputProps } = props;

//   return (
//     <>
//       <div className="custom-textfield mb-20">
//         <Form.Group className="mb-3" controlId="formUsername">
//           <Form.Label>{label}</Form.Label>
//           <Controller
//             control={control}
//             name={name}
//             defaultValue=""
//             render={({ field: { onChange, onBlur, value, ref } }) => (
//               <Form.Control
//                 onChange={onChange}
//                 value={value}
//                 ref={ref}
//                 isInvalid={errors[name]}
//                 placeholder="Enter user name"
//               />
//             )}
//           />
//           <Form.Text className="text-muted">Login name</Form.Text>
//           <Form.Control.Feedback type="invalid">
//             {errors.username?.message}
//           </Form.Control.Feedback>
//         </Form.Group>
//       </div>
//     </>
//   );
// });

// export default TextField;
