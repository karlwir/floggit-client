import React from 'react';
import PageHeader from '../../common/components/PageHeader';
import NotesContainer from '../../common/components/NotesContainer';
import '../../css/master.css';
import '../../css/font-awesome.min.css';
import boardPropTypes from './Board.props';

const Board = props => (
  <div className="HomeContainer">
    <PageHeader />
    <NotesContainer
      history={props.history}
      searchQuery={props.location.search}
      boardId={props.match.params.boardId}
    />
  </div>
);

Board.propTypes = boardPropTypes;

export default Board;
