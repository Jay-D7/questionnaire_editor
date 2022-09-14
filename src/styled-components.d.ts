import 'styled-components';
import { AppTheme } from './components/UI/Theme';

declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {}
}
