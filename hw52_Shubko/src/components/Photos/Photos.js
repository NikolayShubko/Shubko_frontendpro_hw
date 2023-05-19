import React from "react";
import { useParams } from "react-router-dom";
import usePhoto from "../usePhotos/usePhotos";
import { v4 as uuidv4 } from "uuid";
import "./Photos.css";

const Photos = () => {
  const { albumId } = useParams();
  const { photos, isLoading } = usePhoto(albumId);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <ul className="thumbnail-list">
      {photos.map((photo) => {
        return (
          <li className="thumbnail-item" key={uuidv4()}>
            <img key={uuidv4()} src={photo.url} />
            <p className="thumbnail-title" key={uuidv4()}>
              {photo.title}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default Photos;
