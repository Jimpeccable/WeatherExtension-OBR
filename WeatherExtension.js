import React, { useState, useEffect } from 'react';
import { Sun, Cloud, CloudRain, CloudSnow } from 'lucide-react';

console.log('WeatherExtension script loaded');

const WeatherExtension = () => {
  console.log('WeatherExtension component rendering');

  const [weather, setWeather] = useState('sunny');
  const [showOverlay, setShowOverlay] = useState(false);

  // useEffect to handle OBR SDK readiness
  useEffect(() => {
    console.log('useEffect running');
    
    // Wait for the Owlbear Rodeo SDK to be ready
    OBR.onReady(() => {
      console.log('OBR ready');
      OBR.notification.show('Weather Extension loaded!');

      // Optionally, trigger a re-render or set default state when OBR is ready
      setWeather('sunny');  // Example: Setting the default weather after OBR is ready
    });
  }, []);  // Empty dependency array means this runs once after component mounts

  const handleWeatherChange = (event) => {
    const value = event.target.value;
    console.log('Weather changed to:', value);
    setWeather(value);
    OBR.notification.show(`Weather changed to ${value}`);
  };

  const toggleOverlay = () => {
    console.log('Toggling overlay');
    setShowOverlay(!showOverlay);
  };

  const getWeatherIcon = () => {
    console.log('Getting weather icon for:', weather);
    switch (weather) {
      case 'sunny': return <Sun color="yellow" />;
      case 'cloudy': return <Cloud color="gray" />;
      case 'rainy': return <CloudRain color="blue" />;
      case 'snowy': return <CloudSnow color="lightblue" />;
      default: return null;
    }
  };

  console.log('Rendering WeatherExtension component');

  return (
    <div style={{ padding: '1rem', backgroundColor: 'white', borderRadius: '0.5rem', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>Weather Control</h2>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
        <span style={{ fontSize: '1.125rem', marginRight: '0.5rem' }}>{getWeatherIcon()}</span>
        <select onChange={handleWeatherChange} value={weather} style={{ padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #ccc' }}>
          <option value="sunny">Sunny</option>
          <option value="cloudy">Cloudy</option>
          <option value="rainy">Rainy</option>
          <option value="snowy">Snowy</option>
        </select>
      </div>
      <button onClick={toggleOverlay} style={{ padding: '0.5rem 1rem', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '0.25rem', cursor: 'pointer' }}>
        {showOverlay ? 'Hide Overlay' : 'Show Overlay'}
      </button>
    </div>
  );
};

export default WeatherExtension;
