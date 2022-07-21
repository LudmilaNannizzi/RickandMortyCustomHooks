import { Box, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useDocumentTitle from "../../Hooks/useDocumentTitle";
import useFavs from "../../Hooks/useFavs";
const Fav = () => {
  useDocumentTitle("Fav");

  const { favs } = useFavs();

  return (
    <Box>
      <Flex flexWrap="wrap">
        {favs.map((character) => {
          return (
            <Box key={`cardId2${character.id}`}>
              <Box
                key={`cardId${character.id}`}
                as={Link}
                to={`/characters/${character.id}`}
              >
                <img src={character.image} alt="" /> {character.name}
              </Box>
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};
export default Fav;
