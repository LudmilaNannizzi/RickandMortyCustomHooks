- Crear los siguiente custom hooks:
- useGetWithPagination -> recibe la url y tiene que retornar data,isLoading,nextPage,prevPage
- useDocumentTitle -> recibe el nombre del titulo y si se mantine cuando el componente se desmonta
- useLocalstorage -> recibe el nombre y valor por defecto ,luego tiene que retornar item y set item
  [characters,setCharacters] = useLocalstorage("characters",[])
