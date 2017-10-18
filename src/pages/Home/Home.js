import React from 'react';
import PageHeader from '../../common/components/PageHeader';
import BoardsContainer from '../../common/components/BoardsContainer';
import '../../css/master.css';
import '../../css/font-awesome.min.css';
import homePropTypes from './Home.props';

const Home = props => (
  <div className="HomeContainer">
    <PageHeader />
    <BoardsContainer
      history={props.history}
      searchQuery={props.location.search}
    />
  </div>
);

Home.propTypes = homePropTypes;

export default Home;
