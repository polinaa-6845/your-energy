import { exercisesApi } from '../api';

const MUSCLES_CATEGORY = 'Muscles';
const BODY_PARTS_CATEGORY = 'Body parts';
const EQUIPMENT_CATEGORY = 'Equipment';

const DEFAULT_CATEGORY = MUSCLES_CATEGORY;
const CATEGORIES = [MUSCLES_CATEGORY, BODY_PARTS_CATEGORY, EQUIPMENT_CATEGORY];

const BREAKPOINT_TABLET = 768;

const getFiltersLimit = () => (window.innerWidth < BREAKPOINT_TABLET ? 9 : 12);

let selectedCategory = DEFAULT_CATEGORY;
let currentPage = 1;
let previousLimit = getFiltersLimit();

const categoriesEl = document.querySelector('.exercises-categories');
const exercisesEl = document.querySelector('.exercises-list');
const exercisesPaginationEl = document.querySelector('.exercises-pagination');

const renderCategories = activeCategory => {
  const markup = CATEGORIES.map(
    category => `
      <li class="exercises-category-item ${category === activeCategory ? 'active-category' : ''}">
        <a class="exercises-category-link">${category}</a>
      </li>
    `
  ).join('');

  categoriesEl.innerHTML = markup;
};

const renderFilters = async (category, page) => {
  currentPage = page;
  const filtersResponse = await exercisesApi.fetchFilters({
    filter: category,
    page,
    limit: getFiltersLimit(),
  });

  if (!filtersResponse.results || filtersResponse.results.length === 0) {
    exercisesEl.innerHTML = `
      <div class="exercises-empty-message">
        <p>No categories found for "${category}". Please try another filter.</p>
      </div>
    `;
    exercisesPaginationEl.innerHTML = '';
    return;
  }

  const filtersMarkup = filtersResponse.results
    .map(
      filter => `
        <div class="filter-item">
          <span class="filter-label">${filter.name}</span>
          <span class="filter-category">${filter.filter}</span>
          <div class="filter-bg" style="background-image: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), url(${filter.imgURL})"></div>
        </div>
      `
    )
    .join('');

  exercisesEl.innerHTML = filtersMarkup;

  const paginationMarkup = Array.from(
    { length: filtersResponse.totalPages },
    (_, i) => i + 1
  )
    .map(
      pageNum => `
        <li class="${page === pageNum ? 'page-active' : ''}">
          <a>${pageNum}</a>
        </li>
      `
    )
    .join('');

  exercisesPaginationEl.innerHTML = paginationMarkup;
};

export const handleExercises = () => {
  if (!categoriesEl || !exercisesEl || !exercisesPaginationEl) return;

  renderCategories(selectedCategory);
  renderFilters(selectedCategory, 1);

  exercisesPaginationEl.addEventListener('click', e => {
    e.preventDefault();
    const targetEl = e.target;

    if (targetEl.nodeName === 'A') {
      const page = e.target.textContent;
      renderFilters(selectedCategory, +page);
    }
  });

  categoriesEl.addEventListener('click', e => {
    e.preventDefault();

    document
      .querySelector('.filtered-exercises-cards-wrapper')
      .classList.add('hide');
    const breadcrumbsEl = document.querySelector('.breadcrumb-current');
    const breadcrumbsDividerEl = document.querySelector('.breadcrumb-divider');

    const targetEl = e.target;

    if (targetEl.nodeName === 'A') {
      selectedCategory = e.target.textContent;
      const selectedCategoryEl = document.querySelector('.active-category');
      selectedCategoryEl.classList.remove('active-category');

      targetEl.parentElement.classList.add('active-category');
      renderFilters(selectedCategory, 1);

      breadcrumbsEl.textContent = '';
      breadcrumbsDividerEl.style.display = 'none';
      document.querySelector('.exercises-content').classList.remove('hide');
    }
  });

  window.addEventListener('resize', () => {
    const newLimit = getFiltersLimit();
    if (newLimit !== previousLimit) {
      previousLimit = newLimit;
      renderFilters(selectedCategory, 1);
    }
  });
};
