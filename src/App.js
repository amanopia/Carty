import "./App.css";
import { ReactLenis } from "@studio-freight/react-lenis";
import CartyApp from "./Carty/CartyApp";
function App() {
  return (
    <ReactLenis root>
      <div className="App">
        <CartyApp />
      </div>
    </ReactLenis>
  );
}

export default App;
