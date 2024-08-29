import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <Container>
        <h3 className="fw-bold text-center">Trusted by</h3>
        <div className="d-flex justify-content-center align-items-center py-3">
          <img
            className="mx-2"
            src="https://png.pngtree.com/png-vector/20221215/ourmid/pngtree-school-logo-design-png-image_6524414.png"
            style={{ height: "100px" }}
            alt="swap blitar"
          />
          <img
            className="mx-2"
            src="https://png.pngtree.com/png-vector/20221215/ourmid/pngtree-school-logo-design-png-image_6524414.png"
            style={{ height: "100px" }}
            alt="swap blitar"
          />
          <img
            className="mx-2"
            src="https://png.pngtree.com/png-vector/20221215/ourmid/pngtree-school-logo-design-png-image_6524414.png"
            style={{ height: "100px" }}
            alt="swap blitar"
          />
        </div>
      </Container>
      <Container fluid>
        <p className="text-center fw-bold my-5">All Rights Reserved 2024.</p>
      </Container>
    </>
  );
};

export default Footer;
