import useLocalstorage from "./useLocalstorage";
const useFavs = () => {
  const [favs, setFavs] = useLocalstorage("Favs", []);
  const addFavs = (item) => {
    setFavs([...favs, item]);
  };

  return { favs, addFavs };
};

export default useFavs;
