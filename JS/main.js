 
 
const ham = document.querySelector('.ham');
const mIcon = document.querySelector('.mIcon');
const ul = document.querySelector('ul');
const nav = document.querySelector('nav');
const li = document.querySelectorAll('nav li');
console.log(ham, mIcon, ul, nav, li)

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

function slideIn() {

    const tiles = document.querySelectorAll('.tiles');

   

    tiles.forEach(i => {

        if (i.getBoundingClientRect().top + i.scrollHeight / 1.2 + document.documentElement.scrollTop < window.scrollY + window.innerHeight) {
            i.classList.remove('hidden');
            i.classList.add('fade-in-element');

        } else {
            i.classList.add('hidden');
            i.classList.remove('fade-in-element');
        }


    })

    
}
window.addEventListener('scroll', slideIn);
