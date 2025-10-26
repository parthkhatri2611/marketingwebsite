import { useEffect, useRef, useState } from 'react';

interface StatProps {
  end: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

function StatCounter({ end, label, suffix = '', prefix = '' }: StatProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, end]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">
        {prefix}{count}{suffix}
      </div>
      <div className="text-gray-600 font-medium">{label}</div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <StatCounter end={500} suffix="+" label="Brands Transformed" />
          <StatCounter end={98} suffix="%" label="Client Satisfaction" />
          <StatCounter end={250} suffix="%" label="Average ROI Increase" />
          <StatCounter end={50} suffix="+" label="Industry Awards" />
        </div>
      </div>
    </section>
  );
}
