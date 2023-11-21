# To-Do List

This To-Do list application allows users to manage their tasks effectively. Users can add, delete, mark as completed, and filter tasks based on their status (active, completed, or all tasks).

## Description

The To-Do list application provides a simple and intuitive interface to manage tasks. Users can add new tasks by entering text and pressing enter. Tasks can be marked as completed by checking the checkboxes next to them. The app also offers filtering options to view all tasks, active tasks, or completed tasks separately.

## Features

- **Add Tasks**: Enter a task in the input field and press enter to add it to the list.
- **Mark as Completed**: Check the checkbox to mark a task as completed, which strikes through the task text.
- **Filtering**: Filter tasks based on their status - all tasks, active tasks, or completed tasks.
- **Remove Completed**: Clear all completed tasks with the "Clear Completed" button.

## Usage

1. Enter a task in the input field and press enter to add it to the list.
2. Check the checkbox to mark a task as completed.
3. Use the "All," "Active," and "Completed" buttons to filter tasks based on their status.
4. Click the "Clear Completed" button to remove all completed tasks.

## Technologies Used

- HTML
- CSS
- JavaScript
- Selenium for automated testing

## Project Structure

- `index.html`: Contains the structured layout for the To-Do list and input form.
- `style.css`: Defines the styles and layout for the HTML content.
- `main.js`: Contains the JavaScript logic for managing tasks, adding, deleting, and filtering them.
- `EdgeDriverTest`: Includes automated tests using Microsoft Edge WebDriver and Selenium for testing the application's functionality.

## Testing

The project includes automated testing using Selenium, Microsoft Edge WebDriver, and MSTest framework to ensure the functionality and correctness of the To-Do list application. The tests include scenarios for adding tasks, checking remaining tasks, and filtering tasks based on their status.

## How to Run Tests

Ensure you have the Microsoft Edge WebDriver installed and configured. The tests can be run by executing the test suite provided in the `EdgeDriverTest` class.
