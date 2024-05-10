//rfc

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./ui/Cart";
import Menu from "./ui/Menu";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* path="/"  */}
          <Route index element={<Menu />} />
          <Route path="menu" element={<Menu />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
