// resume.js

// Load PDF.js library
const resumeInput = document.getElementById('resumeInput');
const resumeText = document.getElementById('resumeText');

resumeInput.addEventListener('change', async function () {
  const file = this.files[0];
  if (!file || file.type !== "application/pdf") {
    alert("Please upload a valid PDF file.");
    return;
  }

  const fileReader = new FileReader();
  fileReader.onload = async function () {
    const typedArray = new Uint8Array(this.result);
    const pdf = await pdfjsLib.getDocument({ data: typedArray }).promise;

    let text = '';
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();
      const strings = content.items.map(item => item.str).join(' ');
      text += strings + '\n\n';
    }

    resumeText.value = text.trim();
  };
  fileReader.readAsArrayBuffer(file);
});

async function generateModifiedPDF() {
  const content = resumeText.value;
  const pdfDoc = await PDFLib.PDFDocument.create();
  let page = pdfDoc.addPage([595, 842]); // A4 size

  const font = await pdfDoc.embedFont(PDFLib.StandardFonts.Helvetica);
  const fontSize = 12;
  const margin = 50;
  const lines = content.split('\n');

  let y = 800;

  for (let line of lines) {
    if (y < 50) {
      page = pdfDoc.addPage([595, 842]);
      y = 800;
    }

    page.drawText(line, {
      x: margin,
      y: y,
      size: fontSize,
      font: font,
      color: PDFLib.rgb(0, 0, 0),
    });

    y -= fontSize + 4;
  }

  const pdfBytes = await pdfDoc.save();
  const blob = new Blob([pdfBytes], { type: "application/pdf" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "Updated_Resume.pdf";
  link.click();
}

// Expose the function to the global scope so it can be used in HTML
window.generateModifiedPDF = generateModifiedPDF;

