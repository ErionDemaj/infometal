const hamburger = document.getElementById("hamburger")
const navList = document.getElementById("navList")

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active")
    navList.classList.toggle("active")
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});