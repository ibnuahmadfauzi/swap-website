import { Container } from "react-bootstrap";
import donation_data from "../services/donation_data";

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
        {donation_data
          .sort((a, b) => (a.status === "Terbuka Untuk Donasi" ? -1 : 1))
          .map((value, index) => (
            <div className="col-lg-6 mb-3" key={index}>
              <div className="card bg-light shadow border-0">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-lg-4 p-2">
                      <img
                        src={"/images/donations/" + value.image}
                        className="img-fluid"
                        alt={value.title}
                      />
                    </div>
                    <div
                      className="col-lg-8 p-2"
                      style={{ textAlign: "justify" }}
                    >
                      <p className="fw-semibold">{value.title}</p>
                      <div
                        style={{ textAlign: "justify" }}
                        dangerouslySetInnerHTML={{ __html: value.body }}
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-center">
                      <span className="d-block mb-3">
                        <span className="fw-semibold">Periode Donasi :</span>{" "}
                        {value.periode}
                      </span>
                      <span className="d-block">
                        <span className="fw-semibold">Status :</span>{" "}
                        {value.status === "Tutup dan Terpenuhi" ? (
                          <span className="badge text-bg-danger">
                            {value.status}
                          </span>
                        ) : (
                          <span className="badge text-bg-primary">
                            {value.status}
                          </span>
                        )}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </Container>
  );
};

export default Donate;
