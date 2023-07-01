let closeButtons = document.querySelectorAll('.closeAction')
closeButtons.forEach((closeButton) => {
    closeButton.addEventListener('click', () => {
        const popupWindows = document.querySelectorAll('.popupWindow')
        popupWindows.forEach((popupWindow) => {
            popupWindow.classList.remove('showElement')
        });
    });
});