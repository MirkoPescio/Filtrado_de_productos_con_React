import React from 'react';
import './category.css';
import Input from "../../components/Input.js";

const Category = ({ handleChange }) => {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>Todo
        </label>
        <Input
          handleChange={handleChange}
          value="sneakers"
          title="Zapatillas"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="sandals"
          title="Zapatillas bajas"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="heels"
          title="Tacones"
          name="test"
        />
      </div>
    </div>
  )
}

export default Category;
