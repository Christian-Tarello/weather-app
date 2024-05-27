import Weather from "../models/weather";

export default class WeatherFactory {
  constructor(currentWeather) {
    this.currentWeather = currentWeather;
  }

  getMetricWeather() {
    if (!this.metricWeather) {
      this.metricWeather = new Weather(
        this.currentWeather.condition.text,
        { data: this.currentWeather.temp_c, unit: "°C" },
        { data: this.currentWeather.feelslike_c, unit: "°C" },
        { data: this.currentWeather.wind_kph, unit: "kph" },
        { data: this.currentWeather.precip_mm, unit: "mm" },
        this.currentWeather.humidity,
        this.currentWeather.cloud,
        this.currentWeather.is_day,
      );
    }
    return this.metricWeather;
  }

  getImperialWeather() {
    if (!this.imperialWeather) {
      this.imperialWeather = new Weather(
        this.currentWeather.condition.text,
        { data: this.currentWeather.temp_f, unit: "°F" },
        { data: this.currentWeather.feelslike_f, unit: "°F" },
        { data: this.currentWeather.wind_mph, unit: "mph" },
        { data: this.currentWeather.precip_in, unit: "in" },
        this.currentWeather.humidity,
        this.currentWeather.cloud,
        this.currentWeather.is_day,
      );
    }
    return this.imperialWeather;
  }
}
