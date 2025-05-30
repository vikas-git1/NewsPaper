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
A React.js-based news application that fetches real-time headlines using an API. Implemented search, category filters, and global state management using Context API. Mobile-responsive and deployed on Vercel. */}
    </>
  );
}

export default App;
