import React from 'react';

const Option = (props) => (
  <div className="option">
     <p className="option__text">{props.count}.{props.text}</p>
    <button className="button button--link" onClick={() => props.handleDeleteOption(props.text)}>Delete</button>
  </div>
);

export { Option as default };