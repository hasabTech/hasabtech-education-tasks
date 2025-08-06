# hasabTech Education Tasks

A collection of JavaScript programming exercises designed to help learners practice core concepts ranging from basics to advanced.  
This repository supports **task-specific testing** and **PR-based selective CI checks**.

## 📁 Project Structure

```
hasabtech-education-tasks/
│
├── js-basics/
│   ├── tasks/
│   │   ├── task1.js
│   │   ├── task2.js
│   │   ├── task3.js
│   │   └── ...
│   └── tests/
│       ├── task1.test.js
│       ├── task2.test.js
│       └── ...
│
├── js-intermediate/
│   ├── tasks/
│   │   ├── task1.js
│   │   ├── task2.js
│   │   └── ...
│   └── tests/
│       ├── task1.test.js
│       ├── task2.test.js
│       └── ...
│
├── js-advanced/
│   ├── tasks/
│   │   ├── task1.js
│   │   └── ...
│   └── tests/
│       ├── task1.test.js
│       └── ...
│
├── jest.config.js          # Single Jest config handling all folders
├── package.json            # Single package.json for the whole repo
├── README.md
└── .github/
    └── workflows/
        └── test.yml        # GitHub Action workflow
```

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm (comes with Node.js)

### Installation

1. Clone this repository or download the files
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

### Working on Tasks

1. Open the task files in the `tasks/` folder within each section (e.g., `js-basics/tasks/`).
2. Each file contains detailed instructions and examples
3. Uncomment the example code and modify it to complete the task
4. Make sure to export your functions/variables as shown in the examples

### Running Tests

To test your solutions:

```bash

# Run single test
npm test js-basics/tests/task1.test.js

# Run test for specific folder
npm test -- js-basics

# Run all tests
npm test

# Run tests in watch mode (reruns when files change)
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

### Example: Completing Task 1

Open `tasks/task1.js`:

```javascript
// Task 1: Create a variable name and assign your name to it. Export it.

// TODO: Create a variable called 'name' and assign your name as a string
const name = "Your Name Here"; // ← Change this to your actual name

// TODO: Export the name variable
module.exports = { name }; // ← Uncomment this line
```

After completing:

```javascript
// Task 1: Create a variable name and assign your name to it. Export it.

const name = "Alice Johnson";
module.exports = { name };
```

## 🧪 Testing

Each task has comprehensive tests that will:
- Check if functions/variables are properly exported
- Test various input scenarios including edge cases
- Ensure functions return the correct data types
- Validate logic for different conditions

The tests are designed to be helpful learning tools - they'll show you exactly what's expected and help identify any issues with your solutions.

## 🤖 Continuous Integration

This project includes a GitHub Actions workflow that automatically:
- Runs tests on multiple Node.js versions (16, 18, 20)
- Generates test coverage reports
- Runs on every push and pull request

## 📈 Progress Tracking

You can track your progress by running tests:
- ✅ Green tests = Completed tasks
- ❌ Red tests = Tasks that need work
- The test output will guide you on what needs to be fixed

## 💡 Tips for Success

1. **Read the instructions carefully** - Each task has specific requirements
2. **Start simple** - Get the basic functionality working first
3. **Test frequently** - Run tests after each task to get immediate feedback
4. **Don't skip edge cases** - The tests check various scenarios
5. **Ask for help** - If you're stuck, review the examples or seek assistance

## 📚 Additional Resources

- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [Jest Testing Framework](https://jestjs.io/docs/getting-started)
- [Node.js Documentation](https://nodejs.org/en/docs/)


## 🤖 Pull Request Workflow

To ensure CI runs only relevant tests for your changes, follow these steps:

### 1. Create a Branch

Name your branch according to the task/folder you are working on. For example:

```bash
git checkout -b TASK-JS-BASICS-01
```

Make your changes in the appropriate folder (e.g., `js-basics/tasks/...`).

### 2. Commit and Push

```bash
git add .
git commit -m "TASK-JS-BASICS-01 completed"
git push origin TASK-JS-BASICS-01
```

### 3. Open a Pull Request (PR)

When opening your PR, use a title that starts with one of the following prefixes:

- `TASK-JS-BASICS-` → Runs **js-basics** tests only
- `TASK-JS-INTERMEDIATE-` → Runs **js-intermediate** tests only
- `TASK-JS-ADVANCED-` → Runs **js-advanced** tests only
- Any other title → Runs **all tests**

The GitHub Action workflow will automatically detect the prefix and run only the relevant tests for your PR.

---

## 🤝 Contributing

If you find issues or have suggestions for improvements:
1. Open an issue describing the problem
2. Submit a pull request with your fix
3. Follow the existing code style and testing patterns

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Happy Coding! 🚀**
