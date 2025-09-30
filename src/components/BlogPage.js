import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { marked } from "marked";

export default function BlogPage() {
  const { slug } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://raw.githubusercontent.com/YOUR_USERNAME/marathi-investments-blog/main/content/blog/${slug}.md`
      )
      .then((res) => setContent(marked(res.data)))
      .catch((err) => console.error(err));
  }, [slug]);

  return <div style={{ padding: "20px" }} dangerouslySetInnerHTML={{ __html: content }} />;
}
