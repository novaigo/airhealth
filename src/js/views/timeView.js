import View from './View.js';

class TimeView extends View {
  _parentEl = document.querySelector(`.insert__time`);

  _generateMarkup() {
    return `
    <section class="time container">
      <div><p>${this._data}</p></div>
      <div class="horizontal-line"></div>
    </section>
  `;
  }
}

export default new TimeView();
