import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/login.jsx";

function App() {
  return (
    <>
      <HashRouter>
        {/* <Navbar />{" "} */}
        <Routes>
          <Route index element={<Home />} />
          <Route path="stories" element={<Login />} />
        </Routes>{" "}
      </HashRouter>
    </>
  );
}

export default App;
