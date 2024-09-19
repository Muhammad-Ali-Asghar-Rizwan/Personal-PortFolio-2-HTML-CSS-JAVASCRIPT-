
 // scroll section active link
 let sections = document.querySelectorAll('section')
 let navlinks = document.querySelectorAll('header nav a')

 window.onscroll = () => {
     sections.forEach(sec => {
         let top = window.scrollY
         let offset = sec.offsetTop - 150
         let height = sec.offsetHeight
         let id = sec.getAttribute('id')

         if (top >= offset && top < offset + height) {
             navlinks.forEach(links => {
                 links.classList.remove('active')
                 document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
             })


         }
     })
     // Sticky navber
     let header = document.querySelector('header')
     header.classList.toggle('sticky', window.scrollY > 100)

     menuIcon.classList.remove('bx-x')
     navbar.classList.remove('active')
 }


 ScrollReveal({
      reset: true,
     distance: '80px',
     duration: 2000,
     delay: 200
 });

 ScrollReveal().reveal('.header, .project-card , #sub', { origin: 'top' });
 ScrollReveal().reveal('.section-tittle , .section-tittle', { origin: 'bottom' });
 ScrollReveal().reveal('.about img ,  #gridimg , .input', { origin: 'left' });
 ScrollReveal().reveal('.text, .btn-group , .socials , .grid ', { origin: 'right' });




 


 const typed = new Typed('.multiple-text', {
 strings: ['Frontend Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})


const menuIcon = document.querySelector('#menu-icon')
const navlink = document.querySelector('.nav-links')


menuIcon.addEventListener("click",()=>{
    navlink.classList.toggle('active')
})