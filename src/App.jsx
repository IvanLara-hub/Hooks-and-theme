import { useState } from "react";
import "./App.css";
import Home from "./home/home";
import TodoList from "./Components/TodoList/TodoList";
import { Route, Routes } from "react-router-dom";
import { useContext } from "react";
import themeContext from "./Contexts/ThemeContext";
import ProductDetail from "./Components/views/ProductDetail/ProductDetail";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <route path="Products/:ProductId" element={<ProductDetail />} />
      </Routes>
      <TodoList />
      <Home />
    </div>
  );
}

export default App;
