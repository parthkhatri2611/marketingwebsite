import { Megaphone, Search, Share2, PenTool, BarChart3, Smartphone, Globe, Mail } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Dominate search rankings with our data-driven SEO strategies that drive organic traffic and qualified leads.',
    features: ['Keyword Research', 'Technical SEO', 'Link Building', 'Content Strategy'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Megaphone,
    title: 'Paid Advertising',
    description: 'Maximize ROI with precision-targeted campaigns across Google Ads, Meta, LinkedIn, and beyond.',
    features: ['PPC Management', 'Social Ads', 'Retargeting', 'Display Campaigns'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'Build engaged communities and amplify your brand voice across all major social platforms.',
    features: ['Content Creation', 'Community Management', 'Influencer Marketing', 'Social Analytics'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: PenTool,
    title: 'Brand Strategy',
    description: 'Craft a unique brand identity that resonates with your audience and stands out in the market.',
    features: ['Brand Positioning', 'Visual Identity', 'Brand Guidelines', 'Messaging Framework'],
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Build stunning, high-performance websites that convert visitors into customers.',
    features: ['UI/UX Design', 'Responsive Development', 'E-commerce', 'CMS Integration'],
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Insights',
    description: 'Turn data into actionable insights with comprehensive analytics and reporting solutions.',
    features: ['Performance Tracking', 'Conversion Analytics', 'Custom Dashboards', 'A/B Testing'],
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Mail,
    title: 'Email Marketing',
    description: 'Nurture leads and retain customers with personalized email campaigns that drive results.',
    features: ['Campaign Design', 'Automation', 'Segmentation', 'Performance Optimization'],
    color: 'from-rose-500 to-pink-500',
  },
  {
    icon: Smartphone,
    title: 'Mobile Marketing',
    description: 'Reach customers on-the-go with mobile-first strategies and app marketing solutions.',
    features: ['App Store Optimization', 'Mobile Ads', 'SMS Marketing', 'In-App Campaigns'],
    color: 'from-teal-500 to-cyan-500',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital marketing solutions tailored to accelerate your growth and maximize your online impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative">
                  <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="text-white" size={28} />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>

                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="mt-6 text-blue-600 font-semibold text-sm group-hover:text-blue-700 flex items-center">
                    Learn More
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
