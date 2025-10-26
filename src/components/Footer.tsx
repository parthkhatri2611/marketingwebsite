import { Heart } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="text-2xl font-bold">
                Pulse<span className="text-blue-400">Digital</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transforming brands through innovative digital marketing strategies that deliver measurable results.
            </p>
            <div className="flex space-x-4">
              {['Twitter', 'LinkedIn', 'Instagram', 'Facebook'].map((social) => (
                <button
                  key={social}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-white rounded-sm"></div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-3">
              {['SEO Optimization', 'Paid Advertising', 'Social Media', 'Brand Strategy', 'Web Development', 'Analytics'].map(
                (service) => (
                  <li key={service}>
                    <button
                      onClick={() => scrollToSection('services')}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {service}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              {[
                { label: 'About Us', id: 'home' },
                { label: 'Our Work', id: 'portfolio' },
                { label: 'Process', id: 'process' },
                { label: 'Testimonials', id: 'testimonials' },
                { label: 'Contact', id: 'contact' },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-gray-400">
              <li>123 Digital Avenue</li>
              <li>New York, NY 10001</li>
              <li className="pt-2">
                <a href="tel:+15551234567" className="hover:text-white transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
              <li>
                <a href="mailto:hello@pulsedigital.com" className="hover:text-white transition-colors">
                  hello@pulsedigital.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              {new Date().getFullYear()} PulseDigital. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="text-red-500 fill-current" size={16} />
              <span>by PulseDigital Team</span>
            </div>
            <div className="flex space-x-6 text-sm">
              <button className="text-gray-400 hover:text-white transition-colors">Privacy Policy</button>
              <button className="text-gray-400 hover:text-white transition-colors">Terms of Service</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
