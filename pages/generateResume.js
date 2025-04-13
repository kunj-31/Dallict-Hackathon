// /pages/api/generateResume.js

import { PDFDocument } from 'pdf-lib';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { resumeText } = req.body;

    // Generate a PDF from the provided text
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 800]);
    const { width, height } = page.getSize();
    const font = await pdfDoc.embedFont(PDFDocument.Font.Helvetica);

    page.drawText(resumeText, { x: 50, y: height - 50, font, size: 12 });

    const pdfBytes = await pdfDoc.save();

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=Updated_Resume.pdf');
    res.send(pdfBytes);
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
