const express = require('express');
const app = express();
app.use(express.json());

// POST
app.post('/generate', async (req, res) => {

});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`CodeGen service on ${PORT}`));
