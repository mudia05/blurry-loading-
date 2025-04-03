# Blurry Loading

This project demonstrates a "blurry loading" effect where an image starts out blurry and gradually becomes clear as a loading percentage increases. It is built using HTML, CSS, and JavaScript.

## Features

- Smooth transition of a background image from blurry to clear.
- Loading percentage displayed dynamically.
- Responsive design.

## Files

- **index.html**: The main HTML file containing the structure of the webpage.
- **style.css**: The CSS file for styling the webpage, including the blurry effect.
- **script.js**: The JavaScript file that handles the loading logic and dynamic updates.
- **README.md**: This file, providing an overview of the project.

## How It Works

1. The `script.js` file uses a `setInterval` function to increment a loading percentage from 0% to 100%.
2. The `scale` function maps the loading percentage to values for opacity and blur.
3. The `style.css` file applies the blur effect to the background image and styles the loading text.

## Usage

1. Clone or download this repository.
2. Open `index.html` in your browser to see the effect in action.

## Dependencies

- The project uses the [Ubuntu font](https://fonts.google.com/specimen/Ubuntu) from Google Fonts.
- The background image is sourced from [Unsplash](https://unsplash.com).

## Screenshot

![Blurry Loading Screenshot](https://via.placeholder.com/800x400?text=Blurry+Loading+Effect)

## License

This project is open-source and available under the MIT License.
