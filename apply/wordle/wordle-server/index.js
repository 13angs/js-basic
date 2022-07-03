const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(express.static('public'));

app.listen(3001, () => {
    console.log('Listening to port 3001');
})