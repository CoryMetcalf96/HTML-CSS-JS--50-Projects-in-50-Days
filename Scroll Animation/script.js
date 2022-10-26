// Create a node list for all elements with the class 'box'.
const boxes = document.querySelectorAll('.box');

// Create an event listener in the window that runs a 'checkBoxes' function when the user scrolls.
window.addEventListener('scroll', checkBoxes)

// Create a function that checks the box placements. Start by determining a 'triggerBottom' (where the boxes will scroll in). You can do this by dividing the inner height of the window by 5 and then multiplying by 4. Then, cycle through the node list. Establish the top of the box in to a variable for comparison against the trigger using box.getBoundingClientRect().top . Then, if the box top is less than the trigger, add the 'show' class to the box. If it's not, remove the 'show' class.
function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;  

        if(boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    })
}