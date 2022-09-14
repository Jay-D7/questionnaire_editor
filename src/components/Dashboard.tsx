import React, { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';

import './Dashboard.css';
import Theme from './UI/Theme';
// import Test from './Test/Test';

const Title = styled.h1`
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: ${(props) => props.theme.fontSizes.large};
  text-transform: uppercase;
  color: #ffffff;
`;

const Button = styled.button`
  margin-right: 1rem;
  padding: 1rem 2rem;
  font-family: 'Noto Sans JP', sans-serif;
  background-color: ${(props) => props.theme.colors.secondary};
  &:hover {
    background-color: ${(props) => props.theme.colors.darkViolet};
  }
  color: ${(props) => props.theme.colors.primary};
  border: 1px solid #40005d;
  border-radius: 12px;
  cursor: pointer;

  /* a {
    color: ${(props) => props.theme.colors.lightBlue};
    text-decoration: none;
  } */
`;

const Editor: FC = () => (
  <div>
    {' '}
    <Theme>
      <Title>Questionnaire Editor</Title>
      <nav className="dashboard">
        <Link to="/edit-editor">
          <Button>Edit Editor</Button>
        </Link>
        <Link to="/new-editor">
          <Button>New Editor</Button>
        </Link>
      </nav>
      <Outlet />
    </Theme>
  </div>
);

export default Editor;
