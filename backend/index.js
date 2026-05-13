// CloudNova Solutions — AWS Lambda Handler
// Routes: GET /api/services | POST /api/contact | GET /api/company

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': process.env.ALLOWED_ORIGIN || '*',
  'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type,Authorization',
  'Content-Type': 'application/json',
}

const respond = (statusCode, body) => ({
  statusCode,
  headers: CORS_HEADERS,
  body: JSON.stringify(body),
})

// ── Route Handlers ──────────────────────────────────────────────

function getServices() {
  return respond(200, {
    success: true,
    data: [
      {
        id: 'cloud-infra',
        title: 'Cloud Infrastructure',
        icon: 'Cloud',
        description: 'Scalable AWS architecture designed for growth and reliability.',
        features: ['Multi-region deployments', 'Auto-scaling groups', 'Load balancing', 'Cost optimization'],
        startingPrice: 999,
      },
      {
        id: 'devops',
        title: 'DevOps Automation',
        icon: 'GitBranch',
        description: 'End-to-end CI/CD pipelines that automate your entire delivery workflow.',
        features: ['GitHub Actions / CodePipeline', 'Docker & Kubernetes', 'Infrastructure as Code', 'Blue/green deployments'],
        startingPrice: 1499,
      },
      {
        id: 'serverless',
        title: 'Serverless Solutions',
        icon: 'Zap',
        description: 'Event-driven Lambda architectures that scale to zero and cost nothing at rest.',
        features: ['Lambda function design', 'API Gateway setup', 'DynamoDB integration', 'Cold start optimization'],
        startingPrice: 799,
      },
      {
        id: 'ai-integration',
        title: 'AI Integration',
        icon: 'Brain',
        description: 'Embed machine learning and AI capabilities using AWS AI/ML services.',
        features: ['Amazon Bedrock integration', 'SageMaker pipelines', 'Real-time inference', 'RAG architectures'],
        startingPrice: 2499,
      },
    ],
  })
}

function getCompany() {
  return respond(200, {
    success: true,
    data: {
      name: 'CloudNova Solutions',
      founded: 2019,
      headquarters: 'San Francisco, CA',
      employees: '50-100',
      clients: 500,
      description: 'Empowering businesses with cutting-edge cloud, DevOps, and AI solutions.',
      contact: {
        email: 'hello@cloudnova.io',
        phone: '+1 (555) 123-4567',
      },
      social: {
        github: 'https://github.com/cloudnova',
        twitter: 'https://twitter.com/cloudnova',
        linkedin: 'https://linkedin.com/company/cloudnova',
      },
    },
  })
}

async function postContact(body) {
  if (!body) return respond(400, { success: false, message: 'Request body is required.' })

  const { name, email, phone, subject, message } = body

  if (!name || !email || !message) {
    return respond(400, {
      success: false,
      message: 'Missing required fields: name, email, message.',
    })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return respond(400, { success: false, message: 'Invalid email address.' })
  }

  // Optional: Send email via SES
  // Uncomment and configure SES if needed:
  //
  // const { SESClient, SendEmailCommand } = await import('@aws-sdk/client-ses')
  // const ses = new SESClient({ region: process.env.AWS_REGION || 'us-east-1' })
  // await ses.send(new SendEmailCommand({
  //   Source: process.env.SES_FROM_EMAIL,
  //   Destination: { ToAddresses: [process.env.SES_TO_EMAIL] },
  //   Message: {
  //     Subject: { Data: `[CloudNova] New contact: ${subject || 'General Inquiry'}` },
  //     Body: { Text: { Data: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\n\n${message}` } },
  //   },
  // }))

  console.log('Contact form submission:', { name, email, phone, subject, timestamp: new Date().toISOString() })

  return respond(200, {
    success: true,
    message: `Thank you ${name}! We've received your message and will respond within 24 hours.`,
    ticketId: `CN-${Date.now()}`,
  })
}

// ── Main Handler ─────────────────────────────────────────────────

export const handler = async (event) => {
  const method = event.httpMethod || event.requestContext?.http?.method || 'GET'
  const path = event.path || event.rawPath || '/'

  // Handle CORS preflight
  if (method === 'OPTIONS') {
    return { statusCode: 204, headers: CORS_HEADERS, body: '' }
  }

  try {
    if (method === 'GET' && path.endsWith('/api/services')) return getServices()
    if (method === 'GET' && path.endsWith('/api/company')) return getCompany()
    if (method === 'POST' && path.endsWith('/api/contact')) {
      const body = event.body ? JSON.parse(event.isBase64Encoded ? Buffer.from(event.body, 'base64').toString() : event.body) : null
      return await postContact(body)
    }

    return respond(404, { success: false, message: `Route not found: ${method} ${path}` })
  } catch (err) {
    console.error('Lambda error:', err)
    return respond(500, { success: false, message: 'Internal server error.' })
  }
}
