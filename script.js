let headerBtn = document.getElementById('header-btn');

let headerGone = () => {
    headerBtn.style.display = 'none';
}

addEventListener('click', headerGone);
addEventListener("mousedown", headerGone);