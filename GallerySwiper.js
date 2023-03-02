// use-case: Showing a picture carusel to user


// Initialize Swiper class
const gallerySwiper = new Swiper(".gallerySwiper", {

    // Adding pagination (clickable - pics are swiped by clicks, el-class name with pagination)
    pagination: {
        el: ".gallerySwiper-pagination",
        clickable: true,
    },

    // Set autoplay with its params
    autoplay: {
        disableOnInteraction: false,
        delay: 7000,
    },
});