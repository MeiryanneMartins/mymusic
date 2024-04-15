import React, { useState } from "react";
import { Form, Icon } from "semantic-ui-react";
import classNames from "classnames";
import { useFormik } from "formik";
import { initialValues, validationSchema } from './NewSongForm.data';
import "./NewSongForm.scss";

export function NewSongForm() {
  const [songName] = useState("");

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      console.console.log(formValue);
    },
  });

  return (
    <Form classNames="add-song-form" onSubmit={formik.handleSubmit}>
      <Form.Input
        name="name"
        placeholder="Name song"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.errors.name}
      />

      <Form.Dropdown
        placeholder="album"
        fluid
        search
        selection
        options={[]}
      />

      <div className={classNames("add-song-form_file", {
        error: false,
      })}
      >
        <Icon name="cloud upload" />

        <div>
          <p>
            take you song here
          </p>
          {songName && <p className="song-name">{songName}</p>}
        </div>
      </div>
      <Form.Button type="submit" primary fluid loading={formik.isSubmitting}>
        send song
      </Form.Button>
    </Form>
  );
}