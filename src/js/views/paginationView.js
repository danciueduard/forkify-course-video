import View from './View.js';
import icons from 'url:../../img/icons.svg'; // Parcel 2 URL first

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');

      if (!btn) return;

      const goToPage = +btn.dataset.goto;
      //   console.log(goToPage);

      handler(goToPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    console.log(numPages);

    //============================================================== JONAS ===========================================================
    // Page 1 and there are other pages
    // if (curPage === 1 && numPages > 1) {
    //   return `
    //     <button data-goto="${
    //       curPage + 1
    //     }" class="btn--inline pagination__btn--next">
    //         <span>Page ${curPage + 1}</span>
    //         <svg class="search__icon">
    //           <use href="${icons}#icon-arrow-right"></use>
    //         </svg>
    //       </button>
    //   `;
    // }
    // // Last page
    // if (curPage === numPages && numPages > 1) {
    //   return `
    //     <button data-goto="${
    //       curPage - 1
    //     }" class="btn--inline pagination__btn--prev">
    //          <svg class="search__icon">
    //             <use href="${icons}#icon-arrow-left"></use>
    //          </svg>
    //         <span>Page ${curPage - 1}</span>
    //     </button>
    //   `;
    // }

    // // Other page
    // if (curPage < numPages) {
    //   return `
    //     <button data-goto="${
    //       curPage - 1
    //     }" class="btn--inline pagination__btn--prev">
    //          <svg class="search__icon">
    //             <use href="${icons}#icon-arrow-left"></use>
    //          </svg>
    //         <span>Page ${curPage - 1}</span>
    //     </button>
    //     <button data-goto="${
    //       curPage + 1
    //     }" class="btn--inline pagination__btn--next">
    //          <span>Page ${curPage + 1}</span>
    //              <svg class="search__icon">
    //           <use href="${icons}#icon-arrow-right"></use>
    //          </svg>
    //     </button>
    //   `;
    // }
    // // Page 1 and there are NO pages
    // return '';

    //
    //
    //
    //
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // NOTE : to add  data-goto="${ curPage + 1 ***or -1 depending on the case*** }"
    // ========================================================== Challenge =========================================================
    // Page button generator function
    const markup = function (pageButton, page, arrow) {
      return `
          <button data-goto="${page}" class="btn--inline pagination${pageButton}">
            <span>Page ${page}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-${arrow}"></use>
            </svg>
          </button>
      `;
    };
    // Page buttons
    const leftButton = markup('__btn--prev', curPage - 1, 'left');
    const rightButton = markup('__btn--next', curPage + 1, 'right');

    // Page 1 and others.
    if (curPage === 1 && numPages > 1) {
      return rightButton;
    }

    // Last page
    if (curPage === numPages && numPages > 1) {
      return leftButton;
    }
    // Other page
    if (curPage < numPages) {
      return leftButton + rightButton;
    }
    // Page 1 and NO pages
    return;
  }
  // ========================================================== Challenge end =========================================================
}

export default new PaginationView();
