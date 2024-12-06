import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Layout from "./Layout.jsx";
import Adobe from "./pages/Adobe";
import Bcg from "./pages/Bcg.jsx";
import Instacart from "./pages/Instacart.jsx";
import Uber from "./pages/Uber.jsx";
import Adp from "./pages/Adp.jsx";
import Netflix from "./pages/Netflix.jsx";
import Elsevier from "./pages/Elsevier.jsx";
import Trustwave from "./pages/Trustwave.jsx";
import Att from "./pages/Att.jsx";
import Informatica from "./pages/Informatica.jsx";
import Chewy from "./pages/Chewy.jsx";
import Siecorp from "./pages/Siecorp.jsx";
import Companies from "./pages/Companies.jsx";
import Salaries from "./pages/Salaries.jsx";
import Articles from "./pages/Articles.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<App />} />
      <Route path='/adobe' element={<Adobe />} />
      <Route path='/boston-consulting-group' element={<Bcg />} />
      <Route path='/instacart' element={<Instacart />} />
      <Route path='/uber' element={<Uber />} />
      <Route path='/adp' element={<Adp />} />
      <Route path='/netflix' element={<Netflix />} />
      <Route path='/elsevier' element={<Elsevier />} />
      <Route path='/trustwave' element={<Trustwave />} />
      <Route path='/att' element={<Att />} />
      <Route path='/informatica' element={<Informatica />} />
      <Route path='/chewy' element={<Chewy />} />
      <Route path='/siecorp' element={<Siecorp />} />
      <Route path='/companies' element={<Companies />} />
      <Route path='/salaries' element={<Salaries />} />
      <Route path='/articles' element={<Articles />} />
    </Route>
  )
)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
