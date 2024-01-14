import React from 'react';
import { Form } from "semantic-ui-react";
import { useFormik } from "formik";
import { User } from "../../../api";
import { initialValues, validationSchema } from "./DisplayNameUpdateForm.data";

const userController = new User();

export function DisplayNameUpdateForm(props) {
  const { onClose } = props;
  const { displayName } = userController.getMe();

  const formik = useFormik({
    initialValues: initialValues(displayName),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      console.log(formValue);
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Input
       name="displayName"
       placeholder="Name and Nickname" 
       value={formik.values.displayName}
       onChange={formik.handleChange}
       />

      <Form.Button type="submit" primary fluid>
        update name
      </Form.Button>
    </Form>

  );
}
