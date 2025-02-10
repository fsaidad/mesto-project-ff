import '../src/pages/index.css';
import initialCards from './scripts/cards';
import {openPopup, closePopup, closeEscape} from './scripts/components/modal'
import {makeCard, deleteCard, handleLike} from './scripts/components/card'
import {enableValidation, clearValidation} from './scripts/components/validation'
import {getPersonInfo, getInitialCards, editPersonInfo, addCardNew, editAvatar} from './scripts/components/api';


// @todo: DOM узлы
const cardsContainer = document.querySelector('.places__list');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const popupEditProfile = document.querySelector('.popup_type_edit');
const cardAddForm = document.forms.newplace;
const urlInput = document.querySelector('.popup__input_type_url');
const cardNameInput = document.querySelector('.popup__input_type_card-name');
const imageCard = document.querySelector('.popup__image');
const popupCaption= document.querySelector('.popup__caption');
const popupEdit = document.querySelector('.profile__edit-button');
const popupAdd = document.querySelector('.profile__add-button');
const imagePopup = document.querySelector('.popup_type_image');
const profileForm = document.forms.editProfile;
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');
const popupNewCard = document.querySelector('.popup_type_new-card');
const profileAvatar = document.querySelector('.profile__image');
let id = '';
const popupEditAvatar = document.querySelector('.button_edit-avatar');
const popupTypeAvatar = document.querySelector('.popup_type_avatar');
const avatarEditForm = document.forms.avatar;
const inputAvatarPopup = document.querySelector('.popup__input_type_avatar');

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'button_inactive',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
}; 





const getData = [getPersonInfo(), getInitialCards()]

Promise.all(getData)
.then(([personInfo, cards]) => 
  {
    profileTitle.textContent = personInfo.name;
    profileDescription.textContent = personInfo.about;
    profileAvatar.style.backgroundImage = `url(${personInfo.avatar})`;
    id = personInfo._id;
    cards.forEach((element) => {
      const card = makeCard(element, deleteCard, handleLike, openImage, id);
      cardsContainer.append(card);
    });
  })
  .catch(err => {
    console.error('Ошибка:', err);
  })




  //обраточики на закрытие
  document.querySelectorAll('.popup__close').forEach(el => el.addEventListener('click', function(){
    closePopup();
  }))
  
 // обратотчики на открытие 
  popupEdit.addEventListener('click', function () {
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileDescription.textContent;
    openPopup(popupEditProfile);
    clearValidation(popupEditProfile, validationConfig)
  }); 

  popupAdd.addEventListener('click', function () { 
    openPopup(popupNewCard);
  }); 

  popupEditAvatar.addEventListener('click', function () { 
    openPopup(popupTypeAvatar);
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
     const savePopupBottun = profileForm.querySelector('.popup__button');
       savePopupBottun.textContent = 'Сохранение...'
       
    nameInput.value
    jobInput.value

    profileTitle.textContent = nameInput.value
    profileDescription.textContent = jobInput.value
    
    editPersonInfo(nameInput.value, jobInput.value)
    .finally(() => { 
      savePopupBottun.textContent = 'Сохранить'
    });
    closePopup() 
}



profileForm.addEventListener('submit', editProfileFormSubmit); 

//добавление карточки

function addCardForm(evt) {
  evt.preventDefault(); 

  const savePopupBottun = cardAddForm.querySelector('.popup__button');
    savePopupBottun.textContent = 'Сохранение...'

  addCardNew(cardNameInput.value, urlInput.value)
  .then(cardData => {
    const newCard = makeCard(cardData, deleteCard, handleLike, openImage, id)
      cardsContainer.prepend(newCard);
  closePopup()
  cardAddForm.reset();
  clearValidation(popupNewCard, validationConfig)
})
.catch(err => {
  console.error('Ошибка:', err);
})
.finally(() => { 
  savePopupBottun.textContent = 'Сохранить'
});

}
cardAddForm.addEventListener('submit', addCardForm);

// popupImage
function openImage(src, alt) {
  imageCard.src = src;
  imageCard.alt = alt;
  popupCaption.textContent = alt;
  openPopup(imagePopup)
}


//Форма для смены авы 
function editAvatarForm(evt) {
  evt.preventDefault(); 
     const savePopupBottun = avatarEditForm.querySelector('.popup__button');
      savePopupBottun.textContent = 'Сохранение...'
  editAvatar(inputAvatarPopup.value ).then(person => {
    profileAvatar.style.backgroundImage = `url(${person.avatar}`;
      avatarEditForm.reset();
    closePopup() 
  })
  .catch(err => {
    console.error('Ошибка:', err);
  })
  .finally(() => { 
    savePopupBottun.textContent = 'Сохранить'
  });
}

avatarEditForm.addEventListener('submit', editAvatarForm)


  
enableValidation(validationConfig); 

