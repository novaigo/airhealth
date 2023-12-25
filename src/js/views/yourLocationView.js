import View from './View.js';

class YourLocationView extends View {
  _parentEl = document.querySelector(`.insert__aqi`);

  _generateMarkup() {
    return `
      <section class="aqi container">
        <div class="aqi__value">
          <div class="aqi__value--progress">
            <span class="progress-value">${this._data}</span>
          </div>
        </div>
      </section> 
      `;
  }
}
export default new YourLocationView();
