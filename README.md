# PiiComm Service Management System - Admin Portal

A comprehensive administrative interface for the PiiComm Service Management System, featuring user management, role assignment, and ticket administration capabilities.

## Features

### 🏠 Landing Page
- Clean, professional design with feature overview
- Direct access to admin login and dashboard
- Responsive layout for all devices

### 🔐 Authentication System
- Secure admin login with email/password
- User registration with admin access key validation
- Session management with local storage
- Password recovery functionality

### 📊 Admin Dashboard
- Real-time statistics and metrics
- System health monitoring
- Recent activity feed
- Quick action buttons for common tasks
- Interactive charts for ticket status distribution

### 👥 User Management
- Complete user CRUD operations
- Role-based access control
- User status management (Active/Inactive/Pending)
- Advanced search and filtering
- Bulk user operations
- User import/export capabilities

### 🎫 Ticket Administration
- Full ticket lifecycle management
- Ticket assignment and reassignment
- Priority and status management
- Bulk ticket operations
- Advanced filtering and search
- Ticket creation and editing forms

### 🛡️ Role Management
- Flexible role-based permission system
- Visual permissions matrix
- Custom role creation
- Permission group management
- Role assignment to users

## Technology Stack

- **Frontend**: Pure HTML5, CSS3, and JavaScript (ES6+)
- **Styling**: CSS Grid, Flexbox, CSS Variables
- **Icons**: Unicode emojis and CSS-based icons
- **Charts**: HTML5 Canvas for data visualization
- **Storage**: Local Storage for session management
- **Responsive**: Mobile-first responsive design

## File Structure

```
/
├── index.html              # Landing page
├── login.html              # Authentication page
├── dashboard.html          # Main dashboard
├── users.html              # User management
├── tickets.html            # Ticket management
├── roles.html              # Role management
├── css/
│   └── styles.css          # Main stylesheet
├── js/
│   ├── app.js              # Main application logic
│   ├── auth.js             # Authentication handling
│   ├── users.js            # User management
│   ├── tickets.js          # Ticket management
│   ├── roles.js            # Role management
│   └── api.js              # API integration
└── README.md               # This file
```

## Getting Started

### Demo Credentials
- **Email**: admin@piicomm.com
- **Password**: admin123
- **Admin Key**: piicomm2024 (for registration)

### Local Development
1. Clone or download the repository
2. Open `index.html` in a modern web browser
3. Navigate to the login page and use demo credentials
4. Explore the admin portal features

### GitHub Pages Deployment
This portal is automatically deployed to GitHub Pages and accessible at:
`https://[username].github.io/piicomm-admin-portal`

## API Integration

The portal is designed to integrate with a backend API. The `js/api.js` file contains:
- RESTful API client with JWT authentication
- Mock data for demonstration purposes
- Error handling and fallback mechanisms
- Configurable base URL for different environments

To connect to a real backend:
1. Update the `baseURL` in `js/api.js`
2. Implement proper API endpoints on your backend
3. Replace mock data methods with actual API calls

## Features in Detail

### Dashboard Analytics
- User growth tracking
- Ticket volume analysis
- System performance metrics
- Activity timeline

### User Management
- Comprehensive user profiles
- Department and team assignment
- Last login tracking
- Account activation/deactivation

### Ticket System
- Priority-based workflow
- Assignment notifications
- Status tracking
- Category management
- Tag system for organization

### Security Features
- Role-based permissions
- Secure authentication
- Session timeout handling
- Access logging (when connected to backend)

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Customization

### Styling
The portal uses CSS variables for easy theming:
```css
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --success-color: #28a745;
  /* ... */
}
```

### Branding
- Update logo and colors in `css/styles.css`
- Modify company name in HTML files
- Replace favicon (add your own)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

## Roadmap

- [ ] Advanced reporting and analytics
- [ ] Real-time notifications
- [ ] Mobile app companion
- [ ] API documentation generator
- [ ] Automated testing suite
- [ ] Multi-language support

---

Built with ❤️ for efficient service management.