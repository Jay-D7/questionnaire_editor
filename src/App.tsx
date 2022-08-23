import React, { FC } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Editor from './components/Dashboard';
import EditorEdit from './components/Editor/EditorEdit';
import EditorNew from './components/Editor/EditorNew';

const App: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Editor />} />
      <Route path="edit-editor" element={<EditorEdit />} />
      <Route path="new-editor" element={<EditorNew />} />
    </Routes>
  </BrowserRouter>
);

export default App;
