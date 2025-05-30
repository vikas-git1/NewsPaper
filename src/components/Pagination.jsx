import React from "react";
import { useContext } from "react";
import { NewsContext } from "../context/newsContext";
const Pagination = () => {
  const { setPage, newsData, page } = useContext(NewsContext);

  let totalPages = Math.ceil(newsData.length / 8);
  //   console.log(Array(totalPages));

  const handleNextPage = () => {
    setPage((prevPage) => (prevPage === totalPages ? prevPage : prevPage + 1));
  };
  const handlePreviousPage = () => {
    setPage((prevPage) => {
      return prevPage === 1 ? 1 : prevPage - 1;
    });
  };

  const handlePageChange = (pageNum) => setPage(pageNum);
  return (
    <div
      style={{
        backgroundColor: "#1e1e2f",
        padding: "30px 30px 10px 30px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "scroll",
      }}
    >
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item" onClick={handlePreviousPage}>
            <a class="page-link" href="#">
              Previous
            </a>
          </li>
          {/* {totalPages} */}
          {[...Array(totalPages)].map((_, i) => {
            return (
              <li
                class={`page-item ${page === i + 1 ? "active" : ""}`}
                key={i}
                onClick={() => handlePageChange(i + 1)}
              >
                <a class="page-link" href="#">
                  {i + 1}
                </a>
              </li>
            );
          })}
          <li class="page-item" onClick={handleNextPage}>
            <a class="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
