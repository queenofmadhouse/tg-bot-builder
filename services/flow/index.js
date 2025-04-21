const express = require('express');
const { PrismaClient } = require('./generated/prisma_client');
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3001;
const prisma = new PrismaClient();

// Create Flow
app.post('/flows', async (req, res) => {

});

// Read all Flows
app.get('/flows', (req, res) => {
    res.json({ message: 'Hello World from Flow Service!' });
});

// Read one Flow
app.get('/flows/:id', async (req, res) => {

});

// Update Flow
app.put('/flows/:id', async (req, res) => {

});

// Delete Flow
app.delete('/flows/:id', async (req, res) => {

});

app.listen(PORT, () => console.log(`Flow service listening on ${PORT}`));
