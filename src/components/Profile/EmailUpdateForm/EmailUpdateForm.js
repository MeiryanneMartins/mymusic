import React, { useState } from 'react';
import { Form } from "semantic-ui-react";
import { useFormik } from 'formik';
import { initialValues, validationSchema } from "./EmailUpdateForm.data";

export function EmailUpdateForm() {
  const [showPassword, setShowPassword] = useState(false);

  const onShowHidenPassword = () => setShowPassword((prevState) => !prevState);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      console.log(formValue)
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Input
        name="email"
        placeholder="new email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email}
      />

      <Form.Input
        name="password"
        type={showPassword ? "text" : "password"}
        placeholder="password"
        icon={{
          name: showPassword ? "eye slash" : "eye",
          link: true,
          onClick: onShowHidenPassword,
        }}
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
      />

      <Form.Button type="submit" fluid primary loading={formik.isSubmitting}>
        update email
      </Form.Button>
    </Form>
  );
}
