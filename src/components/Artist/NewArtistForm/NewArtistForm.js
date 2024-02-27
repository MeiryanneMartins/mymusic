import React from "react";
import { Form } from "semantic-ui-react";
import { useFormik } from "formik";  
import { Artist } from "../../../api";
import { initialValues, validationSchema } from "./NewArtistForm.data.js";
import "./NewArtistForm.scss";

const artistController = new Artist();

export function NewArtistForm() {

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const { name } = formValue;

        await artistController.create(name);
        onclose();
      } catch (error) {
        console.error(error)
      }
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
      <Form.Button type="submit" primary fluid loading={formik.isSubmitting}>
        create artist
      </Form.Button>
    </Form>
  );
}