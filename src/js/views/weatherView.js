import View from './View.js';

class WeatherView extends View {
  _parentEl = document.querySelector(`.insert__weather`);

  _generateMarkup() {
    return `
    <section class="place container">
      <p>${this._data.place}</p>
      <div class="horizontal-line"></div>
    </section> 
    <section class="weather container">
      <div class="weather--box">
        <p> 
          TEMPERATURE ${Math.round(this._data.temp)} &#176;C,
          WIND ${Math.round(this._data.wind)} m/s,
          HUMIDITY ${Math.round(this._data.humidity)} &#37; 
        </p>
      </div>
      <div class="horizontal-line"></div>
    </section>`;
  }
}

export default new WeatherView();
