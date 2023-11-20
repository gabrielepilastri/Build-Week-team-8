let clickedStarIndex = -1;

    function highlightStars(star) {
        const stars = document.querySelectorAll('.star');
        const hoverIndex = Array.from(stars).indexOf(star);

        for (let i = 0; i <= hoverIndex; i++) {
            stars[i].classList.add('hovered');
        }
    }

    function resetStars() {
        const stars = document.querySelectorAll('.star');

        for (const star of stars) {
            star.classList.remove('hovered');
        }
    }

    function clickStar(star) {
        const stars = document.querySelectorAll('.star');
        const clickedIndex = Array.from(stars).indexOf(star);

        for (let i = 0; i <= clickedIndex; i++) {
            stars[i].classList.add('clicked');
        }

        for (let i = clickedIndex + 1; i < stars.length; i++) {
            stars[i].classList.remove('clicked');
        }

        clickedStarIndex = clickedIndex;
    }