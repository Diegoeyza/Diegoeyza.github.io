function createFallingText() {
    var nameInput = document.getElementById('nameInput').value;
    var wholeBody = document.getElementById('wholeBody');
    var existingFallingText = document.querySelectorAll('.fallingText');
    existingFallingText.forEach(function(text) {
        text.remove();
    });
    if (nameInput) {
        for (let j = 0; j<11; j++){
            let iterationDelay = j * 2;
            for (let i = 0; i < nameInput.length; i++) {
                var fallingText = document.createElement('div');
                fallingText.classList.add('fallingText');
                fallingText.textContent = nameInput[i];
                var delay = i * 0.2 + iterationDelay;
                fallingText.style.animationDelay = `${delay}s`;
                fallingText.style.left = `${j*10 + Math.random() * 10}%`;
                wholeBody.appendChild(fallingText);
            }
    }
    }
}
