import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useSwipeable } from "react-swipeable";
import $ from "jquery";
import testimonis from "../services/testimoni_data";

const Testimoni = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonis.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + testimonis.length) % testimonis.length
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      $(
        ".swap-impact-banner, .swap-our-impact, .swap-impact-projects, .swap-partner-testimoni"
      ).each(function () {
        const topOfElement = $(this).offset().top;
        const bottomOfWindow = $(window).scrollTop() + $(window).height();

        if (bottomOfWindow > topOfElement + 100) {
          $(this).fadeIn(1000); // Fade in the element when it comes into view
        }
      });
    };

    $(window).on("scroll", handleScroll);

    handleScroll();

    return () => {
      $(window).off("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Your existing code for swap-impact-banner, swap-our-impact, swap-impact-projects */}

      <Container>
        <div
          className="mb-5 swap-partner-testimoni rounded-5"
          style={{ display: "none" }}
          {...handlers}
        >
          <div className="card border-0 rounded-5">
            <div className="card-body p-5 rounded-5 swap-partner-testimoni text-light">
              <div
                id="carouselExampleAutoplaying"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">
                  {testimonis.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      data-bs-target="#carouselExampleAutoplaying"
                      data-bs-slide-to={index}
                      className={index === activeIndex ? "active" : ""}
                      aria-current={index === activeIndex ? "true" : "false"}
                      aria-label={`Slide ${index + 1}`}
                      onClick={() => setActiveIndex(index)}
                    ></button>
                  ))}
                </div>
                <div className="carousel-inner pb-5">
                  {testimonis.map((testimoni, index) => (
                    <div
                      key={index}
                      className={`carousel-item ${
                        index === activeIndex ? "active" : ""
                      }`}
                    >
                      <h3>"{testimoni.message}"</h3>
                      <div className="mt-4 d-flex align-items-center">
                        <img
                          className="rounded-5"
                          src={"/images/testimonis/" + testimoni.image}
                          style={{ height: "50px" }}
                          alt="swap blitar"
                        />
                        <h5 className="ms-3 fw-bold">{testimoni.name}</h5>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleAutoplaying"
                  data-bs-slide="prev"
                  onClick={handlePrev}
                >
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleAutoplaying"
                  data-bs-slide="next"
                  onClick={handleNext}
                >
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Testimoni;
