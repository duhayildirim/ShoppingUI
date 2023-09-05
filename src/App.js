import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Products from "./pages/Products"
import Detail from "./pages/Detail"
import Cart from "./pages/Cart"
import Contact from "./pages/Contact"
import Footer from "./components/footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/detail" component={Detail} />
          <Route path="/cart" component={Cart} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
