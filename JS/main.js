if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js')
      .then(reg => console.log('service worker registered'))
      .catch(err => console.log('service worker not registered', err));
  }


const ham = document.querySelector('.ham');
const mIcon = document.querySelector('.mIcon');
const ul = document.querySelector('ul');
const nav = document.querySelector('nav');
const li = document.querySelectorAll('nav li');


ham.addEventListener('click', animateMenu);
li.forEach(i => {
    i.addEventListener('click', toggleMenu);
})

function toggleMenu() {
    if(nav.classList.contains('expand') === false) {
        return;
    } else {
        mIcon.classList.toggle('animate');
        ul.classList.toggle('ulShow');
        nav.classList.toggle('expand');

    }
}
function animateMenu() {
    
    mIcon.classList.toggle('animate');
    ul.classList.toggle('ulShow');
    nav.classList.toggle('expand');

}

/////////////Function Hide Nav on Scroll//////////////////
    let prevScrollPos = window.pageYOffset;
function hideNavOnScroll() {
   
    let currentScrollPos = window.pageYOffset;
    let navHas = nav.classList.contains('expand')
    
    if(navHas) {
        return;
    }
    else if(prevScrollPos > currentScrollPos) {
        nav.classList.add('navTop');
        nav.classList.remove('navScroll')
    } else {
        nav.classList.add('navScroll')
        nav.classList.remove('navTop')
    }

    prevScrollPos = currentScrollPos;

}

//window.addEventListener('scroll', hideNavOnScroll)

//////////////////SLIDE ON SCROLL/////////////////////////
const tiles = document.querySelectorAll('.one');


function slideIn() {

  

 tiles.forEach(i => {
     const slideInAt = (window.scrollY + window.innerHeight) - 250 / 2;
     const imageBottom = i.offsetTop + 400;

     const isHalfShown = slideInAt > i.offsetTop;
     const isNotScrolledPast = window.scrollY < imageBottom;
    
     if(isHalfShown && isNotScrolledPast) {
         i.classList.add('fromLeft')
     } else {
         i.classList.remove('fromLeft')
     }
 })
    
    // tiles.forEach(i => {
    //     const rect = i.getBoundingClientRect();
    //     const elemTop = rect.top;
    //     const elemBottom = rect.bottom;
    //     console.log(elemTop);
    //     if((elemTop >= 0) && (elemBottom <= window.innerHeight)) {
    //         i.classList.add('fromLeft')
    //     } else {
    //         i.classList.remove('fromLeft')
    //     }
    // })


   

    

    
}

function debounce(func, wait = 20, immediate=true) {
    let timeout;
    return function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(this, args);
      }, wait);
    };
  }

window.addEventListener('scroll', debounce(slideIn));
window.addEventListener('scroll', debounce(hideNavOnScroll));

