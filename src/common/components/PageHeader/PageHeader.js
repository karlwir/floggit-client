import React from 'react';
import { NavLink } from 'react-router-dom';
import './PageHeader.css';

const PageHeader = () => (
  <header className="PageHeader">
    <NavLink to="/">
      <div className="logo" /><h1>Flogg<strong>IT</strong></h1>
    </NavLink>
  </header>
);

export default PageHeader;
