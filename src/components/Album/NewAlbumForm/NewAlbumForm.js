import React from "react";
import { Form } from "semantic-ui-react";
import { useFormik } from 'formik';
import { initialValues, validationSchema } from "./NewAlbumForm.data";
import "./NewAlbumForm.scss";

export function NewAlbumForm() {

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async () => {

    }
  })
  return (
    <Form className="add-album-form" onSubmit={formik.handleSubmit}>
      <div className="add-album-form__content">
        <div className="add-album-form__content-inputs">
          <Form.Input
            name="name"
            placeholder="Name album"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.errors.name}
          />
          <Form.Dropdown
            placeholder="This album belongs to..."
            fluid
            search
            selection
            options={[]}
            error={true}
          />
        </div>
      </div>
      <Form.Button type="submit" primary fluid loading={formik.isSubmitting}>
        create album
      </Form.Button>
    </Form>
  );
}


