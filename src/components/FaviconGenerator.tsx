
import React from 'react';

const FaviconGenerator = () => {
  React.useEffect(() => {
    // Create a canvas element
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');

    if (ctx) {
      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, 32, 32);
      gradient.addColorStop(0, '#2563eb'); // blue-600
      gradient.addColorStop(1, '#7c3aed'); // purple-600
      
      // Draw rounded rectangle background
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.roundRect(2, 2, 28, 28, 6);
      ctx.fill();
      
      // Draw "AB" text
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 14px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('AB', 16, 16);
      
      // Convert canvas to data URL
      const dataURL = canvas.toDataURL('image/png');
      
      // Update favicon
      const existingFavicon = document.querySelector('link[rel="icon"]');
      if (existingFavicon) {
        existingFavicon.setAttribute('href', dataURL);
      } else {
        const favicon = document.createElement('link');
        favicon.rel = 'icon';
        favicon.type = 'image/png';
        favicon.href = dataURL;
        document.head.appendChild(favicon);
      }
    }
  }, []);

  return null;
};

export default FaviconGenerator;
