
const showInputError = (formElement, inputElement, errorMessage, validationElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
    inputElement.classList.add(validationElement.inputErrorClass);
   errorElement.textContent = errorMessage;
   errorElement.classList.add(validationElement.errorClass);
  };
  
  const hideInputError = (formElement, inputElement, validationElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
    inputElement.classList.remove(validationElement.inputErrorClass);
    errorElement.classList.remove(validationElement.errorClass);
    errorElement.textContent = '';
  };
  
  const checkInputValidity = (formElement, inputElement, validationElement) => {
    if (inputElement.validity.patternMismatch) {
  
  inputElement.setCustomValidity(inputElement.dataset.errorMessage);
  } else {
  inputElement.setCustomValidity("");
  }
  
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage, validationElement);
    } else {
      hideInputError(formElement, inputElement, validationElement);
    }
  };
  
  
  const toggleButtonState = (inputList, buttonElement, validationElement) => {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(validationElement.inactiveButtonClass);
    } else {
      buttonElement.classList.remove(validationElement.inactiveButtonClass);
    } 
    }
  
  
  function setEventListeners (formElement, validationElement) {
    const inputList = Array.from(formElement.querySelectorAll(validationElement.inputSelector)); 
    const buttonElement = formElement.querySelector(validationElement.submitButtonSelector);
  
  
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement, validationElement);
  
        toggleButtonState(inputList, buttonElement, validationElement);
      });
    }); 
    }
    
    const enableValidation = (validationElement) => {
      const formList = Array.from(document.querySelectorAll(validationElement.formSelector)); 
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
      const fieldsetList = Array.from(document.querySelectorAll(validationElement.formSelector));
      fieldsetList.forEach((fieldSet) => {
        setEventListeners(fieldSet, validationElement);
      });
    }); 
    
    }
    
  
  
    const hasInvalidInput = (inputList) => {
      return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    }); 
    }

    const clearValidation = (formElement, validationConfig) => {

        const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
        const buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);
        inputList.forEach((inputElement) => {
            hideInputError(formElement, inputElement, validationConfig);
        });
        toggleButtonState(inputList, buttonElement, validationConfig);
        buttonElement.classList.remove(validationConfig.inactiveButtonClass)
      };
      

      export{enableValidation, clearValidation};