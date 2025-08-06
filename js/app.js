// Main Application JavaScript
class PiiCommAdmin {
    constructor() {
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupQuickActions();
    }

    setupEventListeners() {
        // Navigation toggle for mobile
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav-menu');
        
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
            });
        }

        // Logout functionality
        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.logout();
            });
        }
    }

    setupQuickActions() {
        // Export data functionality
        window.exportData = () => {
            this.exportData();
        };

        // System maintenance
        window.systemMaintenance = () => {
            this.systemMaintenance();
        };
    }

    async exportData() {
        try {
            const data = {
                users: [],
                tickets: [],
                roles: [],
                timestamp: new Date().toISOString()
            };
            
            const blob = new Blob([JSON.stringify(data, null, 2)], { 
                type: 'application/json' 
            });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'piicomm-export-' + new Date().toISOString().split('T')[0] + '.json';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            
            this.showMessage('Data exported successfully', 'success');
        } catch (error) {
            console.error('Export error:', error);
            this.showMessage('Error exporting data', 'error');
        }
    }

    async systemMaintenance() {
        if (confirm('This will put the system in maintenance mode. Continue?')) {
            this.showMessage('Maintenance mode would be enabled in production', 'info');
        }
    }

    logout() {
        localStorage.removeItem('piicomm_token');
        localStorage.removeItem('piicomm_user');
        window.location.href = 'login.html';
    }

    showMessage(message, type = 'info') {
        const container = document.getElementById('messageContainer') || 
                         this.createMessageContainer();
        
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

    createMessageContainer() {
        const container = document.createElement('div');
        container.id = 'messageContainer';
        container.className = 'message-container';
        document.body.appendChild(container);
        return container;
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    window.PiiCommApp = new PiiCommAdmin();
});