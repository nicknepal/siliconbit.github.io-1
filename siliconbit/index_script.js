
const navSlide =() => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links a');


burger.addEventListener('click',()=>{
    nav.classList.toggle('nav-active');
  

    navLinks.forEach((link,index) =>  {                      
        if (link.style.animation){
            link.style.animation ='';
        }                            
        else{
            link.style.animation =`navLinkFade .8s ease forwards ${index/7+.5}s`;
        }       
    });
});
}

navSlide();

/*---------------------------------------------NAV Script Over-----------------------------------------------*/

/*---------------------------------------------WRAPPER 1 js-----------------------------------------------*/

// Add active class to the current button (highlight it)
