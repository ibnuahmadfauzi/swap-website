import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import NewsDetail from "./pages/NewsDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Impact />} />
          <Route path="profil" element={<WhoWeAre />} />
          <Route path="berita" element={<News />} />
          <Route path="berita/cari/:keyword" element={<News />} />
          <Route
            path="berita/cari"
            element={<Navigate to="/berita" replace />}
          />
          <Route path="berita/:slug" element={<NewsDetail />} />
          <Route path="kontak" element={<Contact />} />
          <Route path="donate" element={<Donate />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
