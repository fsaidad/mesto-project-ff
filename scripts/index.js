// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content; 
// @todo: DOM узлы
const cardsContainer = document.querySelector('.places__list');
// @todo: Функция создания карточки
function makeCard(element, callBackDelete){
    const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
    const imageCard = cardElement.querySelector('.card__image');
    const titleCard = cardElement.querySelector('.card__title');
    imageCard.src = element.link;
    imageCard.alt = element.name;
    titleCard.textContent = element.name;

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
// @todo: Вывести карточки на страницу
  initialCards.forEach((element) => {
    const card = makeCard(element, deleteCard);
    cardsContainer.append(card);
  });