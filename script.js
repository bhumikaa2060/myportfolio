document.addEventListener("DOMContentLoaded", function() {
    // Sticky navbar functionality
    window.addEventListener("scroll", function() {
        if (window.scrollY > 20) {
            document.querySelector('.navbar').classList.add("sticky");
        } else {
            document.querySelector('.navbar').classList.remove("sticky");
        }
    });

    // Toggle menu on click
    $('.menu-btn').on('click', function() {
        $('.navbar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    });
});
