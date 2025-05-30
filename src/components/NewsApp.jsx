import NewsCard from "./NewsCard";
import NavBar from "./NavBar";
import Loader from "./Loader";
import Pagination from "./Pagination";
import { useContext } from "react";
import { NewsContext } from "../context/newsContext";
const NewsApp = () => {
  const { loading } = useContext(NewsContext);
  return (
    <div style={{ width: "100vw", overflow: "hidden" }}>
      <NavBar />
      {loading ? (
        <Loader />
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "100vw",
              display: "flex",
              flexWrap: "wrap",
              gap: "30px",
              padding: "30px",
              justifyContent: "center",
              backgroundColor: "rgb(82, 81, 91)",
            }}
          >
            <NewsCard />
          </div>
          <Pagination />
        </div>
      )}
    </div>
  );
};

export default NewsApp;

// import React, { useEffect, useState } from "react";
// import NavBar from "./NavBar";
// import NewsCard from "./NewsCard";
// import Loader from "./Loader";
// const NewsApp = () => {
//   const [newsData, setNewsData] = useState([]);
//   const [search, setSearch] = useState("india");
//   const [loading, setLoading] = useState(false);
//   const API_KEY = "9c3ed8ee95884dec979460a60f96675b";
//   const getData = async () => {
//     try {
//       setLoading(true);
//       let response = await fetch(
//         `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
//       );
//       let data = await response.json();
//       if (data.articles) setNewsData(data.articles);
//       else setNewsData([]);
//     } catch (error) {
//       "Error Occured: ", error;
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getData();
//   }, [search]);
//   // console.log(newsData);

//   return (
//     <>
//       <NavBar setSearch={setSearch} initialSearch={search} />
//       {loading ? <Loader /> : <NewsCard newsData={newsData} />}
//     </>
//   );
// };

// export default NewsApp;
