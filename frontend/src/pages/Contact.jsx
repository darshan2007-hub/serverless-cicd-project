import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Twitter, Linkedin, CheckCircle, AlertCircle, Loader } from 'lucide-react'
import PageWrapper from '../components/PageWrapper'
import SectionTitle from '../components/SectionTitle'

const API_URL = import.meta.env.VITE_API_URL || ''

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'hello@cloudnova.io', href: 'mailto:hello@cloudnova.io' },
  { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
  { icon: MapPin, label: 'Office', value: '100 Market St, San Francisco, CA 94105', href: '#' },
]

const socials = [
  { icon: Github, label: 'GitHub', href: '#', color: 'hover:text-white' },
  { icon: Twitter, label: 'Twitter', href: '#', color: 'hover:text-sky-400' },
  { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'hover:text-blue-400' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'loading' | 'success' | 'error'

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
      setForm({ name: '', email: '', phone: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(59,130,246,0.12)_0%,_transparent_60%)]" />
        <div className="relative container-max text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-blue-400 text-xs font-semibold uppercase tracking-widest mb-6">
              Get In Touch
            </span>
            <h1 className="text-5xl sm:text-6xl font-black text-white mb-6">
              Let's build something
              <br />
              <span className="gradient-text">amazing together</span>
            </h1>
            <p className="text-white/60 text-xl max-w-xl mx-auto">
              Have a project in mind? We'd love to hear about it. Drop us a message and we'll get back within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding pt-0">
        <div className="container-max">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="glass rounded-2xl p-7">
                <h3 className="text-white font-bold text-xl mb-6">Contact Information</h3>
                <div className="space-y-5">
                  {contactInfo.map(({ icon: Icon, label, value, href }) => (
                    <a key={label} href={href} className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <Icon size={18} className="text-blue-400" />
                      </div>
                      <div>
                        <div className="text-white/40 text-xs mb-0.5">{label}</div>
                        <div className="text-white/80 text-sm group-hover:text-white transition-colors">{value}</div>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="border-t border-white/5 mt-6 pt-6">
                  <div className="text-white/40 text-xs mb-3">Follow us</div>
                  <div className="flex gap-3">
                    {socials.map(({ icon: Icon, label, href, color }) => (
                      <a
                        key={label}
                        href={href}
                        aria-label={label}
                        className={`w-10 h-10 glass rounded-xl flex items-center justify-center text-white/40 ${color} transition-all hover:scale-110`}
                      >
                        <Icon size={16} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="glass rounded-2xl p-7">
                <h4 className="text-white font-semibold mb-4">Office Hours</h4>
                <div className="space-y-2 text-sm">
                  {[
                    { day: 'Monday – Friday', hours: '9:00 AM – 6:00 PM PST' },
                    { day: 'Saturday', hours: '10:00 AM – 2:00 PM PST' },
                    { day: 'Sunday', hours: 'Closed' },
                  ].map(({ day, hours }) => (
                    <div key={day} className="flex justify-between">
                      <span className="text-white/50">{day}</span>
                      <span className="text-white/80">{hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="glass rounded-2xl p-8">
                <h3 className="text-white font-bold text-xl mb-6">Send us a message</h3>

                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 mb-6"
                  >
                    <CheckCircle size={18} />
                    <span className="text-sm">Message sent! We'll get back to you within 24 hours.</span>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 mb-6"
                  >
                    <AlertCircle size={18} />
                    <span className="text-sm">Something went wrong. Please try again or email us directly.</span>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-white/60 text-sm mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 glass rounded-xl text-white placeholder-white/30 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-white/60 text-sm mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 glass rounded-xl text-white placeholder-white/30 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-white/60 text-sm mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 glass rounded-xl text-white placeholder-white/30 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-white/60 text-sm mb-2">Subject *</label>
                      <select
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 glass rounded-xl text-white text-sm focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all bg-transparent"
                      >
                        <option value="" className="bg-dark-800">Select a topic</option>
                        <option value="cloud" className="bg-dark-800">Cloud Infrastructure</option>
                        <option value="devops" className="bg-dark-800">DevOps Automation</option>
                        <option value="serverless" className="bg-dark-800">Serverless Solutions</option>
                        <option value="ai" className="bg-dark-800">AI Integration</option>
                        <option value="pricing" className="bg-dark-800">Pricing & Plans</option>
                        <option value="other" className="bg-dark-800">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/60 text-sm mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your project, goals, and timeline..."
                      className="w-full px-4 py-3 glass rounded-xl text-white placeholder-white/30 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader size={16} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding pt-0">
        <div className="container-max">
          <SectionTitle badge="Location" title="Find us" highlight="in San Francisco" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl overflow-hidden h-80 relative"
          >
            {/* Map placeholder with gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-dark-800 to-purple-900/30 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/30">
                  <MapPin size={28} className="text-white" />
                </div>
                <p className="text-white font-semibold text-lg">100 Market Street</p>
                <p className="text-white/50">San Francisco, CA 94105</p>
                <a
                  href="https://maps.google.com/?q=100+Market+Street+San+Francisco+CA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 px-5 py-2 glass rounded-xl text-blue-400 text-sm hover:text-white transition-colors"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
            {/* Grid overlay for map feel */}
            <div className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}
