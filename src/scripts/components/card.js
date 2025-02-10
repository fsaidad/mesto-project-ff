// @todo: Функция создания карточки
import {deletedCard, addLike, removeLike} from "./api"
const cardTemplate = document.querySelector('#card-template').content;

function makeCard(element, callBackDelete, handleLike, hundleModal, id){
    const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
    const imageCard = cardElement.querySelector('.card__image');
    const titleCard = cardElement.querySelector('.card__title');
    const likeNumbers = cardElement.querySelector('.like-numbers');
    const deleteButton = cardElement.querySelector('.card__delete-button');
    const likeButton = cardElement.querySelector(".card__like-button");

    if ( id !== element.owner._id){
      deleteButton.style.display = 'none';
    }
    
    imageCard.src = element.link;
    imageCard.alt = element.name;
    titleCard.textContent = element.name;
    likeNumbers.textContent = element.likes.length;
    likeButton.addEventListener('click', ()=> handleLike(likeButton, likeNumbers, element._id))
    imageCard.addEventListener('click', ()=> hundleModal(imageCard.src, imageCard.alt))

    const personThisLiked = element.likes.some(like => like._id === id);
    if (personThisLiked) {
      likeButton.classList.add('card__like-button_is-active');
    }
  
    deleteButton.addEventListener('click', function(){
        callBackDelete(cardElement, element._id);
    });
  return cardElement;
  }
  

// @todo: Функция удаления карточки
function deleteCard(cardElement, id) {
  deletedCard(id).then(()=>
    cardElement.remove())
  .catch((err) => {
    console.log(`Ошибка: ${err}`)
  })
  }

  //like Active
  const handleLike = function (likeButton, likeNumbers, id) {

    if (likeButton.classList.contains("card__like-button_is-active")) {
      removeLike(id)
        .then(element => {
          likeButton.classList.remove("card__like-button_is-active");
          likeNumbers.textContent = element.likes.length;
        })
        .catch(err => {
          console.error('Ошибка:', err);
        });

    } else {
      addLike(id)
        .then(element => {
          likeButton.classList.add("card__like-button_is-active");
          likeNumbers.textContent = element.likes.length;
        })
        .catch(err => {
          console.error('Ошибка:', err);
        });
    }
  
  };




  export{makeCard, deleteCard, handleLike};