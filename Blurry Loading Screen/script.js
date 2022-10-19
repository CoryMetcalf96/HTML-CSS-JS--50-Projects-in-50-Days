// Establish element variables for the loading text and the background.
const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

// Establish variables for the load number and set up an interval of 30, applying it to the blurring function.
let load = 0;
let int = setInterval(blurring, 30);

// Set up a blurring function that increments the load variable. If the load variable is greater than 99, clear the preset interval. For reach iteration, update the inner text of the load text and opacity using the scale function. Then, update the blur as well.
function blurring() {
    load ++

    if (load > 99) {
        clearInterval(int)
    }

    loadText.innerText = load + '%';
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px`
}

// A pre-given function for mapping two ranges of numbers together. This allows you to decrease the blur as you increase the number counter.
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num-in_min) * (out_max - out_min) / (in_max - in_min) + out_min
}