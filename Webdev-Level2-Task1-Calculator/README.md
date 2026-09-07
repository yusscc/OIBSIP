# Calculator Interface

A fully functional, browser-based calculator featuring a sleek, responsive design and robust arithmetic processing. 

📌 **Project Description**

The Calculator Interface allows users to perform basic arithmetic operations with an elegant, modern UI. It features both Light and Dark modes, operator chaining, and real-time expression evaluation.

The project demonstrates core web development concepts such as:
- DOM Manipulation
- CSS Grid & Responsive Layouts
- Event Listeners & State Management
- Safe Mathematical Evaluation
- Error Handling (e.g., Division by Zero)

✨ **Features**

🧮 **Basic & Advanced Operations**
- Perform addition (+), subtraction (−), multiplication (×), and division (÷).
- Support for decimals and percentages.
- Parenthesis handling for complex expressions.

💡 **Dynamic User Interface**
- **Light & Dark Mode**: Toggle between beautifully designed light and dark themes matching modern mobile design paradigms.
- **Live Preview**: See the calculated result update in real-time as you type the expression.
- **Responsive Layout**: Uses CSS Grid for perfect button alignment across devices.

🛡️ **Robust Error Handling**
- **Prevent Division-by-Zero**: Displays a clean "Error" message instead of crashing or showing NaN.
- **Operator Chaining**: Allow sequential operations (e.g., `5 + 3 × 2`) without requiring a full reset.
- **Safe Parsing**: Automatically fixes missing closing parentheses and handles implicit multiplication (e.g., `2(3)`).

🛠️ **Technologies Used**
- HTML5
- CSS3 (CSS Variables, Flexbox, Grid)
- JavaScript (Vanilla, ES6)

📂 **Project Structure**

```text
calculator/
│
├── index.html       # The main HTML structure
├── style.css        # Styles including Light/Dark theme variables
├── script.js        # Core logic, state management, and DOM updates
└── README.md        # Project documentation
```

▶️ **How to Run**

1. Clone this repository or download the files:
   ```bash
   git clone <https://github.com/yusscc/OIBSIP.git>
   ```
2. Open the project in an IDE such as VS Code.
3. Open `index.html` in your favorite web browser. No server setup is required!

🖥️ **Example Operations**
- **Chaining**: Press `5`, `+`, `3`, `×`, `2`, `=`. Result: `11`.
- **Division by Zero**: Press `8`, `÷`, `0`, `=`. Result: `Error`.
- **Percentages**: Press `5`, `0`, `%`. Result: `0.5`.

📚 **Concepts Practiced**
- Semantic HTML
- CSS Custom Properties (Variables)
- Layout design using CSS Grid
- JS Event Delegation and handling
- Algorithmic thinking for expression parsing
- Handling edge cases in string evaluation

👩‍💻 **Author**
Yusif Alizada
