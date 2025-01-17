// @todo: Функция создания карточки
const cardTemplate = document.querySelector('#card-template').content;
const likeButton = document.querySelector('.places__list');

function makeCard(element, callBackDelete, likeActive, hundleModal){
    const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
    const imageCard = cardElement.querySelector('.card__image');
    const titleCard = cardElement.querySelector('.card__title');

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

function addLikeActive(evt) {
    if (evt.target.classList.contains('card__like-button'))
    evt.target.classList.toggle('card__like-button_is-active')
  }
  

  export{makeCard, deleteCard, addLikeActive};