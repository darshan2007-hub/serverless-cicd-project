# ☁️ CloudNova Solutions

A modern full-stack serverless company website built with **React + Vite** frontend and **AWS Lambda** backend, deployed via **AWS CodePipeline**.

---

## 🏗️ Architecture

```
GitHub → CodePipeline → CodeBuild → S3 (Frontend) + Lambda (Backend)
                                         ↓
                                   CloudFront CDN
```

## 📁 Project Structure

```
serverless-cicd-project/
├── frontend/                  # React + Vite + Tailwind
│   ├── src/
│   │   ├── components/        # Navbar, Footer, PageWrapper, SectionTitle
│   │   ├── pages/             # Home, About, Services, Contact
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── public/
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── .env.example
│
├── backend/                   # AWS Lambda Node.js API
│   ├── index.js               # Lambda handler (all routes)
│   ├── local.js               # Local dev server
│   ├── package.json
│   └── serverless.yml         # Serverless Framework config
│
├── buildspec.yml              # AWS CodeBuild spec
├── package.json               # Root scripts
└── README.md
```

---

## 🚀 Quick Start (Local Development)

### Prerequisites
- Node.js 20+
- AWS CLI configured

### 1. Install Dependencies
```bash
npm run install:all
```

### 2. Configure Frontend Environment
```bash
cp frontend/.env.example frontend/.env.local
# Edit VITE_API_URL to point to your Lambda API Gateway URL
```

### 3. Start Backend (Local)
```bash
npm run dev:backend
# API running at http://localhost:3001
```

### 4. Start Frontend
```bash
npm run dev:frontend
# App running at http://localhost:5173
```

---

## ☁️ AWS Deployment

### Step 1 — Create S3 Bucket (Frontend Hosting)
```bash
aws s3 mb s3://cloudnova-frontend-prod --region us-east-1
aws s3 website s3://cloudnova-frontend-prod \
  --index-document index.html \
  --error-document index.html
```

### Step 2 — Create Lambda Function
```bash
cd backend
zip -r function.zip index.js package.json
aws lambda create-function \
  --function-name cloudnova-api \
  --runtime nodejs20.x \
  --role arn:aws:iam::YOUR_ACCOUNT_ID:role/lambda-execution-role \
  --handler index.handler \
  --zip-file fileb://function.zip \
  --region us-east-1
```

### Step 3 — Create API Gateway
```bash
# Create HTTP API (recommended)
aws apigatewayv2 create-api \
  --name cloudnova-api \
  --protocol-type HTTP \
  --cors-configuration AllowOrigins='*',AllowMethods='GET,POST,OPTIONS',AllowHeaders='Content-Type'

# Add Lambda integration and routes:
# GET  /api/services
# GET  /api/company
# POST /api/contact
```

### Step 4 — Store API URL in Parameter Store
```bash
aws ssm put-parameter \
  --name /cloudnova/VITE_API_URL \
  --value "https://YOUR_API_ID.execute-api.us-east-1.amazonaws.com/prod" \
  --type SecureString
```

### Step 5 — Create CloudFront Distribution (Optional but recommended)
```bash
# Point to your S3 bucket for CDN + HTTPS
aws cloudfront create-distribution \
  --origin-domain-name cloudnova-frontend-prod.s3-website-us-east-1.amazonaws.com
```

---

## 🔄 CI/CD Setup (AWS CodePipeline)

### CodeBuild IAM Role Permissions Required
```json
{
  "Version": "2012-10-17",
  "Statement": [
    { "Effect": "Allow", "Action": ["s3:*"], "Resource": "arn:aws:s3:::cloudnova-frontend-prod/*" },
    { "Effect": "Allow", "Action": ["lambda:UpdateFunctionCode"], "Resource": "arn:aws:lambda:*:*:function:cloudnova-api" },
    { "Effect": "Allow", "Action": ["cloudfront:CreateInvalidation"], "Resource": "*" },
    { "Effect": "Allow", "Action": ["ssm:GetParameter"], "Resource": "arn:aws:ssm:*:*:parameter/cloudnova/*" }
  ]
}
```

### CodeBuild Environment Variables
| Variable | Value | Source |
|---|---|---|
| `S3_BUCKET_NAME` | `cloudnova-frontend-prod` | Plaintext |
| `CLOUDFRONT_DISTRIBUTION_ID` | `YOUR_DIST_ID` | Plaintext |
| `VITE_API_URL` | API Gateway URL | Parameter Store |

### CodePipeline Stages
1. **Source** — GitHub (main branch trigger)
2. **Build** — CodeBuild (runs `buildspec.yml`)
3. **Deploy** — Automatic (handled in post_build phase)

---

## 🔌 API Reference

### `GET /api/services`
Returns list of all CloudNova services.

### `GET /api/company`
Returns company information and metadata.

### `POST /api/contact`
Submit a contact form message.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1 555 000 0000",
  "subject": "cloud",
  "message": "I'd like to learn more about your services."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you John! We'll respond within 24 hours.",
  "ticketId": "CN-1720000000000"
}
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, Vite 5, Tailwind CSS 3 |
| Animations | Framer Motion 11 |
| Icons | Lucide React |
| Routing | React Router v6 |
| Backend | AWS Lambda (Node.js 20) |
| API | AWS API Gateway HTTP API |
| Storage | Amazon S3 |
| CDN | Amazon CloudFront |
| CI/CD | AWS CodePipeline + CodeBuild |
| Source | GitHub |

---

## 📄 License

MIT © 2024 CloudNova Solutions
