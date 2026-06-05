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







