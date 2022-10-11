import "./App.css";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Tasks from "./components/Tasks";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Container />
      <Tasks />
    </div>
  );
}

export default App;
