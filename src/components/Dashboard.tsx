import React, { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';

import './Dashboard.css';

const Editor: FC = () => (
  <div>
    <h1>Bookkeeper!</h1>
    <nav className="dashboard">
      <Link to="/edit-editor">Edit Editor</Link> |{' '}
      <Link to="/new-editor">New Editor</Link>
    </nav>
    <Outlet />
  </div>
);

export default Editor;
