import React from 'react';
import routes from './routes';
import { renderComponent } from '../../actions';

const NavList = ({dispatch}) => {
  return (
    <ul>
      <li><a href="#" onClick={() => dispatch(renderComponent('About'))}>About</a></li>
      <li><a href="#" onClick={() => dispatch(renderComponent('Projects'))}>Projects</a></li>
    </ul>
  );
}

export default NavList;
