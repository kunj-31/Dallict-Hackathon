document.getElementById('sendBtn').addEventListener('click', async () => {
    const userInput = document.getElementById('userInput');
    const responseBox = document.getElementById('response');
    const message = userInput.value.trim();
  
    if (!message) {
      responseBox.textContent = "⚠ Please enter a message.";
      return;
    }
  
    responseBox.textContent = "⏳ Thinking...";
  
    try {
      const res = await fetch('/api/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userMessage: message }),
      });
  
      const data = await res.json();
      responseBox.textContent = data.reply || "⚠ No response from AI.";
    } catch (error) {
      console.error("Error:", error);
      responseBox.textContent = "❌ Error fetching AI response.";
    }
  });