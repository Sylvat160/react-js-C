// import logo from './logo.svg';
import "./App.css";
import Home from "./pages/Home";
import Contact from "@/pages/Contact";
import Service from "@/pages/Service";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "@/_utils/Error";
import Layout from "./pages/Layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
          </Route>

          <Route index element={<Home />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
