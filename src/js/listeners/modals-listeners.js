import { exercisesApi } from '../api';
import { refs } from '../const/refs.js';
import { modalsClasses } from '../const/modals-classes.js';
import { renderGiveRatingModal } from '../components/rating-modal';
import { formRatingValidation, toaster } from '../utils/utils.js';
import {
  handleToggleFavorite,
  handleOpenExerciseModal,
} from '../handlers/modals-handlers.js';

let currentRatingChangeHandler = null;

const handleFavoriteAction = event => {
  const id = event.target.closest(modalsClasses.EXERCISE_MODAL_CARD).dataset.id;
  handleToggleFavorite(id, () => {});
};

const updateStarRating = (stars, ratingValue) => {
  stars.forEach((star, index) => {
    const isActive = index < ratingValue;
    star.style.fill = `rgba(var(--rgba-${isActive ? 'orange' : 'light'}), ${isActive ? 1 : 0.2})`;
  });
};

const initializeRatingBlockListener = () => {
  if (currentRatingChangeHandler && refs.ratingBlock) {
    refs.ratingBlock.removeEventListener('change', currentRatingChangeHandler);
  }

  currentRatingChangeHandler = ({ target }) => {
    if (target.name !== 'rating') return;

    const ratingValue = parseInt(target.value, 10);
    refs.ratingDisplay.textContent = ratingValue.toFixed(1);

    const stars = refs.ratingBlock.querySelectorAll(
      modalsClasses.RATING_MODAL_RATING_ICON
    );
    updateStarRating(stars, ratingValue);
  };

  refs.ratingBlock.addEventListener('change', currentRatingChangeHandler);
};

function closeExerciseModal() {
  refs.exerciseModal.classList.remove(modalsClasses.IS_OPEN);
  document.removeEventListener('keydown', handleExerciseKeydown);
  document.removeEventListener('click', handleExerciseModalEvents);
}

function closeRatingModal() {
  refs.ratingModal.classList.remove(modalsClasses.IS_OPEN);
  document.removeEventListener('keydown', handleRatingKeydown);
  document.removeEventListener('click', handleRatingModalEvents);

  if (currentRatingChangeHandler && refs.ratingBlock) {
    refs.ratingBlock.removeEventListener('change', currentRatingChangeHandler);
    currentRatingChangeHandler = null;
  }
}

function openExerciseModalListeners() {
  document.addEventListener('keydown', handleExerciseKeydown);
  document.addEventListener('click', handleExerciseModalEvents);
}

function handleExerciseKeydown(event) {
  if (event.key === 'Escape') {
    closeExerciseModal();
  }
}

function handleRatingKeydown(event) {
  if (event.key === 'Escape') {
    closeRatingModal();
    openExerciseModalListeners();
    refs.exerciseModal.classList.add(modalsClasses.IS_OPEN);
  }
}

function handleRatingModalOpen(event) {
  const id = event.target.closest(modalsClasses.EXERCISE_MODAL_CARD).dataset.id;

  closeExerciseModal();

  refs.ratingModal.classList.add(modalsClasses.IS_OPEN);
  refs.ratingModal.innerHTML = renderGiveRatingModal(id);

  refs.ratingBlock = document.querySelector(
    modalsClasses.RATING_MODAL_RATING_BLOCK
  );
  refs.ratingDisplay = document.querySelector(
    modalsClasses.RATING_MODAL_RATING
  );

  initializeRatingBlockListener();

  document.addEventListener('keydown', handleRatingKeydown);
  document.addEventListener('click', handleRatingModalEvents);
}

function handleExerciseModalEvents(event) {
  if (event.target.closest(modalsClasses.CLOSE_MODAL_BTN)) {
    closeExerciseModal();
    return;
  }

  if (event.target.closest(modalsClasses.GIVE_RATING)) {
    handleRatingModalOpen(event);
    return;
  }

  if (
    event.target.closest(modalsClasses.ADD_TO_FAVORITES) ||
    event.target.closest(modalsClasses.REMOVE_FROM_FAVORITES)
  ) {
    handleFavoriteAction(event);
    return;
  }

  if (event.target === refs.exerciseModal) {
    closeExerciseModal();
  }
}

function handleRatingModalEvents(event) {
  if (
    event.target === refs.ratingModal ||
    event.target.closest(modalsClasses.CLOSE_MODAL_BTN)
  ) {
    closeRatingModal();
    openExerciseModalListeners();
    refs.exerciseModal.classList.add(modalsClasses.IS_OPEN);
  }
}

function setupOpenExerciseModalLister() {
  document.addEventListener('click', event => {
    if (event.target.closest(modalsClasses.OPEN_EXERCISE_MODAL)) {
      const id = event.target.closest(modalsClasses.EXERCISE_ITEM_FOR_DATA_ID)
        .dataset.id;

      handleOpenExerciseModal(id);
      openExerciseModalListeners();
    }
  });
}

const handleRatingSubmit = async form => {
  const formData = new FormData(form);
  const ratingSelected = form.querySelector('input[name="rating"]:checked');
  const email = formData.get('email');
  const comment = formData.get('comment');

  if (!formRatingValidation(ratingSelected, email, comment)) return;

  const ratingData = {
    rate: Number(ratingSelected.value),
    email,
    review: comment,
  };

  try {
    await exercisesApi.updateRating(form.dataset.id, ratingData);
    closeRatingModal();
    openExerciseModalListeners();
    refs.exerciseModal.classList.add(modalsClasses.IS_OPEN);
    toaster.showSuccessToast('Rating submitted successfully!');
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || 'An unknown error occurred';
    toaster.showErrorToast(errorMessage);
  }
};

const setupGiveRatingListener = () => {
  document.addEventListener('submit', async event => {
    event.preventDefault();
    if (event.target.classList.contains(modalsClasses.RATING_MODAL_FORM)) {
      await handleRatingSubmit(event.target);
    }
  });
};

export { setupOpenExerciseModalLister, setupGiveRatingListener };
