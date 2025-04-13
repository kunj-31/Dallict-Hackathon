// components/ResumeUpload.js
import { useState } from "react";

const ResumeUpload = () => {
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [downloadLink, setDownloadLink] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("resume", event.target.resume.files[0]);

    setLoading(true);

    try {
      const res = await fetch("/api/resume", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      setScore(data.score);
      setSuggestions(data.suggestions.split("\n"));
      setDownloadLink(data.modifiedPdfUrl);
    } catch (error) {
      alert("Error analyzing resume. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center">AI Resume Analyzer</h1>
      <form onSubmit={handleFormSubmit} className="mt-4">
        <input
          type="file"
          name="resume"
          accept="application/pdf"
          required
          className="border p-2 w-full mb-4"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 w-full"
          disabled={loading}
        >
          {loading ? "Analyzing..." : "Analyze Resume"}
        </button>
      </form>

      {score && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Resume Score: {score}/100</h2>
          <h3 className="mt-2 font-medium">Suggestions:</h3>
          <ul>
            {suggestions.map((suggestion, index) => (
              <li key={index}>{suggestion}</li>
            ))}
          </ul>
          <a
            href={downloadLink}
            download="Modified_Resume.pdf"
            className="mt-4 inline-block bg-green-500 text-white p-2"
          >
            Download Modified Resume
          </a>
        </div>
      )}
    </div>
  );
};

export default ResumeUpload;