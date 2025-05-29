const NavBar = () => {
  const navNewsItems = ["Sports", "World", "India", "Madhya Pradesh", "Virat"];
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        position: "sticky",
        top: "0",
        backgroundColor: "grey",
        zIndex: 100,
      }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          The Rise
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse position-relative"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav position-absolute start-50 translate-middle-x mb-2 mb-lg-0">
            {navNewsItems.map((item, index) => {
              return (
                <li className="nav-item" key={index}>
                  <a className="nav-link active" aria-current="page" href="#">
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="d-flex ms-auto" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
            />
            <button className="btn btn-outline-success">Search</button>
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
