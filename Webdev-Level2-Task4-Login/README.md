# Login Authentication System
A client-side user authentication system built with HTML, CSS, and JavaScript as part of the Oasis Infobyte Internship Program.

📌 **Project Description**
The Login Authentication System is a front-end only application that simulates a real-world sign-up and sign-in flow. Users can register an account, log in with their credentials, and access a protected dashboard page that is only reachable once authenticated.

The project demonstrates core web development concepts such as:
- Form handling and validation with vanilla JavaScript
- Client-side data persistence using `localStorage`
- Password hashing with the Web Crypto API (SHA-256)
- Session handling and protected route redirection
- Clean, responsive UI design with CSS

✨ **Features**

🎨 **Visual Design**
- **Modern UI**: Clean card-based layout with a red-and-dark gradient theme.
- **Responsive Layout**: Adjusts smoothly across mobile, tablet, and desktop screens.
- **Consistent Styling**: Shared stylesheet across login, registration, and dashboard pages for a cohesive look.

🔐 **Authentication Content**
- **Registration Page**: Collects username, email, and password with a "Register" button.
- **Password Rules**: Enforces a minimum of 8 characters with at least 1 number.
- **Duplicate Detection**: Blocks registration if the username or email is already in use.
- **Login Page**: Accepts username or email plus password with a "Login" button.
- **Generic Error Handling**: Shows a single "Invalid username/email or password" message without revealing which field was wrong.
- **Protected Dashboard**: Only reachable with an active session; direct access without logging in redirects back to the login page.
- **Logout**: Clears the active session and returns the user to the login page.
- **Secure Storage**: Passwords are hashed with SHA-256 before being saved — never stored in plain text.
- **Form Validation**: Prevents empty submissions on both registration and login forms.

🛠️ **Technologies Used**
- HTML5
- CSS3
- JavaScript (Vanilla, Web Crypto API)
- Browser `localStorage`

📂 **Project Structure**

```
login-auth-system/
│
├── index.html        # Login page
├── register.html      # Registration page
├── dashboard.html      # Protected dashboard page
├── style.css         # Shared styling and responsive rules
├── auth.js          # Shared authentication logic (hashing, session, storage)
└── README.md         # Project documentation
```

▶️ **How to Run**

1. Clone this repository: `bash git clone <https://github.com/yusscc/OIBSIP.git>`
2. Open the project in an IDE such as VS Code.
3. Open the `index.html` file in any modern web browser.

🖥️ **Example Interface**

* **Login Page**: Username/email and password fields with a "Login" button and a link to register.
* **Registration Page**: Username, email, and password fields with live validation feedback.
* **Dashboard**: Displays a personalized welcome message and a "Logout" button, accessible only after a successful login.

📚 **Concepts Practiced**
- Client-side authentication flow design
- Form validation and error handling
- Password hashing and secure storage practices
- Session management using `localStorage`
- Route protection and redirect logic

📌 **Internship Information**
This project was developed for:
Oasis Infobyte Internship Program
Track: Web Development
Task 4: Login Authentication System

👩‍💻 **Author**
Yusif Alizada