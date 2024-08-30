import { Container } from "react-bootstrap";

const Donate = () => {
  return (
    <Container>
      <div className="row justify-content-center">
        <div className="col-lg-8 py-5">
          <div className="card border-0 shadow">
            <div className="card-body p-3">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <img
                    src="/images/donations/scan-dana.jpg"
                    className="img-fluid"
                    alt="swap-blitar"
                  />
                </div>
                <div className="col-lg-6 py-3">
                  <p className="fw-bold">Bank Mandiri :</p>
                  <p>
                    171-00-1594970-7 <br /> a/n Muhamat Bahrul Huda
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Donate;
