// DOM Elements
const profileBtn = document.getElementById('profile-btn');
const profileDropdown = document.getElementById('profile-dropdown');
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const userMenu = document.getElementById('user-menu');
const logoutBtn = document.getElementById('logout-btn');
const authOverlay = document.getElementById('auth-overlay');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const closeLogin = document.getElementById('close-login');
const closeSignup = document.getElementById('close-signup');
const switchToSignup = document.getElementById('switch-to-signup');
const switchToLogin = document.getElementById('switch-to-login');

// Toggle dropdown visibility
profileBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    profileDropdown.classList.toggle('hidden');
});

// Close dropdown when clicking outside
document.addEventListener('click', () => {
    if (!profileDropdown.classList.contains('hidden')) {
        profileDropdown.classList.add('hidden');
    }
});

// Show login form
loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    profileDropdown.classList.add('hidden');
    authOverlay.classList.remove('hidden');
    loginForm.classList.remove('hidden');
    signupForm.classList.add('hidden');
});

// Show signup form
signupBtn.addEventListener('click', (e) => {
    e.preventDefault();
    profileDropdown.classList.add('hidden');
    authOverlay.classList.remove('hidden');
    signupForm.classList.remove('hidden');
    loginForm.classList.add('hidden');
});

// Close forms
const closeAllModals = () => {
    authOverlay.classList.add('hidden');
    loginForm.classList.add('hidden');
    signupForm.classList.add('hidden');
};

closeLogin.addEventListener('click', closeAllModals);
closeSignup.addEventListener('click', closeAllModals);

// Switch between forms
switchToSignup.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.classList.add('hidden');
    signupForm.classList.remove('hidden');
});

switchToLogin.addEventListener('click', (e) => {
    e.preventDefault();
    signupForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
});

// Close when clicking overlay
authOverlay.addEventListener('click', (e) => {
    if (e.target === authOverlay) {
        closeAllModals();
    }
});

// Form submissions
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (email && password) {
        closeAllModals();
        showToastMessage("Login successful!");
        
        // Update UI for logged in user
        loginBtn.classList.add('hidden');
        signupBtn.classList.add('hidden');
        userMenu.classList.remove('hidden');
        
        // Reset form
        e.target.reset();
    } else {
        showToastMessage("Please fill in all fields", "error");
    }
});

document.getElementById('signup-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm').value;

    if (!name || !email || !password || !confirmPassword) {
        showToastMessage("Please fill in all fields", "error");
        return;
    }

    if (password !== confirmPassword) {
        showToastMessage("Passwords don't match", "error");
        return;
    }

    closeAllModals();
    showToastMessage("Account created successfully!");
    
    // Update UI for logged in user
    loginBtn.classList.add('hidden');
    signupBtn.classList.add('hidden');
    userMenu.classList.remove('hidden');
    
    // Reset form
    e.target.reset();
});

// Logout functionality
logoutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showToastMessage("Logged out successfully!");
    
    // Update UI for logged out user
    userMenu.classList.add('hidden');
    loginBtn.classList.remove('hidden');
    signupBtn.classList.remove('hidden');
});

// Improved toast message function
function showToastMessage(message, type = "success") {
    const toast = document.createElement('div');
    toast.className = `fixed top-4 right-4 px-4 py-2 rounded-md shadow-md text-white ${
        type === "success" ? "bg-green-500" : "bg-red-500"
    }`;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('opacity-0', 'transition-opacity', 'duration-300');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}