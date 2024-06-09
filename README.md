# Take-home-Challenge

## Overview

This project consists of two main components: a set of coding challenges and a photo gallery web page. The coding challenges include JavaScript functions for array manipulation and string transformation. The photo gallery showcases various animals with corresponding titles and subtitles, providing a visual and interactive experience.

## Project Structure

The project is organized into the following directories:

1. **Challenges**
   - `arrayMap.js`: Contains the function `hasSubarrayWithSum` which checks if there is a subarray within a given array that sums up to a target value.
   - `stringTransform.js`: Contains the function `transformString` which transforms a string based on its length's divisibility by 3, 5, and 15.

2. **Photo Gallery**
   - `index.html`: The main HTML file displaying a gallery of animal pictures with titles, subtitles, and a "Know more" link.
   - `css/styles.css`: The stylesheet for the photo gallery, ensuring a visually appealing layout.
   - `js/script.js`: Contains any JavaScript needed for the interactivity of the photo gallery.
**How to Run :
 - Just Open the `index.html` file in your web browser to view the Interactive Photo Gallery.
## Challenges

### Array Map (`arrayMap.js`)

This file includes a function to determine if a subarray with a given sum exists within an array.

#### Function: `hasSubarrayWithSum(arr, target)`

- **Parameters**:
  - `arr`: An array of integers.
  - `target`: An integer representing the target sum.
- **Returns**: 
  - `true` if a subarray with the sum equal to the target exists.
  - `false` otherwise.

#### Example Usage

```javascript
const arr = [4, 2, 7, 1, 9, 5];
const target = 17;
console.log(hasSubarrayWithSum(arr, target)); // Output: true

## How to Run

To run this project, you need to have Node.js installed on your machine.

### 1. Install Node.js
### 2. Open your terminal.
### 3. Write on the terminal "node arrayMap.js"

**stringTransform.js
The project contains a single JavaScript file:
- `stringTransform.js`: Contains the logic for transforming the string based on the specified rules.

## How to Run

To run this project, follow these steps:
### 1.Download the `stringTransform.js` file and place it in a folder named `challenges`.
### 2. Make sure you have Node.js installed on your machine. 
### 3.  Open a terminal (command prompt or shell) and navigate to the `challenges` folder where the `stringTransform.js` and Write node stringTransform.js.


