import iziToast from 'izitoast';

function formRatingValidation(ratingSelected, email, comment) {
  const emailPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  const minCommentLength = 5;
  const maxCommentLength = 300;

  if (!ratingSelected) {
    toaster.showErrorToast('Please select a rating before submitting.');
    return false;
  }

  if (!email) {
    toaster.showErrorToast('Please enter your email address.');
    return false;
  }

  if (!emailPattern.test(email.trim())) {
    toaster.showErrorToast('Please enter a valid email address.');
    return false;
  }

  if (!comment || comment.trim().length === 0) {
    toaster.showErrorToast('Please enter a comment.');
    return false;
  }

  if (comment.trim().length < minCommentLength) {
    toaster.showErrorToast(`Comment must be at least ${minCommentLength} characters.`);
    return false;
  }

  if (comment.trim().length > maxCommentLength) {
    toaster.showErrorToast(`Comment must be less than ${maxCommentLength} characters.`);
    return false;
  }

  return true;
}

const toaster = {
  showErrorToast: function (message) {
    return iziToast.error({
      title: 'Error',
      message: message,
      position: 'topRight',
      transitionIn: 'fadeInDown',
      timeout: 3000,
      close: true,
    });
  },

  showSuccessToast: function (message) {
    return iziToast.success({
      title: 'Success',
      message: message,
      position: 'topRight',
      transitionIn: 'fadeInDown',
      timeout: 3000,
      close: true,
    });
  },
};

export { toaster, formRatingValidation };
