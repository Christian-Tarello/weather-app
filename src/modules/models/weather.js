export default class Weather {
  constructor(
    condition,
    temperature,
    feelsLike,
    windSpeed,
    precipitation,
    humidity,
    cloudCoverage,
    isDay,
  ) {
    this.condition = condition;
    this.temperature = temperature;
    this.feelsLike = feelsLike;
    this.windSpeed = windSpeed;
    this.precipitation = precipitation;
    this.humidity = humidity;
    this.cloudCoverage = cloudCoverage;
    this.isDay = isDay;
  }
}
