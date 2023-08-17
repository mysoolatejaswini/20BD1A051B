const express = require('express');
const numbersController = require('./controllers/numbersController');

const app = express();
const PORT = process.env.PORT || 8008;

app.use('/numbers', numbersController);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
