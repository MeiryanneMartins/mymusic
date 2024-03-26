import React from 'react';
import "./ArtistBanner.scss";

export function ArtistBanner(props) {
  const { name } = props;

  return (
    <div className="artist-banner">
      <span>Artist</span>
      <h1>{name}</h1>
    </div>
  );
}
