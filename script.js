document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector('.nav-hamburger');
    const navbarOptions = document.querySelector('.navbar-options');

    // Function to toggle the visibility of navbar options
    function toggleNavbarOptions() {
        navbarOptions.classList.toggle('show');
    }

    // Event listener for clicking the hamburger menu
    hamburger.addEventListener('click', function(event) {
        toggleNavbarOptions();
        event.stopPropagation(); // Prevents the click event from bubbling up to the document
    });

    // Event listener for clicking anywhere on the document
    document.addEventListener('click', function(event) {
        const target = event.target;
        const isHamburger = target.closest('.nav-hamburger'); // Check if the click target or any of its ancestors is the hamburger menu

        if (!isHamburger && navbarOptions.classList.contains('show')) {
            toggleNavbarOptions(); // Close navbar options if it's currently open and the click is not on the hamburger menu
        }
    });
});







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

    // document.addEventListener('DOMContentLoaded', function() {
    //     const hamburger = document.querySelector('.nav-hamburger');
    //     const navbarOptions = document.querySelector('.navbar-options');
        
    
    //     hamburger.addEventListener('click', function() {
    //         console.log("nhamburger clicked")
    //         console.log(navbarOptions)
    //         navbarOptions.classList.toggle('show');
    //         console.log("Navbar options visibility toggled");
    //     });
    // });

    // document.addEventListener('DOMContentLoaded', function() {
    //     const hamburger = document.querySelector('.nav-hamburger');
    //     const navbarOptions = document.querySelector('.navbar-options');
    
    //     hamburger.addEventListener('click', function() {
    //         console.log("Hamburger clicked");
    //         toggleNavbarOptions();
    //     });
    
    //     function toggleNavbarOptions() {
    //         console.log("Toggling navbar options");
    //         navbarOptions.classList.toggle('show');
    //     }
    // });
    
    
    // document.addEventListener('DOMContentLoaded', function() {
    //     const hamburger = document.querySelector('.nav-hamburger');
    //     const navbarOptions = document.querySelector('.navbar-options');
    
    //     hamburger.addEventListener('click', function() {
    //         toggleNavbarOptions();
    //     });
    
    //     function toggleNavbarOptions() {
    //         navbarOptions.classList.toggle('show');
    //     }
    // });

    
    document.addEventListener("DOMContentLoaded", function() {
        var panelAll = document.querySelector('.panel-all');
        var panelOptions = document.querySelector('.panel-options');
    
        panelAll.addEventListener('click', function() {
            panelOptions.classList.toggle('show');
        });
    });
    