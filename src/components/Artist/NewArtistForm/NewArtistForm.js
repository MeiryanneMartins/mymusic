import React, { useState,useCallback } from "react";
import { Form, Image} from "semantic-ui-react";
import { useDropzone } from 'react-dropzone';  
import { noImage } from "../../../assets";
import "./NewArtistForm.scss";

export function NewArtistForm(props) {
  //const { onClose } = props;

  const [image] = useState(noImage);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onDrop = useCallback(async (acceptedFile) => {
    console.log(acceptedFile)
  });

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <Form className="new-artist-form">
      <div {...getRootProps()} className="new-artist-form__banner">
        <input {...getInputProps()} />
        <Image src={image} />
      </div>
      <Form.Input name="name" placeholder="Name Artist" />

      <Form.Button type="submit" primary fluid>
        create artist
      </Form.Button>
    </Form>
  );
}