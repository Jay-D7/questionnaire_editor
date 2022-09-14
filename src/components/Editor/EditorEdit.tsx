import React, { FC } from 'react';
import Theme from '../UI/Theme';
import './EditorEdit.css';

import styled from 'styled-components';

const Title = styled.h1`
  font-size: 100px;
`;

const EditEditor: FC = () => (
  <Theme>
    <Title>Edit Editor</Title>
    <button>Function to SAVE EDITOR</button>
    <button>Function to EDIT EDITOR</button>
    <button>Function to SAVE EDITOR</button>
  </Theme>
);

export default EditEditor;
