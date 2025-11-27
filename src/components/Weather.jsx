import React, { useState } from 'react';
import { fetchWeather } from '../services/weatherService';
import './Weather.css'; // We'll create this or put styles in index.css

const Weather = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!city.trim()) return;

        setLoading(true);
        setError('');
        setWeatherData(null);

        try {
            const data = await fetchWeather(city);
            setWeatherData(data);
        } catch (err) {
            setError('City not found or API error. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    // Helper to format date
    const formatDate = (timestamp) => {
        return new Date(timestamp * 1000).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    return (
        <div className="weather-container">
            <div className="search-box">
                <form onSubmit={handleSearch}>
                    <input
                        type="text"
                        placeholder="Enter city name..."
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <button type="submit">Search</button>
                </form>
            </div>

            {loading && <div className="loading">Loading...</div>}
            {error && <div className="error-message">{error}</div>}

            {weatherData && (
                <div className="weather-info">
                    <h2>{weatherData.name}, {weatherData.sys.country}</h2>
                    <p className="date">{formatDate(weatherData.dt)}</p>

                    <div className="weather-main">
                        <img
                            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                            alt={weatherData.weather[0].description}
                        />
                        <div className="temp">
                            {Math.round(weatherData.main.temp)}°C
                        </div>
                    </div>

                    <p className="description">
                        {weatherData.weather[0].description}
                    </p>

                    <div className="details">
                        <div className="detail-item">
                            <span>Feels Like</span>
                            <span>{Math.round(weatherData.main.feels_like)}°C</span>
                        </div>
                        <div className="detail-item">
                            <span>Min Temp</span>
                            <span>{Math.round(weatherData.main.temp_min)}°C</span>
                        </div>
                        <div className="detail-item">
                            <span>Max Temp</span>
                            <span>{Math.round(weatherData.main.temp_max)}°C</span>
                        </div>
                        <div className="detail-item">
                            <span>Pressure</span>
                            <span>{weatherData.main.pressure} hPa</span>
                        </div>
                        <div className="detail-item">
                            <span>Humidity</span>
                            <span>{weatherData.main.humidity}%</span>
                        </div>
                        <div className="detail-item">
                            <span>Wind Speed</span>
                            <span>{weatherData.wind.speed} m/s</span>
                        </div>
                        <div className="detail-item">
                            <span>Visibility</span>
                            <span>{(weatherData.visibility / 1000).toFixed(1)} km</span>
                        </div>
                        <div className="detail-item">
                            <span>Clouds</span>
                            <span>{weatherData.clouds.all}%</span>
                        </div>
                        {weatherData.snow && (
                            <div className="detail-item">
                                <span>Snow (1h)</span>
                                <span>{weatherData.snow['1h']} mm</span>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Weather;
