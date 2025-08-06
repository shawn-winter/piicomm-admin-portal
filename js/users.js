// Users Management JavaScript
class UsersManager {
    constructor() {
        this.currentPage = 1;
        this.usersPerPage = 10;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadUsers();
    }

    setupEventListeners() {
        const addUserBtn = document.getElementById('addUserBtn');
        if (addUserBtn) {
            addUserBtn.addEventListener('click', () => this.showUserModal());
        }

        const searchInput = document.getElementById('searchUsers');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => this.filterUsers(e.target.value));
        }
    }

    showUserModal(user = null) {
        // Create and show user modal (implementation would go here)
        console.log('Show user modal for:', user || 'new user');
    }

    async loadUsers() {
        try {
            const users = await this.getMockUsers();
            this.renderUsersTable(users);
        } catch (error) {
            console.error('Error loading users:', error);
        }
    }

    renderUsersTable(users) {
        const tbody = document.getElementById('usersTableBody');
        if (!tbody) return;

        tbody.innerHTML = users.map(user => {
            return '<tr>' +
                '<td><input type="checkbox" value="' + user.id + '"></td>' +
                '<td>' + user.name + '</td>' +
                '<td>' + user.email + '</td>' +
                '<td><span class="role-badge">' + user.role + '</span></td>' +
                '<td><span class="status-' + user.status + '">' + user.status + '</span></td>' +
                '<td>' + user.lastLogin + '</td>' +
                '<td>' +
                    '<button class="btn btn-sm btn-outline" onclick="editUser(' + user.id + ')">Edit</button> ' +
                    '<button class="btn btn-sm btn-secondary" onclick="deleteUser(' + user.id + ')">Delete</button>' +
                '</td>' +
                '</tr>';
        }).join('');
    }

    filterUsers(searchTerm) {
        // Implementation for filtering users
        console.log('Filter users with:', searchTerm);
    }

    async getMockUsers() {
        return [
            { id: 1, name: 'John Doe', email: 'john@example.com', role: 'admin', status: 'active', lastLogin: '2 hours ago' },
            { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'manager', status: 'active', lastLogin: '1 day ago' },
            { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'agent', status: 'inactive', lastLogin: '5 days ago' }
        ];
    }
}

// Global functions for user actions
window.editUser = (userId) => {
    console.log('Edit user:', userId);
};

window.deleteUser = (userId) => {
    if (confirm('Are you sure you want to delete this user?')) {
        console.log('Delete user:', userId);
    }
};

// Initialize users management
document.addEventListener('DOMContentLoaded', () => {
    new UsersManager();
});