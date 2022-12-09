import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyles";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import {createTheme, ThemeProvider} from '@mui/material'
import { COLOR_ACCENT, COLOR_PRIMARY, COLOR_PRIMARY_DARK, COLOR_PRIMARY_LIGHT } from "./config";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const theme = createTheme({
  palette:{
    primary: {
      main:COLOR_PRIMARY,
      dark: COLOR_PRIMARY_DARK,
      light: COLOR_PRIMARY_LIGHT
    },
    secondary:{
      main:COLOR_ACCENT
    },
    mode: 'dark'
  }
})

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <App />
          <GlobalStyle />
          <ToastContainer theme="dark" position="bottom-right"/>
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
