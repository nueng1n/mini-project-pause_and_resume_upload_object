const express = require('express');
const cors = require('cors');
require('dotenv').config()

const app = express();
const port = process.env.PORT || 3000


app.use(express.json());
app.use(cors());

app.use(require('./routes/main'));

app.use((err, req, res, next) => {
    console.log(err.stack)
    res.status(500).send('Something broke!')
  })

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
