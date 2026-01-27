import {
  setupOpenExerciseModalLister,
  setupGiveRatingListener,
} from './listeners/modals-listeners.js';
import { subscribeFormListener } from './listeners/subscribeFormListener.js';

import { handleExercises } from './components/exercises.js';
import { handleQuoteOfDay } from './handlers/static-handlers.js';
import { initBurgerMenu } from './burger-menu.js';
import { handleFilterClick } from './handlers/exercises-filtered-handler.js';
import { headerInit } from './listeners/header-listener.js';
import { updateFavoritesDisplay } from './components/favorites.js';

document.addEventListener('DOMContentLoaded', () => {
  setupOpenExerciseModalLister();
  setupGiveRatingListener();
  subscribeFormListener();
  handleQuoteOfDay();
  handleExercises();
  handleFilterClick();
  initBurgerMenu();
  headerInit();

  const yearEl = document.querySelector('.js-current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  if (window.location.pathname.includes('favorites.html')) {
    updateFavoritesDisplay();
  }
});
