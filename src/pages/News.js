import { Container } from "react-bootstrap";
import news from "../services/news_data";
import { useParams } from "react-router-dom";
import Sidebar from "../partials/Sidebar";

const News = () => {
  const { keyword } = useParams();
  let newsDisplay = [];
  if (keyword === undefined) {
    console.log("Semua Berita");
    newsDisplay = news;
  } else {
    const searchNews = (keyword) => {
      return news.filter(
        (item) =>
          item.title.toLowerCase().includes(keyword.toLowerCase()) ||
          item.body.toLowerCase().includes(keyword.toLowerCase())
      );
    };
    const result = searchNews(keyword);
    newsDisplay = result;
  }

  newsDisplay.sort((a, b) => b.id - a.id);

  return (
    <Container>
      <div className="my-4">
        <div className="row">
          <div className="col-lg-8">
            {newsDisplay.length > 0 ? (
              newsDisplay.map((value, index) => (
                <div key={index} className="card border-0 bg-light mb-3">
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
              ))
            ) : (
              <div className="text-center">
                <h5 className="mt-5">Tidak ada berita yang ditemukan</h5>
                <p>
                  Cobalah mencari berita lain dengan kata kunci yang berbeda.
                </p>
              </div>
            )}
          </div>
          <div className="col-lg-4">
            <Sidebar />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default News;
