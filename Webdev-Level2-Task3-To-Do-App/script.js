(function () {
    "use strict";

    const STORAGE_KEY = "ledger-tasks-v1";

    const entryForm = document.getElementById("entryForm");
    const taskInput = document.getElementById("taskInput");
    const pendingList = document.getElementById("pendingList");
    const completedList = document.getElementById("completedList");
    const pendingCount = document.getElementById("pendingCount");
    const completedCount = document.getElementById("completedCount");
    const pendingEmpty = document.getElementById("pendingEmpty");
    const completedEmpty = document.getElementById("completedEmpty");
    const todayDate = document.getElementById("todayDate");

    /** @type {{id:string, text:string, completed:boolean, createdAt:number, completedAt:number|null}[]} */
    let tasks = loadTasks();

    function loadTasks() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            return raw ? JSON.parse(raw) : [];
        } catch (err) {
            console.error("Could not read saved tasks:", err);
            return [];
        }
    }

    function saveTasks() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
        } catch (err) {
            console.error("Could not save tasks:", err);
        }
    }

    function uid() {
        return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
    }

    function formatTimestamp(ms) {
        if (!ms) return "";
        const d = new Date(ms);
        const datePart = d.toLocaleDateString(undefined, { month: "short", day: "numeric" });
        const timePart = d.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" });
        return `${datePart}, ${timePart}`;
    }

    function setTodayDate() {
        todayDate.textContent = new Date().toLocaleDateString(undefined, {
            weekday: "long",
            month: "long",
            day: "numeric",
        });
    }

    const checkIcon = `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 8.5L6.2 11.5L13 4.5" stroke="#221a0c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
    const editIcon = `<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 3.5L16.5 6.5L7 16L3.5 16.5L4 13L13.5 3.5Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>`;
    const deleteIcon = `<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 6H15.5M8 6V4.5H12V6M6 6L6.6 15H13.4L14 6" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

    function buildTaskRow(task) {
        const li = document.createElement("li");
        li.className = "task" + (task.completed ? " task--settled" : "");
        li.dataset.id = task.id;

        const metaLabel = task.completed
            ? `Added ${formatTimestamp(task.createdAt)} · Settled ${formatTimestamp(task.completedAt)}`
            : `Added ${formatTimestamp(task.createdAt)}`;

        li.innerHTML = `
      <button type="button" class="task__check" aria-label="${task.completed ? "Mark as open" : "Mark as settled"}">
        ${checkIcon}
      </button>
      <div class="task__body">
        <p class="task__text">${escapeHtml(task.text)}</p>
        <p class="task__meta">${metaLabel}</p>
      </div>
      <div class="task__actions">
        <button type="button" class="task__action task__action--edit" aria-label="Edit task">${editIcon}</button>
        <button type="button" class="task__action task__action--delete" aria-label="Delete task">${deleteIcon}</button>
      </div>
    `;

        li.querySelector(".task__check").addEventListener("click", () => toggleComplete(task.id));
        li.querySelector(".task__action--delete").addEventListener("click", () => deleteTask(task.id));
        li.querySelector(".task__action--edit").addEventListener("click", () => startEdit(li, task));

        return li;
    }

    function escapeHtml(str) {
        const div = document.createElement("div");
        div.textContent = str;
        return div.innerHTML;
    }

    function startEdit(li, task) {
        const body = li.querySelector(".task__body");
        const original = body.innerHTML;

        body.innerHTML = `<input type="text" class="task__edit-input" maxlength="140" value="${escapeHtml(task.text)}">`;
        const input = body.querySelector("input");
        input.focus();
        input.setSelectionRange(input.value.length, input.value.length);

        function commit() {
            const newText = input.value.trim();
            if (newText) {
                task.text = newText;
                saveTasks();
            }
            render();
        }

        input.addEventListener("keydown", (e) => {
            if (e.key === "Enter") commit();
            if (e.key === "Escape") { body.innerHTML = original; }
        });
        input.addEventListener("blur", commit);
    }

    function addTask(text) {
        tasks.unshift({
            id: uid(),
            text,
            completed: false,
            createdAt: Date.now(),
            completedAt: null,
        });
        saveTasks();
        render();
    }

    function toggleComplete(id) {
        const task = tasks.find((t) => t.id === id);
        if (!task) return;
        task.completed = !task.completed;
        task.completedAt = task.completed ? Date.now() : null;
        saveTasks();
        render();
    }

    function deleteTask(id) {
        tasks = tasks.filter((t) => t.id !== id);
        saveTasks();
        render();
    }

    function render() {
        const pending = tasks.filter((t) => !t.completed);
        const completed = tasks.filter((t) => t.completed).sort((a, b) => (b.completedAt || 0) - (a.completedAt || 0));

        pendingList.innerHTML = "";
        completedList.innerHTML = "";

        pending.forEach((t) => pendingList.appendChild(buildTaskRow(t)));
        completed.forEach((t) => completedList.appendChild(buildTaskRow(t)));

        pendingCount.textContent = `${pending.length} pending`;
        completedCount.textContent = `${completed.length} completed`;

        pendingEmpty.classList.toggle("is-visible", pending.length === 0);
        completedEmpty.classList.toggle("is-visible", completed.length === 0);
    }

    entryForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const text = taskInput.value.trim();
        if (!text) return;
        addTask(text);
        taskInput.value = "";
        taskInput.focus();
    });

    setTodayDate();
    render();
})();