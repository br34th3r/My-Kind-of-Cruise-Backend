const express = require('express');
const cors = require('cors');
const app = express();

const allowCors = require('./cors/allowCors.js');

const cruises = require('./routes/cruises.js');

const PORT = 4000;

app.use(cors());
app.use(allowCors);

app.get('/', (req, res) => {
	res.send("My Kind of Cruise Backend - V1.0");
});

app.use('/cruises', cruises);

app.listen(PORT, () => console.log(`Server Started on Port ${PORT}`));
