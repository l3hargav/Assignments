//Store the DOM state so as to load it again on reset
let defaultDOM = document.body.innerHTML;

function onDrag(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
}

function dragEnd(event) {
    event.preventDefault();
}

function onDrop(event) {
    const id = event.dataTransfer.getData("text")
    const element = document.getElementById(id);
    const drop = event.target;
    drop.appendChild(element);
    event.dataTransfer.clearData();
}

function resetPage() {
    document.body.innerHTML = defaultDOM;
}