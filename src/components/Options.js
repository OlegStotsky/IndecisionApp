import React from 'react';
import Option from './Option.js';

const Options = (props) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your Options</h3>
      <button className="button button--link" onClick={props.handleDeleteOptions}>Remove All</button>
    </div>
    {props.options.length == 0 ? <h3 className="widget__add-option">Please Add An Option</h3> : props.options.map((option, index) => (
      <Option
        count={index+1}
        key={option} 
        text={option} 
        handleDeleteOption={props.handleDeleteOption}
      />))
    }
  </div>
);

export { Options as default };
