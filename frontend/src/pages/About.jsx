import { motion } from 'framer-motion'
import { Target, Eye, Rocket, Award, Users, Globe, Heart } from 'lucide-react'
import PageWrapper from '../components/PageWrapper'
import SectionTitle from '../components/SectionTitle'

const team = [
  { name: 'Alex Morgan', role: 'CEO & Co-Founder', bio: 'Former AWS Solutions Architect with 12+ years in cloud infrastructure.', avatar: 'AM', gradient: 'from-blue-500 to-cyan-500' },
  { name: 'Jordan Lee', role: 'CTO & Co-Founder', bio: 'Ex-Google SRE. Passionate about distributed systems and DevOps culture.', avatar: 'JL', gradient: 'from-purple-500 to-pink-500' },
  { name: 'Sam Torres', role: 'Head of AI/ML', bio: 'PhD in Machine Learning. Built AI pipelines processing billions of events.', avatar: 'ST', gradient: 'from-green-500 to-emerald-500' },
  { name: 'Riley Kim', role: 'Lead DevOps Engineer', bio: 'Kubernetes expert. Automated deployments for Fortune 500 companies.', avatar: 'RK', gradient: 'from-orange-500 to-red-500' },
]

const timeline = [
  { year: '2019', title: 'Founded', desc: 'CloudNova was born in a San Francisco garage with a mission to democratize cloud infrastructure.' },
  { year: '2020', title: 'First 100 Clients', desc: 'Reached our first milestone with clients across fintech, healthtech, and e-commerce.' },
  { year: '2021', title: 'Series A — $12M', desc: 'Raised Series A funding to expand our team and launch our AI integration platform.' },
  { year: '2022', title: 'Global Expansion', desc: 'Opened offices in London and Singapore. Crossed 300 enterprise clients.' },
  { year: '2023', title: 'AWS Premier Partner', desc: 'Achieved AWS Premier Consulting Partner status — top 1% globally.' },
  { year: '2024', title: 'CloudNova 2.0', desc: 'Launched next-gen platform with real-time observability and autonomous scaling.' },
]

const values = [
  { icon: Rocket, title: 'Innovation First', desc: 'We push boundaries and embrace emerging technologies.' },
  { icon: Heart, title: 'Customer Obsessed', desc: 'Your success is our success. We go above and beyond.' },
  { icon: Globe, title: 'Global Mindset', desc: 'Building solutions that scale across borders and cultures.' },
  { icon: Award, title: 'Excellence Always', desc: 'We hold ourselves to the highest engineering standards.' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function About() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.1)_0%,_transparent_70%)]" />
        <div className="relative container-max text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-blue-400 text-xs font-semibold uppercase tracking-widest mb-6">
              Our Story
            </span>
            <h1 className="text-5xl sm:text-6xl font-black text-white mb-6">
              We're on a mission to
              <br />
              <span className="gradient-text">simplify the cloud</span>
            </h1>
            <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed">
              Founded in 2019, CloudNova has helped 500+ companies modernize their infrastructure and ship faster than ever before.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: Target, title: 'Our Mission', color: 'from-blue-500 to-cyan-500', text: 'To empower every engineering team with enterprise-grade cloud infrastructure, making scalability and reliability accessible to companies of all sizes.' },
              { icon: Eye, title: 'Our Vision', color: 'from-purple-500 to-pink-500', text: 'A world where infrastructure is invisible — where developers focus purely on building great products, and the cloud handles everything else autonomously.' },
            ].map(({ icon: Icon, title, color, text }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass rounded-2xl p-8"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-6 shadow-lg`}>
                  <Icon size={26} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
                <p className="text-white/60 leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-dark-800/30">
        <div className="container-max">
          <SectionTitle badge="Our Values" title="What drives" highlight="everything we do" />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="glass rounded-2xl p-6 text-center group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon size={22} className="text-blue-400" />
                </div>
                <h4 className="text-white font-semibold mb-2">{title}</h4>
                <p className="text-white/50 text-sm">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-max">
          <SectionTitle badge="Our Journey" title="From garage to" highlight="global scale" />
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent hidden md:block" />
            <div className="space-y-8">
              {timeline.map(({ year, title, desc }, i) => (
                <motion.div
                  key={year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`flex flex-col md:flex-row items-center gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="glass rounded-2xl p-6 inline-block w-full md:max-w-sm">
                      <div className="gradient-text font-black text-2xl mb-1">{year}</div>
                      <h4 className="text-white font-bold text-lg mb-2">{title}</h4>
                      <p className="text-white/50 text-sm">{desc}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 border-2 border-dark-900 z-10 shrink-0 hidden md:block" />
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-dark-800/30">
        <div className="container-max">
          <SectionTitle badge="The Team" title="Meet the people" highlight="behind CloudNova" subtitle="A diverse team of engineers, architects, and innovators united by a passion for the cloud." />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {team.map(({ name, role, bio, avatar, gradient }) => (
              <motion.div
                key={name}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="glass rounded-2xl p-6 text-center group"
              >
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mx-auto mb-5 text-white text-2xl font-black shadow-lg group-hover:scale-110 transition-transform`}>
                  {avatar}
                </div>
                <h4 className="text-white font-bold text-lg mb-1">{name}</h4>
                <div className="text-blue-400 text-sm font-medium mb-3">{role}</div>
                <p className="text-white/50 text-sm leading-relaxed">{bio}</p>
                <div className="flex justify-center gap-2 mt-4">
                  {['in', 'tw', 'gh'].map((s) => (
                    <a key={s} href="#" className="w-8 h-8 glass rounded-lg flex items-center justify-center text-white/40 hover:text-white text-xs font-bold transition-colors">
                      {s}
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-10"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { icon: Users, value: '500+', label: 'Happy Clients' },
                { icon: Globe, value: '30+', label: 'Countries' },
                { icon: Award, value: '15+', label: 'AWS Certifications' },
                { icon: Rocket, value: '1000+', label: 'Deployments/Month' },
              ].map(({ icon: Icon, value, label }) => (
                <div key={label}>
                  <Icon size={24} className="text-blue-400 mx-auto mb-3" />
                  <div className="text-3xl font-black gradient-text mb-1">{value}</div>
                  <div className="text-white/50 text-sm">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}
