import "./App.css";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Tasks from "./components/Tasks";
import Description from "./components/Description";
import { useRef } from "react";

function App() {
  //Used for scrolling to the about section when user clicks on Navbar about icon
  const aboutScroll = useRef(null);
  const executeScroll = () => aboutScroll.current.scrollIntoView();
  return (
    <div className="container">
      <Navbar executeScroll={executeScroll} />
      <Container />
      <Tasks />
      <Description aboutScroll={aboutScroll} />
    </div>
  );
}

export default App;
