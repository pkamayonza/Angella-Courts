# KabaHostel Website - Quick Setup Guide

## ⚡ 5-Minute Setup

### Step 1: Formspree Configuration (2 minutes)

1. Visit [formspree.io](https://formspree.io)
2. Sign up with your email (or login)
3. Create a new form for "Booking Requests"
4. Copy the form ID (looks like: `f/a1b2c3d4e5f6g7h8`)
5. Paste it into `pages/booking.html` line 29:
   ```html
   action="https://formspree.io/f/YOUR_FORM_ID_HERE"
   ```
6. Repeat for Contact form in `pages/contact.html` lines 103 and 150

### Step 2: Test Locally (1 minute)

1. Right-click on `index.html`
2. Select "Open with" → Your browser
3. Click through all pages to verify they work
4. Test the hamburger menu on mobile view (F12 → toggle device toolbar)

### Step 3: Customize Content (2 minutes)

Find and replace these throughout the site:
- Phone: `+256 700 123 456` (your actual number)
- Email: `kabahostel@gmail.com` (your actual email)
- Address: `Plot 12, University Road, Kabale` (if different)

## 📱 Quick Mobile Testing

1. Open DevTools (F12)
2. Click Device Toolbar icon (top-left)
3. Select device (iPhone 12, Pixel 5, etc)
4. Test:
   - Hamburger menu toggle
   - Room filters
   - Form submission
   - Button clicks

## 🔗 Page Navigation

- **Home**: `index.html`
- **Rooms**: `pages/rooms.html`
- **Booking**: `pages/booking.html`
- **Contact**: `pages/contact.html`

All links are already configured to work correctly.

## ✅ Verification Checklist

- [ ] Formspree IDs inserted in booking.html
- [ ] Formspree IDs inserted in contact.html
- [ ] All pages load without errors
- [ ] Header navigation works
- [ ] Mobile menu toggle works
- [ ] Room filters work
- [ ] "Book This Room" buttons link correctly
- [ ] Forms can be filled out
- [ ] Footer links work
- [ ] WhatsApp buttons open WhatsApp

## 🚀 Ready to Deploy?

### For Netlify (Recommended)

1. Create account at [netlify.com](https://netlify.com)
2. Drag & drop the `frontend` folder
3. Site goes live instantly!

### For Traditional Hosting

1. ZIP the `frontend` folder
2. Upload to your hosting via FTP/cpanel
3. Point domain to the folder
4. Done!

## 💡 Important Notes

- **No Server Required**: Site works purely from static files
- **Forms Work Automatically**: Formspree handles all form submissions
- **Mobile First**: Responsive design built from mobile up
- **No Framework**: Pure HTML/CSS/JavaScript

## 🐛 Troubleshooting

### Forms not submitting?
- Verify Formspree ID is correct
- Check email spam folder for Formspree confirmation
- Verify you're logged into Formspree account

### Links not working?
- Check file paths are relative (use `../pages/booking.html` format)
- Verify folder structure matches the provided structure

### Mobile menu not showing?
- Open DevTools (F12)
- Toggle device toolbar
- Menu should appear on narrow screens

### Styles not loading?
- Verify `styles/main.css` path in `<head>`
- Check file is in correct folder
- Refresh browser cache (Ctrl+Shift+R)

## 📞 Support Contact

For questions about the website:
- Phone: +256 700 123 456
- WhatsApp: +256 700 123 456
- Email: kabahostel@gmail.com

---

**Your KabaHostel website is ready to book! 🎉**
