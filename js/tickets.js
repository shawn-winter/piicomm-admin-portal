// Tickets Management JavaScript
class TicketsManager {
    constructor() {
        this.currentPage = 1;
        this.ticketsPerPage = 10;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadTickets();
    }

    setupEventListeners() {
        const createTicketBtn = document.getElementById('createTicketBtn');
        if (createTicketBtn) {
            createTicketBtn.addEventListener('click', () => this.showTicketModal());
        }

        const searchInput = document.getElementById('searchTickets');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => this.filterTickets(e.target.value));
        }
    }

    showTicketModal(ticket = null) {
        // Create and show ticket modal (implementation would go here)
        console.log('Show ticket modal for:', ticket || 'new ticket');
    }

    async loadTickets() {
        try {
            const tickets = await this.getMockTickets();
            this.renderTicketsTable(tickets);
        } catch (error) {
            console.error('Error loading tickets:', error);
        }
    }

    renderTicketsTable(tickets) {
        const tbody = document.getElementById('ticketsTableBody');
        if (!tbody) return;

        tbody.innerHTML = tickets.map(ticket => {
            return '<tr>' +
                '<td><input type="checkbox" value="' + ticket.id + '"></td>' +
                '<td>#' + ticket.id + '</td>' +
                '<td>' + ticket.title + '</td>' +
                '<td><span class="status-' + ticket.status + '">' + ticket.status + '</span></td>' +
                '<td><span class="priority-' + ticket.priority + '">' + ticket.priority + '</span></td>' +
                '<td>' + (ticket.assignee || 'Unassigned') + '</td>' +
                '<td>' + ticket.requester + '</td>' +
                '<td>' + ticket.created + '</td>' +
                '<td>' +
                    '<button class="btn btn-sm btn-outline" onclick="editTicket(' + ticket.id + ')">Edit</button> ' +
                    '<button class="btn btn-sm btn-secondary" onclick="viewTicket(' + ticket.id + ')">View</button>' +
                '</td>' +
                '</tr>';
        }).join('');
    }

    filterTickets(searchTerm) {
        // Implementation for filtering tickets
        console.log('Filter tickets with:', searchTerm);
    }

    async getMockTickets() {
        return [
            { id: 1001, title: 'Login Issues', status: 'open', priority: 'high', assignee: 'John Doe', requester: 'Customer A', created: '2024-01-15' },
            { id: 1002, title: 'Feature Request', status: 'in-progress', priority: 'medium', assignee: 'Jane Smith', requester: 'Customer B', created: '2024-01-14' },
            { id: 1003, title: 'Bug Report', status: 'resolved', priority: 'low', assignee: 'Bob Johnson', requester: 'Customer C', created: '2024-01-13' }
        ];
    }
}

// Global functions for ticket actions
window.editTicket = (ticketId) => {
    console.log('Edit ticket:', ticketId);
};

window.viewTicket = (ticketId) => {
    console.log('View ticket:', ticketId);
};

// Initialize tickets management
document.addEventListener('DOMContentLoaded', () => {
    new TicketsManager();
});