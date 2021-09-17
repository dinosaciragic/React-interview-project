const express = require('express');
var cors = require('cors');

const app = express();
app.use(cors());

// Init middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
  res.json({ msg: 'Welcome to the Online Survey API' });
});

// Define routes
app.use('/api/v1/survey', require('./routes/survey'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server on ${PORT}`));
