const ArtistName = ({ name, url, isLast }) => {
  return (
    <>
      <a href={url} target="_blank" rel="noopener noreferrer" className="artist-name">
        {name}
      </a>
      {!isLast && ", "}
    </>
  );
};

export default ArtistName;
