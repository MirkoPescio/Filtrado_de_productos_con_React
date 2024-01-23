import React from "react";
import './index.css';
import { useState } from "react";
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card.js";

// Base de datos
import products from './db/data.js';

function App() {

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  // Input Filter [Filtrado por barra de búsqueda]

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  }

  const filteredItems = products.filter((product) =>
    product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // Radio Filter [Filtrado del Sidebar]
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  }

  // Buttons Filter [Filtrado por los botones de categorías de los productos]
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  }

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Selected Filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, title }) => 
          category === selected || 
          color === selected ||
          company === selected ||
          title === selected
      )
    }

    return filteredProducts.map(({ img, title, star, reviews, prevPrice, newPrice }) => (
      <Card
        key={Math.random()}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        prevPrice={prevPrice}
        newPrice={newPrice}
      />
    ))
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <div className="App">
      <Sidebar handleChange={handleChange} />
      <Nav query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </div>
  );
}

export default App;
