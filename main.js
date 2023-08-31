let  hamburger = document.querySelector("#hamburger");
let sidebar = document.querySelector(".sidebar");

hamburger.onclick = function(){
    sidebar.classList.toggle('active');
}

