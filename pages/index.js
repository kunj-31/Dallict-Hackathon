import { useState } from "react";

export default function Home() {
  const [resumeText, setResumeText] = useState("");
  const [score, setScore] = useState(0);
  const [suggestions, setSuggestions] = useState([]);
  const [isResultVisible, setIsResultVisible] = useState(false);

  // Handle PDF upload and text extraction
  async function extractTextFromPDF(event) {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("resume", file);

    try {
      const response = await fetch("/api/uploadResume", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      const extractedText = data.text;
      setResumeText(extractedText);
      predictScore(extractedText);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  // Predict score based on resume content
  function predictScore(resumeText) {
    resumeText = resumeText.toLowerCase();
    let score = 90;
    let suggestions = [];

    if (!resumeText.includes("react")) {
      suggestions.push("Mention React experience or certification.");
      score -= 5;
    }
    if (!resumeText.includes("sql")) {
      suggestions.push("Include any SQL or database knowledge.");
      score -= 3;
    }
    if (!resumeText.includes("project")) {
      suggestions.push("Add project-based experience with outcomes.");
      score -= 2;
    }
    if (!resumeText.includes("linkedin")) {
      suggestions.push("Add your LinkedIn profile.");
      score -= 2;
    }
    if (!resumeText.includes("leadership") && !resumeText.includes("volunteer")) {
      suggestions.push("Include leadership or volunteer experience.");
      score -= 3;
    }

    setIsResultVisible(true);
    setScore(score);
    setSuggestions(suggestions);
  }

  // Generate updated resume
  async function generateUpdatedResume() {
    const response = await fetch("/api/generateResume", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resumeText }),
    });
    const blob = await response.blob();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Updated_Resume.pdf";
    link.click();
  }

  return (
    <div className="bg-blue-50 min-h-screen p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow p-8">
        <h2 className="text-2xl font-bold text-blue-700 mb-6">Resume Score Predictor & Suggestions</h2>

        {/* Resume Upload */}
        <div className="mb-6">
          <label className="block font-medium mb-2">Upload Your Resume (PDF):</label>
          <input
            type="file"
            id="resumeInput"
            accept="application/pdf"
            className="block w-full border p-2 rounded"
            onChange={extractTextFromPDF}
          />
        </div>

        {/* Score and Suggestions Section */}
        {isResultVisible && (
          <div>
            <div className="mb-4">
              <p className="text-lg font-semibold text-green-600">Your Resume Score: <span>{score}</span>/100</p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Skill Suggestions:</h3>
              <ul className="list-disc pl-5 text-gray-700">
                {suggestions.map((suggestion, index) => (
                  <li key={index}>{suggestion}</li>
                ))}
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800">Placement Advice:</h3>
              <p className="text-gray-700">Upskill in React, DSA, and SQL. Apply on LinkedIn and Internshala. Tailor resume to highlight projects, roles, and achievements.</p>
            </div>
          </div>
        )}

        {/* Editable Resume Form */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Edit Resume Content:</h3>
          <textarea
            id="resumeText"
            rows="10"
            className="w-full border p-3 rounded text-sm"
            placeholder="Paste your resume text here or make changes based on suggestions..."
            value={resumeText}
            onChange={(e) => setResumeText(e.target.value)}
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button onClick={() => predictScore(resumeText)} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Predict Score</button>
          <button onClick={generateUpdatedResume} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Download Updated Resume</button>
        </div>
      </div>
    </div>
  );
}
