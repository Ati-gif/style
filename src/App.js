import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { Header, Segment } from "semantic-ui-react";
import HeaderText from "./styled/HeaderText";
import Github from "./Github";
import About from "./About";
import Contact from "./Contact";

function App() {

  return (
    <AppContainer>
      <Segment as={Transparent}>
        <HeaderText fSize={"large"}>My Portfolio</HeaderText>
      </Segment>
      <Segment as={Transparent}>
        <HeaderText fSize={"small"}>My Projects</HeaderText>
        <Github />
      </Segment>
      <Segment as={Transparent}>
        <HeaderText fSize={"small"}>About</HeaderText>
        <About />
      </Segment>
      <Segment as={Transparent}>
        <HeaderText fSize={"small"}>Contact</HeaderText>
        <Contact />
      </Segment>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  background: linear-gradient(to bottom right, #97468c, #468c97);
  min-height: 100vh;
`;

const Transparent = styled.div`
  background: transparent !important;
`;

export default App;