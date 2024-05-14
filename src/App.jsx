//rfc

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./ui/Cart";
import Menu from "./ui/Menu";
import Login from "./ui/Login";
import Header from "./ui/Header";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          {/* path="/"  */}
          <Route index element={<Login />} />
          <Route path="menu" element={<Menu />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
      {/* <Outlet /> */}
    </>
  );
}

export default App;
