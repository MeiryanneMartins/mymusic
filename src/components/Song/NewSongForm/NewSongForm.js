import React, { useState } from "react";
import { Form, Icon } from "semantic-ui-react";
import classNames from "classnames";
import "./NewSongForm.scss";

export function NewSongForm() {
  const [songName, setSongName] = useState("")

  return (
    <Form classNames="add-song-form">
      <Form.Input name="name" placeholder="Name song" />
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
      <Form.Button type="submit" primary fluid>
        send song
      </Form.Button>
    </Form>
  );
}