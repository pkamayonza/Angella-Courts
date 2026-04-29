# KabaHostel Website - Site Navigation Map

## 🗺️ COMPLETE SITE STRUCTURE

```
KabaHostel Website
│
├─ HOME: index.html
│  ├─→ Header (all pages)
│  │   ├─ Logo "KabaHostel"
│  │   ├─ Nav: Home, Rooms, Book Now, Contact
│  │   ├─ CTA: "Book Now" button
│  │   └─ Mobile: Hamburger menu
│  │
│  ├─ HERO SECTION
│  │   ├─ Headline: "Your Home Near Kabale University"
│  │   ├─ Subtext: About 2026/2027 year
│  │   └─ Buttons: "View Rooms" → rooms.html
│  │              "Book via WhatsApp" → WhatsApp
│  │
│  ├─ FEATURES SECTION
│  │   ├─ 🔒 Secure Compound
│  │   ├─ ⚡ Bills Included
│  │   ├─ 🚶 Walking Distance
│  │   └─ 👨‍💼 24/7 Caretaker
│  │
│  ├─ ROOM PREVIEW SECTION
│  │   ├─ Card 1: Single Self-Contained → "Book" → booking.html?room=
│  │   ├─ Card 2: Double Self-Contained → "Book" → booking.html?room=
│  │   ├─ Card 3: Single Shared Bathroom → "Book" → booking.html?room=
│  │   └─ Button: "View All Rooms" → rooms.html
│  │
│  ├─ TESTIMONIALS SECTION
│  │   ├─ Quote 1: Sarah Namuyanja (CS, Year 2)
│  │   └─ Quote 2: David Kazooba (Business, Year 3)
│  │
│  └─→ FOOTER (all pages)
│      ├─ About KabaHostel
│      ├─ Quick Links (Home, Rooms, Book, Contact)
│      ├─ Contact Info (Phone, WhatsApp, Email)
│      ├─ Location: Plot 12, University Road
│      └─ Copyright 2025
│
├─ ROOMS: pages/rooms.html
│  ├─→ Header (shared with home)
│  │   └─ Same navigation & styling
│  │
│  ├─ PAGE HERO
│  │   ├─ Title: "Our Rooms"
│  │   └─ Subtitle: About available options
│  │
│  ├─ FILTER BAR
│  │   ├─ Filter 1: Room Type (All, Single, Double, Triple)
│  │   │   └─ onChange → Real-time filter
│  │   └─ Filter 2: Availability (All, Available, Booked)
│  │       └─ onChange → Real-time filter
│  │
│  ├─ ROOMS GRID (6 cards)
│  │   ├─ Card 1: Single Self-Contained
│  │   │   ├─ Price: UGX 650,000
│  │   │   ├─ Capacity: 1 student
│  │   │   ├─ Features: Private bathroom, desk, wardrobe, fan
│  │   │   ├─ Badge: Available (green)
│  │   │   └─ Button: "Book" → booking.html?room=Single%20Self-Contained
│  │   │
│  │   ├─ Card 2: Double Self-Contained
│  │   │   ├─ Price: UGX 1,100,000
│  │   │   ├─ Capacity: 2 students
│  │   │   ├─ Features: 2 share, private bathroom, 2 desks, 2 wardrobes
│  │   │   ├─ Badge: Available (green)
│  │   │   └─ Button: "Book" → booking.html?room=Double%20Self-Contained
│  │   │
│  │   ├─ Card 3: Single Shared Bathroom
│  │   │   ├─ Price: UGX 450,000
│  │   │   ├─ Capacity: 1 student
│  │   │   ├─ Features: Shared bathroom, desk, wardrobe, fan
│  │   │   ├─ Badge: Available (green)
│  │   │   └─ Button: "Book" → booking.html?room=Single%20Shared%20Bathroom
│  │   │
│  │   ├─ Card 4: Double Shared Bathroom
│  │   │   ├─ Price: UGX 800,000
│  │   │   ├─ Capacity: 2 students
│  │   │   ├─ Features: 2 share, shared bathroom, 2 beds, 2 desks
│  │   │   ├─ Badge: Fully Booked (red)
│  │   │   └─ Button: "On Waitlist" (disabled)
│  │   │
│  │   ├─ Card 5: Premium Single
│  │   │   ├─ Price: UGX 750,000
│  │   │   ├─ Capacity: 1 student
│  │   │   ├─ Features: En-suite, tiled, Wi-Fi, ceiling fan
│  │   │   ├─ Badge: Available (green)
│  │   │   └─ Button: "Book" → booking.html?room=Premium%20Single
│  │   │
│  │   └─ Card 6: Triple Room
│  │       ├─ Price: UGX 1,050,000
│  │       ├─ Capacity: 3 students
│  │       ├─ Features: 3 share, shared bathroom, 3 beds, 3 desks
│  │       ├─ Badge: Available (green)
│  │       └─ Button: "Book" → booking.html?room=Triple%20Room
│  │
│  └─→ FOOTER (shared)
│
├─ BOOKING: pages/booking.html
│  ├─→ Header (shared)
│  │
│  ├─ PAGE HERO
│  │   ├─ Title: "Book Your Room"
│  │   └─ Subtitle: 2026/2027 academic year
│  │
│  ├─ BOOKING FORM (Formspree)
│  │   ├─ Full Name (required)
│  │   ├─ Phone Number (required, validated)
│  │   ├─ WhatsApp (optional)
│  │   ├─ Email (optional, validated)
│  │   ├─ University Reg # (required)
│  │   ├─ Course/Programme (required)
│  │   ├─ Year of Study (dropdown: Y1, Y2, Y3, Y4+)
│  │   ├─ Room Type (dropdown: all 6 rooms)
│  │   │   └─ Auto-filled if ?room= parameter exists
│  │   ├─ Semester (dropdown: Sem1 2026, Sem2 2027)
│  │   ├─ Number of Students (1-3, if shared)
│  │   ├─ Special Requests (textarea)
│  │   ├─ Validation:
│  │   │   ├─ Required fields check
│  │   │   ├─ Phone format validation
│  │   │   ├─ Email format validation
│  │   │   └─ Inline error messages (red)
│  │   └─ Submit: "Submit Booking Request"
│  │       └─ Sends to Formspree → Your email
│  │
│  ├─ INFO BOX
│  │   └─ "What happens next?"
│  │       └─ Explains caretaker will call within 24 hours
│  │
│  ├─ ALTERNATIVE CONTACT CARD
│  │   ├─ "Prefer to chat first?"
│  │   ├─ WhatsApp button → wa.me/256700123456
│  │   ├─ Phone link: tel:+256700123456
│  │   └─ Email link: mailto:kabahostel@gmail.com
│  │
│  └─→ FOOTER (shared)
│
├─ CONTACT: pages/contact.html
│  ├─→ Header (shared)
│  │
│  ├─ PAGE HERO
│  │   ├─ Title: "Get in Touch"
│  │   └─ Subtitle: Questions about rooms
│  │
│  ├─ TWO-COLUMN LAYOUT
│  │   │
│  │   ├─ LEFT: CONTACT DETAILS CARD
│  │   │   ├─ 📍 Address: Plot 12, University Road, Kabale
│  │   │   ├─ 📞 Phone: +256 700 123 456 (clickable)
│  │   │   ├─ 💬 WhatsApp: Button → wa.me/256700123456
│  │   │   ├─ 📧 Email: kabahostel@gmail.com (clickable)
│  │   │   ├─ 🕐 Office Hours: Mon–Sat, 8am–6pm
│  │   │   └─ 👨‍💼 Caretaker: Mr. Tumwesigye
│  │   │
│  │   └─ RIGHT: INQUIRY FORM (Formspree)
│  │       ├─ Name (required)
│  │       ├─ Phone (required)
│  │       ├─ Email (optional)
│  │       ├─ Message (required, textarea)
│  │       └─ Send button
│  │           └─ Sends to Formspree → Your email
│  │
│  ├─ MAP PLACEHOLDER
│  │   └─ "Located on University Road, 5 min walk from Main Gate"
│  │
│  ├─ FAQ ACCORDION (5 items)
│  │   ├─ Item 1: "When can I move in?"
│  │   │   └─ Click to expand/collapse
│  │   ├─ Item 2: "Is electricity included?"
│  │   │   └─ Click to expand/collapse
│  │   ├─ Item 3: "Can I pay in installments?"
│  │   │   └─ Click to expand/collapse
│  │   ├─ Item 4: "Is there parking?"
│  │   │   └─ Click to expand/collapse
│  │   └─ Item 5: "Are meals provided?"
│  │       └─ Click to expand/collapse
│  │
│  └─→ FOOTER (shared)
│
└─→ FOOTER (all pages)
    ├─ Logo & description
    ├─ Quick links to all pages
    ├─ Contact details
    ├─ Location information
    └─ Copyright notice
```

---

## 🔗 INTERNAL LINKS

### From Home (index.html):
- "View Rooms" button → `pages/rooms.html`
- "Book via WhatsApp" → `https://wa.me/256700123456`
- Room cards "Book" → `pages/booking.html?room=RoomName`
- Header "Rooms" → `pages/rooms.html`
- Header "Book Now" → `pages/booking.html`
- Header "Contact" → `pages/contact.html`
- Footer links → All pages

### From Rooms (pages/rooms.html):
- Each "Book This Room" → `booking.html?room=RoomName`
- Header navigation → All pages
- Filter dropdowns → Real-time filter on same page

### From Booking (pages/booking.html):
- Form auto-fills room if ?room= in URL
- WhatsApp button → `https://wa.me/256700123456`
- Phone link → `tel:+256700123456`
- Email link → `mailto:kabahostel@gmail.com`
- Header navigation → All pages

### From Contact (pages/contact.html):
- WhatsApp button → `https://wa.me/256700123456`
- Phone link → `tel:+256700123456`
- Email link → `mailto:kabahostel@gmail.com`
- Accordion items → Expand/collapse on click
- Header navigation → All pages

---

## 📊 PAGE FLOW DIAGRAM

```
                           START
                             ↓
                    [index.html - HOME]
                    /        |        \
                   /         |         \
        "View Rooms"    Testimonials   Social
             ↓                          ↓
      [rooms.html]              [WhatsApp]
       Filter ↓                        
      /           \
 "Book This Room"  Back to filters
     ↓
[booking.html]
Auto-filled room ↓
     Submit ↓
   [Formspree] → Email to you
  
Alternative path: Click "Contact" from any page
             ↓
      [contact.html]
    /               \
 FAQ         Inquiry Form
             ↓
        [Formspree] → Email to you
```

---

## 🎯 USER JOURNEYS

### Journey 1: Direct Booking
1. User opens index.html
2. Clicks "View Rooms" or "Book via WhatsApp"
3. Browses rooms on rooms.html
4. Clicks "Book This Room"
5. Landing on booking.html with room pre-filled
6. Fills form and submits
7. Email received

### Journey 2: Interested but Exploring
1. User opens index.html
2. Reads about features
3. Reads testimonials
4. Clicks "View Rooms"
5. Filters and explores rooms
6. Clicks specific room's "Book"
7. Fills out booking form
8. Email received

### Journey 3: Questions First
1. User opens index.html
2. Clicks "Contact"
3. Reads FAQ
4. Fills contact form if more questions
5. Email received
6. You respond via phone/WhatsApp
7. Student books after chat

### Journey 4: Quick WhatsApp
1. User on any page
2. Clicks "Book via WhatsApp" or WhatsApp button
3. Opens WhatsApp with pre-filled message
4. Starts chat immediately
5. You respond quickly
6. Student books

---

## 📱 MOBILE NAVIGATION FLOW

```
Mobile Home
  ↓
[Hamburger Menu Icon]
  ↓
[Menu Dropdown]
├─ Home → index.html
├─ Rooms → pages/rooms.html
├─ Book Now → pages/booking.html
└─ Contact → pages/contact.html

Menu auto-closes when:
- Link clicked
- Elsewhere on page clicked
```

---

## ✅ COMPLETE NAVIGATION CHECKLIST

All links tested and working:
- ✅ Home ↔ Rooms
- ✅ Home → Booking
- ✅ Home → Contact
- ✅ Rooms → Booking
- ✅ Rooms → Home
- ✅ Rooms → Contact
- ✅ Booking → Rooms
- ✅ Booking → Home
- ✅ Booking → Contact
- ✅ Booking → WhatsApp
- ✅ Contact → Rooms
- ✅ Contact → Booking
- ✅ Contact → Home
- ✅ Contact → WhatsApp
- ✅ Contact → Email
- ✅ Contact → Phone
- ✅ All footer links work
- ✅ All header links work
- ✅ Mobile menu works

---

## 🎉 NAVIGATION COMPLETE

Your website has a complete, intuitive navigation system that:
- ✅ Guides users through rooms
- ✅ Takes them to booking smoothly
- ✅ Provides contact alternative
- ✅ Integrates WhatsApp
- ✅ Allows easy exploration
- ✅ Works on all devices

Users will find what they need quickly and book with confidence!
