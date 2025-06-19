import { useState, useEffect } from "react";
import { camelCase } from "./utils";
import { DateTime } from "luxon";
import WindIcon from "~icons/wi/strong-wind";
import HumidityIcon from "~icons/wi/humidity";
import DateIcon from "~icons/material-symbols/date-range";

function Weather({ city }) {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!city) return;

    const fetchWeather = async () => {
      setLoading(true);
      setError(null);

      try {
        const geoRes = await fetch(
          `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
        );
        const geoData = await geoRes.json();

        if (API_KEY) {
          if (!geoData.length) {
            setError("No results found for the specified city.");
            setWeather(null);
            return;
          }
        } else {
          setError("API key error.");
          setWeather(null);
          return;
        }

        const { lat, lon } = geoData[0];
        setCountry(geoData[0].country);

        const weatherRes = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=en`
        );
        const weatherData = await weatherRes.json();
        setWeather(weatherData);
        setError(null);
      } catch (err) {
        setError(`Error fetching data. Error: ${err}`);
        setWeather(null);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city, API_KEY]);

  if (!city) {
    return (
      <div className="text-center px-5">
        <div className="text-5xl mb-4">🔍</div>
        <h4 className="text-xl font-semibold text-white mb-2">
          Search for a city
        </h4>
        <p className="text-white/70">
          Enter a city name in the search box above to view current weather
          information.
        </p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-2xl animate-pulse">
        {/* Header skeleton */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-6 w-40 bg-white/20 rounded"></div>
          <div className="h-8 w-8 bg-white/20 rounded"></div>
        </div>

        {/* Main weather info skeleton */}
        <div className="flex items-center justify-center gap-6 mb-6">
          <div className="h-20 w-20 rounded-full bg-white/20"></div>
          <div className="text-center">
            <div className="h-10 w-24 bg-white/20 rounded mb-2 mx-auto"></div>
            <div className="h-5 w-32 bg-white/20 rounded mb-1 mx-auto"></div>
            <div className="h-4 w-40 bg-white/20 rounded mx-auto"></div>
          </div>
        </div>

        {/* Weather details skeleton */}
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white/10 rounded-xl p-3 text-center">
              <div className="h-6 w-6 bg-white/20 rounded-full mx-auto mb-1"></div>
              <div className="h-4 w-12 bg-white/20 rounded mx-auto"></div>
            </div>
          ))}
        </div>

        {/* Additional info skeleton */}
        <div className="mt-4 pt-4 border-t border-white/20">
          <div className="flex justify-between">
            <div className="h-4 w-28 bg-white/20 rounded"></div>
            <div className="h-4 w-28 bg-white/20 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-500/20 backdrop-blur-sm rounded-2xl p-6 border border-red-500/30 text-center">
        <div className="text-4xl mb-3">❌</div>
        <p className="text-red-200">{error}</p>
      </div>
    );
  }

  if (!weather) return null;

  const localTime = DateTime.fromSeconds(weather.dt, { zone: "utc" })
    .plus({ seconds: weather.timezone })
    .toFormat("HH:mm");

  return (
    <div className="bg-white/15 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl hover:bg-white/10 transition-all">
      {/* Header */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <h2 className="text-xl font-semibold text-white">
          {camelCase(city)}
          {country && `, ${country}`}
        </h2>
        {country && (
          <img
            src={`https://flagsapi.com/${country}/flat/32.png`}
            alt={country}
            className="h-8 w-8 rounded"
          />
        )}
      </div>

      {/* Main Weather Info */}
      <div className="flex items-center justify-center gap-6 mb-6">
        {weather.weather?.[0]?.icon && (
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
            className="h-20 w-20 drop-shadow-lg"
          />
        )}
        <div className="text-center">
          <div className="text-4xl font-bold text-white mb-1">
            {Math.round(weather.main?.temp)}°C
          </div>
          <div className="text-white/80 capitalize">
            {camelCase(weather.weather?.[0]?.description)}
          </div>
          <div className="text-white/60 text-sm mt-1">
            Last Updated: {localTime} (Local Time)
          </div>
        </div>
      </div>

      {/* Weather Details */}
      <div className="grid grid-cols-3 gap-4">
        <div class="tooltip" data-tip="Local Date">
          <div className="bg-white/10 rounded-xl p-3 text-center backdrop-blur-sm">
            <DateIcon className="h-6 w-6 text-white/80 mx-auto mb-1" />
            <div className="text-white/90 text-sm font-medium">
              {DateTime.utc()
                .plus({ seconds: weather.timezone })
                .toFormat("MM/dd/yyyy")}
            </div>
          </div>
        </div>

        <div class="tooltip" data-tip="Humidity">
          <div className="bg-white/10 rounded-xl p-3 text-center backdrop-blur-sm">
            <HumidityIcon className="h-6 w-6 text-white/80 mx-auto mb-1" />
            <div className="text-white/90 text-sm font-medium">
              {weather.main?.humidity}%
            </div>
          </div>
        </div>

        <div class="tooltip" data-tip="Wind Speed">
          <div className="bg-white/10 rounded-xl p-3 text-center backdrop-blur-sm">
            <WindIcon className="h-6 w-6 text-white/80 mx-auto mb-1" />
            <div className="text-white/90 text-sm font-medium">
              {weather.wind?.speed} m/s
            </div>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-4 pt-4 border-t border-white/20">
        <div className="flex justify-between text-sm text-white/70">
          <span>Feels like: {Math.round(weather.main?.feels_like)}°C</span>
          <span>Pressure: {weather.main?.pressure} hPa</span>
        </div>
      </div>
    </div>
  );
}

export default Weather;
