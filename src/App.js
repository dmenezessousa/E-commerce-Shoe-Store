import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from './components/pages/HomePage';
import ShoppingCart from './components/pages/ShoppingCart';
import { ShoppingCartProvider } from "./context/cartContext";


function App() {
  return (
    <ShoppingCartProvider>
        <div className="App">
          <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/cart" element={<ShoppingCart/>}/>
            </Routes>
          </BrowserRouter> 
          </div>
    </ShoppingCartProvider>

  );
}

export default App;
