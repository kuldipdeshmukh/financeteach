import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.github.com/repos/kuldipdeshmukh/financeteach/contents/content/blog"
      )
      .then((res) => setBlogs(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Marathi Investment Blogs</h1>
      <ul>
        {blogs.map((b) => (
          <li key={b.name}>
            <Link to={`/blog/${b.name.replace(".md", "")}`}>
              {b.name.replace(".md", "").replace(/-/g, " ")}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
