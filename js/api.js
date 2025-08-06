// API Integration JavaScript
class API {
    constructor() {
        this.baseURL = 'https://eoxxx.m.pipedream.net';
        this.token = localStorage.getItem('piicomm_token');
    }

    async request(endpoint, options = {}) {
        const url = this.baseURL + endpoint;
        const config = {
            headers: {
                'Content-Type': 'application/json',
                ...(this.token && { 'Authorization': 'Bearer ' + this.token })
            },
            ...options
        };

        try {
            const response = await fetch(url, config);
            
            if (!response.ok) {
                throw new Error('HTTP error! status: ' + response.status);
            }
            
            return await response.json();
        } catch (error) {
            console.error('API request failed:', error);
            
            // Return mock data for demonstration
            return this.getMockData(endpoint);
        }
    }

    // User API methods
    async getUsers() {
        return this.request('/api/users');
    }

    async createUser(userData) {
        return this.request('/api/users', {
            method: 'POST',
            body: JSON.stringify(userData)
        });
    }

    async updateUser(userId, userData) {
        return this.request('/api/users/' + userId, {
            method: 'PUT',
            body: JSON.stringify(userData)
        });
    }

    async deleteUser(userId) {
        return this.request('/api/users/' + userId, {
            method: 'DELETE'
        });
    }

    // Ticket API methods
    async getTickets() {
        return this.request('/api/tickets');
    }

    async createTicket(ticketData) {
        return this.request('/api/tickets', {
            method: 'POST',
            body: JSON.stringify(ticketData)
        });
    }

    async updateTicket(ticketId, ticketData) {
        return this.request('/api/tickets/' + ticketId, {
            method: 'PUT',
            body: JSON.stringify(ticketData)
        });
    }

    // Role API methods
    async getRoles() {
        return this.request('/api/roles');
    }

    async createRole(roleData) {
        return this.request('/api/roles', {
            method: 'POST',
            body: JSON.stringify(roleData)
        });
    }

    // Auth API methods
    async getCurrentUser() {
        return this.request('/api/auth/me');
    }

    async login(credentials) {
        return this.request('/api/auth/login', {
            method: 'POST',
            body: JSON.stringify(credentials)
        });
    }

    async logout() {
        return this.request('/api/auth/logout', {
            method: 'POST'
        });
    }

    // Dashboard API methods
    async getDashboardStats() {
        return this.request('/api/dashboard/stats');
    }

    async getRecentActivity() {
        return this.request('/api/dashboard/activity');
    }

    // Mock data for demonstration
    getMockData(endpoint) {
        const mockData = {
            '/api/users': [
                { id: 1, name: 'John Doe', email: 'john@example.com', role: 'admin', status: 'active', lastLogin: '2 hours ago' },
                { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'manager', status: 'active', lastLogin: '1 day ago' }
            ],
            '/api/tickets': [
                { id: 1001, title: 'Login Issues', status: 'open', priority: 'high', assignee: 'John Doe', requester: 'Customer A', created: '2024-01-15' },
                { id: 1002, title: 'Feature Request', status: 'in-progress', priority: 'medium', assignee: 'Jane Smith', requester: 'Customer B', created: '2024-01-14' }
            ],
            '/api/roles': [
                { id: 1, name: 'Admin', description: 'Full system access', userCount: 12 },
                { id: 2, name: 'Manager', description: 'Team management access', userCount: 8 }
            ],
            '/api/auth/me': {
                id: 1,
                name: 'Admin User',
                email: 'admin@piicomm.com',
                role: 'admin'
            },
            '/api/dashboard/stats': {
                totalUsers: 195,
                activeTickets: 24,
                pendingReviews: 7,
                systemHealth: 98.5
            },
            '/api/dashboard/activity': [
                { id: 1, type: 'user', title: 'New user registered:', description: 'john.doe@company.com', timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString() },
                { id: 2, type: 'ticket', title: 'Ticket #1247 resolved', description: 'by Sarah Williams', timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString() }
            ]
        };

        return Promise.resolve(mockData[endpoint] || {});
    }
}

// Create global API instance
window.API = new API();