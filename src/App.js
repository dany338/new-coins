/* eslint-disable import/no-cycle */
import React, {useEffect} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BASE_FONT_SIZE } from './config/const';
import themes from './themes';
import Header from './components/Header';
/* Pages */
import ListadoMonedas from './pages/ListadoMonedas';
import RealizarCambio from './pages/RealizarCambio';

/* Hooks */
import {useLogin} from "./hooks";
import Redirect from "react-router-dom/es/Redirect";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,700&display=swap');
  @import url("https://fonts.googleapis.com/icon?family=Material+Icons");
  * { box-sizing: border-box }
  .App {
    align-items: center;
    font-size: ${props => props.fontSize};
    font-family: 'Roboto', sans-serif;
    width: 100vw;
    height: 100vh;
  }
`;

const themeContext = {
  theme: themes.light,
  toogleTheme: () => {}
};

export const UserContext = React.createContext(null);

export const ThemeContext = React.createContext(themeContext);

const App = () => {

  return (
    <ThemeProvider theme={themeContext.theme}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={ListadoMonedas} />
            <Route exact path="/dashboard" component={RealizarCambio} />
          </Switch>
        </div>
      </BrowserRouter>
      <GlobalStyle fontSize={BASE_FONT_SIZE} />
    </ThemeProvider>
  );
};

export default App;
