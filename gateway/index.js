const express = require('express');
const {createProxyMiddleware} = require('http-proxy-middleware');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const proxyMiddlewareFlows = createProxyMiddleware({
    target: `http://${process.env.FLOW_HOST}:${process.env.FLOW_PORT}/flows`
});
app.use('/api/flows', proxyMiddlewareFlows);

const proxyMiddlewareCodeGen = createProxyMiddleware({
    target: `http://${process.env.CODEGEN_HOST}:${process.env.CODEGEN_PORT}/generate`
});
app.use('/api/generate', proxyMiddlewareCodeGen);

const PORT = process.env.GATEWAY_PORT;
app.listen(PORT, () => {
    console.log(`API Gateway is running on port ${PORT}`);
});
