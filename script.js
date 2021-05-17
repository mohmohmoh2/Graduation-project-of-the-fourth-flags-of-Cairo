// toggle menu
let togglebtn = document.querySelector(".toggle-menu");
let tlinks = document.querySelector(".links");
togglebtn.onclick = function() {

    // toggle class on button
    this.classList.toggle("menu-active");

    //toggle class on Links
    tlinks.classList.toggle("open");
};

// toggle menu
let togglebtnn = document.querySelector(".drop-down");
let tlinksd = document.querySelector(".drop-d");
togglebtnn.onclick = function() {

    // // toggle class on button
    // this.classList.toggle("menu-active");

    //toggle class on Links
    tlinksd.classList.toggle("dro");

};