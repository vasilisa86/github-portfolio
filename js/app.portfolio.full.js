        // Client Swiper Script
        var swiper1 = new Swiper('.client-swiper', {
            slidesPerView: 3,
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            spaceBetween: 60,
            // Responsive breakpoints
            breakpoints: {
                // when window width is <= 320px
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                    pagination: '.swiper-pagination'
                },
                // when window width is <= 480px
                480: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                // when window width is <= 640px
                640: {
                    slidesPerView: 1,
                    spaceBetween: 30
                }
            }
        });
        // Testimonial Swiper Script
        var swiper2 = new Swiper('.testimonial-swiper', {
            slidesPerView: 3,
            pagination: '.swiper-pagination',
            paginationClickable: true,
            spaceBetween: 30,
            grabCursor: true,
            freeMode: true,
            breakpoints: {
                // when window width is <= 320px
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                // when window width is <= 480px
                480: {
                    slidesPerView: 1,
                    spaceBetween: 10
                },
                // when window width is <= 640px
                640: {
                    slidesPerView: 1,
                    spaceBetween: 10
                }
            }
        });

// Sticky Menu Script
window.addEventListener('scroll', function () {
    var stickyMenu = document.getElementById('stickyMenu');
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollPosition > 40) {
        stickyMenu.classList.add('show');
    } else {
        stickyMenu.classList.remove('show');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var menuItems = document.querySelectorAll('.sticky-menu ul li a');

    menuItems.forEach(function (item) {
        item.addEventListener('click', function (event) {
            event.preventDefault();
            var sectionId = this.getAttribute('href');
            var targetSection = document.querySelector(sectionId);

            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
