const navButtons = document.querySelectorAll('.navlink');
const submenuLists = document.querySelectorAll('.navlink .submenu');

function showAndHide(param){

    let id = document.getElementById(param);
    const submenuList = id.querySelector('.submenu');
    
    if(submenuList.classList.contains('hideSection')){
        submenuLists.forEach(ele => {
            ele.classList.add('hideSection')
            ele.classList.remove('showSection')
            submenuList.classList.remove('hideSection')
            submenuList.classList.add('showSection')
        })
    }else{
        submenuList.classList.remove('showSection')
        submenuLists.forEach(ele => {
            ele.classList.add('hideSection')
            submenuList.classList.add('hideSection')
        })
    }
}


const createButton = document.querySelector('.create a p')
const popupWindow = document.querySelector('.popupWindow')
const closeButton = document.querySelector('.closeAction')
createButton.addEventListener('click', () => {
    popupWindow.classList.add('showElement')
});
closeButton.addEventListener('click', () => {
    popupWindow.classList.remove('showElement')
});