import React from 'react';
import { motion } from 'framer-motion';

const WeatherOverlay = ({ weather, show }) => {
  if (!show) return null;

  const renderWeatherEffect = () => {
    switch (weather) {
      case 'rainy':
        return (
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-0.5 h-10 bg-blue-400 opacity-70"
                initial={{ top: -40, left: `${Math.random() * 100}%` }}
                animate={{
                  top: '100%',
                  transition: {
                    duration: 1 + Math.random(),
                    repeat: Infinity,
                    ease: 'linear',
                    delay: Math.random(),
                  },
                }}
              />
            ))}
          </div>
        );
      case 'snowy':
        return (
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full opacity-70"
                initial={{ top: -10, left: `${Math.random() * 100}%` }}
                animate={{
                  top: '100%',
                  left: `${Math.random() * 100}%`,
                  transition: {
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: Math.random() * 3,
                  },
                }}
              />
            ))}
          </div>
        );
      case 'cloudy':
        return (
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-gray-300 rounded-full opacity-40"
                style={{
                  width: `${100 + Math.random() * 100}px`,
                  height: `${80 + Math.random() * 60}px`,
                }}
                initial={{ left: -200, top: `${Math.random() * 80}%` }}
                animate={{
                  left: '100%',
                  transition: {
                    duration: 20 + Math.random() * 10,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: Math.random() * 10,
                  },
                }}
              />
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="absolute inset-0 pointer-events-none">
      {renderWeatherEffect()}
    </div>
  );
};

export default WeatherOverlay;