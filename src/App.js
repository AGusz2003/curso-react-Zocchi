import React from "react";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Error404 from "./componentes/Error404";
import Footer from "./componentes/Footer";
// import Header from "./componentes/Header";
import ItemDetailContainer from "./componentes/ItemDetailContainer";  
import ItemListContainer from "./componentes/ItemListContainer";
import NavBar from "./componentes/NavBar";
import CartContextProvaider from "./componentes/context/CartContext";
import Cart from "./componentes/Cart";


function App()  {
  return (
    <CartContextProvaider>
    <BrowserRouter>
     <NavBar />
     <Routes>
      <Route path={"/"} element={<ItemListContainer />} />
      <Route path={"/categoria/:id"} element={<ItemListContainer />} />
      <Route path={"/item/:id"} element={<ItemDetailContainer />} />
      <Route path={"/Cart"} element={<Cart/>} />
      <Route path={"*"} element={<Error404/>} />
     </Routes>
     <Footer />
    </BrowserRouter>
    </CartContextProvaider>
  )
}

export default App;