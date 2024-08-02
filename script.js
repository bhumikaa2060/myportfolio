document.addEventListener("DOMContentLoaded", function() {
    // Sticky navbar functionality
    window.addEventListener("scroll", function() {
        if (window.scrollY > 20) {
            document.querySelector('.navbar').classList.add("sticky");
        } else {
            document.querySelector('.navbar').classList.remove("sticky");
        }
        if(window.scrollY > 500) {
            document.querySelector('.scroll-up-btn').classList.add("show");
        }else {
            document.querySelector('.scroll-up-btn').classList.remove("show");
        }
    });
    // slide-up this.scripts
    $('.scroll-up-btn').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'fast'); 
    });

    // Toggle menu on click
    $('.menu-btn').on('click', function() {
        $('.navbar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    });
});
