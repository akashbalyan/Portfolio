function handleToggle() {

    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
     menu.classList.toggle("open");
     icon.classList.toggle("open");
}

function handleDayNightToggle(){
    const btnDayNight = document.querySelectorAll(".btn-daynight");
    const btnDayNight2 = document.querySelectorAll(".btn-daynight-2");

    btnDayNight.forEach((btn)=>{btn.classList.toggle("nightMode")});
    btnDayNight2.forEach((btn)=>{btn.classList.toggle("nightMode")});

}