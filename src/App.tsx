import React, { FC } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Editor from './components/Editor';
import EditEditor from './components/EditEditor';
import NewEditor from './components/NewEditor';

const App: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Editor />} />
      <Route path="edit-editor" element={<EditEditor />} />
      <Route path="new-editor" element={<NewEditor />} />
    </Routes>
  </BrowserRouter>
);

export default App;
