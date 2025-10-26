import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let's <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your digital presence? Get in touch and let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-8 md:p-12 text-white h-full">
              <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
              <p className="text-blue-100 mb-8 leading-relaxed">
                We're here to answer your questions and discuss how our digital marketing solutions can drive your business forward.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email Us</h4>
                    <p className="text-blue-100">hello@pulsedigital.com</p>
                    <p className="text-blue-100">support@pulsedigital.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Call Us</h4>
                    <p className="text-blue-100">+1 (555) 123-4567</p>
                    <p className="text-blue-100">Mon-Fri 9am-6pm EST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Visit Us</h4>
                    <p className="text-blue-100">123 Digital Avenue</p>
                    <p className="text-blue-100">New York, NY 10001</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/20">
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {['Twitter', 'LinkedIn', 'Instagram', 'Facebook'].map((social) => (
                    <button
                      key={social}
                      className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <span className="sr-only">{social}</span>
                      <div className="w-5 h-5 bg-white rounded-sm"></div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            {isSubmitted ? (
              <div className="bg-green-50 border-2 border-green-200 rounded-3xl p-12 flex flex-col items-center justify-center h-full text-center">
                <CheckCircle className="text-green-600 mb-6" size={64} />
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h3>
                <p className="text-gray-600 text-lg">
                  We've received your message and will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      placeholder="Company Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="seo">SEO Optimization</option>
                    <option value="paid">Paid Advertising</option>
                    <option value="social">Social Media Marketing</option>
                    <option value="brand">Brand Strategy</option>
                    <option value="web">Web Development</option>
                    <option value="analytics">Analytics & Insights</option>
                    <option value="email">Email Marketing</option>
                    <option value="mobile">Mobile Marketing</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project and goals..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-blue-600/30 transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send size={20} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
