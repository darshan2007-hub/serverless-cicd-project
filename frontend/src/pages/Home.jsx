import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Cloud, Zap, Shield, Brain, TrendingUp,
  Users, Star, CheckCircle, ChevronRight, Play
} from 'lucide-react'
import PageWrapper from '../components/PageWrapper'
import SectionTitle from '../components/SectionTitle'

const stats = [
  { value: '500+', label: 'Clients Worldwide', icon: Users },
  { value: '99.9%', label: 'Uptime SLA', icon: TrendingUp },
  { value: '50M+', label: 'API Requests/Day', icon: Zap },
  { value: '4.9★', label: 'Average Rating', icon: Star },
]

const services = [
  { icon: Cloud, title: 'Cloud Infrastructure', desc: 'Scalable AWS architecture designed for growth and reliability.', color: 'from-blue-500 to-cyan-500' },
  { icon: Zap, title: 'DevOps Automation', desc: 'CI/CD pipelines that ship code faster with zero downtime.', color: 'from-purple-500 to-pink-500' },
  { icon: Shield, title: 'Serverless Solutions', desc: 'Pay-per-use Lambda functions that scale automatically.', color: 'from-green-500 to-emerald-500' },
  { icon: Brain, title: 'AI Integration', desc: 'Embed intelligent automation into your existing workflows.', color: 'from-orange-500 to-red-500' },
]

const testimonials = [
  { name: 'Sarah Chen', role: 'CTO, TechFlow Inc.', text: 'CloudNova transformed our infrastructure. We cut costs by 60% and deployment time by 80%.', avatar: 'SC' },
  { name: 'Marcus Rivera', role: 'VP Engineering, DataSync', text: 'The serverless migration was seamless. Their team is world-class and the results speak for themselves.', avatar: 'MR' },
  { name: 'Priya Patel', role: 'Founder, NexaAI', text: 'Best investment we made. Our AI pipeline now processes 10x more data at half the cost.', avatar: 'PP' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Home() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.15)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(139,92,246,0.1)_0%,_transparent_60%)]" />

        {/* Floating orbs */}
        <motion.div
          animate={{ y: [-20, 20, -20], rotate: [0, 180, 360] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl"
        />
        <motion.div
          animate={{ y: [20, -20, 20], rotate: [360, 180, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl"
        />

        <div className="relative container-max section-padding text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-blue-400 text-sm font-medium mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              Next-Gen Cloud Solutions
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight"
            >
              Build Faster with
              <br />
              <span className="gradient-text text-shadow">CloudNova</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-white/60 text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Enterprise-grade cloud infrastructure, DevOps automation, and AI integration — all in one platform.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/services" className="btn-primary flex items-center justify-center gap-2">
                Explore Services <ArrowRight size={16} />
              </Link>
              <Link to="/about" className="btn-outline flex items-center justify-center gap-2">
                <Play size={16} /> Watch Demo
              </Link>
            </motion.div>
          </motion.div>

          {/* Trusted by */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8"
          >
            <span className="text-white/30 text-sm">Trusted by teams at</span>
            {['Stripe', 'Vercel', 'Notion', 'Linear', 'Figma'].map((brand) => (
              <span key={brand} className="text-white/20 font-semibold text-lg hover:text-white/40 transition-colors cursor-default">
                {brand}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-dark-800/50">
        <div className="container-max">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map(({ value, label, icon: Icon }) => (
              <motion.div
                key={label}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass rounded-2xl p-6 text-center group cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon size={22} className="text-blue-400" />
                </div>
                <div className="text-3xl font-black gradient-text mb-1">{value}</div>
                <div className="text-white/50 text-sm">{label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding">
        <div className="container-max">
          <SectionTitle
            badge="What We Do"
            title="Everything you need to"
            highlight="scale in the cloud"
            subtitle="From infrastructure to AI — we handle the complexity so you can focus on building."
          />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map(({ icon: Icon, title, desc, color }) => (
              <motion.div
                key={title}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="glass rounded-2xl p-6 group cursor-default"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg`}>
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">{title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                <div className="mt-4 flex items-center gap-1 text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ChevronRight size={14} />
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-10">
            <Link to="/services" className="btn-outline inline-flex items-center gap-2">
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why CloudNova */}
      <section className="section-padding bg-dark-800/30">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle
                badge="Why CloudNova"
                title="Built for"
                highlight="modern teams"
                subtitle="We combine deep AWS expertise with developer-first tooling to deliver results fast."
                center={false}
              />
              <ul className="space-y-4">
                {[
                  'Zero-downtime deployments with blue/green strategies',
                  'Auto-scaling infrastructure that grows with you',
                  'Security-first architecture with SOC2 compliance',
                  '24/7 monitoring and incident response',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/70">
                    <CheckCircle size={18} className="text-green-400 mt-0.5 shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2 mt-8">
                Start Free Consultation <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="glass rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
                <div className="relative space-y-4">
                  {[
                    { label: 'Deployment Speed', value: 95, color: 'from-blue-500 to-cyan-500' },
                    { label: 'Cost Reduction', value: 60, color: 'from-purple-500 to-pink-500' },
                    { label: 'System Reliability', value: 99, color: 'from-green-500 to-emerald-500' },
                    { label: 'Team Productivity', value: 80, color: 'from-orange-500 to-red-500' },
                  ].map(({ label, value, color }) => (
                    <div key={label}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-white/70">{label}</span>
                        <span className="text-white font-semibold">{value}%</span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className={`h-full rounded-full bg-gradient-to-r ${color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-max">
          <SectionTitle
            badge="Testimonials"
            title="Loved by"
            highlight="engineering teams"
            subtitle="Don't take our word for it — hear from the teams we've helped scale."
          />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {testimonials.map(({ name, role, text, avatar }) => (
              <motion.div
                key={name}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="glass rounded-2xl p-6"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-6">"{text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
                    {avatar}
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">{name}</div>
                    <div className="text-white/40 text-xs">{role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden p-12 text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20" />
            <div className="absolute inset-0 glass" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to transform your infrastructure?
              </h2>
              <p className="text-white/60 mb-8 max-w-xl mx-auto">
                Join 500+ companies already scaling with CloudNova. Start your free consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary flex items-center justify-center gap-2">
                  Get Started Free <ArrowRight size={16} />
                </Link>
                <Link to="/services" className="btn-outline flex items-center justify-center gap-2">
                  View Pricing
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}
