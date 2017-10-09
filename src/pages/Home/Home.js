import React from 'react';
import NotesContainer from '../../common/components/NotesContainer';
import '../../css/master.css';
import '../../css/font-awesome.min.css';

const Home = () => (
  <div className="HomeContainer">
    <header>
      <div className="logo" /><h1>Flogg<strong>It</strong></h1>
    </header>
    <NotesContainer />
  </div>
);

export default Home;
