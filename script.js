/* =============================================
   BIBI GRACE FOUNDATION — script.js
   ============================================= */

'use strict';

// ---- Configuration ----
const CONFIG = {
  LAUNCH_DAYS_OFFSET: 14,
  COUNTDOWN_INTERVAL: 1000,
  PETAL_SPAWN_INTERVAL: 1800,
  INITIAL_PETAL_COUNT: 18,
  ERROR_MESSAGE_DURATION: 2500,
  FLIP_ANIMATION_DURATION: 300,
  MAX_PETALS: 30
};

// ---- State Management ----
const state = {
  launchDate: null,
  countdownInterval: null,
  petalInterval: null,
  isFormSubmitted: false
};

// ---- DOM Elements ----
const elements = {
  countdown: {
    days: document.getElementById('days'),
    hours: document.getElementById('hours'),
    minutes: document.getElementById('minutes'),
    seconds: document.getElementById('seconds')
  },
  form: {
    emailInput: document.getElementById('email-input'),
    notifyBtn: document.querySelector('.notify-btn'),
    successMsg: document.getElementById('success-msg')
  },
  footer: {
    year: document.getElementById('year')
  },
  petals: document.getElementById('petals')
};

// ---- Utility Functions ----
function padNumber(num) {
  return String(num).padStart(2, '0');
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// ---- Countdown Module ----
function flipCount(element, newValue) {
  if (!element) return;
  
  const currentValue = element.textContent;
  if (currentValue !== newValue) {
    element.classList.add('flip');
    element.textContent = newValue;
    
    setTimeout(() => {
      element.classList.remove('flip');
    }, CONFIG.FLIP_ANIMATION_DURATION);
  }
}

function updateCountdown() {
  const now = new Date();
  const diff = state.launchDate - now;

  if (diff <= 0) {
    Object.values(elements.countdown).forEach(element => {
      if (element) element.textContent = '00';
    });
    clearInterval(state.countdownInterval);
    return;
  }

  const timeUnits = {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60)
  };

  Object.entries(timeUnits).forEach(([unit, value]) => {
    flipCount(elements.countdown[unit], padNumber(value));
  });
}

function initializeCountdown() {
  const d = new Date();
  d.setDate(d.getDate() + CONFIG.LAUNCH_DAYS_OFFSET);
  d.setHours(0, 0, 0, 0);
  state.launchDate = d;

  updateCountdown();
  state.countdownInterval = setInterval(updateCountdown, CONFIG.COUNTDOWN_INTERVAL);
}


// ---- Email Notification Module ----
function showEmailError(message) {
  const { emailInput } = elements.form;
  emailInput.style.borderBottom = '2px solid var(--gold)';
  emailInput.placeholder = message;
  emailInput.focus();
  
  setTimeout(() => {
    emailInput.style.borderBottom = '';
    emailInput.placeholder = 'your@email.com';
  }, CONFIG.ERROR_MESSAGE_DURATION);
}

function handleNotify() {
  if (state.isFormSubmitted) return;
  
  const { emailInput, notifyBtn, successMsg } = elements.form;
  const email = emailInput.value.trim();

  if (!email) {
    showEmailError('Please enter your email');
    return;
  }

  if (!isValidEmail(email)) {
    showEmailError('Please enter a valid email');
    return;
  }

  // Simulate successful submission
  state.isFormSubmitted = true;
  emailInput.value = '';
  emailInput.disabled = true;
  notifyBtn.disabled = true;
  notifyBtn.style.opacity = '0.5';
  successMsg.classList.add('show');
  
  // In a real application, you would send this to a server
  console.log('Email submitted:', email);
}

// ---- Event Listeners ----
function initializeEventListeners() {
  // Allow Enter key on email input
  if (elements.form.emailInput) {
    elements.form.emailInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleNotify();
      }
    });
  }
  
  // Cleanup on page unload
  window.addEventListener('beforeunload', () => {
    if (state.countdownInterval) clearInterval(state.countdownInterval);
    if (state.petalInterval) clearInterval(state.petalInterval);
  });
}

// ---- Initialization ----
function initializeApp() {
  // Set footer year
  if (elements.footer.year) {
    elements.footer.year.textContent = new Date().getFullYear();
  }
  
  // Initialize modules
  initializeCountdown();
  initializePetals();
  initializeEventListeners();
}

// Start the application when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}

// ---- Petals Animation Module ----
const PETAL_COLORS = [
  'rgba(201,168,76,0.45)',
  'rgba(232,201,123,0.35)',
  'rgba(245,230,192,0.5)',
  'rgba(201,168,76,0.25)',
  'rgba(255,245,220,0.6)'
];

function createPetal() {
  if (!elements.petals) return;
  
  // Limit the number of petals to prevent performance issues
  const existingPetals = elements.petals.querySelectorAll('.petal').length;
  if (existingPetals >= CONFIG.MAX_PETALS) return;
  
  const petal = document.createElement('div');
  petal.classList.add('petal');

  const size = Math.random() * 10 + 6;
  const left = Math.random() * 100;
  const duration = Math.random() * 14 + 10;
  const delay = Math.random() * 12;
  const color = PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)];
  const borderRadius = Math.random() > 0.5 ? '50% 0 50% 0' : '0 50% 0 50%';

  petal.style.cssText = `
    width: ${size}px;
    height: ${size * 0.65}px;
    left: ${left}%;
    background: ${color};
    animation-duration: ${duration}s;
    animation-delay: ${delay}s;
    border-radius: ${borderRadius};
  `;

  elements.petals.appendChild(petal);

  // Remove after animation ends to keep DOM clean
  const cleanupTime = (duration + delay) * 1000 + 500;
  setTimeout(() => {
    if (petal.parentNode) {
      petal.remove();
    }
  }, cleanupTime);
}

function initializePetals() {
  // Create initial petals
  for (let i = 0; i < CONFIG.INITIAL_PETAL_COUNT; i++) {
    setTimeout(() => createPetal(), i * 100);
  }
  
  // Spawn petals periodically
  state.petalInterval = setInterval(createPetal, CONFIG.PETAL_SPAWN_INTERVAL);
}
