import { useState } from 'react';
import { ArrowUpRight, TrendingUp } from 'lucide-react';

const portfolioItems = [
  {
    id: 1,
    title: 'TechStart Rebranding',
    category: 'Brand Strategy',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    results: '300% Increase in Brand Recognition',
    description: 'Complete brand transformation for a leading tech startup',
    tags: ['Branding', 'Design', 'Strategy'],
  },
  {
    id: 2,
    title: 'EcoStore E-commerce',
    category: 'Digital Marketing',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    results: '450% ROI in 6 Months',
    description: 'Full-funnel marketing campaign for sustainable products',
    tags: ['E-commerce', 'SEO', 'PPC'],
  },
  {
    id: 3,
    title: 'FinTech App Launch',
    category: 'Social Media',
    image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
    results: '1M+ App Downloads',
    description: 'Multi-channel social campaign driving massive adoption',
    tags: ['Social', 'Content', 'Influencer'],
  },
  {
    id: 4,
    title: 'Luxury Fashion Campaign',
    category: 'Creative',
    image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
    results: '200% Sales Growth',
    description: 'High-end visual campaign for premium fashion brand',
    tags: ['Photography', 'Design', 'Strategy'],
  },
  {
    id: 5,
    title: 'FoodTech Platform',
    category: 'SEO & Content',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    results: 'Top 3 Rankings in 90 Days',
    description: 'Comprehensive SEO strategy with content marketing',
    tags: ['SEO', 'Content', 'Analytics'],
  },
  {
    id: 6,
    title: 'HealthTech Innovation',
    category: 'Paid Advertising',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
    results: '5x ROAS Achieved',
    description: 'Performance marketing campaign across multiple channels',
    tags: ['PPC', 'Display', 'Retargeting'],
  },
];

const categories = ['All', 'Brand Strategy', 'Digital Marketing', 'Social Media', 'Creative', 'SEO & Content', 'Paid Advertising'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const filteredItems = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Success <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Real results for real businesses. Explore our portfolio of transformative digital campaigns.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                {hoveredItem === item.id && (
                  <div className="absolute inset-0 bg-blue-600/90 flex items-center justify-center animate-fade-in">
                    <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold flex items-center space-x-2 hover:bg-gray-100 transition-colors">
                      <span>View Case Study</span>
                      <ArrowUpRight size={20} />
                    </button>
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-blue-600">{item.category}</span>
                  <div className="flex items-center text-green-600 text-sm font-semibold">
                    <TrendingUp size={16} className="mr-1" />
                    <span>Growth</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-bold text-gray-900">{item.results}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-blue-600/30 transition-all transform hover:scale-105">
            View All Case Studies
          </button>
        </div>
      </div>
    </section>
  );
}
