import { FC, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

// Define what props.theme will look like
const theme = {
  fonts: {
    primary: ['Noto Sans JP', 'sans-serif'],
  },
  fontSizes: {
    small: '1em',
    medium: '1em',
    large: '2em',
    ExtraLarge: '3em',
  },
  colors: {
    primary: '#FFFFFF',
    secondary: '#40005d',
    powderWhite: '#FFFDF9',
    persianGreen: '#06B49A',
    lightBlue: '#AFDBD2',
    onyx: '#36313D',
    violet: '#a892ee',
    darkViolet: '#510674',
  },

  buttonDimentions: {
    small: '10px 20px',
    medium: '15px 30px',
    large: '20px 40px',
  },
};
// as const;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: ${(props) => props.theme.fonts.primary};
  background-color: #a892ee;
  padding: 1rem;
  margin: 2rem auto;
  width: 50rem;
  max-width: 95%;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0px 10px 8px rgb(0 0 0 / 25%);
`;

const Button = styled.button`
  border: 2px solid ${(props) => props.theme.colors.violet};
  padding: ${(props) => props.theme.buttonDimentions.small};
`;

// Button.defaultProps = {
//   theme: {
//     colors: {
//       primary: '#ffffff',
//     },
//   },
// };

export type AppTheme = typeof theme;

const Theme: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container>{children}</Container>
      </ThemeProvider>
    </div>
  );
};

export default Theme;
