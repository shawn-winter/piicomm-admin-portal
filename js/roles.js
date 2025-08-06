// Roles Management JavaScript
class RolesManager {
    constructor() {
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadRoles();
    }

    setupEventListeners() {
        const createRoleBtn = document.getElementById('createRoleBtn');
        if (createRoleBtn) {
            createRoleBtn.addEventListener('click', () => this.showRoleModal());
        }
    }

    showRoleModal(role = null) {
        // Create and show role modal (implementation would go here)
        console.log('Show role modal for:', role || 'new role');
    }

    async loadRoles() {
        try {
            const roles = await this.getMockRoles();
            console.log('Loaded roles:', roles);
        } catch (error) {
            console.error('Error loading roles:', error);
        }
    }

    async getMockRoles() {
        return [
            { id: 1, name: 'Admin', description: 'Full system access', userCount: 12, permissions: ['all'] },
            { id: 2, name: 'Manager', description: 'Team management access', userCount: 8, permissions: ['team_management', 'reports'] },
            { id: 3, name: 'Agent', description: 'Support agent access', userCount: 25, permissions: ['tickets', 'basic_reports'] },
            { id: 4, name: 'User', description: 'Basic user access', userCount: 150, permissions: ['create_tickets', 'view_own_tickets'] }
        ];
    }
}

// Global functions for role actions
window.editRole = (roleId) => {
    console.log('Edit role:', roleId);
};

window.viewUsers = (roleId) => {
    console.log('View users for role:', roleId);
    window.location.href = 'users.html?role=' + roleId;
};

// Initialize roles management
document.addEventListener('DOMContentLoaded', () => {
    new RolesManager();
});