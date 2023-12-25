import View from './View.js';
import arrowIcon from 'url:../../img/arrow-link.svg';

class PollutantsView extends View {
  _parentEl = document.querySelector(`.insert__pollutants`);

  _generateMarkup() {
    return `
  <section class="grid">
    <section class="pollutants container">
      <div class="pollutants--box">
        <div class="pollutants__name-link">
          <div class="pollutants__name-link--name">NO<sub>2</sub></div>
          <div class="pollutants__name-link--link">
          <a href="insight.html" target="_blank" ><img src="${arrowIcon}" alt="insight" /></a>
          </div>
        </div>

        <div class="pollutants__description">
          Nitrogen dioxide is a harmful gas resulting from combustion engines, industrial activities, and heating systems.
        </div>
        <div class="pollutants__concentration">
            <span class="pollutants__concentration--amount">${this._data.no2}</span>
          <div>
            <span class="pollutants__concentration--unit">µg/m<sup>3</sup></span>
          </div>
        </div>
        <div class="pollutants__arrow"></div>
      </div>
    </section>

    <section class="pollutants container">
      <div class="pollutants--box">
        <div class="pollutants__name-link">
          <div class="pollutants__name-link--name">SO<sub>2</sub></div>
          <div class="pollutants__name-link--link">
            <a href="insight.html" target="_blank" ><img loading="lazy" src="${arrowIcon}" alt="insight" /></a>
          </div>
        </div>

        <div class="pollutants__description">
          Sulfur dioxide is emitted from burning fossil fuels, notably high-sulfur content vehicles and industry machinery.
        </div>
        <div class="pollutants__concentration">
          <span class="pollutants__concentration--amount">${this._data.so2}</span>
          <div>
            <span class="pollutants__concentration--unit">µg/m<sup>3</sup></span>
          </div>
        </div>
        <div class="pollutants__arrow">
      </div>
      </div>
    </section>

    <section class="pollutants container">
      <div class="pollutants--box">
        <div class="pollutants__name-link">
          <div class="pollutants__name-link--name">O<sub>3</sub></div>
          <div class="pollutants__name-link--link">
            <a href="insight.html" target="_blank" ><img src="${arrowIcon}" alt="insight" /></a>
          </div>
        </div>

        <div class="pollutants__description">
          Ozone at ground level is an air pollutant formed by the reaction of sunlight with pollutants from vehicles and industry.
        </div>
        <div class="pollutants__concentration">
          <span class="pollutants__concentration--amount">${this._data.o3}</span>
          <div>
            <span class="pollutants__concentration--unit">µg/m<sup>3</sup></span>
          </div>
        </div>
        <div class="pollutants__arrow"></div>
    </section>

    <section class="pollutants container">
      <div class="pollutants--box">
        <div class="pollutants__name-link">
          <div class="pollutants__name-link--name">PM<sub>2.5</sub></div>
          <div class="pollutants__name-link--link">
            <a href="insight.html" target="_blank" ><img src="${arrowIcon}" alt="insight" /></a>
          </div>
        </div>

        <div class="pollutants__description">
          Particulate Matter 2.5 refers to fine inhalable particles originating from vehicle emissions and industrial processes.
        </div>
        <div class="pollutants__concentration">
          <span class="pollutants__concentration--amount">${this._data.pm2_5}</span>
          <div>
            <span class="pollutants__concentration--unit">µg/m<sup>3</sup></span>
          </div>
        </div>
        <div class="pollutants__arrow"></div>
      </div>
    </section>

    <section class="pollutants container">
      <div class="pollutants--box">
        <div class="pollutants__name-link">
          <div class="pollutants__name-link--name">PM<sub>10</sub></div>
          <div class="pollutants__name-link--link">
            <a href="insight.html" target="_blank" ><img src="${arrowIcon}" alt="insight" /></a>
          </div>
        </div>

        <div class="pollutants__description">
          Particulate Matter 10 consists of larger inhalable particles originating from sources like road dust and construction.
        </div>
        <div class="pollutants__concentration">
          <span class="pollutants__concentration--amount">${this._data.pm10}</span>
          <div>
            <span class="pollutants__concentration--unit">µg/m<sup>3</sup></span>
          </div>
        </div>
        <div class="pollutants__arrow"></div>
      </div>
    </section>
      
    <section class="pollutants container">
      <div class="pollutants--box">
        <div class="pollutants__name-link">
          <div class="pollutants__name-link--name">CO</div>
          <div class="pollutants__name-link--link">
            <a href="insight.html" target="_blank" ><img src="${arrowIcon}" alt="insight" /></a>
          </div>
        </div>

        <div class="pollutants__description">
          Carbon monoxide is a toxic gas emitted primarily from vehicle exhaust and industrial processes.
        </div>
        <div class="pollutants__concentration">
          <span class="pollutants__concentration--amount">${this._data.co}</span>
          <div>
              <span class="pollutants__concentration--unit">µg/m<sup>3</sup></span>
          </div>
        </div>
        <div class="pollutants__arrow"></div>
      </div>
    </section>
  </div>
    `;
  }
}

export default new PollutantsView();
