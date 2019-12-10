 
 if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js")
        .then(function (registration) {
            console.log("Service Worker registered with scope:", 
                         registration.scope);
        }).catch(function (err) {
        console.log("Service worker registration failed:", err);
    });
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
    console.log('hmm')
    mIcon.classList.toggle('animate');
    ul.classList.toggle('ulShow');
    nav.classList.toggle('expand');

}

//////////////////SLIDE ON SCROLL/////////////////////////
const tiles = document.querySelectorAll('.one');


function slideIn() {

  console.log('hi')

 tiles.forEach(i => {
     const slideInAt = (window.scrollY + window.innerHeight) - 300 / 2;
     const imageBottom = i.offsetTop + 300;

     const isHalfShown = slideInAt > i.offsetTop;
     const isNotScrolledPast = window.scrollY < imageBottom;
    console.log(isNotScrolledPast)
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
