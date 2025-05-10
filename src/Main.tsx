import "./App.css";
import { ScreenMain } from "./components/screen/ScreenMain";
import { Settings } from "./components/settings/Settings";

function App() {
  return (
    <div className="App">
      <div className="containerCounter">
        <Settings />
        <ScreenMain />
      </div>
    </div>
  );
}

export default App;
