import "./App.css";
import Container from "./components/common/Container";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import Slider from "./components/Slider/Slider";

function App() {
  return (
    <Container>
      <div className="App relative min-h-screen mx-auto">
        <Navbar />
        <Slider />
      </div>
    </Container>
  );
}

export default App;
