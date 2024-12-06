let points = 0;
let clickPower = 1;

// Elements
const pointsDisplay = document.getElementById("points");
const redButton = document.getElementById("redButton");
const buyUpgradeBtn = document.getElementById("buyUpgrade");
const buyUpgrade2Btn = document.getElementById("buyUpgrade2");

// Update the points display
function updatePoints() {
    pointsDisplay.textContent = `Points: ${points}`;
}

// Red button click functionality
redButton.addEventListener("click", () => {
    points += clickPower;
    updatePoints();
});

// Upgrade functionality for Double Click Power
buyUpgradeBtn.addEventListener("click", () => {
    if (points >= 10) {
        points -= 10;
        clickPower = 2;  // This sets the click power to double
        updatePoints();
        buyUpgradeBtn.disabled = true;  // Disable button after purchase
        buyUpgradeBtn.textContent = "Purchased!";
    } else {
        alert("Not enough points!");
    }
});

// Upgrade functionality for Quadruple Click Power
buyUpgrade2Btn.addEventListener("click", () => {
    if (points >= 50) {
        points -= 50;
        clickPower = 4;  // This sets the click power to quadruple
        updatePoints();
        buyUpgrade2Btn.disabled = true;  // Disable button after purchase
        buyUpgrade2Btn.textContent = "Purchased!";
    } else {
        alert("Not enough points!");
    }
});

// Initial points display
updatePoints();
