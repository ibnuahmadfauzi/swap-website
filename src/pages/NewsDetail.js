import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import news from "../services/news_data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTelegram,
  faWhatsapp,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const NewsDetail = () => {
  const { slug } = useParams();
  const foundNews = news.find((item) => item.slug === slug);

  console.log(foundNews);

  return (
    <Container>
      <div className="my-4">
        <div className="row">
          <div className="col-lg-8">
            <div className="card border-0 bg-light">
              <div className="card-body">
                <div>
                  <a href="/" className="text-decoration-none">
                    Home
                  </a>{" "}
                  &gt;{" "}
                  <a href="/berita" className="text-decoration-none">
                    Berita
                  </a>
                </div>
                <div className="mt-3">
                  <h4 className="fw-semibold">{foundNews.title}</h4>
                </div>
                <div>
                  <small>{foundNews.created_at}</small>
                </div>
                <div className="mt-3 d-flex align-items-center">
                  <small className="me-2">Share :</small>{" "}
                  <a
                    href={
                      "https://api.whatsapp.com/send?text=" +
                      window.location.href
                    }
                    target="_blank"
                    className="fs-4 text-dark mx-1"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </a>
                  <a href="#" className="fs-4 text-dark mx-1">
                    <FontAwesomeIcon icon={faTelegram} />
                  </a>
                  <a
                    href={
                      "https://twitter.com/intent/tweet?text=Your%20Text%20Here&url=YourURLHere" +
                      window.location.href
                    }
                    className="fs-4 text-dark mx-1"
                  >
                    <FontAwesomeIcon icon={faXTwitter} />
                  </a>
                  <a href="#" className="fs-4 text-dark mx-1">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </div>
                <div>
                  <img
                    src={"/images/news/" + foundNews.thumbnail}
                    className="img-fluid rounded-2 my-3"
                  />
                </div>
                <div
                  style={{ textAlign: "justify" }}
                  dangerouslySetInnerHTML={{ __html: foundNews.body }}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card border-0 bg-light">
              <div className="card-body">
                <h6 className="m-0 text-center fw-semibold">Cari Berita</h6>
                <hr />
                <form>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    placeholder="Cari Berita ..."
                  />
                  <button
                    type="submit"
                    className="btn btn-secondary btn-sm mt-3 w-100"
                  >
                    Cari
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default NewsDetail;
