import Location from "../models/location";
import WeatherFactory from "../factories/weatherFactory";
import key from "../../secrets";

export async function getWeatherApiObj(location) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${key}&q=${location}`,
  );
  const weather = await response.json();
  if (!response?.ok) {
    throw new Error(`${weather.error.message}`);
  }
  return weather;
}

export function processWeatherApiObj(weatherApiObj) {
  return {
    location: new Location(
      weatherApiObj.location.country,
      weatherApiObj.location.region,
      weatherApiObj.location.name,
    ),
    weatherFactory: new WeatherFactory(weatherApiObj.current),
    weatherIcon: `https:${weatherApiObj.current.condition.icon}`,
  };
}
