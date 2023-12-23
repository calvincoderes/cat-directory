// import {
//   Route,
//   createBrowserRouter,
//   createRoutesFromElements,
//   RouterProvider,
// } from "react-router-dom";
import {
  Route,
  Routes
} from "react-router-dom";
import "./styles/App.css";

// components
import { Home } from "./pages/Home";
import { CatPage } from "./pages/CatPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/:imageId" element={<CatPage />}></Route>
    </Routes>
  );
}

export default App;
