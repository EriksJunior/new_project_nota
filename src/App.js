/* eslint-disable jsx-a11y/anchor-is-valid */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<NavBar />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
