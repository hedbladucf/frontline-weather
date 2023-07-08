import { Body, Header } from "./components/layout";
import { WeatherCard } from "./components/weather_card";

function App() {
  return (
    <Body>
      <Header />
      <WeatherCard />
    </Body>
  );
}

export default App;
