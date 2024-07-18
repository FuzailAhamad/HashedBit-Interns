//Write your code here
function createDiv(width, height, text) {
    let newDiv = document.createElement('div');
        newDiv.style.width = width + 'px';
        newDiv.style.height = height + 'px';
        newDiv.textContent = text;
        let container = document.getElementById('container');
        container.appendChild(newDiv);
    }
    createDiv(200, 100, 'This is a new div');
    
    
    
    // Do not change this code
    Window.createDiv = createDiv;