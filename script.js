function createFallingText() {
    var nameInput = document.getElementById('nameInput').value;
    var wholeBody = document.getElementById('wholeBody');
    var existingFallingText = document.querySelectorAll('.fallingText');
    existingFallingText.forEach(function(text) {
        text.remove();
    });
    if (nameInput) {
        const colorList = [
            "rgb(255, 0, 255)", 
            "rgb(0, 255, 255)", 
            "rgb(255, 255, 0)", 
            "rgb(0, 255, 0)", 
            "rgb(255, 0, 0)", 
            "rgb(255, 128, 0)", 
            "rgb(255, 20, 147)", 
            "rgb(0, 128, 128)", 
            "rgb(75, 0, 130)", 
            "rgb(255, 105, 180)", 
            "rgb(240, 128, 128)", 
            "rgb(100, 149, 237)", 
            "rgb(50, 205, 50)", 
            "rgb(255, 255, 255)", 
            "rgb(255, 69, 0)", 
            "rgb(238, 130, 238)", 
            "rgb(255, 160, 122)", 
            "rgb(255, 182, 193)", 
            "rgb(128, 0, 128)", 
            "rgb(255, 0, 255)", 
            "rgb(255, 0, 255)", 
            "rgb(138, 43, 226)", 
            "rgb(186, 85, 211)", 
            "rgb(64, 224, 208)", 
            "rgb(30, 144, 255)", 
            "rgb(255, 140, 0)", 
            "rgb(139, 0, 139)", 
            "rgb(255, 99, 71)", 
            "rgb(255, 228, 225)", 
            "rgb(255, 215, 0)", 
            "rgb(0, 255, 0)", 
            "rgb(0, 0, 255)", 
            "rgb(34, 139, 34)", 
            "rgb(255, 127, 80)", 
            "rgb(186, 85, 211)", 
            "rgb(0, 255, 255)", 
            "rgb(255, 105, 180)", 
            "rgb(138, 43, 226)", 
            "rgb(255, 99, 71)", 
            "rgb(255, 0, 255)", 
            "rgb(255, 127, 80)", 
            "rgb(0, 255, 255)", 
            "rgb(255, 20, 147)", 
            "rgb(173, 216, 230)", 
            "rgb(255, 165, 0)", 
            "rgb(255, 182, 193)", 
            "rgb(250, 128, 114)", 
            "rgb(255, 228, 225)", 
            "rgb(255, 140, 0)", 
            "rgb(255, 165, 0)", 
            "rgb(255, 255, 0)", 
            "rgb(255, 69, 0)", 
            "rgb(30, 144, 255)", 
            "rgb(238, 130, 238)", 
            "rgb(144, 238, 144)", 
            "rgb(100, 149, 237)", 
            "rgb(0, 128, 0)", 
            "rgb(75, 0, 130)", 
            "rgb(221, 160, 221)", 
            "rgb(218, 165, 32)", 
            "rgb(255, 105, 180)", 
            "rgb(255, 105, 180)", 
            "rgb(255, 160, 122)", 
            "rgb(240, 128, 128)", 
            "rgb(255, 69, 0)", 
            "rgb(255, 165, 0)", 
            "rgb(255, 20, 147)", 
            "rgb(255, 0, 255)", 
            "rgb(0, 255, 255)", 
            "rgb(0, 0, 255)", 
            "rgb(255, 140, 0)", 
            "rgb(255, 99, 71)", 
            "rgb(139, 0, 139)", 
            "rgb(186, 85, 211)", 
            "rgb(240, 128, 128)", 
            "rgb(255, 160, 122)", 
            "rgb(255, 105, 180)", 
            "rgb(173, 216, 230)", 
            "rgb(0, 255, 0)", 
            "rgb(255, 20, 147)", 
            "rgb(255, 165, 0)", 
            "rgb(100, 149, 237)", 
            "rgb(255, 255, 255)"
          ];
          let currentColor=0

        for (let j = 0; j<11; j++){
            let iterationDelay = j * 2;
            for (let i = 0; i < nameInput.length; i++) {
                var fallingText = document.createElement('div');
                fallingText.classList.add('fallingText');
                fallingText.textContent = nameInput[i];
                var delay = i * 0.2 + iterationDelay;
                fallingText.style.animationDelay = `${delay}s`;
                fallingText.style.color= colorList[currentColor];
                fallingText.style.left = `${j*10 + Math.random() * 10}%`;
                wholeBody.appendChild(fallingText);
                currentColor++;
                if (currentColor>=colorList.length) currentColor=0
            }
        }
    }
}
