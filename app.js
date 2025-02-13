const correctUsername = "12341234";
const correctPassword = "12341234";

let teachers = [{ username: "12341234", password: "12341234" }];
let students = [];

const loginForm = document.getElementById("loginForm");
const dashboard = document.getElementById("dashboard");
const errorMessage = document.getElementById("errorMessage");
const teacherNameSpan = document.getElementById("teacherName");
const logoutBtn = document.getElementById("logoutBtn");
const attendanceTable = document.getElementById("attendanceTable");

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const teacher = teachers.find(t => t.username === username && t.password === password);
    
    if (teacher) {
        document.querySelector(".login-container").style.display = "none";
        dashboard.style.display = "block";
        teacherNameSpan.textContent = username;
    } else {
        errorMessage.textContent = "Invalid username or password!";
    }
});

logoutBtn.addEventListener("click", () => {
    document.querySelector(".login-container").style.display = "block";
    dashboard.style.display = "none";
});

document.getElementById("addStudentBtn").addEventListener("click", () => {
    const studentName = document.getElementById("studentNameInput").value;
    if (studentName) {
        students.push({ name: studentName, present: false });
        updateStudentList();
    }
});

document.getElementById("saveAttendanceBtn").addEventListener("click", () => {
    console.log("Attendance saved!", students);
    alert("Attendance has been saved successfully!");
});

document.getElementById("changePasswordBtn").addEventListener("click", () => {
    const newPassword = document.getElementById("newPassword").value;
    if (newPassword) {
        teachers[0].password = newPassword;
        alert("Password changed successfully!");
    }
});

function updateStudentList() {
    attendanceTable.innerHTML = "";
    students.forEach((student, index) => {
        const row = attendanceTable.insertRow();
        row.insertCell(0).textContent = student.name;
        const presentCell = row.insertCell(1);
        const presentCheckbox = document.createElement("input");
        presentCheckbox.type = "checkbox";
        presentCell.appendChild(presentCheckbox);
    });
}

