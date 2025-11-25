import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Viewer from "./pages/Viewer";

export default function App() {
  return (
    <BrowserRouter basename="/plantillas">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/index.html" element={<Home />} />
        <Route path="/view/:category/:folder" element={<Viewer />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
