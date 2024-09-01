import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiagramProject,
  faLayerGroup,
  faMapLocation,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";
import projects from "../services/project_data";
import testimonis from "../services/testimoni_data";
import Testimoni from "../partials/Testimoni";

const Impact = () => {
  useEffect(() => {
    const handleScroll = () => {
      $(
        ".swap-impact-banner, .swap-our-impact, .swap-impact-projects, .swap-partner-testimoni"
      ).each(function () {
        const topOfElement = $(this).offset().top;
        const bottomOfWindow = $(window).scrollTop() + $(window).height();

        if (bottomOfWindow > topOfElement + 100) {
          // 100 adalah offset untuk memastikan elemen sudah sepenuhnya di-scroll
          $(this).fadeIn(1000); // Fade in the element when it comes into view
        }
      });
    };

    $(window).on("scroll", handleScroll);

    // Run the scroll handler once to check if the element is already in view
    handleScroll();

    return () => {
      $(window).off("scroll", handleScroll); // Cleanup the event listener on unmount
    };
  }, []);

  return (
    <>
      <div className="swap-impact-banner" style={{ display: "none" }}>
        <img
          src="/images/swap-banner.png"
          className="img-fluid"
          alt="Swap Blitar"
        />
      </div>
      <div className="swap-our-impact py-5 mb-5" style={{ display: "none" }}>
        <Container fluid>
          <h3 className="text-center fw-bold text-light">Our Impact</h3>
          <div className="row">
            <div className="col-lg-3">
              <div className="card border-0">
                <div className="card-body text-light py-5">
                  <h1 className="text-center fw-bold mb-4">
                    {" "}
                    <span className="bg-light swap-box-icon-impact me-3 px-3 rounded-3">
                      <FontAwesomeIcon icon={faUserCheck} />
                    </span>
                    300+
                  </h1>
                  <h5 className="text-center">Orang Terlibat</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card border-0">
                <div className="card-body text-light py-5">
                  <h1 className="text-center fw-bold mb-4">
                    {" "}
                    <span className="bg-light swap-box-icon-impact me-3 px-3 rounded-3">
                      <FontAwesomeIcon icon={faDiagramProject} />
                    </span>
                    10
                  </h1>
                  <h5 className="text-center">Kegiatan Dijalankan</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card border-0">
                <div className="card-body text-light py-5">
                  <h1 className="text-center fw-bold mb-4">
                    {" "}
                    <span className="bg-light swap-box-icon-impact me-3 px-3 rounded-3">
                      <FontAwesomeIcon icon={faLayerGroup} />
                    </span>
                    7
                  </h1>
                  <h5 className="text-center">Kemitraan Strategis</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card border-0">
                <div className="card-body text-light py-5">
                  <h1 className="text-center fw-bold mb-4">
                    <span className="bg-light swap-box-icon-impact me-3 px-3 rounded-3">
                      <FontAwesomeIcon icon={faMapLocation} />
                    </span>
                    7
                  </h1>
                  <h5 className="text-center">Lokasi Kegiatan</h5>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="swap-impact-projects mb-5" style={{ display: "none" }}>
        <Container>
          <h3 className="fw-bold text-center mb-4">Projects</h3>
          <div className="row">
            {projects.map((value) => (
              <div className="col-lg-6">
                <div className="card border-0 rounded-0 mb-5 swap-box-project shadow">
                  <div className="card-body rounded-0">
                    <img
                      src={"images/projects/" + value.image}
                      className="img-fluid mb-4 img-thumbnail"
                      alt="swap blitar"
                    />
                    <h4 className="text-light text-center">
                      ~ {value.title} ~
                    </h4>
                    <p style={{ textAlign: "justify" }} className="text-light">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
      <Testimoni />
    </>
  );
};

export default Impact;
