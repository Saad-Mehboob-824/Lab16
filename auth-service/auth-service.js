const express = require('express');
const app = express();
app.use(express.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  res.json({ token: `mock-token-${username}` });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Auth Service running on port ${PORT}`));