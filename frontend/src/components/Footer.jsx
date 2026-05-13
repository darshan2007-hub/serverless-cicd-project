import { Link } from 'react-router-dom'
import { Cloud, Github, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

const footerLinks = {
  Company: [
    { label: 'About Us', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Contact', to: '/contact' },
  ],
  Services: [
    { label: 'Cloud Infrastructure', to: '/services' },
    { label: 'DevOps Automation', to: '/services' },
    { label: 'Serverless Solutions', to: '/services' },
    { label: 'AI Integration', to: '/services' },
  ],
}

const socials = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-dark-800">
      <div className="container-max section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <Cloud size={18} className="text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">CloudNova</span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Empowering businesses with cutting-edge cloud, DevOps, and AI solutions.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 glass rounded-lg flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white/80 mb-4 uppercase tracking-wider">{title}</h4>
              <ul className="space-y-2">
                {items.map(({ label, to }) => (
                  <li key={label}>
                    <Link to={to} className="text-white/50 hover:text-white text-sm transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white/80 mb-4 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              {[
                { icon: Mail, text: 'hello@cloudnova.io' },
                { icon: Phone, text: '+1 (555) 123-4567' },
                { icon: MapPin, text: 'San Francisco, CA' },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-2 text-white/50 text-sm">
                  <Icon size={14} className="text-blue-400 shrink-0" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-sm">© 2024 CloudNova Solutions. All rights reserved.</p>
          <p className="text-white/30 text-sm">Built with ❤️ on AWS</p>
        </div>
      </div>
    </footer>
  )
}
