import { Container } from "react-bootstrap";
import partners from "../services/partner_data";

const Footer = () => {
  return (
    <>
      <Container>
        <h3 className="fw-bold text-center">Trusted by</h3>
        <div className="d-flex justify-content-center align-items-center py-3">
          {partners.map((value) => (
            <img
              className="mx-2"
              src={"/images/partners/" + value.image}
              style={{ height: "100px" }}
              alt="swap blitar"
            />
          ))}
        </div>
      </Container>
      <Container fluid>
        <p className="text-center fw-bold my-5">All Rights Reserved 2024.</p>
      </Container>
    </>
  );
};

export default Footer;
