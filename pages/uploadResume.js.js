// /pages/api/uploadResume.js

import fs from 'fs';
import path from 'path';
import pdf from 'pdf-parse';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const file = req.files.resume;
    if (!file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // Extract text from PDF
    const pdfBuffer = file.data;
    try {
      const pdfData = await pdf(pdfBuffer);
      const resumeText = pdfData.text;

      // You can pass this resume text for further analysis (e.g., AI scoring, suggestions)
      res.status(200).json({ text: resumeText });

    } catch (error) {
      res.status(500).json({ error: 'Failed to extract PDF text' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
