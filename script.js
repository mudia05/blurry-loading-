// Select the loading text element
const loadText = document.querySelector('.loading-text')

// Select the background element
const bg = document.querySelector('.bg')

// Initialize load value to 0
let load = 0

// Run the blurring function every 30 milliseconds
let int = setInterval(blurring, 30)

// This function runs repeatedly to update the loading effect
function blurring() {
  load++ // Increment the loading value

  // Once loading reaches 100%, stop the interval
  if (load > 99) {
    clearInterval(int)
  }

  // Update the text content to show the current percentage
  loadText.innerText = `${load}%`

  // Gradually fade out the loading text as it approaches 100%
  loadText.style.opacity = scale(load, 0, 100, 1, 0)

  // Gradually reduce the blur on the background from 30px to 0px
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

// This helper function maps one range of numbers to another
// (e.g., from 0–100 to 1–0 for opacity, or 30–0 for blur)
const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
}

//https://stackoverflow.com/questions/10756313/havascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers