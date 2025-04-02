import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
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
import ContactUs from "./pages/ContactUs.jsx";
import About from "./pages/About.jsx";
import Policy from "./pages/Policy.jsx";
import Licensing from "./pages/Licensing.jsx";
import Terms from "./pages/Terms.jsx";
import Concerntrix from "./pages/Concerntrix.jsx";
import Chegg from "./pages/Chegg.jsx";
import Salesforce from "./pages/Salesforce.jsx";
import Kubra from "./pages/Kubra.jsx";
import Tinder from "./pages/Tinder.jsx";
import Kpng from "./pages/Kpng.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<App />} />
      <Route path="/adobe" element={<Adobe />} />
      <Route path="/boston-consulting-group" element={<Bcg />} />
      <Route path="/instacart" element={<Instacart />} />
      <Route path="/uber" element={<Uber />} />
      <Route path="/adp" element={<Adp />} />
      <Route path="/netflix" element={<Netflix />} />
      <Route path="/elsevier" element={<Elsevier />} />
      <Route path="/trustwave" element={<Trustwave />} />
      <Route path="/att" element={<Att />} />
      <Route path="/informatica" element={<Informatica />} />
      <Route path="/chewy" element={<Chewy />} />
      {/* <Route path="/siecorp" element={<Siecorp />} /> */}
      <Route path="/concentrix" element={<Concerntrix />} />
      <Route path="/chegg" element={<Chegg />} />
      <Route path="/salesforce" element={<Salesforce />} />
      <Route path="/kubra" element={<Kubra />} />
      <Route path="/tinder" element={<Tinder />} />
      <Route path="/kpng" element={<Kpng />} />
      <Route path="/companies" element={<Companies />} />
      <Route path="/salaries" element={<Salaries />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/about" element={<About />} />
      <Route path="/policy" element={<Policy />} />
      <Route path="/licensing" element={<Licensing />} />
      <Route path="/terms-conditions" element={<Terms />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
