// Authentication JavaScript
class AuthManager {
    constructor() {
        this.init();
    }

    init() {
        this.setupEventListeners();
    }

    setupEventListeners() {
        const loginForm = document.getElementById('loginForm');
        const registerForm = document.getElementById('registerForm');
        const createAccountBtn = document.getElementById('createAccount');
        const backToLoginBtn = document.getElementById('backToLogin');

        if (loginForm) {
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleLogin(e);
            });
        }

        if (registerForm) {
            registerForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleRegister(e);
            });
        }

        if (createAccountBtn) {
            createAccountBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.showRegisterForm();
            });
        }

        if (backToLoginBtn) {
            backToLoginBtn.addEventListener('click', () => {
                this.showLoginForm();
            });
        }
    }

    async handleLogin(e) {
        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password');

        try {
            // Simulate API call - replace with actual API integration
            const response = await this.mockLogin(email, password);
            
            if (response.success) {
                localStorage.setItem('piicomm_token', response.token);
                localStorage.setItem('piicomm_user', JSON.stringify(response.user));
                this.showMessage('Login successful!', 'success');
                
                setTimeout(() => {
                    window.location.href = 'dashboard.html';
                }, 1500);
            } else {
                this.showMessage(response.message, 'error');
            }
        } catch (error) {
            console.error('Login error:', error);
            this.showMessage('Login failed. Please try again.', 'error');
        }
    }

    async handleRegister(e) {
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        if (data.password !== data.confirmPassword) {
            this.showMessage('Passwords do not match', 'error');
            return;
        }

        try {
            // Simulate API call - replace with actual API integration
            const response = await this.mockRegister(data);
            
            if (response.success) {
                this.showMessage('Account created successfully!', 'success');
                this.showLoginForm();
            } else {
                this.showMessage(response.message, 'error');
            }
        } catch (error) {
            console.error('Register error:', error);
            this.showMessage('Registration failed. Please try again.', 'error');
        }
    }

    showRegisterForm() {
        document.getElementById('loginForm').classList.add('hidden');
        document.getElementById('registerForm').classList.remove('hidden');
    }

    showLoginForm() {
        document.getElementById('registerForm').classList.add('hidden');
        document.getElementById('loginForm').classList.remove('hidden');
    }

    // Mock API functions - replace with actual API calls
    async mockLogin(email, password) {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Demo credentials
        if (email === 'admin@piicomm.com' && password === 'admin123') {
            return {
                success: true,
                token: 'mock-jwt-token-' + Date.now(),
                user: {
                    id: 1,
                    email: email,
                    name: 'Admin User',
                    role: 'admin'
                }
            };
        }
        
        return {
            success: false,
            message: 'Invalid credentials'
        };
    }

    async mockRegister(data) {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock validation
        if (data.adminKey !== 'piicomm2024') {
            return {
                success: false,
                message: 'Invalid admin access key'
            };
        }
        
        return {
            success: true,
            message: 'Account created successfully'
        };
    }

    showMessage(message, type = 'info') {
        const container = document.getElementById('messageContainer');
        if (!container) return;
        
        const messageEl = document.createElement('div');
        messageEl.className = 'message ' + type;
        messageEl.innerHTML = '<span>' + message + '</span>' +
            '<button onclick="this.parentElement.remove()" style="float: right; background: none; border: none; font-size: 1.2rem; cursor: pointer;">&times;</button>';
        
        container.appendChild(messageEl);
        
        setTimeout(() => {
            if (messageEl.parentElement) {
                messageEl.remove();
            }
        }, 5000);
    }
}

// Initialize authentication
document.addEventListener('DOMContentLoaded', () => {
    new AuthManager();
});