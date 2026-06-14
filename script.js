window.addEventListener("scroll", () => {
    document.querySelector("nav").classList.toggle(
        "scrolled",
        window.scrollY > 0
    );
});

        function toggle() {

            if (window.innerWidth <= 1097) {
                let items = document.querySelectorAll('.hide');

                items.forEach(function (items) {

                    if (items.style.display === 'flex') {
                        items.style.display = 'none';
                    }

                    else {
                        items.style.display = 'flex';
                    }

                });

            }
        }
        function closer() {

            if (window.innerWidth <= 1097) {
                let items = document.querySelectorAll('.double');

                items.forEach(function (items) {

                    if (items.style.display === 'flex') {
                        items.style.display = 'none';
                    }

                    else {
                        items.style.display = 'flex';
                    }

                });

            }
        }


        // for placeholder

document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("email");

    function updatePlaceholder() {
        if (!input) return;
        
        if (window.innerWidth <= 1030) {
            input.placeholder = "ENTER";
        } else {
            input.placeholder = "ENTER EMAIL ADDRESS...";
        }
    }

    // Run once on load
    updatePlaceholder();

    // Listen for window resizing
    window.addEventListener("resize", updatePlaceholder);
});






