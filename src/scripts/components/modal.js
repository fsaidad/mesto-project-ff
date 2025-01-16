function openPopup(popupElement) {
    popupElement.classList.add('popup_is-opened');
    window.addEventListener('keydown', closeEscape);
  }
  
  function closePopup() {
   const popupElement = document.querySelector('.popup_is-opened')
    popupElement.classList.remove('popup_is-opened')
    window.removeEventListener('keydown', closeEscape)
  }

  function closeEscape (evt) {
    if (evt.key === 'Escape') {
      closePopup();
    }
  }
  export { openPopup, closePopup, closeEscape };