const AlbumCover = ({ coverUrl }) => {
  return (
    <div className="album-cover">
      <img src={coverUrl} alt="Album cover" />
    </div>
  );
};

export default AlbumCover;
