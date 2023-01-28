import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Component/Login";
import Home from "./Component/Home";
import Header from "./Component/Header"
import Cart from "./Component/Cart";
import Details from "./Component/Details";

import "./Style/App.scss";


function App() {
  return (
    <>
     <Router>
      <Header />
     <Routes>
     <Route path="/" element={<Login />} />
     <Route path="/home" element={<Home />} />
     <Route path="/cart" element={<Cart />} />
     <Route path="/product/:id" element={<Details />} />
</Routes>
     </Router>
     

    

    </>
  );
}

export default App;
