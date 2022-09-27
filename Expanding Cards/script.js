// Puts all of the given panels in to a node list, allowing you to target specific panels.
const panels = document.querySelectorAll('.panel')

// Cycke through each panel, listening for a click
panels.forEach((panel) => {
    // When clicked, remove the 'active' class from every panel and add it to only the panel that was clicked.
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    // Cycle through every panel within the node list, removing the active class.
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}