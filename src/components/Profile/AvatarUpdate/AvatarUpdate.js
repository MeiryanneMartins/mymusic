import React, {useCallback} from 'react';
import { Image } from "semantic-ui-react";
import { useDropzone } from "react-dropzone";
import { defaultUser } from "../../../assets";
import "./AvatarUpdate.scss";

export function AvatarUpdate() {
  const onDrop = useCallback(async (acceptedFile) => {
    console.log(acceptedFile);
  });

  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  return (
    <div className="avatar-update" {...getRootProps}>
      <input {...getInputProps()} />
      <Image src={defaultUser} />
    </div>
  );
}
