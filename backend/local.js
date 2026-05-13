// Local development server — simulates API Gateway + Lambda
// Run: node local.js

import http from 'http'
import { handler } from './index.js'

const PORT = 3001

const server = http.createServer(async (req, res) => {
  let body = ''
  req.on('data', (chunk) => (body += chunk))
  req.on('end', async () => {
    const event = {
      httpMethod: req.method,
      path: req.url,
      rawPath: req.url,
      body: body || null,
      isBase64Encoded: false,
      headers: req.headers,
    }

    try {
      const result = await handler(event)
      res.writeHead(result.statusCode, result.headers)
      res.end(result.body)
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ error: err.message }))
    }
  })
})

server.listen(PORT, () => {
  console.log(`\n🚀 CloudNova API running at http://localhost:${PORT}`)
  console.log('   GET  /api/services')
  console.log('   GET  /api/company')
  console.log('   POST /api/contact\n')
})
