import { Box } from "@chakra-ui/react";

import Header from "./Header";
import Main from "./Main";

const Layout = ({ children }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      minHeight="100vh"
      maxW="1252px"
      m="auto"
    >
      <Header />
      <Main>{children}</Main>
    </Box>
  );
};

export default Layout;
