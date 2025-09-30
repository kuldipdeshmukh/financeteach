import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogList from "./components/BlogList";
import BlogPage from "./components/BlogPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPage />} />
      </Routes>
    </Router>
  );
}

export default App;
