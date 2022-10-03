// Establish variables for the button with the open ID, the close ID, and the container class items,
const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');

// Add a click listener that adds the show-nav class to the container clas elements when the open button is clicked.
open.addEventListener('click', () => {
    container.classList.add('show-nav');
})

// Add a click listener to the close button that removes the show-nav class from any container class elements.
close.addEventListener('click', () => {
    container.classList.remove('show-nav');
})