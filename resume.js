// pages/resume.js
import ResumeUpload from "../components/ResumeUpload";
import Head from "next/head";

const ResumePage = () => {
  return (
    <div>
      <Head>
        <title>AI Resume Builder</title>
        <meta name="description" content="Upload your resume for AI analysis" />
      </Head>
      
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <ResumeUpload />
      </div>
    </div>
  );
};

export default ResumePage;