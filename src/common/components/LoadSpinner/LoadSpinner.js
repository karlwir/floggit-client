import React from 'react';
import loadSpinnerProps from './LoadSpinner.props';
import './LoadSpinner.css';

const LoadSpinner = props => (
  <div>
    {props.showWhen ?
      <div className="load-spinner">
        <i className="fa fa-cog fa-spin fa-2x fa-fw" />
          Loading
      </div> : '' }
  </div>
);

LoadSpinner.propTypes = loadSpinnerProps;

export default LoadSpinner;
