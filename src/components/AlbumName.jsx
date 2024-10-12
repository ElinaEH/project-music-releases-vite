import React from 'react';

const AlbumName = ({ name, url }) => {
  return (
    <a href={url} className="album-name" target="_blank" rel="noopener noreferrer">
      {name}
    </a>
  );
};

export default AlbumName;