import View from './View.js';

class PropertyValuesView extends View {
  _parentEl = document.querySelector(`.insert__message`);

  _generateMarkup() {
    return `
      <section class="message container">
          <div class="message--box">
            <p>
            ${this._data.messageBox}
            </p>
          </div>
        </section>
      `;
  }
}

export default new PropertyValuesView();
