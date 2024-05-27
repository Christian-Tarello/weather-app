export default class WeatherController {
  constructor() {
    this.useMetric = true;
  }

  get weather() {
    if (this.useMetric) {
      return this.weatherFactory.getMetricWeather();
    }
    return this.weatherFactory.getImperialWeather();
  }

  setView(view) {
    this.view = view;
  }

  updateView() {
    this.view.setLocation(
      this.location.country,
      this.location.region,
      this.location.place,
      this.countryIcon,
    );
    this.view.setCondition(this.weather.condition, this.weatherIcon);
    this.view.setTemperature(this.weather.temperature, this.weather.feelsLike);
    this.view.setWindSpeed(this.weather.windSpeed);
    this.view.setPrecipitation(this.weather.precipitation);
    this.view.setHumidity(this.weather.humidity);
    this.view.setCloudCoverage(this.weather.cloudCoverage);
  }

  update(location, weatherFactory, weatherIcon, countryIcon) {
    this.location = location;
    this.weatherFactory = weatherFactory;
    this.weatherIcon = weatherIcon;
    this.countryIcon = countryIcon;
    this.updateView();
  }

  setMetric() {
    this.useMetric = true;
    this.updateView();
  }

  setImperial() {
    this.useMetric = false;
    this.updateView();
  }
}
