
document.addEventListener("DOMContentLoaded", function() {
        var backToTopButton = document.getElementById('back-to-top');

        backToTopButton.addEventListener('click', function() {
            // Scroll to the top of the page smoothly
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });

   
