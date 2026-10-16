


function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Determine AM or PM
    const ampm = hours >= 12 ? "PM" : "AM";

    // Convert 24-hour format to 12-hour format
    hours = hours % 12;
    hours = hours === 0 ? 12 : hours;

    // Add leading zeros when needed
    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    // Display the updated time
    document.getElementById("hours").textContent = formattedHours;
    document.getElementById("minutes").textContent = formattedMinutes;
    document.getElementById("seconds").textContent = formattedSeconds;
    document.getElementById("ampm").textContent = ampm;
}

// Display the time immediately
updateClock();

// Update the clock every second
setInterval(updateClock, 1000);

