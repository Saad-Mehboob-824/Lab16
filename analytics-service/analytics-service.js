const express = require('express');
const app = express();
app.use(express.json());

let hits = 0;
app.get('/analytics', (req, res) => {
  hits++;
  res.json({ hits });
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`Analytics Service running on port ${PORT}`));