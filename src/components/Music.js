import React from 'react';

function Music({ music }) {
  console.log('music component');
  return (
    <li>
      <img src={music.thumb_url} alt='thumb img' />
      <br />
      {music.title}
    </li>
  );
}

export default Music;
