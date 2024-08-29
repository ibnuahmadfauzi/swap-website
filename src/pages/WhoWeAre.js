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
        <div className="py-5 swap-who-are-visimisi" style={{ display: "none" }}>
          <h3 className="fw-bold text-center mb-4">Visi dan Misi</h3>
          <div className="row">
            <div className="col-lg-6">
              <div className="card mb-4 swap-who-we-are-box-visimisi border-0 rounded-0 shadow text-light">
                <div className="card-header">
                  <h4 className="text-center p-0 m-0 fw-bold">~ Visi ~</h4>
                </div>
                <div className="card-body">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
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
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
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
