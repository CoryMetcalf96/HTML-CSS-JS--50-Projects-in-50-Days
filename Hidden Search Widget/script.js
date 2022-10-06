// Set up variables for elements with the class search, button, and input.
const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

// When the button is clicked, toggle the 'active' class alongside the search div and set the focus on your input element.
btn.addEventListener('click', () => {
    search.classList.toggle('active');
    input.focus();
})