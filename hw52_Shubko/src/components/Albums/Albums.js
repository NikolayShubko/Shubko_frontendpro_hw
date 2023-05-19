import { Link, useParams } from "react-router-dom";
import useAlbum from "../useAlbum/useAlbum";
import { v4 as uuidv4 } from "uuid";
import "./Albums.css";
const Albums = () => {
  const { userId } = useParams();
  const { album, isLoading } = useAlbum(userId);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <ul className="albums-list">
      {album.map((album) => {
        return (
          <li className="albums-item" key={uuidv4()}>
            <p className="albums-title" key={uuidv4()}>
              Title of Albums :{album.title}
            </p>
            <Link
              to={`photos/${album.id}`}
              key={uuidv4()}
              className="albums-link"
            >
              Album Thumbnail
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Albums;
