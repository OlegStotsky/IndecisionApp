import React from 'react';

const Action = (props) => (
  <div>
    <button class="big-button" disabled={!props.hasOptions} onClick={props.handlePick}>What should i do</button>
  </div> 
);

export { Action as default };