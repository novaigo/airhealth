import iconSpinner from '../../img/iconSpinner.svg';

export default class View {
  _data;
  _parentEl;
  _welcomeEl = document.querySelector(`.welcome`);

  render(data) {
    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentEl.insertAdjacentHTML(`beforeend`, markup);
  }

  addHandlerRender(handler) {
    handler();
  }

  _clear() {
    this._parentEl.innerHTML = '';
    this._welcomeEl.innerHTML = '';
  }

  renderSpinner() {
    const markup = `
      <div class="spinner">
          <img src="${iconSpinner}" alt="spinner"></img>
      </div>
    `;
    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', markup);
  }
}
