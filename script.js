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

    //Desktop nightMode icon
    const dayImage = document.querySelectorAll(".dayImage");
    dayImage.forEach((btn)=>{btn.classList.toggle("nightMode")});

    //Desktop nightMode icon
    const nightImage = document.querySelectorAll(".nightImage");
    nightImage.forEach((btn)=>{btn.classList.toggle("nightMode")});

    //Mobile Nav links
    const mobileNav = document.querySelectorAll(".menu-links");
    mobileNav.forEach((mobileNav)=>{mobileNav.classList.toggle("nightMode")});

    //Mobile Nav icon
    const mobileNavIconSpan = document.querySelectorAll(".hamburger-icon span");
    mobileNavIconSpan.forEach((span)=>{span.classList.toggle("nightMode")});

    //Mobile Nav links
    const mobileLinks = document.querySelectorAll(".menu-links a");
    mobileLinks.forEach((link)=>{link.classList.toggle("nightMode")});

    //About me section
    const aboutmesection = document.querySelector("#about");
    aboutmesection.classList.toggle("nightMode");

    //About me  p
    const aboutmep = document.querySelector(".section_aboutme p");
    aboutmep.classList.toggle("nightMode");

    //About me  h1
    const aboutmeh1 = document.querySelector(".section_aboutme h1");
    aboutmeh1.classList.toggle("nightMode");

    //About me  intro paragraph
    const aboutmeintrop = document.querySelector(".section_intro_paragraph p");
    aboutmeintrop.classList.toggle("nightMode");

    const footer = document.querySelector("#footer");
    footer.classList.toggle("nightMode");

    const footer_icons = document.querySelector(".footer_icons");
    footer_icons.classList.toggle("nightMode");

    const footer_icons_nightMode = document.querySelector(".footer_icons_nightMode");
    footer_icons_nightMode.classList.toggle("nightMode");

    const footer_icon = document.querySelectorAll(".footer_icon");
    footer_icon.forEach((icon)=>{icon.classList.toggle("nightMode")});

    const footer_titile = document.querySelector(".footer_title h4");
    footer_titile.classList.toggle("nightMode");


    

}

function navigateToRepo(url) {
    window.open(url, '_blank'); // Opens the link in a new tab
}


document.addEventListener("DOMContentLoaded", function () {
    const education_div = document.querySelectorAll('.education');
    const education_icon_div = document.querySelectorAll('.education_icon');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('pop-up'); // Add pop-up class when visible
                
                // Wait for the animation duration before resetting
                setTimeout(() => {
                    entry.target.classList.remove('pop-up'); // Remove pop-up class
                }, 500); // Match this time with the transition duration
            }
        });
    }, { threshold: 0.2 }); // Trigger when 20% of the element is visible

    // Observe each element
    education_div.forEach(element => observer.observe(element));
    education_icon_div.forEach(element => observer.observe(element));
});


