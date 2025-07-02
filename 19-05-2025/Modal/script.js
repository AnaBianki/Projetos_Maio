const modal = document.querySelector('.container');

function onOpen(){
    modal.classList.add('active');
}

function onClose() {
    modal.classList.remove('active');
}