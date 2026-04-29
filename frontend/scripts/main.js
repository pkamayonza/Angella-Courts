// Header Scroll Effect
window.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      mobileNav.classList.toggle('active');
    });
    
    // Close menu when clicking a link
    const navLinks = mobileNav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('active');
      });
    });
  }
});

// Room Filtering
function initRoomFilters() {
  const typeFilter = document.getElementById('filterType');
  const availabilityFilter = document.getElementById('filterAvailability');
  
  if (!typeFilter || !availabilityFilter) return;
  
  function filterRooms() {
    const selectedType = typeFilter.value;
    const selectedAvailability = availabilityFilter.value;
    const rooms = document.querySelectorAll('.room-card');
    
    rooms.forEach(room => {
      let showRoom = true;
      
      // Filter by type
      if (selectedType !== 'all') {
        const roomType = room.dataset.type;
        if (roomType !== selectedType) {
          showRoom = false;
        }
      }
      
      // Filter by availability
      if (selectedAvailability !== 'all' && showRoom) {
        const availability = room.dataset.availability;
        if (availability !== selectedAvailability) {
          showRoom = false;
        }
      }
      
      room.style.display = showRoom ? 'block' : 'none';
    });
  }
  
  typeFilter.addEventListener('change', filterRooms);
  availabilityFilter.addEventListener('change', filterRooms);
}

// Initialize filters on page load
document.addEventListener('DOMContentLoaded', initRoomFilters);

// Booking Form
function initBookingForm() {
  const form = document.getElementById('bookingForm');
  if (!form) return;
  
  // Auto-populate room type from URL parameter
  const urlParams = new URLSearchParams(window.location.search);
  const roomParam = urlParams.get('room');
  if (roomParam) {
    const roomSelect = document.getElementById('roomType');
    if (roomSelect) {
      // Find option with value matching the room parameter
      for (let option of roomSelect.options) {
        if (option.value.toLowerCase() === roomParam.toLowerCase() ||
            option.textContent.includes(roomParam)) {
          roomSelect.value = option.value;
          break;
        }
      }
    }
  }
  
  // Form Validation
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (validateForm(form)) {
      // Form is valid - submit to Formspree
      form.submit();
    }
  });
}

function validateForm(form) {
  let isValid = true;
  
  // Clear all previous errors
  form.querySelectorAll('.form-group').forEach(group => {
    group.classList.remove('error');
  });
  
  // Define fields to validate
  const fields = [
    { id: 'fullName', message: 'Full name is required' },
    { id: 'phone', message: 'Phone number is required' },
    { id: 'regNumber', message: 'University registration number is required' },
    { id: 'course', message: 'Course/Programme is required' },
    { id: 'yearOfStudy', message: 'Year of study is required' },
    { id: 'roomType', message: 'Room type is required' },
    { id: 'semester', message: 'Semester is required' }
  ];
  
  fields.forEach(field => {
    const input = document.getElementById(field.id);
    if (!input) return;
    
    const value = input.value.trim();
    if (!value) {
      showFieldError(input, field.message);
      isValid = false;
    } else if (field.id === 'phone' && !isValidPhone(value)) {
      showFieldError(input, 'Please enter a valid phone number');
      isValid = false;
    } else if (field.id === 'email' && value && !isValidEmail(value)) {
      showFieldError(input, 'Please enter a valid email address');
      isValid = false;
    }
  });
  
  return isValid;
}

function showFieldError(input, message) {
  const formGroup = input.closest('.form-group');
  if (formGroup) {
    formGroup.classList.add('error');
    const errorElement = formGroup.querySelector('.form-error');
    if (errorElement) {
      errorElement.textContent = message;
    }
  }
}

function isValidPhone(phone) {
  // Accept various Uganda phone formats
  const phoneRegex = /^[\d\s\-\+\(\)]{9,}$/;
  return phoneRegex.test(phone);
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

document.addEventListener('DOMContentLoaded', initBookingForm);

// FAQ Accordion
function initAccordion() {
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  
  accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
      const item = this.closest('.accordion-item');
      
      // Close other items if desired (optional - comment out for multi-open)
      // const allItems = document.querySelectorAll('.accordion-item');
      // allItems.forEach(i => i.classList.remove('active'));
      
      item.classList.toggle('active');
    });
  });
}

document.addEventListener('DOMContentLoaded', initAccordion);

// WhatsApp Integration
function generateWhatsAppMessage(name, roomChoice) {
  const message = `Hello KUHostel! I'm interested in booking a room. Name: ${name}. Room interest: ${roomChoice}. 2026/2027 Academic Year.`;
  return encodeURIComponent(message);
}

function initWhatsAppButtons() {
  const whatsappButtons = document.querySelectorAll('[data-whatsapp]');
  const whatsappPhone = '256743465288'; // Replace with actual number
  
  whatsappButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      
      let message = 'Hello KUHostel! I am interested in booking a room for 2026/2027 academic year.';
      
      // Check if this is a room booking button
      const roomName = this.dataset.room;
      if (roomName) {
        message = `Hello KabaHostel! I am interested in the ${roomName} for 2026/2027 academic year. Please share more details.`;
      }
      
      const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    });
  });
}

document.addEventListener('DOMContentLoaded', initWhatsAppButtons);

// Smooth Scroll for Anchor Links
document.addEventListener('click', function(e) {
  if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
    const href = e.target.getAttribute('href');
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      e.preventDefault();
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
});

// Room Card Click Navigation
function initRoomCardLinks() {
  const roomCards = document.querySelectorAll('.room-card');
  
  roomCards.forEach(card => {
    const bookButton = card.querySelector('.btn-primary');
    if (bookButton) {
      const roomName = card.getAttribute('data-room-name');
      if (roomName) {
        bookButton.href = `booking.html?room=${encodeURIComponent(roomName)}`;
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', initRoomCardLinks);

// Contact Form
function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;
  
  contactForm.addEventListener('submit', function(e) {
    // Allow normal form submission to Formspree
    // Just ensure basic fields are filled
  });
}

document.addEventListener('DOMContentLoaded', initContactForm);

// Utility: Get URL Parameter
function getUrlParameter(name) {
  const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
  const results = regex.exec(window.location.href);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
