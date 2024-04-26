const shareContent = document.querySelector('.share-content');
const shareBtn = document.querySelector('.share-btn');
const shareIcon = document.querySelector('.share-btn svg path')

function openShare() {
    shareContent.classList.toggle('active');
    shareBtn.classList.toggle('active');
    shareIcon.classList.toggle('active');
}