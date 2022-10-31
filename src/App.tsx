import "./App.css";
import Books from "./components/Books/Books";
import Container from "./components/common/Container";
import Navbar from "./components/Navbar/Navbar";
import Slider from "./components/Slider/Slider";

function App() {
  return (
    <Container>
      <div className="App relative min-h-screen mx-auto">
        <Navbar />
        <Slider />
        <Books />
      </div>
    </Container>
  );
}

export default App;
