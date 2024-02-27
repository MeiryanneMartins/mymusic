import React from "react";
import { Form } from "semantic-ui-react";
import "./NewAlbumForm.scss";

export function NewAlbumForm() {
  return (
    <Form className="add-album-form">
      <div className="add-album-form__content">
        <div className="add-album-form__content-inputs">
          <Form.Input name="name" placeholder="Name album" />
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
      <Form.Button type="submit" primary fluid>
        create album
      </Form.Button>
    </Form>
  );
}


