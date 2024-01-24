 function menuMobile() {
   const header = document.querySelector('.header');
   const btn = document.querySelector('.burger');
   const links = document.querySelectorAll('.navbar a');

   btn.addEventListener('click', () => {
     header.classList.toggle('show-nav')
   });

   links.forEach(link => {
     link.addEventListener('click', () => {
       header.classList.remove('show-nav')
     });
   })
 }

 menuMobile()

 function showProjectDetails() {
   const links = document.querySelectorAll('.card__link');
   const modals = document.querySelectorAll('.modal');
   const btns = document.querySelectorAll('.modal__close');

   const hideModals = () => {
     modals.forEach(modal => {
       modal.classList.remove('show');
     });
   }

   links.forEach(elem => {
     elem.addEventListener('click', (event) => {
       event.preventDefault();
       document.querySelector(`[id=${elem.dataset.id}]`).classList.add('show');
     });
   });

   btns.forEach(btn => {
     btn.addEventListener('click', (event) => {
       hideModals();
     });
   });

 }

 showProjectDetails();


 const observerIntersectionAnimation = () => {
   const sections = document.querySelectorAll('section');
   const skills = document.querySelectorAll('.skills .bar');

   sections.forEach((section, index) => {
     if (index === 0) return;
     section.style.opacity = "0";
     section.style.transition = "all 1.6s";
   });

   skills.forEach((elem, index) => {

     elem.style.width = "0";
     elem.style.transition = "all 1.2s";
   });

   let sectionObserver = new IntersectionObserver(function (entries, observer) {
     entries.forEach(entry => {
       if (entry.isIntersecting) {
         let elem = entry.target;
         elem.style.opacity = 1;
       }
     });
   });

   sections.forEach(section => {
     sectionObserver.observe(section);
   });

   let skillsObserver = new IntersectionObserver(function (entries, observer) {
     entries.forEach(entry => {
       if (entry.isIntersecting) {
         let elem = entry.target;
         elem.style.width = elem.dataset.width + '%';
       }
     });
   });

   skills.forEach(skill => {
     skillsObserver.observe(skill);
   });
 }

 observerIntersectionAnimation();



 function validateForm() {
   var name = document.forms["myForm"]["name"];
   var email = document.forms["myForm"]["email"];
   var message = document.forms["myForm"]["message"];

   if (name.value == "") {
     document.getElementById('errorname').innerHTML = "Veuillez entrez un nom valide";
     name.focus();
     return false;
   } else {
     document.getElementById('errorname').innerHTML = "";
   }

   if (email.value == "") {
     document.getElementById('erroremail').innerHTML = "Veuillez entrez une adresse mail valide";
     email.focus();
     return false;
   } else {
     document.getElementById('erroremail').innerHTML = "";
   }

   if (email.value.indexOf("@", 0) < 0) {
     document.getElementById('erroremail').innerHTML = "Veuillez entrez une adresse mail valide";
     email.focus();
     return false;
   }

   if (email.value.indexOf(".", 0) < 0) {
     document.getElementById('erroremail').innerHTML = "Veuillez entrez une adresse mail valide";
     email.focus();
     return false;
   }

   if (message.value == "") {
     document.getElementById('errormsg').innerHTML = "Veuillez entrez un message valide";
     message.focus();
     return false;
   } else {
     document.getElementById('errormsg').innerHTML = "";
   }

   return true;
 }