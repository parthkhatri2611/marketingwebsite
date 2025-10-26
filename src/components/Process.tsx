import { Lightbulb, Target, Rocket, BarChart } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Lightbulb,
    title: 'Discovery & Strategy',
    description: 'We dive deep into your business, audience, and goals to craft a tailored digital strategy that sets the foundation for success.',
    points: ['Business Analysis', 'Market Research', 'Competitor Audit', 'Goal Setting'],
  },
  {
    number: '02',
    icon: Target,
    title: 'Planning & Design',
    description: 'Our creative team develops a comprehensive plan with stunning designs and compelling messaging that resonates with your target audience.',
    points: ['Campaign Planning', 'Creative Development', 'Content Strategy', 'Channel Selection'],
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Launch & Execute',
    description: 'We bring your campaign to life with precision execution across all channels, ensuring every touchpoint delivers maximum impact.',
    points: ['Campaign Launch', 'Multi-Channel Deployment', 'Real-Time Monitoring', 'Quick Optimizations'],
  },
  {
    number: '04',
    icon: BarChart,
    title: 'Optimize & Scale',
    description: 'Continuous analysis and optimization drive ongoing improvements, while we identify opportunities to scale what works best.',
    points: ['Performance Analysis', 'A/B Testing', 'Data-Driven Refinement', 'Growth Scaling'],
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven methodology that transforms ideas into results through strategic planning and flawless execution
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-200 transform -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-600 hover:shadow-xl transition-all duration-300 group">
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-6xl font-bold text-gray-100 group-hover:text-blue-50 transition-colors">
                        {step.number}
                      </div>
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="text-white" size={32} />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{step.description}</p>

                    <ul className="space-y-2">
                      {step.points.map((point, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how our proven process can transform your digital presence and drive measurable results
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
          >
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
