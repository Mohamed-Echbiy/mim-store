import "./App.css";
import AboutUs from "./components/About/AboutUs";
import Books from "./components/Books/Books";
import Container from "./components/common/Container";
import Navbar from "./components/Navbar/Navbar";
import Slider from "./components/Slider/Slider";
import Card from "./components/SocialMedia/Card";
import SocilaMedia from "./components/SocialMedia/SocilaMedia";

function App() {
  return (
    <Container>
      <div className="App relative min-h-screen mx-auto">
        <Navbar />
        <Slider />
        <Books />
        <AboutUs />
        <SocilaMedia />
      </div>
    </Container>
  );
}

export default App;
