import React from "react";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Error404 from "./componentes/Error404";
import Footer from "./componentes/Footer";
// import Header from "./componentes/Header";
import ItemDetailContainer from "./componentes/ItemDetailContainer";  //no aparece en el codigo del after
import ItemListContainer from "./componentes/ItemListContainer";
import NavBar from "./componentes/NavBar";
// import Productos from "./componentes/Productos";

function App()  {
  //no muestra el codigo de error 404
  return (
    <BrowserRouter>
     <NavBar />
     <Routes>
      <Route path={"/"} element={<ItemListContainer />} />
      <Route path={"/categoria/:id"} element={<ItemListContainer />} />
      <Route path={"/item/:id"} element={<ItemDetailContainer />} />
      <Route path={"*"} element={<Error404/>} />
     </Routes>
     <Footer />
    </BrowserRouter>
  )
}

export default App;