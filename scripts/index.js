// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content; 
// @todo: DOM узлы
const placesList = document.querySelector('.places__list');
// @todo: Функция создания карточки
function makeCard(element, removeButton){
    const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
     cardElement.querySelector('.card__image').src = element.link;
     cardElement.querySelector('.card__title').textContent = element.name;

    const deleteButton = cardElement.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', function(){
        removeButton(cardElement);
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
    placesList.append(card);
  });