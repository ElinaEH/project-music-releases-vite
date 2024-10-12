import data from "./data.json";
import AlbumCard from "./components/AlbumCard";
// IMPORT HEADER HERE
import "./styles.css";  
import "./index.css";

export const App = () => {
  return (
    <div className="album-list">
      {data.albums.items.map((album) => (
        <AlbumCard key={album.id} album={album} />
      ))}
    </div>
  );
};
