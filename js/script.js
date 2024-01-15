// Menu button start
function toggleMenu() {
    var x = document.querySelector(".responsive");
    var icon = document.querySelector(".icon i");

    if (x.style.display === "block") {
        x.style.display = "none";
        icon.className = "fas fa-bars";
    } else {
        x.style.display = "block";
        icon.className = "fas fa-times";        
    }
}
// Menu button end


// typed js start
var options = {
    strings: ["Frontend Developer", "Graphic Designer", "Video Editor", "Data Entry Expert", "SEO Expert"],
    typeSpeed: 60,  // Typing speed in milliseconds
    backSpeed: 25,  // Backspacing speed in milliseconds
    loop: true      // Whether to loop the animation
};
var typed = new Typed('.multiple-text', options);
// typed js end
