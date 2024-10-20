const showButton=document.querySelector('.show_popup_button');
const popupcontainer=document.querySelector('.popup_container');
const cancelButton=document.querySelector('.cancle_button');
const okButton=document.querySelector('.ok_button');

showButton.addEventListener('click', showPopup)
cancelButton.addEventListener('click', cancelPopup)
okButton.addEventListener('click', okPopup)

function showPopup() {
   popupcontainer.classList.add('show');
}

function cancelPopup() {
   popupcontainer.classList.remove('show');
}

function okPopup() {
    // window.location.replace("https://testworld.co.in");
    // window.location.href = "https://testworld.co.in";
    window.open("https://testworld.co.in");
}