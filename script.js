function showPopup(id, row) {
    var popupContent = document.getElementById('popup-content');
    var popup = document.getElementById('popup');
    var isMobile = window.matchMedia("only screen and (max-width: 880px)").matches;
    var top = ( ( row - 1 ) * 440 ) + 80;


    // Hide all popup items
    var popupItems = popupContent.getElementsByClassName('popup-item');
    for (var i = 0; i < popupItems.length; i++) {
        popupItems[i].style.display = 'none';
        popupItems[i].classList.remove('show-popup-item');
    }

    if (isMobile) {
        popup.style.position = 'fixed';
        popup.style.top = '5vh';
    } else {
        popup.style.position = 'absolute';
        popup.style.top = top + "px";
    }

    // Show the popup item with the passed ID
    var selectedPopupItem = document.getElementById(id);
    selectedPopupItem.classList.add('show-popup-item');
    selectedPopupItem.style.display = 'flex';
    document.getElementById('popup').style.display = 'block';
}

window.onclick = function(event) {
    if (event.target == document.getElementById('popup')) {
        document.getElementById('popup').style.display = "none";
    }
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closePopup();
    }
});

function closePopup() {
    document.getElementById('popup').style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
    var element = document.getElementById("bottom");
    element.scrollIntoView();
});

const sliders = document.querySelectorAll('.image-slider');
sliders.forEach(slider => {
    let currentSlide = 0;
    const slides = slider.querySelectorAll('.slide-image');
    const prevButton = slider.querySelector('.prev-button');
    const nextButton = slider.querySelector('.next-button');

    function showSlide() {
        slides.forEach((slide, index) => {
            slide.style.display = index === currentSlide ? 'block' : 'none';
        });
    }

    prevButton.addEventListener('click', () => {
        currentSlide--;
        if (currentSlide < 0) currentSlide = slides.length - 1;
        showSlide();
    });

    nextButton.addEventListener('click', () => {
        currentSlide++;
        if (currentSlide >= slides.length) currentSlide = 0;
        showSlide();
    });
});