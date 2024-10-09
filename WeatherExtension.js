import React, { useState, useEffect } from 'react';
import OBR from '@owlbear-rodeo/sdk';
import { Sun, Cloud, CloudRain, CloudSnow } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const WeatherExtension = () => {
  const [weather, setWeather] = useState('sunny');
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    OBR.onReady(() => {
      // Initialize the extension
      OBR.notification.show('Weather Extension loaded!');
    });
  }, []);

  const handleWeatherChange = (value) => {
    setWeather(value);
    OBR.notification.show(`Weather changed to ${value}`);
  };

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
    // Here you would implement the logic to show/hide the overlay on the map
  };

  const getWeatherIcon = () => {
    switch (weather) {
      case 'sunny': return <Sun className="text-yellow-500" />;
      case 'cloudy': return <Cloud className="text-gray-500" />;
      case 'rainy': return <CloudRain className="text-blue-500" />;
      case 'snowy': return <CloudSnow className="text-blue-200" />;
      default: return null;
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Weather Control</h2>
      <div className="flex items-center space-x-2 mb-4">
        <span className="text-lg">{getWeatherIcon()}</span>
        <Select onValueChange={handleWeatherChange} defaultValue={weather}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select weather" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sunny">Sunny</SelectItem>
            <SelectItem value="cloudy">Cloudy</SelectItem>
            <SelectItem value="rainy">Rainy</SelectItem>
            <SelectItem value="snowy">Snowy</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button onClick={toggleOverlay}>
        {showOverlay ? 'Hide Overlay' : 'Show Overlay'}
      </Button>
    </div>
  );
};

export default WeatherExtension;