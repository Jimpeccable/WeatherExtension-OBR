import React from 'react';
import { createRoot } from 'react-dom/client';
import WeatherExtension from './WeatherExtension';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<WeatherExtension />);
