import { AQI_URL, LOC_URL, AQI_API_KEY, LOC_API_KEY } from './config.js';
import { getJSON } from './helpers.js';

const searchInput = document.querySelector(`.hero__search--input`);

export const state = {
  aqi: null,
  pollutants: {},
  weather: {},
  lat: null,
  lon: null,
  circle: {
    startDeg: null,
    endDeg: null,
  },
  propertyValues: {
    colorBase1: null,
    colorBase2: null,
    messageBox1: null,
    messageBox2: null,
    messageBox3: null,
  },
  time: null,
};

export const loadLocationByCoordinates = function () {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const { latitude, longitude } = position.coords;
        state.lat = latitude;
        state.lon = longitude;
        resolve();
      },
      function (error) {
        console.error(
          `We're unable to retrieve your current coordinates. To enhance your experience and obtain the most accurate Air Quality Index (AQI) data, we kindly request access to your current location.`
        );
        reject(error);
      }
    );
  });
};

export const loadLocationByInput = async function (searchInput) {
  try {
    const data = await getJSON(
      `${LOC_URL}json?q=${searchInput}&key=${LOC_API_KEY}`
    );

    state.lat = data.results[0]?.geometry.lat;
    state.lon = data.results[0]?.geometry.lng;

    if (!state.lat || !state.lon)
      throw Error(
        `We couldn't find the specified location. For optimal accuracy in displaying the Air Quality Index (AQI) data, please ensure the accuracy of your entered location.`
      );
  } catch (err) {
    console.error(err);
  }
};

export const loadPollutants = async function () {
  try {
    const data = await getJSON(
      `${AQI_URL}air_pollution?lat=${state.lat}&lon=${state.lon}&appid=${AQI_API_KEY}`
    );
    state.aqi = data.list[0].main.aqi;
    state.pollutants = {
      co: data.list[0].components.co,
      nh3: data.list[0].components.nh3,
      no: data.list[0].components.no,
      no2: data.list[0].components.no2,
      o3: data.list[0].components.o3,
      pm2_5: data.list[0].components.pm2_5,
      pm10: data.list[0].components.pm10,
      so2: data.list[0].components.so2,
    };
  } catch (err) {
    console.error(err);
  }
};

export const loadProperties = function () {
  if (state.aqi < 1 || state.aqi > 6) return;

  state.circle.startDeg = state.aqi * 72 - 7;
  state.circle.endDeg = state.aqi * 72 + 1;

  const aqiValueProgressEl = document.querySelector(`.aqi__value--progress`);
  const root = document.documentElement;

  aqiValueProgressEl.style.background = `conic-gradient(var(--color-base--light) ${state.circle.startDeg}deg,var(--color-base--2) ${state.circle.endDeg}deg)`;

  switch (state.aqi) {
    case 1:
      state.propertyValues = {
        colorBase1: '#6beb5b',
        colorBase2: '#C8FFC1',
        messageBox1: `Perfect air! <br /> Ideal for outdoor fun!`,
        messageBox2: `Fresh air! <br /> Don't stay inside!`,
        messageBox3: `Prime air! <br /> Explore outdoors safely!`,
      };
      break;
    case 2:
      state.propertyValues = {
        colorBase1: '#d4e13c',
        colorBase2: '#F7FFA2',
        messageBox1: `Suitable conditions for outdoor activities!`,
        messageBox2: `Optimal conditions for outdoor endeavors!`,
        messageBox3: `Embrace outdoor adventures!`,
      };
      break;
    case 3:
      state.propertyValues = {
        colorBase1: '#f7c928',
        colorBase2: '#FFE898',
        messageBox1: `Acceptable air conditions.`,
        messageBox2: `Adequate air quality for daily activities.`,
        messageBox3: `Reasonable air conditions for regular tasks.`,
      };
      break;
    case 4:
      state.propertyValues = {
        colorBase1: '#ff7033',
        colorBase2: '#FFB595',
        messageBox1: `Health effects are possible for sensitive individuals.`,
        messageBox2: `Poor air conditions may impact sensitive groups.`,
        messageBox3: `Use caution due to poor air quality.`,
      };
      break;
    case 5:
      state.propertyValues = {
        colorBase1: '#ff3333',
        colorBase2: '#FFAAAA',
        messageBox1: `Protect your health, stay indoors!`,
        messageBox2: `Stay indoors for your safety!`,
        messageBox3: `Minimize outdoor exposure!`,
      };
      break;
    default:
      break;
  }

  const messageKey = Math.floor(Math.random() * 3) + 1;
  const messageKeysToDelete = [1, 2, 3].filter(key => key !== messageKey);
  messageKeysToDelete.forEach(key => {
    delete state.propertyValues[`messageBox${key}`];
  });

  const newKey = `messageBox${messageKey}`;

  if (state.propertyValues[newKey]) {
    state.propertyValues.messageBox = state.propertyValues[newKey];
    delete state.propertyValues[newKey];
  }

  root.style.setProperty('--color-base--1', state.propertyValues.colorBase1);
  root.style.setProperty('--color-base--2', state.propertyValues.colorBase2);
};

export const loadTime = function () {
  const curDate = new Date();

  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const monthsOfYear = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const dayName = daysOfWeek[curDate.getDay()];
  const monthName = monthsOfYear[curDate.getMonth()];

  state.time = `${dayName}, ${curDate.getDate()} ${monthName}`;
};

export const loadWeather = async function () {
  try {
    const data_weather = await getJSON(
      `${AQI_URL}weather?lat=${state.lat}&lon=${state.lon}&appid=${AQI_API_KEY}&units=metric`
    );

    const data_reverseGeo = await getJSON(
      `${LOC_URL}json?q=${state.lat}+${state.lon}&key=${LOC_API_KEY}`
    );

    state.weather = {
      wind: data_weather.wind.speed,
      temp: data_weather.main.temp,
      humidity: data_weather.main.humidity,
      country: data_weather.sys.country,
      place: data_reverseGeo.results[0]?.formatted,
    };
  } catch (err) {
    console.error(err);
  }
};
