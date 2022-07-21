import { Box, Flex, Input, Button } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import useGetWithPagination from "../../Hooks/useGetWithPagination";
import useDocumentTitle from "../../Hooks/useDocumentTitle";
import useLocalstorage from "../../Hooks/useLocalstorage";
import useFavs from "../../Hooks/useFavs";
const Characters = () => {
  useDocumentTitle("characters");
  const {
    data: characters,
    isLoading,
    setFilter,
    filter,
    nextPage,
    prevPage,
    disableNextPage,
    disablePrevPage,
  } = useGetWithPagination("character");
  const { addFavs } = useFavs();
  const handlerChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <Box>
      <Input type="text" onChange={handlerChange} value={filter} />
      {isLoading && <h2>Cargando</h2>}
      {isLoading || (
        <Flex flexWrap="wrap">
          {characters &&
            characters.results.map((character) => {
              return (
                <Box key={`cardId2${character.id}`}>
                  <Box
                    key={`cardId${character.id}`}
                    as={Link}
                    to={`/characters/${character.id}`}
                  >
                    <img src={character.image} alt="" /> {character.name}
                  </Box>
                  <Button onClick={() => addFavs(character)}>🔥</Button>
                </Box>
              );
            })}
        </Flex>
      )}
      <Flex justifyContent="center">
        <Button onClick={prevPage} disabled={disablePrevPage} m="5px">
          {" "}
          <ArrowBackIcon />
        </Button>
        <Button onClick={nextPage} disabled={disableNextPage} m="5px">
          {" "}
          <ArrowForwardIcon />
        </Button>
      </Flex>
    </Box>
  );
};
export default Characters;
