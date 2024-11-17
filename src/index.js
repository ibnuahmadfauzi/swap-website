import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Donate from "./pages/Donate";
import "./assets/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import WhoWeAre from "./pages/WhoWeAre";
import Impact from "./pages/Impact";
import News from "./pages/News";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Impact />} />
          <Route path="profil" element={<WhoWeAre />} />
          <Route path="berita" element={<News />} />
          <Route path="kontak" element={<Contact />} />
          <Route path="donasi" element={<Donate />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
