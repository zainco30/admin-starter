import {useMemo} from 'react';
import {BrowserRouter} from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Routers from 'routers';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode]
  );
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
