import React from 'react';

const Header = (props) => (
  <div className="header">
    <div class="container">
      <h1 className="header__title">{props.title}</h1>
      <h1 className="header__subtitle">{props.subtitle}</h1>
    </div>
  </div>
);

export { Header as default };