import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Artist as ArtistController } from "../../api";
import { ArtistBanner } from "../../components/Artist";
import "./Artists.scss";

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

  //if (!artist) return null;

  return (
    <div className="artists-page">
      <ArtistBanner />

      <div className="artists-page_slider">
        <h2>Albums</h2>  
      </div>
      <div className="artists-page_slider">
        <h2>Songs</h2>
      </div>
    </div>
  );
}