import React, {useCallback, useState} from 'react';
import { Image } from "semantic-ui-react";
import { useDropzone } from "react-dropzone";
import { User } from "../../../api";
import { defaultUser } from "../../../assets";
import "./AvatarUpdate.scss";

const userController = new User();

export function AvatarUpdate() {
  const { photoURL } = userController.getMe();
  const [avatarUrl, setAvatarUrl] = useState(photoURL || defaultUser);

  const onDrop = useCallback(async (acceptedFile) => {
    const file = acceptedFile[0];
    setAvatarUrl(URL.createObjectURL(file))
  });

  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  return (
    <div className="avatar-update" {...getRootProps()}>
      <input {...getInputProps()} />
      <Image src={avatarUrl} />
    </div>
  );
}
