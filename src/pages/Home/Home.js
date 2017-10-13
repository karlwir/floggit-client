import React from 'react';
import PageHeader from '../../common/components/PageHeader';
import BoardsContainer from '../../common/components/BoardsContainer';
import '../../css/master.css';
import '../../css/font-awesome.min.css';

const Home = () => (
  <div className="HomeContainer">
    <PageHeader />
    <BoardsContainer />
  </div>
);

export default Home;
