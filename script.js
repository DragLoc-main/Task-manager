const checkbox = document.querySelector('.switch input');

checkbox.addEventListener('change', function () {
    const body = document.querySelector('body');

    if (this.checked) {
        body.classList.add('dark-mode');
        updateCommonCSS('black');
    } else {
        body.classList.remove('dark-mode');
        updateCommonCSS('white');
    }
});

function updateCommonCSS(color) {
    const commonStyles = document.querySelector('#common-styles');

    if (commonStyles) {
        commonStyles.innerHTML = `.body.dark-mode { background-color: ${color}; }`;
    }
}
