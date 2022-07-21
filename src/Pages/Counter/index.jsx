import useCount from "./Hooks/useCount";
import useDocumentTitle from "../../Hooks/useDocumentTitle";
import { useEffect } from "react";
const Counter = () => {
  const { count, increment, decrement } = useCount();
  const [_, setDocTitle] = useDocumentTitle("Inicio");
  useEffect(() => {
    if (count) setDocTitle(count);
  }, [count]);

  return (
    <div>
      {count}
      <button onClick={decrement}> - </button>
      <button onClick={increment}> + </button>
    </div>
  );
};
export default Counter;
