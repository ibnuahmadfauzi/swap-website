import { Container } from "react-bootstrap";

const NoPage = () => {
  return (
    <Container>
      <div
        className="d-flex justify-content-center"
        style={{ margin: "100px 0" }}
      >
        <img src="/images/404.gif" className="img-fluid" />
      </div>
    </Container>
  );
};

export default NoPage;
