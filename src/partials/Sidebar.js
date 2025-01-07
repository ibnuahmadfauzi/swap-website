import React, { useState } from "react";
import news from "../services/news_data";

const Sidebar = () => {
  const [query, setQuery] = useState("");

  const latestNews = news.slice(-5);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      window.location.href = `/berita/cari/${encodeURIComponent(query)}`;
    } else {
      window.location.href = `/berita`;
    }
  };

  return (
    <>
      <div className="card border-0 bg-light mb-4">
        <div className="card-body">
          <h6 className="m-0 text-center fw-semibold">Cari Berita</h6>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Cari Berita ..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
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
      <div className="card border-0 bg-light mb-4">
        <div className="card-body">
          <h6 className="m-0 text-center fw-semibold">Berita Terbaru</h6>
          <hr />
          {latestNews.map((value, index) => (
            <div key={index}>
              <a
                href={"/berita/" + value.slug}
                className="text-dark text-decoration-none mb-3"
              >
                <h6>{value.title}</h6>
                <sup>{value.created_at}</sup>
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="card border-0 bg-light mb-4">
        <div className="card-body">
          <h6 className="m-0 text-center fw-semibold">Donasi Terbuka</h6>
          <hr />
          <a href="/donate">
            <img
              src="/images/donations/dinasi-rumah-kinasih-2.PNG"
              class="img-fluid"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
