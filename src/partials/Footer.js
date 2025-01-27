import { Container } from "react-bootstrap";
import partners from "../services/partner_data";

const Footer = () => {
  return (
    <>
      <Container>
        <h3 className="fw-bold text-center">Trusted by</h3>
        <div className="d-flex flex-wrap justify-content-center align-items-center py-3">
          {partners.map((value, index) => (
            <img
              className="mx-2 mb-3"
              src={"/images/partners/" + value.image}
              style={{ height: "100px" }}
              alt="swap blitar"
              key={index}
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
