
function openPopup(popupElement) {
    popupElement.classList.add('popup_is-opened');
    window.addEventListener('keydown', closeEscape);
  }

  function closePopup(popupElement) {
    popupElement.classList.remove('popup_is-opened')
    window.removeEventListener('keydown', closeEscape)
  }

  function closeEscape (evt) {
    if (evt.key === 'Escape') {
      const closePopupElement = document.querySelector('.popup_is-opened')
      closePopup(closePopupElement);
    }
  }
  export { openPopup, closePopup, closeEscape };