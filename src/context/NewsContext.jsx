import { createContext, useEffect, useState } from "react";

export const NewsContext = createContext();
const API_KEY = "9c3ed8ee95884dec979460a60f96675b";
export const NewsProvider = ({ children }) => {
  const [newsData, setNewsdata] = useState([]);
  const [search, setSearch] = useState("India");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const getData = async () => {
    try {
      setLoading(true);
      let response = await fetch(
        `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
      );
      let data = await response.json();
      //   data.articles ? setNewsdata(data.articles) : setNewsdata([]);
      // console.log("Data Recieved:", data.totalResults);
      if (data.articles) {
        setNewsdata(data.articles);
      } else {
        setNewsdata([]);
      }
    } catch (error) {
      console.log("Error Occured: ", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, [search, page]);

  return (
    <NewsContext.Provider
      value={{ newsData, loading, setSearch, page, setPage }}
    >
      {children}
    </NewsContext.Provider>
  );
};
