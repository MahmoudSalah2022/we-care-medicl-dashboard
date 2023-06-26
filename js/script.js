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

const header = document.querySelector('header');
const menutoggle = document.querySelector('.menutoggle');

menutoggle.addEventListener('click', ()=> {
    // header.classList.toggle('showheader');
    if(header.classList.contains('showheader')){
        header.classList.remove('showheader')
        header.classList.add('hideheader')
    }else{
        header.classList.add('showheader')
        header.classList.remove('hideheader')
    }
})

const createButton = document.querySelector('.create a p')
const addNewPopupWindow = document.querySelector('#addNew')
let closeButtons = document.querySelectorAll('.closeAction')
createButton.addEventListener('click', () => {
    addNewPopupWindow.classList.add('showElement')
});

closeButtons.forEach((closeButton) => {
    closeButton.addEventListener('click', () => {
        const popupWindows = document.querySelectorAll('.popupWindow')
        popupWindows.forEach((popupWindow) => {
            popupWindow.classList.remove('showElement')
        });
    });
});


