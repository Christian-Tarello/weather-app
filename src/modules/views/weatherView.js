import InfoCardView from "./infoCardView";

export default class WeatherView {
  constructor(controller) {
    this.controller = controller;
    this.controller.setView(this);
  }

  createContainer() {
    const element = document.createElement("div");
    element.classList.add("weather");
    return element;
  }

  createHeaderContainer() {
    const container = document.createElement("div");
    container.classList.add("weather-header");
    return container;
  }

  createBodyContainer() {
    const container = document.createElement("div");
    container.classList.add("weather-body");
    return container;
  }

  createLocationContainer() {
    const container = document.createElement("div");
    container.classList.add("location");
    this.localityContainer = document.createElement("div");
    this.localityContainer.classList.add("location-locality");

    this.countryNameContainer = document.createElement("span");
    this.countryNameContainer.classList.add("location-country");

    this.countryIcon = document.createElement("img");
    this.countryIcon.classList.add("location-countryIcon");

    container.append(
      this.localityContainer,
      this.countryNameContainer,
      this.countryIcon,
    );

    return container;
  }

  createConditionContainer() {
    const container = document.createElement("div");

    container.classList.add("weather-conditionContainer");

    this.conditionContainer = document.createElement("span");
    this.conditionContainer.classList.add("weather-condition");

    this.conditionIcon = document.createElement("img");
    this.conditionIcon.classList.add("weather-conditionIcon");

    container.append(this.conditionContainer, this.conditionIcon);

    return container;
  }

  createTemperatureCard() {
    this.temperatureView = new InfoCardView();
    const element = this.temperatureView.build();
    this.temperatureView.update("Temperature", "", "");

    return element;
  }

  createFeelsLikeCard() {
    this.feelsLikeView = new InfoCardView();
    const element = this.feelsLikeView.build();
    this.feelsLikeView.update("Feels Like", "", "");

    return element;
  }

  createWindSpeedCard() {
    this.windSpeedView = new InfoCardView();
    const element = this.windSpeedView.build();
    this.windSpeedView.update("Wind Speed", "", "");

    return element;
  }

  createPrecipitationCard() {
    this.precipitationView = new InfoCardView();
    const element = this.precipitationView.build();
    this.precipitationView.update("Precipitation", "", "");

    return element;
  }

  createHumidityCard() {
    this.humidityView = new InfoCardView();
    const element = this.humidityView.build();
    this.humidityView.update("Humidity", "", "%");

    return element;
  }

  createCloudCoverageCard() {
    this.cloudCoverageView = new InfoCardView();
    const element = this.cloudCoverageView.build();
    this.cloudCoverageView.update("Cloud Coverage", "", "%");

    return element;
  }

  build() {
    const container = this.createContainer();
    const header = this.createHeaderContainer();
    header.append(
      this.createLocationContainer(),
      this.createConditionContainer(),
    );

    const body = this.createBodyContainer();
    body.append(
      this.createTemperatureCard(),
      this.createFeelsLikeCard(),
      this.createWindSpeedCard(),
      this.createPrecipitationCard(),
      this.createHumidityCard(),
      this.createCloudCoverageCard(),
    );

    container.append(header, body);
    return container;
  }

  setLocation(country, region, place, iconSrc) {
    let locality;
    if (!(region && place)) {
      locality = region !== null ? region : place;
    } else {
      locality = `${region}, ${place}`;
    }
    this.localityContainer.innerText = locality;
    this.countryNameContainer.innerText = `${country}`;
    this.countryIcon.src = iconSrc;
  }

  setCondition(condition, conditionSrc) {
    this.conditionContainer.innerText = condition;
    this.conditionIcon.src = conditionSrc;
  }

  setTemperature(temperature, feelsLike) {
    this.temperatureView.setData(temperature.data);
    this.temperatureView.setUnit(temperature.unit);
    this.feelsLikeView.setData(feelsLike.data);
    this.feelsLikeView.setUnit(feelsLike.unit);
  }

  setWindSpeed(windSpeed) {
    this.windSpeedView.setData(windSpeed.data);
    this.windSpeedView.setUnit(windSpeed.unit);
  }

  setPrecipitation(precipitation) {
    this.precipitationView.setData(precipitation.data);
    this.precipitationView.setUnit(precipitation.unit);
  }

  setHumidity(humidity) {
    this.humidityView.setData(humidity);
  }

  setCloudCoverage(cloudCoverage) {
    this.cloudCoverageView.setData(cloudCoverage);
  }
}
