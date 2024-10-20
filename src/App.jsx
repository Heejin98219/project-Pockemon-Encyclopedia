import { Routes } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <router>
      <Routes>
        <route path="/" element={<Home />} />
      </Routes>
    </router>
  );
};

export default App;
