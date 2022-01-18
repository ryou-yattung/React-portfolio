// import { Switch, Route } from "react-router-dom";
import Intro from "./pages/page1/Intro";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="font-serif h-[2000px]">
      <Intro />
      <div className="hidden">
        <Navbar />
      </div>
    </div>
  );
}

export default App;
