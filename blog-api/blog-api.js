const express = require('express');
const app = express();
app.use(express.json());

const posts = [];
app.get('/posts', (req, res) => res.json(posts));
app.post('/posts', (req, res) => {
  posts.push(req.body);
  res.status(201).json(req.body);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Blog API running on port ${PORT}`));