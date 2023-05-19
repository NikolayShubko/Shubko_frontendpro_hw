import { useEffect, useState } from "react";
import axios from "axios";

function useAlbum(userId) {
  const [album, setAlbum] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then((response) => {
        setAlbum(response.data);
        setIsLoading(false);
      });
  }, [userId]);
  return { album, isLoading };
}
export default useAlbum;
