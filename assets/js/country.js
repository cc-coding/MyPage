document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('detect-country');
  const output = document.getElementById('country-output');

  button.addEventListener('click', async () => {
    try {
      // Fetch the geolocation data
      const response = await fetch('https://ipinfo.io/json?token=YOUR_TOKEN'); // Replace YOUR_TOKEN with your IPInfo token if required
      const data = await response.json();

      // Display the country in the output element
      output.textContent = `You are visiting from: ${data.country}`;
    } catch (error) {
      console.error('Error fetching location:', error);
      output.textContent = 'Unable to detect your location.';
    }
  });
});
