import { useParams } from "react-router-dom";

const blogContent = {
  "investment-tips-1": "सोप्या मार्गाने पैसे वाढवण्यासाठी टिप्स येथे दिल्या आहेत...",
  "investment-tips-2": "शेअर मार्केटमध्ये सुरक्षित गुंतवणूक करण्याचे मार्ग...",
  "investment-tips-3": "दीर्घकालीन संपत्ती निर्माण करण्याचे मार्ग..."
};

export default function BlogPage() {
  const { slug } = useParams();
  const content = blogContent[slug] || "Blog content not found.";

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{slug.replace(/-/g, " ")}</h1>
      <p>{content}</p>
    </div>
  );
}
