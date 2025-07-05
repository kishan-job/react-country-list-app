import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Layout from "./pages/Layout";
import LoginPage from "./pages/LoginPage";
import Homepage from "./pages/HomePage";
import Protected from "./components/Protected";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<LoginPage />} />
        <Route element={<Homepage />} />
        <Route element={<Protected />}>
          <Route path="/home" element={<Homepage/>} />
        </Route>
      </Route>
    )
  );
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
