import React, { useState, useEffect } from "react";
import { Container, Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import teams from "../services/team_data";

const WhoWeAre = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const handleShowModal = (team) => {
    setModalContent(team);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      document
        .querySelectorAll(
          ".swap-who-are-quotes, .swap-who-are-visimisi, .swap-who-we-are-team"
        )
        .forEach((element) => {
          const topOfElement =
            element.getBoundingClientRect().top + window.scrollY;
          const bottomOfWindow = window.scrollY + window.innerHeight;

          if (bottomOfWindow > topOfElement) {
            element.style.display = "block";
            element.style.opacity = 1;
            element.style.transition = "opacity 1s";
          }
        });
    };

    document
      .querySelectorAll(
        ".swap-who-are-quotes, .swap-who-are-visimisi, .swap-who-we-are-team"
      )
      .forEach((element) => {
        element.style.display = "none";
      });

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check visibility on initial load

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="swap-who-are-quotes" style={{ display: "none" }}>
        <h1 className="text-center text-light">
          Doing One Thing <br /> Better than Nothing
        </h1>
      </div>
      <Container>
        <div className="row my-5 align-items-center">
          <div className="col-lg-4">
            <img
              src="/images/swap-logo.png"
              className="img-fluid"
              alt="swap blitar"
            />
          </div>
          <div className="col-lg-8" style={{ textAlign: "justify" }}>
            <h3 className="text-center fw-bold my-3">Penjelasan Logo</h3>

            <h5
              className="mb-4 mt-3 border border-2 p-3"
              style={{ lineHeight: "30px", fontWeight: "300" }}
            >
              Pencipta dari logo Smart With a Purpose Project adalah{" "}
              <b style={{ fontWeight: "600" }}>Denny Ahmad Fauzi</b>. Dimana
              setiap ornamen dan warna memiliki arti sebagai berikut :
            </h5>

            <p>
              <b>Candi Penataran:</b> Candi ini merupakan ikon sejarah yang
              terkenal di Blitar, dan kami memilihnya sebagai identitas
              organisasi. Candi Penataran melambangkan kebanggaan dan warisan
              budaya yang kuat bagi masyarakat Blitar.
            </p>

            <p>
              <b>Gambar Daun:</b> Daun merepresentasikan komitmen kami terhadap
              lingkungan. Kami responsif terhadap perkembangan dan permasalahan
              lingkungan sekitar, mencerminkan kesadaran dan tanggung jawab kami
              dalam menjaga alam.
            </p>

            <p>
              <b>Kobaran Api:</b> Api melambangkan semangat yang membara dalam
              setiap kegiatan yang kami lakukan. Semangat ini menjadi pendorong
              utama dalam mencapai tujuan dan visi organisasi.
            </p>

            <p>
              <b>Lingkaran:</b> Lingkaran melambangkan persatuan dan
              kedinamisan. Dalam sebuah organisasi, persatuan adalah kunci untuk
              mencapai tujuan bersama, sementara kedinamisan memastikan bahwa
              kami selalu bergerak maju dan berkembang.
            </p>

            <p>
              <b>Warna:</b>
            </p>
            <ul>
              <li>
                Hijau: Warna hijau melambangkan kesegaran dan kehidupan.
                Organisasi ini diharapkan menjadi wadah yang tepat bagi para
                pemuda untuk berkreasi dan berkontribusi.
              </li>
              <li>
                Oranye: Warna oranye memberikan kesan elegan dan santun,
                mencerminkan pendekatan kami yang profesional dan bersahaja
                dalam setiap tindakan.
              </li>
              <li>
                Merah: Warna merah melambangkan semangat dan keberanian. Warna
                ini mencerminkan antusiasme kami dalam menghadapi setiap
                tantangan dan mencapai tujuan organisasi.
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <Container>
        <div className="py-5 swap-who-are-visimisi" style={{ display: "none" }}>
          <h3 className="fw-bold text-center mb-4">Visi dan Misi</h3>
          <div className="row">
            <div className="col-lg-6">
              <div className="card mb-4 swap-who-we-are-box-visimisi border-0 rounded-0 shadow text-light">
                <div className="card-header">
                  <h4 className="text-center p-0 m-0 fw-bold">~ Visi ~</h4>
                </div>
                <div className="card-body">
                  <p style={{ textAlign: "justify" }}>
                    Menjadi gerakan pemuda yang berperan aktif dalam
                    pengembangan Indonesia di berbagai bidang, termasuk
                    kesehatan, pendidikan, lingkungan, sosial, ekonomi, dan
                    budaya.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card mb-4 swap-who-we-are-box-visimisi border-0 rounded-0 shadow text-light">
                <div className="card-header">
                  <h4 className="text-center p-0 m-0 fw-bold">~ Misi ~</h4>
                </div>
                <div className="card-body">
                  <ul style={{ textAlign: "justify" }}>
                    <li>
                      Mendukung Pemuda Indonesia: Memberikan dukungan kepada
                      pemuda Indonesia untuk berani memulai perubahan, dimulai
                      dari langkah-langkah kecil.
                    </li>
                    <li>
                      Menciptakan Kegiatan Positif: Menginisiasi dan
                      mengembangkan kegiatan yang membawa manfaat positif bagi
                      masyarakat Indonesia.
                    </li>
                    <li>
                      Memperkuat Kesehatan: Memperkuat kesehatan fisik dan
                      mental pemuda Indonesia, memastikan mereka tumbuh sebagai
                      individu yang tangguh.
                    </li>
                    <li>
                      Melatih Karakter Pelajar: Melatih dan membentuk karakter
                      pelajar Indonesia agar kuat, berintegritas, dan siap
                      menjadi generasi emas yang membanggakan bangsa.
                    </li>
                    <li>
                      Peduli Lingkungan: Memastikan setiap kegiatan yang
                      dilakukan mempertimbangkan dan menjaga aspek lingkungan,
                      mendukung keberlanjutan alam.
                    </li>
                    <li>
                      Kolaborasi Pemuda: Melibatkan pemuda, komunitas, dan
                      organisasi lainnya untuk berpartisipasi aktif dalam
                      berbagai kegiatan yang diselenggarakan.
                    </li>
                    <li>
                      Bekerja Sama dengan UMKM: Berkolaborasi dengan Usaha
                      Mikro, Kecil, dan Menengah (UMKM) dalam setiap kegiatan
                      untuk mendukung perekonomian lokal.
                    </li>
                    <li>
                      Menjunjung Nilai Budaya dan Nasionalisme: Menjunjung
                      tinggi nilai-nilai budaya Indonesia dan semangat
                      nasionalisme dalam setiap aktivitas yang dilaksanakan,
                      demi memperkuat identitas bangsa.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <div className="swap-who-we-are-team my-5">
          <h3 className="text-center fw-bold">Meet our Team</h3>
          <div className="row justify-content-center">
            {teams
              .filter((value) => value.id >= 1 && value.id <= 4) // Filter by ID
              .map((value) => (
                <div key={value.id} className="col-lg-3">
                  <div
                    className="box-team p-5"
                    onClick={() => handleShowModal(value)}
                  >
                    <img
                      src={"/images/teams/" + value.image}
                      className="img-fluid rounded-circle"
                      alt={value.name}
                    />
                    <h5 className="text-center mt-3">{value.name}</h5>
                    <h6 className="text-center mt-3 bg-dark text-light p-2 rounded-3">
                      {value.position}
                    </h6>
                  </div>
                </div>
              ))}
          </div>
          <div className="row justify-content-center">
            {teams
              .filter((value) => value.id >= 5 && value.id <= 6) // Filter by ID
              .map((value) => (
                <div key={value.id} className="col-lg-3">
                  <div
                    className="box-team p-5"
                    onClick={() => handleShowModal(value)}
                  >
                    <img
                      src={"/images/teams/" + value.image}
                      className="img-fluid rounded-circle"
                      alt={value.name}
                    />
                    <h5 className="text-center mt-3">{value.name}</h5>
                    <h6 className="text-center mt-3 bg-dark text-light p-2 rounded-3">
                      {value.position}
                    </h6>
                  </div>
                </div>
              ))}
          </div>
          <div className="row justify-content-center">
            {teams
              .filter((value) => value.id >= 7 && value.id <= 10) // Filter by ID
              .map((value) => (
                <div key={value.id} className="col-lg-3">
                  <div
                    className="box-team p-5"
                    onClick={() => handleShowModal(value)}
                  >
                    <img
                      src={"/images/teams/" + value.image}
                      className="img-fluid rounded-circle"
                      alt={value.name}
                    />
                    <h5 className="text-center mt-3">{value.name}</h5>
                    <h6 className="text-center mt-3 bg-dark text-light p-2 rounded-3">
                      {value.position}
                    </h6>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </Container>

      {/* Modal */}
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        size="lg" // Size large
        centered
        dialogClassName="modal-90w"
      >
        <div
          className="modal-body"
          style={{ maxHeight: "80vh", overflowY: "auto" }}
        >
          <div className="row">
            <div className="col-lg-5">
              <img
                src={"/images/teams/" + modalContent.image}
                className="rounded-circle img-fluid mb-5"
                alt={modalContent.name}
              />
            </div>
            <div className="col-lg-7">
              <h3 className="text-center fw-bold">{modalContent.name}</h3>
              <h6 className="text-center mb-4">{modalContent.position}</h6>
              <table className="table table-borderless">
                <tbody>
                  <tr>
                    <td className="fw-bold bg-dark text-light text-center">
                      Jobdesk
                    </td>
                  </tr>
                  <tr>
                    <td
                      dangerouslySetInnerHTML={{ __html: modalContent.jobdesk }}
                      style={{ textAlign: "justify" }}
                    />
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="float-end">
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default WhoWeAre;
