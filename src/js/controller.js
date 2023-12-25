import * as model from './model.js';
import YourLocationView from './views/yourLocationView.js';
import PollutantsView from './views/pollutantsView.js';
import PropertyValuesView from './views/propertyValuesView.js';
import WeatherView from './views/weatherView.js';
import TimeView from './views/timeView.js';
import AnyLocationView from './views/anyLocationView.js';

const controlCoordinates = async function () {
  try {
    //Get coordinates
    await model.loadLocationByCoordinates();

    if (!model.state.lat || !model.state.lon) return;

    // Render Spinner
    YourLocationView.renderSpinner();

    // Load pollutants based on your coordinates
    await model.loadPollutants();
    PollutantsView.render(model.state.pollutants);

    // Load weather & place
    await model.loadWeather();
    WeatherView.render(model.state.weather);

    // Load time
    model.loadTime();
    TimeView.render(model.state.time);

    // Render AQI based on your location
    YourLocationView.render(model.state.aqi);

    // Load properties
    model.loadProperties();
    PropertyValuesView.render(model.state.propertyValues);

    // LocationView.addHandlerRender(controlInput);
  } catch (err) {
    console.error(err);
  }
};

const controlInput = async function (searchInput) {
  try {
    // Get location input
    await model.loadLocationByInput(searchInput);

    if (!model.state.lat || !model.state.lon) return;

    // Render Spinner
    AnyLocationView.renderSpinner();

    // Load pollutants based on provided input location
    await model.loadPollutants();
    PollutantsView.render(model.state.pollutants);

    // Load weather & place
    await model.loadWeather();
    WeatherView.render(model.state.weather);

    // Load time
    model.loadTime();
    TimeView.render(model.state.time);

    // Render AQI based on searched location
    AnyLocationView.render(model.state.aqi);

    // Load properties
    model.loadProperties();
    PropertyValuesView.render(model.state.propertyValues);
  } catch (err) {
    console.error(err);
  }
};

const init = function () {
  YourLocationView.addHandlerRender(controlCoordinates);
  AnyLocationView.addHandlerRender(controlInput);
};

init();
