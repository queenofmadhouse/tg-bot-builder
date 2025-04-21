const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');
const app = express();

app.use(cors());

// Flow Management Service (port 3001)
app.use(
    '/api/flows',
    createProxyMiddleware({
        target: `http://${process.env.FLOW_HOST}:${process.env.FLOW_PORT}`,
        changeOrigin: true,
        pathRewrite: { '^/api/flows': '' }
    })
);

// Code Generation Service (port 3002)
app.use(
    '/api/generate',
    createProxyMiddleware({
        target: `http://${process.env.CODEGEN_HOST}:${process.env.CODEGEN_PORT}`,
        changeOrigin: true,
        pathRewrite: { '^/api/generate': '' }
    })
);

// Gateway (port 3000)
const PORT = process.env.GATEWAY_PORT;
app.listen(PORT, () => {
    console.log(`API Gateway is running on port ${PORT}`);
});
