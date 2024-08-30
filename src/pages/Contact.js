import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTiktok,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import { Container } from "react-bootstrap";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <Container fluid>
      <div className="py-5">
        <div className="row justify-content-center">
          <div className="col-lg-6 d-flex justify-content-center">
            <table className="table table-borderless" style={{ width: "auto" }}>
              <tbody>
                <tr>
                  <td className="d-flex align-items-center">
                    <h1 className="d-inline-block" style={{ width: "60px" }}>
                      <FontAwesomeIcon icon={faInstagram} />
                    </h1>
                    <p>
                      <a
                        href="https://www.instagram.com/SWAPBlitar"
                        target="_blank"
                        className="text-primary text-decoration-none"
                        style={{ fontWeight: "500" }}
                      >
                        @SWAPBlitar
                      </a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="d-flex align-items-center">
                    <h1 className="d-inline-block" style={{ width: "60px" }}>
                      <FontAwesomeIcon icon={faTiktok} />
                    </h1>
                    <p>
                      <a
                        href="https://www.tiktok.com/@swap.blitar"
                        target="_blank"
                        className="text-primary text-decoration-none"
                        style={{ fontWeight: "500" }}
                      >
                        @swap.blitar
                      </a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="d-flex align-items-center">
                    <h1 className="d-inline-block" style={{ width: "60px" }}>
                      <FontAwesomeIcon icon={faEnvelope} />
                    </h1>
                    <p>
                      <a
                        href="mailto:swapproject20@gmail.com"
                        target="_blank"
                        className="text-primary text-decoration-none"
                        style={{ fontWeight: "500" }}
                      >
                        swapproject20@gmail.com
                      </a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="d-flex align-items-center">
                    <h1 className="d-inline-block" style={{ width: "60px" }}>
                      <FontAwesomeIcon icon={faWhatsapp} />
                    </h1>
                    <p>
                      <a
                        href="https://api.whatsapp.com/send/?phone=6282232517358&text&type=phone_number&app_absent=0"
                        target="_blank"
                        className="text-primary text-decoration-none"
                        style={{ fontWeight: "500" }}
                      >
                        (+62) 822 3251 7358
                      </a>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
