# Palindrome Checker
A simple web application that checks if a given text is a palindrome — a word, phrase, or sequence that reads the same backward as forward.

### 🖥️ Project Overview
This project consists of:

A clean HTML structure for input and output display.

CSS styling for a centered, dark-themed user interface.

JavaScript logic to verify if the user input is a palindrome, ignoring non-alphanumeric characters and case sensitivity.

### 🚀 Live Features
Input a word or phrase into the text field.

Click the Check button to verify if it is a palindrome.

The result will be displayed dynamically below the input field.

Alerts the user if they attempt to check without entering any text.

### 📂 Project Structure
pgsql
Copy
Edit
/
├── index.html
├── styles.css
└── script.js
index.html — Sets up the basic webpage structure.

styles.css — Adds responsive, centered styling with a dark color scheme.

script.js — Handles the palindrome checking functionality.

### 🔧 How It Works
Listens for a click on the "Check" button.

Validates the input to ensure it is not empty.

Removes all non-alphanumeric characters and ignores case.

Compares characters from the start and end of the string moving inward.

Displays the result indicating whether the input is a palindrome.

### 📜 Example
Input: Racecar

Output: Racecar is a palindrome

Input: Hello

Output: Hello is not a palindrome

### 🛠️ Technologies Used
HTML5

CSS3

Vanilla JavaScript (ES6)

### 📈 Future Improvements
Add real-time validation as the user types.

Allow for pressing "Enter" to trigger the check.

Add animations or visual feedback on success/failure

Improve UI
