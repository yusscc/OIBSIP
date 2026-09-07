# The Ledger — To-Do List Web App

An interactive to-do list application built with HTML, CSS, and vanilla JavaScript as part of Task 3.

📌 **Project Description**

The Ledger is a daily task tracker styled around the idea of keeping accounts: every task is an entry that's either **Open** or **Settled**. It lets users add, edit, complete, and delete tasks, with everything organized into pending and completed lists.

The project demonstrates core web development concepts such as:
- Semantic HTML structure
- CSS custom properties and responsive Flexbox layout
- DOM manipulation and event handling in vanilla JavaScript
- Client-side data persistence with `localStorage`
- Inline editing and state-driven UI updates

✨ **Features**

🎨 **Visual Design**
- **Dark ledger theme**: A deep charcoal-to-black gradient background with a warm amber accent, evoking a nighttime bookkeeping desk.
- **Responsive layout**: Stacks cleanly from desktop down to mobile.
- **Typography**: `Fraunces` (italic serif) for headings paired with `Work Sans` for body and UI text.
- **Quiet interactions**: Task actions (edit/delete) reveal on hover, keeping the list uncluttered.

📖 **Task Management**
- **Add tasks**: Input field plus "Add entry" button; new tasks appear instantly at the top of the Open list.
- **Mark complete**: A single tap moves a task from Open to Settled, stamping it with a completion time.
- **Inline edit**: Click the pencil icon to edit task text directly in place.
- **Delete**: Permanently remove a task from either list.
- **Live counts**: "X pending" and "Y completed" indicators sit above each list.
- **Timestamps**: Every task shows when it was added, and when it was settled.
- **Empty states**: Friendly messaging when a list has no items.
- **Persistence**: Tasks are saved to `localStorage` and survive page refreshes.

🛠️ **Technologies Used**
- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts (`Fraunces`, `Work Sans`)

📂 **Project Structure**

```text
todo-app/
│
├── index.html       # The main structure and content
├── style.css         # The styling and responsive rules
├── script.js          # Task logic, rendering, and localStorage persistence
└── README.md        # Project documentation
```

▶️ **How to Run**

1. Download or clone the project files.
2. Open the project folder in an IDE such as VS Code.
3. Open the `index.html` file in any modern web browser.

No build step or dependencies required — everything runs client-side.

🖥️ **Example Interface**

- **Masthead**: Displays "The Ledger" in an italic serif headline over the day's date.
- **Entry row**: A single input and "Add entry" button for logging new tasks.
- **Open / Settled**: Two sections track pending and completed tasks, each with a live count and timestamps.

📚 **Concepts Practiced**
- Building interactive UI with vanilla JavaScript (no framework)
- State management and re-rendering from a single source of truth
- Persisting application data with the Web Storage API
- Accessible, keyboard-friendly form and button interactions
- Responsive design with CSS custom properties

📌 **Task Information**

Task 3 · To-Do Web App
Tech Stack: HTML5, CSS3, JavaScript (Vanilla)

👩‍💻 **Author**
Yusif Alizada