import { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, TrendingUp, Target } from 'lucide-react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.3), transparent 50%)`,
        }}
      />

      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="inline-flex items-center space-x-2 bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2 mb-8 animate-fade-in">
          <Sparkles className="text-blue-400" size={16} />
          <span className="text-blue-300 text-sm font-medium">Where Brands Come to Life</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-slide-up">
          Transform Your
          <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Digital Presence
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 animate-slide-up animation-delay-200">
          We craft compelling digital experiences that elevate brands, drive engagement, and deliver measurable results in the ever-evolving digital landscape.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up animation-delay-400">
          <button
            onClick={scrollToContact}
            className="group bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center space-x-2 shadow-xl shadow-blue-600/30"
          >
            <span>Start Your Journey</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
          <button
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all"
          >
            View Our Work
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in animation-delay-600">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all group">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Target className="text-white" size={24} />
            </div>
            <h3 className="text-white text-xl font-bold mb-2">Strategic Growth</h3>
            <p className="text-gray-300">Data-driven strategies that accelerate your brand's digital growth</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all group">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <TrendingUp className="text-white" size={24} />
            </div>
            <h3 className="text-white text-xl font-bold mb-2">Performance Focus</h3>
            <p className="text-gray-300">Measurable results with transparent ROI tracking and reporting</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all group">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Sparkles className="text-white" size={24} />
            </div>
            <h3 className="text-white text-xl font-bold mb-2">Creative Excellence</h3>
            <p className="text-gray-300">Award-winning creative team delivering standout campaigns</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
