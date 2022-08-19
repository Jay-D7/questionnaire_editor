import React, { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';

import './Editor.css';

const Editor: FC = () => (
  <div>
    <h1>Bookkeeper!</h1>
    <nav className="Editor">
      <Link to="/edit-editor">Edit Editor</Link> |{' '}
      <Link to="/new-editor">New Editor</Link>
    </nav>
    <Outlet />
  </div>
);

export default Editor;
