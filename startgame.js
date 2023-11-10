let popup = document.getElementById('popup')

function openPopup(){
    popup.classList.add("open-popup");
}
function closePopup(){
    popup.classList.remove("open-popup");
}



window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const context = canvas.getContext('2d');
    canvas.width = 1200;
    canvas.height = 500;
})