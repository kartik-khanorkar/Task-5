Simple Weather App

### HTML (index.html):

1. **Page Structure:**
   - Basic HTML structure with head and body sections.
   - Includes a title, Font Awesome for icons, and links to CSS and JavaScript files.

2. **Container:**
   - Main container with a centered design.

3. **Header:**
   - Title "Weather App" displayed prominently.
   - Input field for entering the city name.
   - Button to trigger weather data retrieval.

4. **Weather Info Display:**
   - Empty div (`<div id="weather-info"></div>`) to display weather information.

### CSS (styles.css):

1. **Body Styling:**
   - Background color set to a greenish tone.

2. **Container Styling:**
   - Text-centered design.

3. **Weather Container Styling:**
   - White background, rounded corners, and subtle shadow.
   - Fade-in animation for a smooth appearance.

4. **Label and Input Styling:**
   - Larger font size and green color for the location label.
   - Padding, border, and border-radius for the input field.

5. **Button Styling:**
   - Green background, white text, rounded corners, and a hover effect for a button.
   - Smooth transition for a nice visual effect.

6. **Weather Info Styling:**
   - Margin added for separation.
   - Slide-in animation for a dynamic display.

### JavaScript (script.js):

1. **Get Weather Function:**
   - Retrieves the location input value.
   - Checks for empty input and shows an alert if necessary.

2. **API Request:**
   - Forms the API URL with the entered location and API key.
   - Fetches weather data in JSON format.

3. **Display Weather Function:**
   - Updates the HTML to display weather information.
   - Utilizes Font Awesome icons for a visual touch.

4. **Animations:**
   - Fade-in and slide-in animations for a smoother and more engaging user experience.
