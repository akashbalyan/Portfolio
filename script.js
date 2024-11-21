function handleToggle() {

    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
     menu.classList.toggle("open");
     icon.classList.toggle("open");
}

function handleDayNightToggle(){
    // Handling the toggle button CSS
    const btnDayNight = document.querySelectorAll(".btn-daynight");
    const btnDayNight2 = document.querySelectorAll(".btn-daynight-2");

    btnDayNight.forEach((btn)=>{btn.classList.toggle("nightMode")});
    btnDayNight2.forEach((btn)=>{btn.classList.toggle("nightMode")});

    // Nav Bar 
    const nav = document.querySelectorAll("nav");
    nav.forEach((nav)=>{nav.classList.toggle("nightMode")});

    //Nav Logo
    const logo = document.querySelectorAll(".logo");
    logo.forEach((logo)=>{logo.classList.toggle("nightMode")});

    //Desktop Nav links
    const desktopLinks = document.querySelectorAll(".nav-links a");
    desktopLinks.forEach((link)=>{link.classList.toggle("nightMode")});

    //Mobile Nav links
    const mobileNav = document.querySelectorAll(".menu-links");
    mobileNav.forEach((mobileNav)=>{mobileNav.classList.toggle("nightMode")});

    //Mobile Nav icon
    const mobileNavIconSpan = document.querySelectorAll(".hamburger-icon span");
    mobileNavIconSpan.forEach((span)=>{span.classList.toggle("nightMode")});

    //Mobile Nav links
    const mobileLinks = document.querySelectorAll(".menu-links a");
    mobileLinks.forEach((link)=>{link.classList.toggle("nightMode")});

    

}