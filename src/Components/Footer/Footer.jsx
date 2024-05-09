import React, { useState, useEffect } from 'react';
import './Footer.css';

const Footer = () => {
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = '4f4c6690a9b0c995b5f414bf3a434db5';
  const city = 'Bucharest';

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        setWeatherData(data);
      })
      .catch(error => console.error('Error fetching weather data:', error));
  }, []);

  const kelvinToCelsius = (kelvin) => {
    return kelvin - 273.15;
  };

  return (
    <div className='footer'>
      <p>© 2024 CFIT-Gym. All rights reserved.</p>
      {weatherData && (
        <div className="weather-info">
          <p>Current temperature in {city}: {kelvinToCelsius(weatherData.main.temp).toFixed(1)}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      )}
      <ul>
        <li><a href="https://downtownfitness.ro/" target='_blank' rel="noopener noreferrer">Terms of Services</a></li>
        <li><a href="https://downtownfitness.ro/" target='_blank' rel="noopener noreferrer">Privacy Policy</a></li>
      </ul>
      <div className="map-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.7615384500473!2d26.135929100000002!3d44.417538799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff5218188655%3A0x8e8c910535fd3f32!2sDowntown%20Fitness%20Mihai%20Bravu!5e0!3m2!1sro!2sro!4v1715261534471!5m2!1sro!2sro" width="600" height="450" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">Locatie</iframe>
      </div>
    </div>
  );
};

export default Footer;
