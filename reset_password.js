const express = require('express');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const app = express();
const port = 5000;

// Middleware to verify JWT
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Extract token from Authorization header

  if (!token) {
    return res.status(401).json({ message: 'Access Denied. No token provided.' });
  }

  jwt.verify(token, 'your_secret_key', (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token.' });
    }
    req.user = decoded; // Store decoded data in request object (optional)
    next();
  });
};

// Middleware to parse JSON bodies
app.use(express.json());

// Forgot password endpoint
app.post('/api/forgot-password', verifyToken, async (req, res) => {
  const { email } = req.body;

  // Check if email is valid and registered
  if (!email || !isValidEmail(email)) {
    return res.status(400).json({ message: 'Please provide a valid email.' });
  }

  // Send reset link (Example using Nodemailer)
  const transporter = nodemailer.createTransport({ /* Your SMTP settings */ });
  const resetLink = `http://yourapp.com/reset-password?email=${email}`;

  try {
    await transporter.sendMail({
      from: 'no-reply@yourapp.com',
      to: email,
      subject: 'Password Reset',
      text: `Click here to reset your password: ${resetLink}`,
    });

    res.status(200).json({ message: 'Reset link sent successfully.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to send reset link.' });
  }
});

function isValidEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
