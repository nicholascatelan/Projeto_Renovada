$(document).ready(function() {
    $('.menu-toggler').on('click', function() {
        $(this).toggleClass('open');
    });

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 1000,
        distance: '20%',
    });
});