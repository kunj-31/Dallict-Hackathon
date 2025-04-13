export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }
  
    const { userMessage } = req.body;
  
    try {
      const geminiRes = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=YOUR_API_KEY', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: userMessage }] }]
        })
      });
  
      const json = await geminiRes.json();
      const reply = json.candidates?.[0]?.content?.parts?.[0]?.text || "No response from AI.";
  
      res.status(200).json({ reply });
    } catch (err) {
      console.error(err);
      res.status(500).json({ reply: "Something went wrong." });
    }
  }