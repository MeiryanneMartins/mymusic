import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Artist as ArtistController } from "../../api";

const artistController = new ArtistController();

export function Artists() {
  const { id } = useParams();
  const [artist, setArtist] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await artistController.getArtist(id);
        setArtist(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [id]);

  return (
    <div>
      <h1>Artist</h1>
    </div>
  );
}