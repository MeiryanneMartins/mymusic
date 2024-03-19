import React, { useEffect, useState } from "react";
import { Form } from "semantic-ui-react";
import { useFormik } from 'formik';
import { map } from "lodash";
import { Artist } from "../../../api";
import { initialValues, validationSchema } from "./NewAlbumForm.data";
import "./NewAlbumForm.scss";

const artistController = new Artist();

export function NewAlbumForm() {
  const [artistOptions, setArtistOptions] = useState([]);

  useEffect(()=>{
    (async () =>{
      try {
        const response = await artistController.obtainAll(); 
        const newData = map(response, (artist) => ({
          key: artist.id,
          value: artist.id,
          text: artist.name,
        }));

      setArtistOptions(newData);       
      } catch (error) {
        console.log(error)
      }
    })();
  }, []);
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
            options={artistOptions}
            value={formik.values.artist}
            onChange={(_, data) => formik.setFieldValue("artist", data.value)}
            error={formik.errors.artist}
          />
        </div>
      </div>
      <Form.Button type="submit" primary fluid loading={formik.isSubmitting}>
        create album
      </Form.Button>
    </Form>
  );
}


