const starContainer = document.getElementById('stars');

function createStars(count) {
    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        //random position based on the size of the current window
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const size = Math.random() * 3 + 1; //between 1 and 4px
        const delay = Math.random() * 5; //set the animation delay here

        //apply the dimensions here
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
        star.style.animationDelay = `${delay}s`;

        starContainer.appendChild(star);
    }
}

createStars(100);