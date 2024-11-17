import { Container } from "react-bootstrap";
import news from "../services/news_data";

const News = () => {
  return (
    <Container>
      <div className="my-4">
        <div className="row">
          <div className="col-lg-8">
            {news.map((value) => (
              <div className="card border-0 bg-light mb-3">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-lg-4">
                      <img
                        src={"/images/news/" + value.thumbnail}
                        className="img-fluid square-image rounded-2"
                        alt="Smart With a Purpose - Blitar"
                      />
                    </div>
                    <div className="col-lg-8">
                      <sub>{value.created_at}</sub>
                      <h5>{value.title}</h5>
                      <p>{value.excerpt}.....</p>
                      <div>
                        <a
                          href={"/berita/" + value.slug}
                          className="text-decoration-none"
                        >
                          Baca Selengkapnya ...
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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

export default News;
