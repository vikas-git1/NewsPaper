// src/components/NewsCard.js
const NewsCard = () => {
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        flexWrap: "wrap",
        gap: "50px",
        padding: "20px",
        justifyContent: "center",
      }}
    >
      <div
        className="card"
        style={{
          width: "20rem",
          height: "60vh",
          overflow: "hidden",
          paddingBottom: "10px",
        }}
      >
        <img src="/" className="card-img-top" alt="News" />
        <div className="card-body" style={{ position: "relative" }}>
          <h4 style={{ color: "grey" }}>Source:</h4>
          <h5 className="card-title"></h5>
          <p className="card-text"></p>
          <a
            target="_blank"
            className="btn btn-primary"
            style={{ position: "absolute", bottom: "4px" }}
          >
            Read More
          </a>
        </div>
      </div>
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
