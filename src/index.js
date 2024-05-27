import './style.css';

import { countryToAlpha2 } from 'country-to-iso';

import { processWeatherApiObj, getWeatherApiObj } from './modules/utils/weatherApiUtils';
import WeatherView from './modules/views/weatherView';
import WeatherController from './modules/controllers/weatherController';

const button = document.querySelector('button');
const input = document.querySelector('input[type="text"]');

let weatherController;

button.addEventListener('click', async () => {
  if (!input.value) return;
  let payload;
  try {
    payload = await getWeatherApiObj(input.value);
  } catch (error) {
    alert(error.message);
    return;
  }

  const {location, weatherFactory, weatherIcon} = processWeatherApiObj(payload);

  if (!weatherController) {
    weatherController = new WeatherController();
    const weatherView = new WeatherView(weatherController);
    document.body.append(weatherView.build());
  }

  const countryCode = countryToAlpha2(location.country) || location.country.slice(0, 2);

  weatherController.update(location, weatherFactory, weatherIcon, `https://flagsapi.com/${countryCode}/flat/64.png`);

  weatherController.updateView();
})

const checkbox = document.querySelector('input[type="checkbox"]');
checkbox.addEventListener('change', () => {
  if (!weatherController) {
    checkbox.checked = false;
    return;
  }
  if (checkbox.checked) {
    weatherController.setImperial();
  } else {
    weatherController.setMetric();
  }
})
