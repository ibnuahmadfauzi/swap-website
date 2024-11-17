import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

const Navbar = () => {
  return (
    <Container>
      <nav className="navbar navbar-expand-lg py-4">
        <div className="container-fluid">
          <a className="navbar-brand me-5" href="/">
            <img
              src="/images/swap-text.png"
              style={{ width: "150px" }}
              alt="swap blitar"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-bold">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Aksi SWAP
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/profil">
                  Profil
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/berita">
                  Berita
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-bold">
              <li className="nav-item">
                <a className="nav-link" href="/kontak">
                  Kontak
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/donasi">
                  Donasi
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
