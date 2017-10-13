import React from 'react';
import PageHeader from '../../common/components/PageHeader';
import NotesContainer from '../../common/components/NotesContainer';
import '../../css/master.css';
import '../../css/font-awesome.min.css';

const Home = props => (
  <div className="HomeContainer">
    <PageHeader />
    <NotesContainer boardId={props.match.params.boardId} />
  </div>
);

export default Home;
