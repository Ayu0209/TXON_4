//sticky navbar
$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    })
});

//Scroll-up Button

const scrollUp=()=>{
    const scrollUp=document.getElementById('scroll-up')
    this.scrollY>=350?scrollUp.classList.add('show-scroll')
                 :scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)


    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Web Designer", "UI/UX Designer", "Web Developer", "Graphics Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["Web Developerr", "UI/UX Designer", "Web Designer", "Graphics Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });




//Active link state on scroll

let section=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('nav ul a');

window.onscroll=()=>{
    section.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>=offset && top<offset +height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('nav ul a[href*='+ id + ']').classList.add('active');
            });
        };
    });
};