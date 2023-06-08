const close_btn = document.querySelector('.close');
const popup = document.querySelector('.popup');
const popup_open = document.querySelector('.open-popup');

close_btn.onclick = ()=>{
    popup.style.visibility = "hidden";
    popup.style.opacity = "0";
    popup.style.transition = "visibility 0.2s, opacity 0.2s ease";
}

function openPopup() {
    popup.style.visibility = "visible";
    popup.style.opacity = "1";
    popup.style.transition = "visibility 0.2s, opacity 0.2s ease";
}
