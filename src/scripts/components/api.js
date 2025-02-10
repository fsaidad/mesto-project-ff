const config = {
    baseUrl: 'https://nomoreparties.co/v1/wff-cohort-31',
    headers: {
      authorization: '25dbc7c4-a190-4b82-ac20-400d84f5ae9d',
      'Content-Type': 'application/json'
    }
  }

  const getPersonInfo = () => {
    return fetch(`${config.baseUrl}/users/me`, {
      headers: config.headers
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
  
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  } 
  
  const getInitialCards = () => {
    return fetch(`${config.baseUrl}/cards`, {
      headers: config.headers
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
  
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  } 

  const deletedCard = (id) => {
    return fetch(`${config.baseUrl}/cards/${id}`, {
     method: 'DELETE',
     headers: config.headers,
   })
   .then(res => {
     if (res.ok) {
       return res.json();
     }
   
     // если ошибка, отклоняем промис
     return Promise.reject(`Ошибка: ${res.status}`);
   });
   }

   const editPersonInfo = (name, about) => {
    return fetch(`${config.baseUrl}/users/me`, {
       method: 'PATCH',
       headers: config.headers,
       body: JSON.stringify({
         name: name,
         about: about
       })
     });
   }

   const addCardNew = (name, link, avatar) => {
   return fetch(`${config.baseUrl}/cards`, {
      method: 'POST',
      headers: config.headers,
      body: JSON.stringify({
        name: name,
        link: link,
        avatar: avatar
      })
    })
    .then(res => {
        if (res.ok) {
          return res.json();
        }
      
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }
  const addLike = (id) => {
    return fetch(`${config.baseUrl}/cards/likes/${id}`, {
        method: 'PUT',
        headers: config.headers,
      })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }
  const removeLike = (id) => {
    return fetch(`${config.baseUrl}/cards/likes/${id}`, {
        method: 'DELETE',
        headers: config.headers,
      })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }
  const editAvatar = (url) => {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: config.headers,
      body: JSON.stringify({
        avatar: url
      })
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
    
      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  export {getPersonInfo, getInitialCards, deletedCard, editPersonInfo, addCardNew, addLike, removeLike, editAvatar}