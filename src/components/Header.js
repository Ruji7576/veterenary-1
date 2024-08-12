import React, { useState } from 'react';
import '../css/header.css';
import { useNavigate } from 'react-router-dom';

const Header = ({ title }) => {
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  const handleTitleClick = () => {
    navigate('/');
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <header className="header">
      <h1 className="header-title" onClick={handleTitleClick}>{title}</h1>
      <button className="btn btn-add" onClick={toggleForm}>Login</button>
    </header>
  );
};

export default Header;