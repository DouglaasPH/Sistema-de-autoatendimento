import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"
import HomePage from "./pages/Home/HomePage"
import {NavParaPaginaHome, NavParaPaginaPedido} from "./components/navBar/NavComponent"
import './App.css';
import PedidoPage from "./pages/Pedido/PedidoPage";
import CancelarOuFinalizarPedido from "./components/cancelarOuFinalizarPedido/cancelarOuFinalizarPedido";

const browserRoutes = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path="/">
      <Route index element={<> <NavParaPaginaHome/>  <HomePage /> </>} /> 
      <Route path="pedir" element={<> <NavParaPaginaPedido/> <PedidoPage/>   <CancelarOuFinalizarPedido/> </>} />
    </Route>
  </Route>
));

function App() {
  return (
      <RouterProvider router={browserRoutes} />
)
}

export default App