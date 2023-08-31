let  hamburger = document.querySelector("#hamburger");
let sidebar = document.querySelector(".sidebar");

hamburger.onclick = function(){
    sidebar.classList.toggle('active');
}

var arrows = document.querySelectorAll('.down-arrow');
var firstSection = document.getElementById('page-header');
function checkScrollPosition() {
    if (window.scrollY >= firstSection.offsetTop) {
        arrows.forEach(function(arrow) {
            arrow.style.display = 'none';
        });
    } else {
        arrows.forEach(function(arrow) {
            arrow.style.display = 'block';
        });
    }
}
window.addEventListener('load', checkScrollPosition);
window.addEventListener('scroll', checkScrollPosition);