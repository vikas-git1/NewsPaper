// src/components/NewsCard.jsimport { useContext } from "react";
import { NewsContext } from "../context/newsContext";
import { useContext } from "react";
const NewsCard = () => {
  const { newsData } = useContext(NewsContext);

  return (
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
      {newsData.length === 0 ? (
        <h3>No News Available</h3>
      ) : (
        newsData.map((news, index) => {
          let description =
            typeof news.description === "string" ? news.description : "";
          let descriptionWords = description.split(" ");
          if (descriptionWords.length > 20) {
            descriptionWords = descriptionWords.slice(0, 20);
            descriptionWords.push("...");
          }

          return (
            <div
              key={index}
              style={{
                width: "320px",
                height: "420px",
                backgroundColor: "white",
                borderRadius: "12px",
                boxShadow: "13px 13px  6px rgba(0,0,0,0.1)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              <img
                src={news.urlToImage}
                alt="News"
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  padding: "15px",
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                  position: "relative",
                }}
              >
                <h4
                  style={{
                    color: "#888",
                    fontSize: "14px",
                    marginBottom: "6px",
                  }}
                >
                  Source: {news.source.name}
                </h4>
                <h5
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    marginBottom: "10px",
                  }}
                >
                  {news.title}
                </h5>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#333",
                    marginBottom: "45px", // leave space for the button
                  }}
                >
                  {descriptionWords.join(" ")}
                </p>
                <a
                  href={news.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    position: "absolute",
                    bottom: "15px",
                    left: "15px",
                    right: "15px",
                    textAlign: "center",
                    backgroundColor: "#007bff",
                    color: "white",
                    padding: "10px 0",
                    borderRadius: "6px",
                    textDecoration: "none",
                    fontWeight: "500",
                  }}
                >
                  Read More
                </a>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default NewsCard;

// const NewsCard = ({ newsData }) => {
//   return (
//     <div
//       style={{
//         width: "100vw",
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         flexWrap: "wrap",
//         gap: "50px",
//         padding: "20px",
//       }}
//     >
//       {newsData.map((news, index) => {
//         if (news.length === 0) {
//           return <h3>No news found</h3>;
//         }
//         let description =
//           typeof news.description === "string" ? news.description : "";
//         let descriptionWords = description.split(" ");
//         if (descriptionWords.length > 20) {
//           descriptionWords = descriptionWords.slice(0, 20);
//           descriptionWords.push(" ....");
//         }
//         return (
//           <div
//             className="card"
//             key={index}
//             style={{
//               maxWidth: "20rem",
//               width: "100%",
//               height: "60vh",
//               overflow: "hidden",
//               paddingBottom: "10px",
//             }}
//           >
//             <img src={news.urlToImage} className="card-img-top" alt="..." />
//             <div className="card-body" style={{ position: "relative" }}>
//               <h4 style={{ color: "grey" }}>Source: {news.source.name}</h4>
//               <h5 className="card-title">{news.title}</h5>
//               <p className="card-text">{descriptionWords.join(" ")}</p>
//               <a
//                 href={news.url}
//                 target="_blank"
//                 className="btn btn-primary"
//                 style={{ position: "absolute", bottom: "4px" }}
//               >
//                 Read More
//               </a>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default NewsCard;
