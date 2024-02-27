import React from "react";
import { Form } from "semantic-ui-react";
import { useFormik } from "formik";  
import { initialValues, validationSchema } from "./NewArtistForm.data.js";
import "./NewArtistForm.scss";

export function NewArtistForm() {
  //const { onClose } = props;


  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      console.log(formValue);
    },
  });  

  return (
    <Form className="new-artist-form" onSubmit={formik.handleSubmit}>
      <Form.Input
       name="name"
       placeholder="Name Artist" 
       value={formik.values.name}
       onChange={formik.handleChange}
       error={formik.errors.name}
      />
      <Form.Button type="submit" primary fluid>
        create artist
      </Form.Button>
    </Form>
  );
}