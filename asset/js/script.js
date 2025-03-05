let menu = document.querySelector("#menu");
let closeIcon = document.querySelector("#closeIcon i");

let tl = gsap.timeline({ paused: true });  

tl.to("#mobileMenu", {
    right : 0,
})

.from(".menu_list li", {
    x: 150,
    opacity: 0,
    stagger: 0.2,
})
.from(".close_icons i", {
    opacity: 0,
});

 
menu.addEventListener("click", function(){
    tl.play(); 
});

 
closeIcon.addEventListener("click", function(){
    tl.reverse();   
    
});
