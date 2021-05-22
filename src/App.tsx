import React from 'react';
import './App.css';
import {
  CssBaseline,
} from '@material-ui/core';
import {
  createMuiTheme,
  MuiThemeProvider,
} from '@material-ui/core/styles';
import { Login } from './Components/Login';
import { Dashboard } from './Components/Dashboard';

const code = new URLSearchParams(window.location.search).get('code');

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#52b69a',
    },
    secondary: {
      main: '#d9ed92',
    },
    background: {
      default: '#222222',
    },
  },
});
theme.spacing(4);

function checking(item1:string|null) {
  if (item1) {
    return true;
  }
  return false;
}

const App:React.FC = () => (
  <MuiThemeProvider theme={theme}>
    <div className="App" style={{ width: '100vw', height: '100vh' }}>
      <CssBaseline />
      {code
        ? <Dashboard code={code} />
        : <Login />}
    </div>
  </MuiThemeProvider>

);

export default App;
