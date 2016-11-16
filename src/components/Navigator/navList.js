import React from 'react';
import routes from './routes';
import { renderComponent } from '../../actions';

const NavList = ({dispatch}) => {
  return (
    <ul>
      <li><a href="#" onClick={() => dispatch(renderComponent(routes.home))}>About</a></li>
      <li><a href="#" onClick={() => dispatch(renderComponent('projects'))}>Projects</a></li>
    </ul>
  );
}

export default NavList;
