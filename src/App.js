import { ThemeProvider } from '@mui/material';
import Header from './components/header/Header';
import Main from './components/main/main';
import theme from './components/theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <Main/>
    </ThemeProvider>
      
    
  );
}

export default App;
