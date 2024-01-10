import React from 'react';
import { Progress, Icon } from 'semantic-ui-react';
import "./Player.scss";

export function Player() {
  const playing = false;
  return (
    <div className="player">
      <Icon name={playing ? "pause circle outline" : "play circle outline"} />
      <Progress progress="value" value={30} total={100} size='tiny' />
    </div>
  )
}
