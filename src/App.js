import "./App.css";
import Header from "./Components/Header";
import Location from "./Components/Accordions/Location";
import Travel from "./Components/Accordions/Travel";
import Accomdations from "./Components/Accordions/Accomdations";
import Activities from "./Components/Accordions/Activities";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Location />
      <Travel />
      <Accomdations />
      <Activities />
    </div>
  );
}

export default App;
