import { Container, Pagination } from "react-bootstrap";
import news from "../services/news_data";
import { useParams } from "react-router-dom";
import Sidebar from "../partials/Sidebar";
import { useState } from "react";

const News = () => {
  const { keyword } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // jumlah berita per halaman

  let newsDisplay = [];

  if (keyword === undefined) {
    newsDisplay = news;
  } else {
    const searchNews = (keyword) => {
      return news.filter(
        (item) =>
          item.title.toLowerCase().includes(keyword.toLowerCase()) ||
          item.body.toLowerCase().includes(keyword.toLowerCase())
      );
    };
    newsDisplay = searchNews(keyword);
  }

  newsDisplay.sort((a, b) => b.id - a.id);

  // Pagination logic
  const totalPages = Math.ceil(newsDisplay.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentNews = newsDisplay.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container>
      <div className="my-4">
        <div className="row">
          <div className="col-lg-8">
            {currentNews.length > 0 ? (
              currentNews.map((value, index) => (
                <div key={index} className="card border-0 bg-light mb-3">
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-lg-4">
                        <img
                          src={"/images/news/" + value.thumbnail}
                          className="img-fluid square-image rounded-2"
                          alt={value.title}
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

            {/* Pagination */}
            {totalPages > 1 && (
              <Pagination className="justify-content-center mt-4">
                {[...Array(totalPages)].map((_, idx) => (
                  <Pagination.Item
                    key={idx + 1}
                    active={idx + 1 === currentPage}
                    onClick={() => paginate(idx + 1)}
                  >
                    {idx + 1}
                  </Pagination.Item>
                ))}
              </Pagination>
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
