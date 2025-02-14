//your code here
let draggedElement = null;

document.querySelectorAll(".draggable").forEach(item => {
    item.addEventListener("dragstart", (event) => {
        draggedElement = event.target;
        event.dataTransfer.setData("text/plain", event.target.id);
    });

    item.addEventListener("dragover", (event) => {
        event.preventDefault();
    });

    item.addEventListener("drop", (event) => {
        event.preventDefault();
        if (draggedElement && draggedElement !== event.target) {
            let tempBg = draggedElement.style.backgroundImage;
            draggedElement.style.backgroundImage = event.target.style.backgroundImage;
            event.target.style.backgroundImage = tempBg;
        }
    });
});

