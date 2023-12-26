import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/login.jsx";
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "/in",
    element: <Login />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
