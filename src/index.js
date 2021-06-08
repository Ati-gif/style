import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "semantic-ui-css/semantic.min.css";
import { ThemeProvider } from "styled-components";
import theme from "./styled/theme";

ReactDOM.render(
  <ThemeProvider theme={theme}>
  <App />
</ThemeProvider>,
  document.getElementById('root')
);

reportWebVitals();
