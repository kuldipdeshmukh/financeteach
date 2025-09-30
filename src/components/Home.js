import { Link } from "react-router-dom";
import "./Home.css";

// Example blog data (replace with dynamic data from Markdown or API)
const blogPosts = [
  { slug: "investment-tips-1", title: "सोप्या मार्गाने गुंतवणूक टिप्स", description: "सोप्या मार्गाने पैसे वाढवण्यासाठी टिप्स." },
  { slug: "investment-tips-2", title: "शेअर मार्केट टिप्स", description: "शेअर मार्केटमध्ये सुरक्षित गुंतवणूक." },
  { slug: "investment-tips-3", title: "संपत्ती निर्माणाचे मार्ग", description: "दीर्घकालीन संपत्ती निर्माण करण्याचे मार्ग." }
];

export default function Home() {
  return (
    <div className="home-container">
      <h1>Marathi Investment Blogs</h1>
      <div className="recent-posts">
        {blogPosts.map(post => (
          <div key={post.slug} className="post-card">
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <Link to={`/blog/${post.slug}`} className="read-more">वाचण्यासाठी क्लिक करा</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
