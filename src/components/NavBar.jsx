import { useContext, useState } from "react";
import { NewsContext } from "../context/newsContext";

const NavBar = () => {
  const { setSearch } = useContext(NewsContext);
  const [userInput, setUserInput] = useState("");
  const [isNavOpen, setIsNavOpen] = useState(false); // new state

  const navNewsItems = ["India", "Madhya Pradesh", "Sports", "Tech", "Virat"];

  const handleSearch = () => setSearch(userInput);

  const handleNavClick = (item) => {
    setSearch(item);
    setUserInput(item);
    setIsNavOpen(false); // close menu after click
  };

  const handleHome = () => {
    setSearch("world");
    setIsNavOpen(false); // close menu after click
  };

  const toggleNav = () => setIsNavOpen((prev) => !prev); // toggle menu

  const toggleStyle = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  };

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        position: "sticky",
        top: "0",
        zIndex: 100,
        backgroundColor: "#1e1e2f",
        padding: "20px 30px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="container-fluid">
        <a
          className="navbar-brand text-white fs-3 fw-bold"
          href="#"
          onClick={handleHome}
          style={{
            letterSpacing: "2px",
            backgroundColor: "rgb(82, 81, 91)",
            padding: "0px 10px",
            borderRadius: "4px",
            boxShadow: "0 8px 3px rgba(238, 238, 238, 0.1)",
          }}
        >
          The Rise
        </a>

        <button
          className="navbar-toggler bg-light"
          type="button"
          onClick={toggleNav}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          <ul
            className="navbar-nav mx-auto mb-2 mb-lg-0"
            style={{
              gap: "20px",
              ...(isNavOpen ? toggleStyle : {}),
            }}
          >
            {navNewsItems.map((item, index) => (
              <li
                className="nav-item"
                key={index}
                onClick={() => handleNavClick(item)}
              >
                <a
                  className="nav-link text-white fw-semibold"
                  style={{
                    cursor: "pointer",
                    transition: "color 0.3s",
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <div className="d-flex" role="search">
            <input
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="form-control me-2"
              type="search"
              placeholder="Search News"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              style={{
                minWidth: "200px",
                borderRadius: "20px",
                padding: "6px 12px",
              }}
            />
            <button
              className="btn"
              onClick={handleSearch}
              style={{
                backgroundColor: "rgb(82, 81, 91)",
                color: "white",
                borderRadius: "5px",
                padding: "6px 16px",
              }}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

// import { useRef, useState } from "react";

// const NavBar = ({ initialSearch, setSearch }) => {
//   const [userInput, setUserInput] = useState(initialSearch);
//   const handleSearch = () => {
//     setSearch(userInput);
//   };
//   const handleInputChange = (e) => {
//     setUserInput(e.target.value);
//   };

//   const handleNavNewsItems = (item) => {
//     setSearch(item);
//     setUserInput(item);
//   };

//   const navNewsItems = ["Sports", "World", "India", "Madhya Pradesh", "Virat"];
//   return (
//     <nav
//       className="navbar navbar-expand-lg "
//       style={{
//         position: "sticky",
//         zIndex: "100",
//         top: "0",
//         backgroundColor: "grey",
//       }}
//     >
//       <div className="container-fluid">
//         <a className="navbar-brand" href="#">
//           The Rise
//         </a>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div
//           className="collapse navbar-collapse position-relative"
//           id="navbarSupportedContent"
//         >
//           {/* Centered UL */}
//           <ul className="navbar-nav position-absolute start-50 translate-middle-x mb-2 mb-lg-0">
//             {navNewsItems.map((item, index) => {
//               return (
//                 <li
//                   className="nav-item"
//                   key={index}
//                   onClick={() => handleNavNewsItems(item)}
//                 >
//                   <a className="nav-link active" aria-current="page" href="#">
//                     {item}
//                   </a>
//                 </li>
//               );
//             })}
//           </ul>

//           {/* Search bar on right */}
//           <div className="d-flex ms-auto" role="search">
//             <input
//               onChange={(e) => handleInputChange(e)}
//               value={userInput}
//               className="form-control me-2"
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
//             />
//             <button
//               className="btn btn-outline-success"
//               type="submit"
//               onClick={handleSearch}
//             >
//               Search
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;

// src/components/NavBar.js
