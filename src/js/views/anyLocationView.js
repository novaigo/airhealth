import View from './View.js';

class AnyLocationView extends View {
  _parentEl = document.querySelector(`.insert__aqi`);

  _searchForm = document.querySelector(`.hero__search--form`);

  addHandlerRender(handler) {
    const searchInput = document.querySelector('.hero__search--input');

    this._searchForm.addEventListener(`submit`, async function (e) {
      e.preventDefault();

      const inputValue = searchInput.value;
      await handler(inputValue);

      searchInput.value = '';
      searchInput.blur();
    });
  }

  _generateMarkup() {
    this._clear();
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

export default new AnyLocationView();
