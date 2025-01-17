import '../src/pages/index.css';
import initialCards from './scripts/cards';
import {openPopup, closePopup, closeEscape} from './scripts/components/modal'
import {makeCard, deleteCard, addLikeActive} from './scripts/components/card'

// @todo: DOM узлы
const cardsContainer = document.querySelector('.places__list');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const popupEditProfile = document.querySelector(".popup_type_edit");
const cardAddForm = document.forms.newplace;
const urlInput = document.querySelector('.popup__input_type_url');
const cardNameInput = document.querySelector('.popup__input_type_card-name');
const imageCard = document.querySelector('.popup__image');
const popupCaption= document.querySelector('.popup__caption');
const popupEdit = document.querySelector(".profile__edit-button");
const popupAdd = document.querySelector(".profile__add-button");
const imagePopup = document.querySelector('.popup_type_image');
const profileForm = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');
const popupNewCard = document.querySelector(".popup_type_new-card");


// @todo: Вывести карточки на страницу
  initialCards.forEach((element) => {
    const card = makeCard(element, deleteCard, addLikeActive, openImage);
    cardsContainer.append(card);
  });

  //обраточики на закрытие
  document.querySelectorAll('.popup__close').forEach(el => el.addEventListener('click', function(){
    closePopup();
  }))
  
 // обратотчики на открытие 
  popupEdit.addEventListener('click', function () {
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileDescription.textContent;
    openPopup(popupEditProfile);
  }); 

  popupAdd.addEventListener('click', function () {
    openPopup(popupNewCard);
  }); 


//закрытие при клике вне модального окна
function closeClickOutModal(evt) {
  if (evt.target.classList.contains('popup'))
    closePopup()
}
document.querySelectorAll('.popup').forEach(el => el.addEventListener('click', closeClickOutModal))

// редактирование профиля
function editProfileFormSubmit(evt) {
    evt.preventDefault(); 

    nameInput.value
    jobInput.value

    profileTitle.textContent = nameInput.value
    profileDescription.textContent = jobInput.value
    closePopup()
}

profileForm.addEventListener('submit', editProfileFormSubmit); 

//добавление карточки
function addCardForm(evt) {
  evt.preventDefault(); 

  
  const newCard = makeCard({name: cardNameInput.value, link:urlInput.value}, deleteCard, addLikeActive, openImage)
  cardsContainer.prepend(newCard);

  closePopup()
  cardAddForm.reset();
}
cardAddForm.addEventListener('submit', addCardForm);

// popupImage
function openImage(src, alt) {
  imageCard.src = src;
  imageCard.alt = alt;
  popupCaption.textContent = alt;
  openPopup(imagePopup)
}



