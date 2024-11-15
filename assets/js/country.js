// Ensure the script runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", async () => {
  const output = document.getElementById("country-info");
  output.textContent = "Fetching your location...";
  
  try {
    const token = "fbcd3319b40421"; // Replace with your actual token
    const response = await fetch(`https://ipinfo.io/json?token=${token}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    output.textContent = `IP Address: ${data.ip}, Country: ${data.country}`;
  } catch (error) {
    console.error("Error fetching location:", error);
    output.textContent = "Unable to fetch location.";
  }
});
