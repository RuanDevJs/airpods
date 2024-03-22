import Header from "./components/Header";
import Main from "./components/Main";
import Airpods from "./components/Airpods";
import { GlobalStyle } from "./css";

import theme from "./theme";
import { ThemeProvider } from "styled-components";

export default function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Main />
        <Airpods />
      </ThemeProvider>
    </div>
  );
}
