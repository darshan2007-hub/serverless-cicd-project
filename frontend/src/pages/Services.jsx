import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Cloud, Zap, Shield, Brain, Server, GitBranch,
  BarChart3, Lock, CheckCircle, ArrowRight, Sparkles
} from 'lucide-react'
import PageWrapper from '../components/PageWrapper'
import SectionTitle from '../components/SectionTitle'

const services = [
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    color: 'from-blue-500 to-cyan-500',
    shadow: 'shadow-blue-500/20',
    desc: 'Design and deploy scalable, resilient AWS architectures tailored to your workload.',
    features: ['Multi-region deployments', 'Auto-scaling groups', 'Load balancing', 'Cost optimization', 'VPC design & security'],
  },
  {
    icon: GitBranch,
    title: 'DevOps Automation',
    color: 'from-purple-500 to-pink-500',
    shadow: 'shadow-purple-500/20',
    desc: 'End-to-end CI/CD pipelines that automate testing, building, and deploying your applications.',
    features: ['GitHub Actions / CodePipeline', 'Docker & Kubernetes', 'Infrastructure as Code', 'Blue/green deployments', 'Automated rollbacks'],
  },
  {
    icon: Zap,
    title: 'Serverless Solutions',
    color: 'from-green-500 to-emerald-500',
    shadow: 'shadow-green-500/20',
    desc: 'Build event-driven applications with AWS Lambda that scale to zero and cost nothing at rest.',
    features: ['Lambda function design', 'API Gateway setup', 'DynamoDB integration', 'Event-driven architecture', 'Cold start optimization'],
  },
  {
    icon: Brain,
    title: 'AI Integration',
    color: 'from-orange-500 to-red-500',
    shadow: 'shadow-orange-500/20',
    desc: 'Embed machine learning and AI capabilities into your products using AWS AI/ML services.',
    features: ['Amazon Bedrock integration', 'SageMaker pipelines', 'Real-time inference', 'RAG architectures', 'LLM fine-tuning'],
  },
  {
    icon: BarChart3,
    title: 'Observability',
    color: 'from-cyan-500 to-blue-500',
    shadow: 'shadow-cyan-500/20',
    desc: 'Full-stack monitoring, logging, and alerting so you always know what\'s happening.',
    features: ['CloudWatch dashboards', 'Distributed tracing', 'Log aggregation', 'Anomaly detection', 'PagerDuty integration'],
  },
  {
    icon: Lock,
    title: 'Security & Compliance',
    color: 'from-red-500 to-pink-500',
    shadow: 'shadow-red-500/20',
    desc: 'Harden your cloud posture with security audits, IAM best practices, and compliance automation.',
    features: ['SOC2 / ISO 27001', 'IAM policy review', 'Secrets management', 'WAF & DDoS protection', 'Penetration testing'],
  },
]

const plans = [
  {
    name: 'Starter',
    price: '$999',
    period: '/month',
    desc: 'Perfect for startups getting cloud-ready.',
    color: 'from-blue-500/10 to-cyan-500/10',
    border: 'border-blue-500/20',
    features: ['Up to 5 AWS services', 'CI/CD pipeline setup', 'Basic monitoring', 'Email support', '2 team members'],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Growth',
    price: '$2,999',
    period: '/month',
    desc: 'For scaling teams that need more power.',
    color: 'from-purple-500/20 to-pink-500/20',
    border: 'border-purple-500/40',
    features: ['Unlimited AWS services', 'Full DevOps automation', 'Advanced observability', 'Slack + priority support', '10 team members', 'AI integration'],
    cta: 'Most Popular',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: 'Tailored solutions for large organizations.',
    color: 'from-green-500/10 to-emerald-500/10',
    border: 'border-green-500/20',
    features: ['Dedicated solutions architect', 'Custom SLA (99.99%)', 'White-glove onboarding', '24/7 phone support', 'Unlimited team members', 'Compliance automation'],
    cta: 'Contact Sales',
    popular: false,
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Services() {
  const [activeService, setActiveService] = useState(0)

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(139,92,246,0.15)_0%,_transparent_60%)]" />
        <div className="relative container-max text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-purple-400 text-xs font-semibold uppercase tracking-widest mb-6">
              <Sparkles size={12} /> Our Services
            </span>
            <h1 className="text-5xl sm:text-6xl font-black text-white mb-6">
              Everything you need to
              <br />
              <span className="gradient-text">run in the cloud</span>
            </h1>
            <p className="text-white/60 text-xl max-w-2xl mx-auto">
              From infrastructure to AI — we offer end-to-end cloud services that scale with your ambitions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-max">
          <SectionTitle badge="Core Services" title="What we" highlight="specialize in" />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map(({ icon: Icon, title, color, shadow, desc, features }, i) => (
              <motion.div
                key={title}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.01 }}
                onClick={() => setActiveService(i)}
                className={`glass rounded-2xl p-7 cursor-pointer transition-all duration-300 ${
                  activeService === i ? 'ring-1 ring-white/20 bg-white/8' : ''
                }`}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 shadow-lg ${shadow} group-hover:scale-110 transition-transform`}>
                  <Icon size={26} className="text-white" />
                </div>
                <h3 className="text-white font-bold text-xl mb-3">{title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-5">{desc}</p>
                <ul className="space-y-2">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-white/60 text-sm">
                      <CheckCircle size={14} className="text-green-400 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-padding bg-dark-800/30">
        <div className="container-max">
          <SectionTitle badge="Tech Stack" title="Powered by" highlight="best-in-class tools" />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {['AWS Lambda', 'Amazon ECS', 'DynamoDB', 'API Gateway', 'CloudFront', 'CodePipeline', 'Terraform', 'Kubernetes', 'Docker', 'GitHub Actions', 'Datadog', 'Grafana'].map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-5 py-2.5 glass rounded-xl text-white/70 text-sm font-medium hover:text-white transition-colors cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding">
        <div className="container-max">
          <SectionTitle badge="Pricing" title="Simple," highlight="transparent pricing" subtitle="No hidden fees. Cancel anytime. Start with a free consultation." />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start"
          >
            {plans.map(({ name, price, period, desc, color, border, features, cta, popular }) => (
              <motion.div
                key={name}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className={`relative rounded-2xl p-7 border ${border} bg-gradient-to-br ${color} ${popular ? 'ring-1 ring-purple-500/50' : ''}`}
              >
                {popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-white font-bold text-xl mb-1">{name}</h3>
                  <p className="text-white/50 text-sm mb-4">{desc}</p>
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-black text-white">{price}</span>
                    <span className="text-white/40 mb-1">{period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-white/70 text-sm">
                      <CheckCircle size={14} className="text-green-400 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all hover:scale-105 ${
                    popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25'
                      : 'glass text-white hover:bg-white/10'
                  }`}
                >
                  {cta} <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Not sure which plan is right?
            </h2>
            <p className="text-white/50 mb-8">Let's talk. We'll recommend the best solution for your needs.</p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              Schedule Free Consultation <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}
