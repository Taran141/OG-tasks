
function showForm(id) {
    document.getElementById(id).style.display = "flex";
}
function hideForm(id) {
    document.getElementById(id).style.display = "none";
}

// Save and get user from localStorage
function saveUser(user) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
}
function getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
}

// Handle Sign Up
function handleSignUp(event) {
    event.preventDefault();
    const name = event.target.elements["name"].value;
    const email = event.target.elements["email"].value;
    const password = event.target.elements["password"].value;
    const confirmPassword = event.target.elements["confirm-password"].value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    const users = getUsers();
    if (users.some(user => user.email === email)) {
        alert("Email already registered!");
        return;
    }

    saveUser({ name, email, password });
    alert("User registered successfully!");
    event.target.reset();
    hideForm("sign-up-form");
}

// Handle Login
function handleLogin(event) {
    event.preventDefault();
    const email = event.target.elements["email"].value;
    const password = event.target.elements["password"].value;

    const users = getUsers();
    const validUser = users.find(user => user.email === email && user.password === password);

    if (validUser) {
        localStorage.setItem("loggedInUser", email);
        alert("Login successful!");
        hideForm("login-form");
        showElement("todo-section");
        loadTodoList();
    } else {
        alert("Invalid credentials!");
    }
}

// Handle Logout
function handleLogout() {
    localStorage.removeItem("loggedInUser");
    alert("Logged out successfully!");
    hideElement("todo-section");
}


function showElement(id) {
    document.getElementById(id).style.display = "block";
}
function hideElement(id) {
    document.getElementById(id).style.display = "none";
}

// Todo List Functions
const todoLists = document.querySelector(".todoList");
const listValue = document.querySelector(".todoValue");
let todoListValue = [];

function getTodoListLocalStorage() {
    const email = localStorage.getItem("loggedInUser");
    if (!email) return [];
    return JSON.parse(localStorage.getItem(email + "_todos")) || [];
}

function addTodoListLocalStorage(todo) {
    const email = localStorage.getItem("loggedInUser");
    if (!email) return;
    localStorage.setItem(email + "_todos", JSON.stringify(todo));
}

function showTodoList() {
    todoListValue = getTodoListLocalStorage();
    todoLists.innerHTML = "";
    todoListValue.forEach((curTodo) => {
        const LiElement = document.createElement("li");
        LiElement.innerHTML = curTodo;
        LiElement.addEventListener("click", removeTodoList);
        todoLists.append(LiElement);
    });
}

function removeTodoList(e) {
    let currentValue = e.target.textContent;
    todoListValue = todoListValue.filter(todo => todo !== currentValue);
    addTodoListLocalStorage(todoListValue);
    showTodoList();
}

function addTodoList(e) {
    e.preventDefault();
    let newTodo = listValue.value.trim();
    listValue.value = "";
    
    if (newTodo.length !== 0 && !todoListValue.includes(newTodo)) {
        todoListValue.push(newTodo);
        addTodoListLocalStorage(todoListValue);
        showTodoList();
    }
}

document.querySelector(".btn").addEventListener("click", addTodoList);

document.getElementById("sign-up-form").addEventListener("submit", handleSignUp);
document.getElementById("login-form").addEventListener("submit", handleLogin);
document.getElementById("logout-btn").addEventListener("click", handleLogout);

// Load todo list after login
function loadTodoList() {
    if (localStorage.getItem("loggedInUser")) {
        showTodoList();
        showElement("todo-section");
    }
}

// Initialize check
if (localStorage.getItem("loggedInUser")) {
    showElement("todo-section");
    loadTodoList();
}