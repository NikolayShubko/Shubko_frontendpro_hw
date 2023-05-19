import { useEffect, useState } from "react";
import axios from "axios";

function usePhoto(albumId) {
  const [photos, setPhotos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then((response) => {
        setPhotos(response.data);
        setIsLoading(false);
      });
  }, [albumId]);
  return { photos, isLoading };
}
export default usePhoto;
