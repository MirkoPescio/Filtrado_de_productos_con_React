import React from 'react';
import './sidebar.css';
import Category from './Category/Category.js';
import Colors from './Colors/Colors.js';

const Sidebar = ({ handleChange }) => {

  return (
    <>
      <section className='sidebar'>
        <div className='sidebar__logo-container'>
            <h1>🛒</h1>
        </div>

        <Category handleChange={handleChange} />
        <Colors handleChange={handleChange} />

      </section>
    </>
  )
}

export default Sidebar;
