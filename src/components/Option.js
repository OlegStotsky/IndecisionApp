import React from 'react';

const Option = (props) => (
  <div>
    {props.text}
    <button className="button button--link" onClick={() => props.handleDeleteOption(props.text)}>Delete</button>
  </div>
);

export { Option as default };