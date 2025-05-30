import "./App.css";
import NewsApp from "./components/NewsApp";
import { NewsProvider } from "./context/newsContext";
function App() {
  return (
    <>
      <NewsProvider>
        <NewsApp />
      </NewsProvider>
      {/* News Web App
A mobile-responsive news application built with React.js, Bootstrap, and Context API. Integrated NewsAPI to fetch real-time articles. Features include keyword search, category-based filtering, client-side pagination, loading indicators, and global state management.*/}
    </>
  );
}

export default App;
