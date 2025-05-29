import "./App.css";
import NewsApp from "./components/NewsApp";
import { NewsProvider } from "./context/newsContext";
function App() {
  return (
    <>
      <NewsProvider>
        <NewsApp />
      </NewsProvider>
    </>
  );
}

export default App;
