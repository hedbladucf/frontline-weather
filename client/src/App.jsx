import { Body, Header } from "./components/layout";
import { WeatherSection } from "./components/weather_section";

function App() {
  return (
    <Body>
      <Header />
      <WeatherSection />
    </Body>
  );
}

export default App;
