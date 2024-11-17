import { Container } from "react-bootstrap";

const Donate = () => {
  return (
    <Container>
      <div className="py-4">
        <h1 className="text-center fw-semibold">
          Hai orang baik, salurkan kebaikanmu disini!
        </h1>
        <h5 className="text-center">Buat aksi nyata bersama</h5>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-8 py-5">
          <div className="card border-0 shadow">
            <div className="card-body p-3">
              <div className="row align-items-center">
                <div className="col-lg-6 py-3">
                  <img
                    src="/images/donations/scan-dana.jpg"
                    className="img-fluid"
                    alt="swap-blitar"
                  />
                </div>
                <div className="col-lg-6">
                  <div>
                    <div className="me-2 ">
                      <img
                        src="/images/donations/mandiri.png"
                        style={{ height: "70px" }}
                        alt="SWAP Blitar"
                      />
                    </div>
                    <div>
                      <p>
                        <b>Bank Mandiri :</b> <br />
                        171-00-1594970-7 <br /> a/n Muhamat Bahrul Huda
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center my-5">
        <div className="col-lg-6">
          <div className="card bg-light shadow border-0">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-lg-4 p-2">
                  <img
                    src="/images/donations/rumah-kinasih.jpg"
                    className="img-fluid"
                  />
                </div>
                <div className="col-lg-8 p-2" style={{ textAlign: "justify" }}>
                  <p className="fw-semibold">SENYUM UNTUK RUMAH KINASIH</p>
                  <p>
                    <small>
                      Kamu masih menunda untuk berbuat kebaikan? Jangan ya!
                      Karena kami hadir untuk kamu semua yang ingin berbagi
                      kepada sesama.
                    </small>
                  </p>

                  <p>
                    <small>
                      Edisi kali ini kita akan mengajak untuk berinteraksi
                      dengan Rumah Kinasih yang menampung teman-teman
                      disabilitas dan gangguan mental. Kegiatannya nanti akan
                      dilakukan secara paralel meliputi pengenalan obat herbal,
                      komitmen hidup sehat dan sesi obrol erat. Seru banget kan!
                    </small>
                  </p>

                  <p>
                    <small>
                      Bagi kamu yang tertarik, bisa banget gabung kegiatan kami
                      atau melalui donasi di postingan kami. Ditunggu aksi
                      nyatamu sekarang!!
                    </small>
                  </p>
                </div>
              </div>
              <div>
                <p className="text-center">
                  <span className="d-block mb-3">
                    <span className="fw-semibold">Periode Donasi :</span> 22
                    September 2024 - 6 Oktober 2024
                  </span>
                  <span className="d-block">
                    <span className="fw-semibold">Status :</span>{" "}
                    <span className="badge text-bg-success">
                      Tutup dan Terpenuhi
                    </span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Donate;
