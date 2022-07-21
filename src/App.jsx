import { Route, Routes } from "react-router-dom";

import Layout from "./Layout";
import Characters from "./Pages/Characters";
import Counter from "./Pages/Counter";
import Detail from "./Pages/Detail";
import Fav from "./Pages/Fav";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="characters/" element={<Characters />} />
        <Route path="characters/:id" element={<Detail />} />
        <Route path="favs" element={<Fav />} />
      </Routes>
    </Layout>
  );
};
export default App;
