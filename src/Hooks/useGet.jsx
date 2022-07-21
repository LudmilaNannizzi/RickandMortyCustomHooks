import { useEffect, useState } from "react";

import axios from "axios";

const URLBASE = "https://rickandmortyapi.com/api/";

const getFilter = (filter) => {
  return filter ? `?name=${filter}` : "";
};

const useGet = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    setIsLoading(true);
    const getCharacters = async () => {
      const response = await axios.get(`${URLBASE}${url}${getFilter(filter)}`);
      setData(response.data);
      setIsLoading(false);
    };
    getCharacters();
  }, [filter]);

  return { data, isLoading, setFilter, filter };
};
export default useGet;
