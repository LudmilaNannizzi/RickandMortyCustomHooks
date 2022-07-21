import { useEffect, useState } from "react";

import axios from "axios";

const URLBASE = "https://rickandmortyapi.com/api/";

const getFilter = (filter) => {
  return filter ? `&name=${filter}` : "";
};

const useGetWithPagination = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);

  const prevPage = () => setPage(page - 1);
  const nextPage = () => setPage(page + 1);
  const disablePrevPage = page === 1;
  const disableNextPage = page === data?.info?.pages;

  useEffect(() => {
    setIsLoading(true);
    const getCharacters = async () => {
      const response = await axios.get(
        `${URLBASE}${url}?page=${page}${getFilter(filter)}`
      );
      setData(response.data);
      setIsLoading(false);
    };
    getCharacters();
  }, [filter, page]);

  return {
    data,
    isLoading,
    setFilter,
    filter,
    nextPage,
    prevPage,
    page,
    disableNextPage,
    disablePrevPage,
  };
};

export default useGetWithPagination;
