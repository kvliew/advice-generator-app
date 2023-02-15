var data;
var idHolder = document.getElementById('advice-id');
var contentHolder = document.getElementById('advice-body');

fetch('https://api.adviceslip.com/advice').then((response) => {
      console.log(response);
      return response.json();
    }).then(data => {
      console.log(data.slip.advice);
      advice_id = data.slip.id;
      advice_content = data.slip.advice;
      idHolder.innerHTML = advice_id
      contentHolder.innerHTML = advice_content
    }).catch((err) => {
      console.log('rejected', err);
    }
    );