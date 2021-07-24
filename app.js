const inputName = document.getElementById('name');
const subject = document.getElementById('subject');
const email = document.getElementById('email');
const message = document.getElementById('message');
const form = document.getElementById('myForm');
const errorElement = document.getElementById('error');
const image = document.querySelectorAll('.image');

form.addEventListener('submit', function(e){
    let messages = [];
    if (inputName.value === '' || inputName.value == null) {
        messages.push('Name is required');
      };
      if (subject.value === '' || subject.value == null) {
        messages.push('Subject is required');
      };
      if (message.value === '' || message.value == null) {
        messages.push('Message is required');
      };
      if (email.value === '' || email.value == null) {
        messages.push('Email is required');
      };
      
      let user = {
          Name: inputName.value,
          Subject: subject.value,
          Email: email.value,
          Message: message.value
      }
      
      if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerHTML = messages.join('<br>')
      }else {
          let str = JSON.stringify(user, null, 4);
          alert(str);
      }
   
      });



      //RESPONSIVE-----------------------------------------
const hamburger = document.querySelector('.hamburger');
const menus = document.querySelector('.menus');

hamburger.addEventListener('click', function(){
  hamburger.classList.toggle('active');
  menus.classList.toggle('mobile');
  image.forEach(function(e){
    e.classList.toggle('change');
  });
  

});