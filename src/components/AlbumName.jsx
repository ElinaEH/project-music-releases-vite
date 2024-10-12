/* eslint-disable react/prop-types */
const AlbumName = ({ name, url }) => {
  return (
    <a href={url} className="album-name" target="_blank" rel="noopener noreferrer">
      {name}
    </a>
  );
};

export default AlbumName;