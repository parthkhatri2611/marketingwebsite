import { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechVision Inc.',
    image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400',
    content: 'PulseDigital transformed our entire digital presence. Their strategic approach and creative execution resulted in a 300% increase in qualified leads within just 6 months.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Marketing Director',
    company: 'EcoStore',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    content: 'The ROI we achieved with PulseDigital exceeded all expectations. Their data-driven approach and transparent reporting gave us complete confidence in our investment.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Founder',
    company: 'HealthTech Solutions',
    image: 'https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=400',
    content: 'Working with PulseDigital felt like having an extension of our own team. They truly understood our vision and delivered results that surpassed our goals.',
    rating: 5,
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'CMO',
    company: 'FinanceFlow',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    content: 'Their innovative approach to digital marketing helped us stand out in a crowded market. The creative campaigns they developed were nothing short of brilliant.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Lisa Martinez',
    role: 'Brand Manager',
    company: 'Luxury Fashion Co.',
    image: 'https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=400',
    content: 'PulseDigital elevated our brand to new heights. Their attention to detail and commitment to excellence is evident in every aspect of their work.',
    rating: 5,
  },
  {
    id: 6,
    name: 'James Wilson',
    role: 'VP of Operations',
    company: 'FoodTech Platform',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400',
    content: 'The team at PulseDigital delivered exceptional results. Our organic traffic tripled and conversions doubled in just three months.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const visibleTestimonials = testimonials.slice(currentIndex * 3, currentIndex * 3 + 3);

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Client <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Success</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Hear what our clients have to say about their experience working with us.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {visibleTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative"
                onMouseEnter={() => setIsAutoPlay(false)}
                onMouseLeave={() => setIsAutoPlay(true)}
              >
                <Quote className="absolute top-6 right-6 text-blue-100" size={48} />

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed relative z-10">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-blue-600 font-semibold">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center space-x-3">
            {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlay(false);
                }}
                className={`transition-all ${
                  currentIndex === index
                    ? 'w-8 h-3 bg-blue-600'
                    : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                } rounded-full`}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-gray-900 mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gray-900 mb-2">500+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gray-900 mb-2">98%</div>
            <div className="text-gray-600">Client Retention</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gray-900 mb-2">50+</div>
            <div className="text-gray-600">Industry Awards</div>
          </div>
        </div>
      </div>
    </section>
  );
}
