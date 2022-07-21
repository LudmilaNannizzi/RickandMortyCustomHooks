import { useEffect, useState } from "react";

const useDocumentTitle = (title) => {
  const [doctitle, setDocTitle] = useState(title);

  useEffect(() => {
    document.title = doctitle;
  }, [doctitle]);

  return [doctitle, setDocTitle];
};

export default useDocumentTitle;
