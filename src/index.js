import '../src/pages/index.css';
import initialCards from './scripts/cards';
import {openPopup, closePopup, closeEscape} from './scripts/components/modal'
import {makeCard, deleteCard, likeIsActive} from './scripts/components/card'

// @todo: DOM узлы
const cardsContainer = document.querySelector('.places__list');



// @todo: Вывести карточки на страницу
  initialCards.forEach((element) => {
    const card = makeCard(element, deleteCard, likeIsActive, openImage);
    cardsContainer.append(card);
  });



  const popupEdit = document.querySelector(".profile__edit-button")
  const popupAdd = document.querySelector(".profile__add-button")


  //обраточики на закрытие
  document.querySelectorAll('.popup__close').forEach(el => el.addEventListener('click', function(){
    closePopup();
  }))
  
 // обратотчики на открытие 
  popupEdit.addEventListener('click', function () {
    const profileTitle = document.querySelector('.profile__title').textContent;
    const profileDescription = document.querySelector('.profile__description').textContent;

    nameInput.value = profileTitle;
    jobInput.value = profileDescription;

    const popupEditProfile = document.querySelector(".popup_type_edit")
    openPopup(popupEditProfile);
  }); 

  popupAdd.addEventListener('click', function () {
    const popupNewCard = document.querySelector(".popup_type_new-card")
    openPopup(popupNewCard);
  }); 


//закрытие при клике вне модального окна

function closeClickOutModal(evt) {
  if (!evt.target.classList.contains('popup__content') && !evt.target.classList.contains('popup__title') && !evt.target.classList.contains('popup__input') && !evt.target.classList.contains('button') && !evt.target.classList.contains('popup__close') && !evt.target.classList.contains('popup__image'))
    closePopup()
}
document.querySelectorAll('.popup').forEach(el => el.addEventListener('click', closeClickOutModal))


// Находим форму в DOM
const formElement = document.querySelector('.popup__form')// Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
const nameInput = document.querySelector('.popup__input_type_name') // Воспользуйтесь инструментом .querySelector()
const jobInput = document.querySelector('.popup__input_type_description')// Воспользуйтесь инструментом .querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    nameInput.value
    jobInput.value
    // Выберите элементы, куда должны быть вставлены значения полей
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
    // Вставьте новые значения с помощью textContent
    profileTitle.textContent = nameInput.value
    profileDescription.textContent = jobInput.value
    closePopup()
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit); 


//добавление карточки
function formAddCard(evt) {
  evt.preventDefault(); 
  const urlInput = document.querySelector('.popup__input_type_url');
  const cardNameInput = document.querySelector('.popup__input_type_card-name');

  initialCards.unshift({name: cardNameInput.value, link:urlInput.value})

  const card = makeCard(initialCards[0], deleteCard, likeIsActive, openImage)
  cardsContainer.prepend(card);

  closePopup()

  document.forms.newplace.reset();
}
document.forms.newplace.addEventListener('submit', formAddCard);


//like Active



// popupImage

function openImage(src, alt) {
  const imageCard = document.querySelector('.popup__image')
  const popupCaption= document.querySelector('.popup__caption')
  imageCard.src = src;
  imageCard.alt = alt;
  popupCaption.textContent = alt;
  const imagePopup = document.querySelector('.popup_type_image');
  openPopup(imagePopup)
}



