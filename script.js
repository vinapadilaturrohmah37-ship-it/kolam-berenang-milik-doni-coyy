// Data Akun
const accounts = [
    { username: "doni anjay", password: "admin123", role: "admin" },
    { username: "user", password: "user123", role: "user" }
];

// Tampilkan halaman tertentu
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

// Fungsi Login
function login() {
    const usernameInput = document.getElementById('username').value.trim();
    const passwordInput = document.getElementById('password').value;
    const errorMsg = document.getElementById('errorMsg');

    const account = accounts.find(acc => 
        acc.username === usernameInput && acc.password === passwordInput
    );

    if (account) {
        if (account.role === "admin") {
            showPage('adminPage');
        } else {
            showPage('userPage');
        }
        localStorage.setItem("currentUser", account.username);
    } else {
        errorMsg.textContent = "❌ Nama pengguna atau kata sandi salah!";
    }
}

// Fungsi Logout
function logout() {
    localStorage.removeItem("currentUser");
    document.getElementById('username').value = "";
    document.getElementById('password').value = "";
    document.getElementById('errorMsg').textContent = "";
    showPage('loginPage');
}

