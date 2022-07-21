import { useEffect, useState } from "react";

const useLocalstorage = (nombre, valor) => {
  const [item, setItem] = useState(valor);
  useEffect(() => {
    const localStorageItem = JSON.parse(localStorage.getItem(nombre));
    if (localStorageItem) {
      setItem(localStorageItem);
    }
  }, []);

  const saveItem = (nuevoItem) => {
    console.log(nuevoItem);
    const stringifiedItem = JSON.stringify(nuevoItem);
    localStorage.setItem(nombre, stringifiedItem);
    setItem(nuevoItem);
    console.log(item, stringifiedItem);
  };

  return [item, saveItem];
};

export default useLocalstorage;
