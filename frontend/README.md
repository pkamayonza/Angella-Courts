# KabaHostel - Student Hostel Booking Website

A professional, mobile-first student hostel booking website for KabaHostel near Kabale University, Uganda. Built with plain HTML, CSS, and JavaScript with no frameworks.

## 📋 Overview

KabaHostel is a complete 4-page booking platform for the 2026/2027 academic year featuring:
- Modern, responsive design optimized for mobile devices
- 6 room types with detailed descriptions and pricing
- Advanced room filtering system
- Secure booking form with validation
- FAQ accordion
- WhatsApp integration
- Contact page with inquiry form

## 📁 Project Structure

```
frontend/
├── index.html                 # Home page
├── pages/
│   ├── rooms.html            # Room listings & filtering
│   ├── booking.html          # Booking form
│   └── contact.html          # Contact & FAQ
├── styles/
│   └── main.css              # All styles (shared across pages)
└── scripts/
    └── main.js               # All JavaScript (shared across pages)
```

## 🎨 Design Features

### Color Palette
- **Background**: #f7f8fa (Light gray-white)
- **Primary Text**: #1a1a2e (Deep navy)
- **Accent Blue**: #1d6ef5 (Primary buttons & links)
- **Success Green**: #12b76a (Available badges)
- **Error Red**: #e63946 (Booked badges)
- **WhatsApp Green**: #25d366 (WhatsApp buttons)

### Typography
- **Headings**: Sora (Google Fonts) - weights 700, 800
- **Body**: DM Sans (Google Fonts) - weights 400, 500, 600

### Responsive Breakpoints
- Mobile: < 768px (default mobile-first)
- Tablet: 768px - 1023px
- Desktop: 1024px+
- Extra Large: 1440px+

## 🚀 Getting Started

### 1. Setup Formspree (Required for Forms)

The booking and contact forms use Formspree to handle submissions.

1. Go to [Formspree.io](https://formspree.io/)
2. Create a free account
3. Create two new forms:
   - One for booking requests
   - One for contact inquiries
4. Copy the form IDs (format: `f/XXXXXXXXXXXXX`)

### 2. Update Form IDs

Open these files and replace `YOUR_FORMSPREE_ID` with your actual IDs:

**In `pages/booking.html`** (line ~29):
```html
<form id="bookingForm" action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST">
```

**In `pages/contact.html`** (line ~103 and ~150):
```html
<form action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST">
```

### 3. Open in Browser

Simply open `index.html` in any modern web browser. No server required for local testing.

For deployment, upload the entire `frontend` folder to your web hosting.

## 📄 Pages Overview

### Home (index.html)
- Sticky header with navigation
- Hero section with CTAs
- Features strip (4 feature cards)
- Room preview (3 room samples)
- Testimonials section
- Full footer

### Rooms (pages/rooms.html)
- Filter system (by type & availability)
- 6 room cards with:
  - Gradient image placeholders
  - Availability badges
  - Price and capacity info
  - Feature lists with checkmarks
  - "Book This Room" buttons

### Booking (pages/booking.html)
- Comprehensive booking form with fields:
  - Full Name, Phone, WhatsApp
  - Email, Registration Number
  - Course, Year of Study
  - Room Type, Semester selection
  - Number of Students
  - Special Requests
- Client-side validation with inline error messages
- Auto-fills room type from URL parameter (?room=RoomName)
- Info box explaining next steps
- Alternative WhatsApp contact card

### Contact (pages/contact.html)
- Contact details card with:
  - Address, phone, WhatsApp
  - Email, office hours
  - Caretaker information
- Contact/inquiry form
- Map placeholder
- FAQ accordion with 5 questions:
  - When can I move in?
  - Is electricity included?
  - Can I pay in installments?
  - Is there parking?
  - Are meals provided?

## 🎯 Room Options

1. **Single Self-Contained** - UGX 650,000/semester
2. **Double Self-Contained** - UGX 1,100,000/semester
3. **Single Shared Bathroom** - UGX 450,000/semester
4. **Double Shared Bathroom** - UGX 800,000/semester (Booked)
5. **Premium Single** - UGX 750,000/semester
6. **Triple Room** - UGX 1,050,000/semester

## ⚙️ JavaScript Features

### Header
- Sticky header with scroll shadow effect
- Mobile hamburger menu toggle
- Auto-close menu on link click

### Room Filtering
- Filter by room type (Single, Double, Triple)
- Filter by availability (Available, Booked)
- Real-time filtering without page reload

### Booking Form
- Auto-populate room type from URL parameter
- Comprehensive client-side validation
- Inline error messages (red text)
- Field error highlighting
- Phone number validation (Uganda format support)
- Email validation

### FAQ Accordion
- Click to expand/collapse
- Smooth animation
- Multiple items can be open simultaneously

### WhatsApp Integration
- Pre-filled WhatsApp messages
- Room-specific messaging
- Direct links to WhatsApp chat

### Utilities
- Smooth scroll for anchor links
- URL parameter parsing
- Form submission handling

## 📱 Mobile Optimization

The website is built mobile-first and includes:
- Responsive grid layouts
- Flexible typography (scales with screen size)
- Touch-friendly buttons (minimum 44px height)
- Optimized navigation for small screens
- Stack-based layout for mobile devices
- Proper spacing and readability on all devices

## 🔒 Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## 📊 Contact Information

- **Phone**: +256 700 123 456
- **WhatsApp**: +256 700 123 456
- **Email**: kabahostel@gmail.com
- **Address**: Plot 12, University Road, Kabale, Uganda
- **Caretaker**: Mr. Tumwesigye

## 🎓 Academic Periods

- **Semester 1 2026**: February - May 2026
- **Semester 2 2027**: August - November 2027

## 📝 Notes

- All pages share `styles/main.css` and `scripts/main.js`
- No external dependencies or frameworks
- No build process required
- No backend server needed for static content
- Forms only work with Formspree integration
- Responsive design tested on common mobile devices

## 🚀 Deployment

### Option 1: Static Hosting
- Netlify (recommended - free, easy deployment)
- Vercel
- GitHub Pages
- Any web hosting with static file support

### Option 2: Traditional Web Server
1. Upload `frontend` folder to your web server
2. Point domain to the folder
3. Forms will automatically submit to Formspree

## 📧 Form Submissions

Both the booking and contact forms submit to Formspree. Each submission:
- Is received in your Formspree inbox
- Can trigger email notifications
- Provides a thank you page (from Formspree)
- Supports spam filtering

## 🔄 Customization

### Update Contact Details
Update these values in all pages:
- Phone: +256 700 123 456
- WhatsApp: +256 700 123 456
- Email: kabahostel@gmail.com
- Address: Plot 12, University Road, Kabale

### Change Room Prices/Details
Edit room card details in:
- `index.html` (3 preview rooms)
- `pages/rooms.html` (all 6 rooms)
- `pages/booking.html` (room select options)

### Update Colors
All colors defined in CSS variables in `styles/main.css`:
```css
:root {
  --accent-blue: #1d6ef5;
  --success-green: #12b76a;
  /* ... etc */
}
```

## 📄 License

Professional hostel booking website built with modern web standards.

---

**Built for KabaHostel** — Excellence in Student Accommodation
