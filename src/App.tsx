import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"
import HomePage from "./pages/Home/HomePage"
import AboutPage from "./pages/About/AboutPage";
import NavComponent from "./components/navBar/NavComponent"
import './App.css';


const browserRoutes = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path="/" element={<NavComponent />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
    </Route>
  </Route>
));

function App() {
  return (
      <RouterProvider router={browserRoutes} />
)
}

export default App