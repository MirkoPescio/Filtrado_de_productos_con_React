import React from 'react';
import './colors.css';
import Input from '../../components/Input.js';

const Colors = ({ handleChange }) => {
  return (
    <div>
      <h2 className='sidebar-title color-title'>Colores</h2>
      <label className='sidebar-label-container color-title'>
        <input onChange={handleChange} type='radio' name='test3' />
        <span className='checkmark all'></span>Todo
      </label>
      <Input
          handleChange={handleChange}
          value="black"
          title="Negro"
          name="test3"
          color="black"
        />
        <Input
          handleChange={handleChange}
          value="blue"
          title="Azul"
          name="test3"
          color="blue"
        />
        <Input
          handleChange={handleChange}
          value="red"
          title="Rojo"
          name="test3"
          color="red"
        />
        <Input
          handleChange={handleChange}
          value="green"
          title="Verde"
          name="test3"
          color="green"
        />
        <Input
          handleChange={handleChange}
          value="white"
          title="Blanco"
          name="test3"
          color="white"
        />
    </div>
  )
}

export default Colors;
