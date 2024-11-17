
// Dynamically display the footer year and log today's date
(function () {
    const footer = document.getElementById("footer-content");
    const now = new Date();
    footer.innerHTML = `&copy; Justin Ginu Oommen, ${now.getFullYear()}`;
    console.log("Current Date: ", now.toDateString());
})();

// Display time-specific greetings with custom styles
(function () {
    const greetElement = document.getElementById("greeting");
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
        greetElement.textContent = "Good Morning!";
        greetElement.classList.add("morning-greet");
    } else if (currentHour < 18) {
        greetElement.textContent = "Good Afternoon!";
        greetElement.classList.add("afternoon-greet");
    } else {
        greetElement.textContent = "Good Evening!";
        greetElement.classList.add("evening-greet");
    }
})();

// Button functionality to change text on hover and click
(function () {
    const interactButton = document.getElementById("interact-btn");
    
    interactButton.onmouseover = () => {
        interactButton.textContent = "Hovered!";
    };

    interactButton.onmouseout = () => {
        interactButton.textContent = "Tap Me!";
    };

    interactButton.onclick = () => {
        alert("Hello there!");
        console.log("Button Clicked!");
    };
})();

// Generate a list of even and odd numbers dynamically
(function () {
    const numList = document.getElementById("num-list");
    for (let i = 1; i <= 12; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = i % 2 === 0 ? `Even - ${i}` : `Odd - ${i}`;
        numList.appendChild(listItem);
    }
})();
