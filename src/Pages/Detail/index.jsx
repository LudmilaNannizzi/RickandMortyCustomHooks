import { useParams } from "react-router-dom";

import useGet from "../../Hooks/useGet";
import useDocumentTitle from "../../Hooks/useDocumentTitle";
import { useEffect } from "react";
const Detail = () => {
  const { id } = useParams();
  const { data: character, isLoading } = useGet(`character/${id}`);
  const [_, setTitle] = useDocumentTitle("Detail");
  useEffect(() => {
    if (character) setTitle(character.name);
  }, [character]);

  if (isLoading) return <h2>Cargando</h2>;
  return (
    <div>
      {character?.name}
      <img src={character?.image} />
    </div>
  );
};
export default Detail;
