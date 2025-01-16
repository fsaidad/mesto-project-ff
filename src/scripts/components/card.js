// @todo: Функция создания карточки
function makeCard(element, callBackDelete, likeActive, hundleModal){
    const cardTemplate = document.querySelector('#card-template').content; 
    const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
    const imageCard = cardElement.querySelector('.card__image');
    const titleCard = cardElement.querySelector('.card__title');
    const likeButton = document.querySelector('.places__list')

    imageCard.src = element.link;
    imageCard.alt = element.name;
    titleCard.textContent = element.name;

    likeButton.addEventListener('click', likeActive)
    imageCard.addEventListener('click', ()=> hundleModal(imageCard.src, imageCard.alt))

  
  
    const deleteButton = cardElement.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', function(){
        callBackDelete(cardElement);
    });
  return cardElement;
  }
  

// @todo: Функция удаления карточки
function deleteCard(cardElement) {
    cardElement.remove();
  }

  //like Active

function likeIsActive(evt) {
    if (evt.target.classList.contains('card__like-button'))
    evt.target.classList.toggle('card__like-button_is-active')
  }
  

  export{makeCard, deleteCard, likeIsActive};