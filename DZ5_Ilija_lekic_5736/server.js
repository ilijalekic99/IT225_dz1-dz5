const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.json());

function readDatabase() {
  return JSON.parse(fs.readFileSync('db.json', 'utf8'));
}

function saveToDatabase(data) {
  fs.writeFileSync('db.json', JSON.stringify(data, null, 2), 'utf8');
}

app.get('/items', (req, res) => {
  const data = readDatabase();
  res.json(data);
});

app.post('/items', (req, res) => {
  const data = readDatabase();
  const newItem = {
    userId: req.body.userId,
    id: data.length + 1,
    title: req.body.title,
    completed: req.body.completed
  };
  data.push(newItem);
  saveToDatabase(data);
  res.status(201).json(newItem);
});

app.get('/items/:id', (req, res) => {
  const data = readDatabase();
  const item = data.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).send('Item not found.');
  res.json(item);
});

app.put('/items/:id', (req, res) => {
  const data = readDatabase();
  const item = data.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).send('Item not found.');

  item.title = req.body.title;
  item.completed = req.body.completed;
  saveToDatabase(data);
  res.json(item);
});

app.delete('/items/:id', (req, res) => {
let data = readDatabase();
const item = data.find(i => i.id === parseInt(req.params.id));
if (!item) return res.status(404).send('Item not found.');

data = data.filter(i => i.id !== parseInt(req.params.id));
saveToDatabase(data);
res.send('Item deleted.');
});

app.listen(PORT, () => {
console.log(Server running on port ${PORT});
});