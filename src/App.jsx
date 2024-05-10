//rfc

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./ui/Cart";
import Menu from "./ui/Menu";
import Login from "./ui/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* path="/"  */}
          <Route index element={<Login />} />
          <Route path="menu" element={<Menu />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
