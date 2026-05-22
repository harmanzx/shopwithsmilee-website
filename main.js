function initTheme() {
  const saved = localStorage.getItem('sws-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
}
function toggleTheme() {
  const cur = document.documentElement.getAttribute('data-theme');
  const next = cur === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('sws-theme', next);
}
initTheme();

window.shopProducts = [
  { id: 'handmade-tote-bag', name: 'Handmade Tote Bag', category: 'crochet', categoryLabel: 'Crochet', price: '₹1,299', image: 'https://i.pinimg.com/1200x/9e/17/bb/9e17bbd8501a84c3ba8adc063e0e12e3.jpg', original: '₹1,800', description: 'A beautifully handcrafted tote bag made with premium crochet yarn. Each piece is unique — perfect for everyday use and gifting.', features: ['Eco-friendly', 'Durable', 'Premium cotton yarn'] },
  { id: 'resin-bookmark', name: 'Resin Bookmark', category: 'resin', categoryLabel: 'Resin Art', price: '₹899', image: 'https://i.pinimg.com/1200x/8d/f5/cc/8df5cc351829e4ac20a282f4208ee265.jpg', original: '₹1,099', description: 'Hand-poured resin bookmark with delicate florals and gilded accents. A perfect keepsake for book lovers.', features: ['Handmade resin', 'Lightweight', 'Elegant design'] },
  { id: 'earrings', name: 'Earrings', category: 'jewellery', categoryLabel: 'Jewellery', price: '₹549', image: 'https://i.pinimg.com/1200x/d7/65/47/d76547a6725f466234883b1d8cabcb10.jpg', original: '₹699', description: 'Stylish handcrafted earrings made with premium beads and wirework — elegant enough for everyday wear.', features: ['Hypoallergenic', 'Handcrafted', 'Gift-ready'] },
  { id: 'bag', name: 'Bag', category: 'bags', categoryLabel: 'Bags & Wallets', price: '₹749', image: 'https://i.pinimg.com/1200x/82/38/9e/82389eec47c237d0fd8855c1ccf81f16.jpg', original: '₹999', description: 'Compact bag with multiple compartments and a modern finish. Ideal for daily essentials and travel.', features: ['Adjustable strap', 'Multiple pockets', 'Stylish print'] },
  { id: 'bottle', name: 'Bottle', category: 'gifts', categoryLabel: 'Gifts', price: '₹649', image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80', original: '₹799', description: 'Reusable bottle crafted for gifting and everyday hydration. Stylish, sturdy, and eco-conscious.', features: ['Leakproof', 'BPA-free', 'Gift-ready'] },
  { id: 'crochet-scarf', name: 'Crochet Scarf', category: 'crochet', categoryLabel: 'Crochet', price: '₹849', image: 'https://i.pinimg.com/736x/49/d4/4e/49d44ee86c27da0428bfda907baa7f34.jpg', original: '₹1,099', description: 'Soft crochet scarf with a rich texture and cozy finish. Perfect for chilly evenings and gifting.', features: ['Warm', 'Soft touch', 'One size fits all'] },
  { id: 'gift-box', name: 'Custom Gift Box', category: 'gifts', categoryLabel: 'Gifts', price: '₹1,499', image: 'https://i.pinimg.com/736x/dc/a3/c5/dca3c55ada4a19c87bbb351b8e697ade.jpg', original: '₹1,799', description: 'Beautifully curated gift box with handcrafted surprises inside. Great for celebrations, birthdays, and special moments.', features: ['Curated items', 'Premium packaging', 'Ready to gift'] },
  { id: 'beaded-bracelet', name: 'Beaded Bracelet', category: 'jewellery', categoryLabel: 'Jewellery', price: '₹399', image: 'https://tse3.mm.bing.net/th/id/OIP.QENkMEyNWrg93ZJokPGT1wHaJP?rs=1&pid=ImgDetMain&o=7&rm=3', original: '₹549', description: 'Elegant bead bracelet with soft hues and a polished finish. Perfect as a small gift or daily accessory.', features: ['Adjustable', 'Lightweight', 'Handmade'] },
  { id: 'resin-keychain-set', name: 'Resin Keychain Set', category: 'resin', categoryLabel: 'Resin Art', price: '₹299', image: 'https://resincraftsblog.com/wp-content/uploads/2022/01/PhotoKeychains.jpg', original: '₹399', description: 'Set of resin keychains with dried flowers and glitter accents. Great for gifting, accessories, or decor.', features: ['Set of 2', 'Durable resin', 'Gift-ready'] },
  { id: 'jacket', name: 'Jacket', category: 'men', categoryLabel: 'Men', price: '₹999', image: 'https://i.pinimg.com/736x/31/ce/56/31ce5621e7607691c1ad275d5434a175.jpg', original: '₹1,299', description: 'Comfortable jacket with a modern fit, designed for everyday wear and style. A great addition to any wardrobe.', features: ['Warm lining', 'Zip closure', 'Stylish fit'] }
];

function goToCategory(category) {
  window.location.href = `products.html?category=${encodeURIComponent(category)}`;
}

function getSelectedCategoryFromUrl() {
  return new URLSearchParams(window.location.search).get('category') || 'all';
}

const cursor = document.querySelector('.cursor');
const cursorDot = document.querySelector('.cursor-dot');
if (cursor && cursorDot) {
  let mx = 0, my = 0, cx = 0, cy = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  function animCursor() {
    cx += (mx - cx) * 0.15;
    cy += (my - cy) * 0.15;
    cursor.style.left = cx + 'px';
    cursor.style.top = cy + 'px';
    cursorDot.style.left = mx + 'px';
    cursorDot.style.top = my + 'px';
    requestAnimationFrame(animCursor);
  }
  animCursor();
}

function initScrollAnim() {
  const els = document.querySelectorAll('.fade');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); });
  }, { threshold: 0.1 });
  els.forEach(el => obs.observe(el));
}

function openMenu() {
  document.getElementById('sidebar')?.classList.add('open');
  document.getElementById('overlay')?.classList.add('show');
}
function closeMenu() {
  document.getElementById('sidebar')?.classList.remove('open');
  document.getElementById('overlay')?.classList.remove('show');
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeMenu(); closeNotifPanel(); } });

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

const notifications = [
  { id: 1, text: ' Your order #SWS2024-001 has been shipped!', time: '2 min ago', read: false },
  { id: 2, text: ' New collection: Handmade Crochet just dropped', time: '1 hour ago', read: false },
  { id: 3, text: ' Flash Sale — 20% off all Resin items today', time: '3 hours ago', read: true },
  { id: 4, text: '📦 Your order #SWS2024-002 has been delivered', time: 'Yesterday', read: true },
];

function renderNotifications() {
  const list = document.getElementById('notifList');
  if (!list) return;
  list.innerHTML = notifications.map(n => `
    <div class="notif-item ${n.read ? '' : 'unread'}" onclick="markRead(${n.id})">
      <p>${n.text}</p>
      <div class="notif-time">${n.time}</div>
    </div>
  `).join('');
  updateNotifBadge();
}

function markRead(id) {
  notifications.find(n => n.id === id).read = true;
  renderNotifications();
}

function updateNotifBadge() {
  const dot = document.querySelector('.notif-dot');
  const unread = notifications.filter(n => !n.read).length;
  if (dot) dot.style.display = unread > 0 ? 'block' : 'none';
}

function toggleNotifPanel() {
  document.getElementById('notifPanel')?.classList.toggle('open');
}
function closeNotifPanel() {
  document.getElementById('notifPanel')?.classList.remove('open');
}

function showToast(title, msg, type = 'default') {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<div class="toast-title">${title}</div><div>${msg}</div>`;
  container.appendChild(toast);
  requestAnimationFrame(() => { setTimeout(() => toast.classList.add('show'), 10); });
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}

let currentUser = JSON.parse(localStorage.getItem('sws-user') || 'null');

function updateAuthUI() {
  const btn = document.getElementById('loginBtn');
  const label = document.getElementById('userLabel');
  const dashLink = document.getElementById('dashLink');
  if (currentUser) {
    if (btn) btn.textContent = '👤 ' + currentUser.name.split(' ')[0];
    if (label) label.textContent = currentUser.name;
    if (dashLink) dashLink.style.display = 'block';
  } else {
    if (btn) btn.textContent = '👤';
    if (label) label.textContent = 'Guest';
    if (dashLink) dashLink.style.display = 'none';
  }
}

function openLoginModal() {
  document.getElementById('authModal')?.classList.add('open');
  showAuthTab('login');
}
function closeLoginModal() {
  document.getElementById('authModal')?.classList.remove('open');
}
function showAuthTab(tab) {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const resetForm = document.getElementById('resetForm');
  const resetStep2 = document.getElementById('resetStep2');
  const resetError = document.getElementById('resetError');
  const resetCodeSent = document.getElementById('resetCodeSent');
  const modalTitle = document.getElementById('modalTitle');
  const modalSub = document.getElementById('modalSub');
  if (tab === 'login') {
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
    resetForm.style.display = 'none';
    if (resetStep2) resetStep2.classList.add('hidden');
    if (resetError) resetError.textContent = '';
    if (resetCodeSent) resetCodeSent.textContent = '';
    if (modalTitle) modalTitle.textContent = 'Welcome Back';
    if (modalSub) modalSub.textContent = 'Sign in to your account';
  } else if (tab === 'register') {
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
    resetForm.style.display = 'none';
    if (resetStep2) resetStep2.classList.add('hidden');
    if (resetError) resetError.textContent = '';
    if (resetCodeSent) resetCodeSent.textContent = '';
    if (modalTitle) modalTitle.textContent = 'Create Account';
    if (modalSub) modalSub.textContent = 'Join shopwithsmilee';
  } else {
    loginForm.style.display = 'none';
    registerForm.style.display = 'none';
    resetForm.style.display = 'block';
    if (resetStep2) resetStep2.classList.add('hidden');
    if (resetError) resetError.textContent = '';
    if (resetCodeSent) resetCodeSent.textContent = '';
    if (modalTitle) modalTitle.textContent = 'Forgot Password';
    if (modalSub) modalSub.textContent = 'Send a code to your email';
  }
}

function sendResetCode(e) {
  if (e) e.preventDefault();
  const email = document.getElementById('resetEmail')?.value.trim();
  const errEl = document.getElementById('resetError');
  const codeSentEl = document.getElementById('resetCodeSent');
  const step2 = document.getElementById('resetStep2');
  if (!email) { if (errEl) errEl.textContent = 'Enter your email address'; return; }
  const users = JSON.parse(localStorage.getItem('sws-users') || '[]');
  const user = users.find(u => u.email === email);
  if (!user) { if (errEl) errEl.textContent = 'No account found with that email'; return; }
  const code = Math.floor(100000 + Math.random() * 900000).toString();
  sessionStorage.setItem('sws-reset-code', code);
  sessionStorage.setItem('sws-reset-email', email);
  if (errEl) errEl.textContent = '';
  if (codeSentEl) codeSentEl.textContent = `A verification code has been sent to ${email}.`;
  if (step2) step2.classList.remove('hidden');
  showToast('Code sent', `Verification code sent to ${email}`, 'success');
}

function resetPassword(e) {
  if (e) e.preventDefault();
  const email = document.getElementById('resetEmail')?.value.trim();
  const code = document.getElementById('resetCode')?.value.trim();
  const newPass = document.getElementById('resetNewPass')?.value || '';
  const errEl = document.getElementById('resetError');
  const storedEmail = sessionStorage.getItem('sws-reset-email');
  const storedCode = sessionStorage.getItem('sws-reset-code');
  if (!email || !code || !newPass) { if (errEl) errEl.textContent = 'Complete all fields'; return; }
  if (email !== storedEmail || code !== storedCode) { if (errEl) errEl.textContent = 'Email or code do not match'; return; }
  const users = JSON.parse(localStorage.getItem('sws-users') || '[]');
  const idx = users.findIndex(u => u.email === email);
  if (idx === -1) { if (errEl) errEl.textContent = 'No account found with that email'; return; }
  users[idx].pass = newPass;
  localStorage.setItem('sws-users', JSON.stringify(users));
  sessionStorage.removeItem('sws-reset-code');
  sessionStorage.removeItem('sws-reset-email');
  showToast('Password Reset', 'Your password has been updated. Please sign in.', 'success');
  showAuthTab('login');
}

function login(e) {
  if (e) e.preventDefault();
  const email = document.getElementById('loginEmail').value.trim();
  const pass = document.getElementById('loginPass').value;
  const errEl = document.getElementById('loginError');

  const users = JSON.parse(localStorage.getItem('sws-users') || '[]');
  const user = users.find(u => u.email === email && u.pass === pass);
  const isAdmin = email === 'admin@shopwithsmilee.com' && pass === 'admin123';

  if (isAdmin) {
    currentUser = { name: 'Admin', email, role: 'admin' };
    localStorage.setItem('sws-user', JSON.stringify(currentUser));
    closeLoginModal();
    updateAuthUI();
    showToast('Welcome back!', 'Logged in as Admin 🛡️', 'success');
    return;
  }
  if (user) {
    currentUser = { name: user.name, email, role: 'user' };
    localStorage.setItem('sws-user', JSON.stringify(currentUser));
    closeLoginModal();
    updateAuthUI();
    showToast('Welcome back!', `Hello ${user.name} 👋`, 'success');
    cart = loadCart();
    wishlist = loadWishlist();
    updateCartBadge();
    updateWishlistUI();
  } else {
    if (errEl) errEl.textContent = 'Invalid email or password';
  }
}

function register(e) {
  if (e) e.preventDefault();
  const name = document.getElementById('regName').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const pass = document.getElementById('regPass').value;
  const errEl = document.getElementById('registerError');

  if (!name || !email || !pass) { if (errEl) errEl.textContent = 'All fields required'; return; }
  const users = JSON.parse(localStorage.getItem('sws-users') || '[]');
  if (users.find(u => u.email === email)) { if (errEl) errEl.textContent = 'Email already registered'; return; }

  users.push({ name, email, pass });
  localStorage.setItem('sws-users', JSON.stringify(users));
  currentUser = { name, email, role: 'user' };
  localStorage.setItem('sws-user', JSON.stringify(currentUser));
  closeLoginModal();
  updateAuthUI();
  showToast('Account created!', `Welcome to shopwithsmilee, ${name} 🎉`, 'success');
  cart = loadCart();
  wishlist = loadWishlist();
  updateCartBadge();
  updateWishlistUI();
}

function logout() {
  currentUser = null;
  localStorage.removeItem('sws-user');
  updateAuthUI();
  showToast('Goodbye!', 'You have been logged out', 'info');

  document.getElementById('dashboardPage')?.classList.remove('active');
  document.getElementById('mainContent')?.classList.remove('hidden');
  cart = [];
  wishlist = [];
  updateCartBadge();
  updateWishlistUI();
}

function updatePassword() {
  if (!currentUser) return;
  const currentPass = document.getElementById('currentPassword')?.value || '';
  const newPass = document.getElementById('newPassword')?.value || '';
  if (!currentPass || !newPass) {
    showToast('Error', 'Enter both current and new password', 'error');
    return;
  }
  const users = JSON.parse(localStorage.getItem('sws-users') || '[]');
  const idx = users.findIndex(u => u.email === currentUser.email);
  if (idx === -1 || users[idx].pass !== currentPass) {
    showToast('Error', 'Current password is incorrect', 'error');
    return;
  }
  users[idx].pass = newPass;
  localStorage.setItem('sws-users', JSON.stringify(users));
  localStorage.setItem('sws-user', JSON.stringify(currentUser));
  showToast('Success', 'Password updated successfully', 'success');
}






let cart = [];
let wishlist = [];
let userLocation = null;
let locationWatchId = null;

function getCartKey() {
  return currentUser ? `sws-cart-${currentUser.email}` : null;
}
function getWishlistKey() {
  return currentUser ? `sws-wishlist-${currentUser.email}` : null;
}
function getOrdersKey() {
  return 'sws-orders';
}

function requireLogin() {
  if (currentUser) return true;
  const page = window.location.pathname.split('/').pop();
  if (page === '' || page === 'index.html') {
    openLoginModal();
  } else {
    window.location.href = 'index.html?showLogin=1';
  }
  return false;
}

function openProtectedPage(url) {
  if (currentUser) {
    window.location.href = url;
    return;
  }
  const page = window.location.pathname.split('/').pop();
  if (page === '' || page === 'index.html') {
    openLoginModal();
    return;
  }
  window.location.href = 'index.html?showLogin=1';
}

function loadCart() {
  if (!currentUser) return [];
  return JSON.parse(localStorage.getItem(getCartKey()) || '[]');
}
function saveCart() {
  if (!currentUser) return;
  localStorage.setItem(getCartKey(), JSON.stringify(cart));
}
function loadWishlist() {
  if (!currentUser) return [];
  return JSON.parse(localStorage.getItem(getWishlistKey()) || '[]');
}
function saveWishlist() {
  if (!currentUser) return;
  localStorage.setItem(getWishlistKey(), JSON.stringify(wishlist));
}

function getSavedOrders() {
  return JSON.parse(localStorage.getItem(getOrdersKey()) || '[]');
}
function saveOrders(orders) {
  localStorage.setItem(getOrdersKey(), JSON.stringify(orders));
}
function getUserOrders() {
  return currentUser ? getSavedOrders().filter(order => order.userEmail === currentUser.email) : [];
}
function findOrder(id) {
  const orderId = id.replace(/[\s#-]/g, '').toUpperCase();
  const saved = getSavedOrders().find(o => o.id === orderId);
  if (saved) return saved;
  return mockOrders[orderId] || null;
}
function createOrder(items, total, paymentMethod) {
  if (!requireLogin()) return null;
  const orderId = 'SWS' + Date.now().toString().slice(-7);
  const product = items.length > 1 ? `${items.length} items` : items[0].name;
  const status = 1;
  const now = new Date();
  const steps = [
    { label: 'Order Placed', desc: now.toLocaleString(), done: true, active: false, lat: userLocation?.lat || 0, lng: userLocation?.lng || 0 },
    { label: 'Processing', desc: 'Preparing your order', done: status > 0, active: status === 1, lat: userLocation?.lat || 0, lng: userLocation?.lng || 0 },
    { label: 'Shipped', desc: 'Sent from the warehouse', done: status > 1, active: status === 2, lat: userLocation?.lat || 0, lng: userLocation?.lng || 0 },
    { label: 'Out for Delivery', desc: 'Courier is on the way', done: status > 2, active: status === 3, lat: userLocation?.lat || 0, lng: userLocation?.lng || 0 },
    { label: 'Delivered', desc: 'Delivered to your address', done: status > 3, active: status === 4, lat: userLocation?.lat || 0, lng: userLocation?.lng || 0 }
  ];
  const order = {
    id: orderId,
    product,
    total,
    paymentMethod,
    items,
    status,
    createdAt: now.toISOString(),
    steps,
    userEmail: currentUser.email
  };
  const orders = getSavedOrders();
  orders.push(order);
  saveOrders(orders);
  return order;
}

function addToWishlist(productName, price, image) {
  if (!requireLogin()) return;
  if (wishlist.some(item => item.name === productName)) {
    showToast('Already saved', `${productName} is already in your wishlist`, 'info');
    return;
  }
  wishlist.push({ name: productName, price, image });
  saveWishlist();
  updateWishlistUI();
  showToast('Wishlist', `${productName} added to your wishlist ♥`, 'success');
}

function addToWishlistFromCard(el) {
  const card = el.closest('.product-card');
  if (!card) return;
  const productName = card.querySelector('.card-name')?.textContent.trim() || 'Item';
  const price = card.querySelector('.card-price')?.textContent.trim() || '';
  const image = card.querySelector('img')?.src || '';
  addToWishlist(productName, price, image);
}

function removeFromWishlist(productName) {
  wishlist = wishlist.filter(item => item.name !== productName);
  saveWishlist();
  updateWishlistUI();
  renderWishlist();
  showToast('Removed', `${productName} removed from your wishlist`, 'info');
}

function renderWishlist() {
  const container = document.getElementById('wishlistItems');
  if (!container) return;
  if (!wishlist.length) {
    container.innerHTML = `<div class="empty-state">Your wishlist is empty. Add items from the home page by tapping ♥.</div>`;
    return;
  }
  container.innerHTML = wishlist.map(item => {
    const prod = (window.shopProducts || []).find(p => p.id === item.id || p.name === item.name);
    const img = item.image || prod?.image || prod?.img || '';
    const price = item.price || (prod ? prod.price : '₹0');
    return `
    <div class="wishlist-item">
      <div class="wishlist-thumb"><img src="${img}" alt="${item.name}"></div>
      <div class="wishlist-details">
        <h3>${item.name}</h3>
        <p>${price}</p>
      </div>
      <button class="btn btn-small btn-accent" onclick="removeFromWishlist('${item.name}')">Remove</button>
    </div>
  `;
  }).join('');
}

function renderWishlistPreview() {
  const preview = document.getElementById('wishlistPreview');
  if (!preview) return;
  if (!wishlist.length) {
    preview.innerHTML = `<div class="empty-state">Your wishlist is empty. Tap ♥ on any product to save it.</div>`;
    return;
  }
  preview.innerHTML = wishlist.slice(0, 4).map(item => `
    <div class="wishlist-preview-item">
      <img src="${item.image}" alt="${item.name}">
      <div class="preview-details">
        <p class="card-tag">Wishlist</p>
        <p class="card-name">${item.name}</p>
        <p class="card-price">${item.price}</p>
      </div>
      <button class="btn btn-small btn-accent" onclick="removeFromWishlist('${item.name}')">Remove</button>
    </div>
  `).join('');
}

function updateWishlistCount() {
  const count = document.getElementById('wishlistCount');
  if (!count) return;
  count.textContent = `${wishlist.length} item${wishlist.length === 1 ? '' : 's'}`;
}

function updateWishlistUI() {
  updateWishlistCount();
  renderWishlistPreview();
}

function addToCart(productName, price, image) {
  if (!requireLogin()) return;

  const prod = (window.shopProducts || []).find(p => p.name === productName || p.id === productName || p.id === (productName || '').toLowerCase().replace(/\s+/g, '-'));
  const item = {
    id: prod ? prod.id : null,
    name: productName,
    price: price || (prod ? prod.price : '₹999'),
    image: image || (prod ? prod.image || prod.img : '')
  };
  cart.push(item);
  saveCart();
  updateCartBadge();
  showToast('Added to cart', productName, 'success');
}

function updateCartBadge() {
  const badge = document.querySelector('.cart-badge');
  if (badge) badge.textContent = cart.length > 0 ? cart.length : '';
}

function getLocation() {
  if (!navigator.geolocation) {
    if (sessionStorage.getItem('sws-location-error-shown') !== '1') {
      showToast('Error', 'Geolocation not supported in your browser', 'error');
      sessionStorage.setItem('sws-location-error-shown', '1');
    }
    return;
  }

  if (locationWatchId != null) return;

  const showActiveToastOnce = () => {
    if (sessionStorage.getItem('sws-location-active-shown') !== '1') {
      sessionStorage.setItem('sws-location-active-shown', '1');
      showToast('Location active', 'Your GPS location is now being tracked.', 'success');
    }
  };

  const showErrorToastOnce = (message) => {
    if (sessionStorage.getItem('sws-location-error-shown') !== '1') {
      sessionStorage.setItem('sws-location-error-shown', '1');
      showToast('Error', message, 'error');
    }
  };

  const startWatch = () => {
    locationWatchId = navigator.geolocation.watchPosition(
      (position) => {
        userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          accuracy: position.coords.accuracy
        };
        console.log('📍 Location updated:', userLocation);
        showActiveToastOnce();
      },
      (error) => {
        console.error('Geolocation error:', error);
        showErrorToastOnce('Could not access GPS location. Please allow location access from your browser settings.');
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      }
    );
  };

  if (navigator.permissions && navigator.permissions.query) {
    navigator.permissions.query({ name: 'geolocation' }).then((permissionStatus) => {
      if (permissionStatus.state === 'denied') {
        showErrorToastOnce('Location permission denied. Please allow it in browser settings.');
        return;
      }
      startWatch();
      permissionStatus.onchange = () => {
        if (permissionStatus.state === 'granted' && locationWatchId == null) {
          startWatch();
        }
      };
    }).catch(() => {
      startWatch();
    });
  } else {
    startWatch();
  }
}

const mockOrders = {
  'SWS2024001': {
    product: 'Handmade Crochet Bag', status: 2,
    steps: [
      { label: 'Order Placed', desc: 'Mar 20, 2024 — 10:30 AM', done: true, lat: 28.5355, lng: 77.3910 },
      { label: 'Processing', desc: 'Mar 20, 2024 — 2:00 PM', done: true, lat: 28.5355, lng: 77.3910 },
      { label: 'Shipped', desc: 'Mar 21, 2024 — 11:00 AM', done: false, active: true, lat: 28.5500, lng: 77.3000 },
      { label: 'Out for Delivery', desc: 'Expected Mar 24', done: false, lat: 28.6000, lng: 77.2500 },
      { label: 'Delivered', desc: 'Estimated Mar 25', done: false, lat: 28.6139, lng: 77.2090 }
    ]
  },
  'SWS2024002': {
    product: 'Resin Art Set', status: 4,
    steps: [
      { label: 'Order Placed', desc: 'Mar 15, 2024', done: true, lat: 28.5355, lng: 77.3910 },
      { label: 'Processing', desc: 'Mar 15, 2024', done: true, lat: 28.5355, lng: 77.3910 },
      { label: 'Shipped', desc: 'Mar 16, 2024', done: true, lat: 28.5500, lng: 77.3000 },
      { label: 'Out for Delivery', desc: 'Mar 17, 2024', done: true, lat: 28.6000, lng: 77.2500 },
      { label: 'Delivered', desc: 'Mar 17, 2024 — 3:45 PM ✓', done: true, lat: 28.6139, lng: 77.2090 }
    ]
  }
};

function trackOrder(orderId = null) {
  let input = orderId || document.getElementById('trackingInput')?.value?.trim() || document.getElementById('dashTrackingInput')?.value?.trim() || '';
  input = input.replace(/[\s#-]/g, '').toUpperCase();
  if (!input) {

    openOrders();
    return;
  }
  const order = findOrder(input);
  if (!order) {
    showToast('❌ Not Found', `Order "${input}" not found.`, 'error');
    return;
  }

  if (document.getElementById('dashMainContent')) {
    switchDashTab('track');
  }

  const result = document.getElementById('dashTrackingResult') || document.getElementById('trackingResult');
  const timeline = document.getElementById('dashTrackingTimeline') || document.getElementById('trackingTimeline');
  const productName = document.getElementById('dashTrackingProduct') || document.getElementById('trackingProduct');
  const mapContainer = document.getElementById('dashTrackingMap') || document.getElementById('trackingMap') || document.querySelector('.track-map');
  const inputField = document.getElementById('dashTrackingInput') || document.getElementById('trackingInput');

  if (inputField && !orderId) {
    inputField.value = input;
  }

  if (productName) {
    productName.textContent = order.product;
  }

  if (timeline) {
    timeline.innerHTML = order.steps.map(s => `
      <div class="track-step">
        <div class="track-dot ${s.done ? 'done' : s.active ? 'active' : ''}">
          ${s.done ? '✓' : s.active ? '●' : '○'}
        </div>
        <div class="track-info">
          <h4>${s.label}</h4>
          <p>${s.desc}</p>
          <small style="color:var(--text3);font-size:11px;">📍 ${s.lat.toFixed(4)}, ${s.lng.toFixed(4)}</small>
        </div>
      </div>
    `).join('');
  }

  if (mapContainer) {
    renderTrackingMap(order.steps, order.status, mapContainer);
  }
  if (result) {
    result.style.display = 'block';
    result.classList.add('show');
  }

  showToast('✅ Order Found!', `📦 ${order.product}\nStatus: ${order.steps[order.status].label}`, 'success');
}

function renderTrackingMap(steps, currentStatus, container) {
  const statusEmojis = {
    'Order Placed': '📋',
    'Processing': '⚙️',
    'Shipped': '🚚',
    'Out for Delivery': '📍',
    'Delivered': '✅'
  };

  const flowchart = steps.map((step, i) => {
    const isDone = i < currentStatus;
    const isActive = i === currentStatus;
    const statusColor = isDone ? '#4caf50' : isActive ? 'var(--accent)' : '#666';
    const emoji = statusEmojis[step.label] || '📦';

    return `
      <div class="flowchart-item" style="flex:1;text-align:center;">
        <div class="flowchart-circle" style="background:${statusColor};border-color:${statusColor};">
          ${emoji}
        </div>
        <h4 style="margin:10px 0 4px;font-size:13px;font-weight:600;">${step.label}</h4>
        <p style="margin:0 0 4px;font-size:11px;color:var(--text3);">${step.desc.split('—')[0].trim()}</p>
        <small style="color:#999;font-size:10px;">📍 ${step.lat.toFixed(3)}, ${step.lng.toFixed(3)}</small>
        ${i < steps.length - 1 ? `<div class="flowchart-arrow" style="color:${isDone ? '#4caf50' : '#666'};"></div>` : ''}
      </div>
    `;
  }).join('');
  const currentStep = steps[currentStatus];
  const distanceKm = (Math.random() * 50 + 10).toFixed(1);

  container.innerHTML = `
    <div style="background:var(--bg3);border:1px solid var(--border);border-radius:14px;padding:20px;margin-bottom:20px;">
      <h3 style="margin:0 0 16px;font-size:18px;font-weight:600;">📦 Shipment Status</h3>
      
      <!-- Horizontal Flowchart -->
      <div style="display:flex;gap:0;align-items:flex-start;margin-bottom:24px;overflow-x:auto;padding:10px 0;">
        ${flowchart}
      </div>

      <!-- Current Location Card -->
      <div style="background:linear-gradient(135deg, var(--bg2) 0%, var(--bg3) 100%);border:1px solid var(--border);border-radius:12px;padding:16px;margin-bottom:16px;">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;">
          <span style="font-size:28px;">📍</span>
          <div>
            <h4 style="margin:0;font-size:16px;font-weight:600;">${currentStep.label}</h4>
            <p style="margin:4px 0 0;font-size:12px;color:var(--text3);">Current Location</p>
          </div>
        </div>
        <p style="margin:8px 0 0;font-size:13px;color:var(--text2);">📍 Coordinates: <strong>${currentStep.lat.toFixed(4)}, ${currentStep.lng.toFixed(4)}</strong></p>
        <p style="margin:8px 0 0;font-size:13px;color:var(--text2);">⏱️ Time: <strong>${currentStep.desc}</strong></p>
        ${currentStatus < steps.length - 1 ? `<p style="margin:8px 0 0;font-size:13px;color:var(--accent);">🚀 Next: ${steps[currentStatus + 1].label}</p>` : `<p style="margin:8px 0 0;font-size:13px;color:#4caf50;font-weight:600;">✅ Delivered!</p>`}
      </div>

      <!-- Timeline Details -->
      <div style="background:var(--bg2);border-radius:12px;padding:16px;">
        <h4 style="margin:0 0 12px;font-size:14px;font-weight:600;">📋 Full Timeline</h4>
        ${steps.map((s, i) => `
          <div style="display:flex;gap:12px;padding:10px 0;${i < steps.length - 1 ? 'border-bottom:1px solid var(--border);' : ''}">
            <div style="color:${i < currentStatus ? '#4caf50' : i === currentStatus ? 'var(--accent)' : '#666'};font-weight:600;min-width:20px;">${i < currentStatus ? '✓' : i === currentStatus ? '●' : '○'}</div>
            <div style="flex:1;min-width:0;">
              <p style="margin:0;font-size:13px;font-weight:500;">${s.label}</p>
              <p style="margin:2px 0 0;font-size:11px;color:var(--text3);">${s.desc}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}



function openDashboard() {
  if (!currentUser) { openLoginModal(); return; }
  document.getElementById('dashboardPage')?.classList.add('active');
  document.getElementById('mainContent')?.classList.add('hidden');
  renderDashboard();
  window.scrollTo(0, 0);
}

function closeDashboard() {
  document.getElementById('dashboardPage')?.classList.remove('active');
  document.getElementById('mainContent')?.classList.remove('hidden');
}

function openOrders() {
  if (!currentUser) { openLoginModal(); return; }
  openDashboard();
  setTimeout(() => switchDashTab('orders'), 120);
}

function renderDashboard() {
  const isAdmin = currentUser?.role === 'admin';
  const title = document.getElementById('dashTitle');
  if (title) title.textContent = isAdmin ? 'Admin Dashboard' : 'My Dashboard';

  document.querySelectorAll('.admin-only').forEach(el => {
    el.style.display = isAdmin ? 'block' : 'none';
  });

  const statsEl = document.getElementById('dashStats');
  if (statsEl) {
    if (isAdmin) {
      statsEl.innerHTML = `
        <div class="dash-card"><div class="dash-card-value">₹48,200</div><div class="dash-card-label">Total Revenue</div></div>
        <div class="dash-card"><div class="dash-card-value">132</div><div class="dash-card-label">Total Orders</div></div>
        <div class="dash-card"><div class="dash-card-value">47</div><div class="dash-card-label">Products Listed</div></div>
        <div class="dash-card"><div class="dash-card-value">28</div><div class="dash-card-label">Customers</div></div>
      `;
    } else {
      statsEl.innerHTML = `
        <div class="dash-card"><div class="dash-card-value">${cart.length}</div><div class="dash-card-label">Cart Items</div></div>
        <div class="dash-card"><div class="dash-card-value">${getUserOrders().length}</div><div class="dash-card-label">Active Orders</div></div>
        <div class="dash-card"><div class="dash-card-value">${wishlist.length}</div><div class="dash-card-label">Wishlist Items</div></div>
        <div class="dash-card"><div class="dash-card-value">${getUserOrders().filter(o => o.status === 4).length}</div><div class="dash-card-label">Delivered</div></div>
      `;
    }
  }
}

function switchDashTab(tab) {
  document.querySelectorAll('.dash-sidebar-item').forEach(el => el.classList.remove('active'));
  document.querySelector(`[data-tab="${tab}"]`)?.classList.add('active');

  const content = document.getElementById('dashMainContent');
  if (!content) return;
  const isAdmin = currentUser?.role === 'admin';

  if (tab === 'overview') {
    renderDashboard();
    const userOrders = getUserOrders();
    const orderRows = userOrders.length ? userOrders.map(order => {
      const statusLabel = order.status === 4 ? 'Delivered' : order.status === 2 ? 'Shipped' : 'Processing';
      const badgeClass = order.status === 4 ? 'status-delivered' : order.status === 2 ? 'status-shipped' : 'status-processing';
      return `<tr><td>#${order.id}</td><td>${order.product}</td><td>${new Date(order.createdAt).toLocaleDateString()}</td><td>${order.total}</td><td><span class="status-badge ${badgeClass}">${statusLabel}</span></td></tr>`;
    }).join('') : '<tr><td colspan="5" style="text-align:center;color:var(--text3);font-family:Segoe UI,sans-serif;font-size:13px;">No orders found. Place your first order to see it here.</td></tr>';

    content.innerHTML = `
      <h2 style="font-size:28px;font-weight:300;letter-spacing:2px;margin-bottom:30px;">
        ${isAdmin ? 'Admin Overview' : 'My Account'}
        ${isAdmin ? '<span class="admin-badge">Admin</span>' : ''}
      </h2>
      <div class="dash-cards" id="dashStats"></div>
      <div class="dash-table">
        <table>
          <thead><tr><th>Order ID</th><th>Product</th><th>Date</th><th>Amount</th><th>Status</th></tr></thead>
          <tbody>
            ${isAdmin ? `<tr><td>#SWS2024001</td><td>Crochet Bag</td><td>Mar 20</td><td>₹1,299</td><td><span class="status-badge status-shipped">Shipped</span></td></tr>
            <tr><td>#SWS2024002</td><td>Resin Art Set</td><td>Mar 15</td><td>₹899</td><td><span class="status-badge status-delivered">Delivered</span></td></tr>
            <tr><td>#SWS2024003</td><td>Handmade Earrings</td><td>Mar 22</td><td>₹549</td><td><span class="status-badge status-processing">Processing</span></td></tr>
            <tr><td>#SWS2024004</td><td>Crochet Wallet</td><td>Mar 23</td><td>₹749</td><td><span class="status-badge status-cancelled">Cancelled</span></td></tr>` : orderRows}
          </tbody>
        </table>
      </div>
    `;
    renderDashboard();
  } else if (tab === 'profile') {
    content.innerHTML = `
      <h2 style="font-size:28px;font-weight:300;letter-spacing:2px;margin-bottom:30px;">Profile Settings</h2>
      <div style="max-width:500px;">
        <div class="form-group"><label>Full Name</label><input type="text" value="${currentUser?.name || ''}" style="background:var(--bg3);border:1px solid var(--border);color:var(--text);padding:12px 16px;width:100%;font-size:14px;font-family:'Segoe UI',sans-serif;"></div>
        <div class="form-group"><label>Email</label><input type="email" value="${currentUser?.email || ''}" style="background:var(--bg3);border:1px solid var(--border);color:var(--text);padding:12px 16px;width:100%;font-size:14px;font-family:'Segoe UI',sans-serif;"></div>
        <div class="form-group"><label>Role</label><input type="text" value="${currentUser?.role || 'user'}" disabled style="background:var(--bg3);border:1px solid var(--border);color:var(--text3);padding:12px 16px;width:100%;font-size:14px;font-family:'Segoe UI',sans-serif;"></div>
        <div class="form-group"><label>Current Password</label><input type="password" id="currentPassword" placeholder="Enter current password" style="background:var(--bg3);border:1px solid var(--border);color:var(--text);padding:12px 16px;width:100%;font-size:14px;font-family:'Segoe UI',sans-serif;"></div>
        <div class="form-group"><label>New Password</label><input type="password" id="newPassword" placeholder="Enter new password" style="background:var(--bg3);border:1px solid var(--border);color:var(--text);padding:12px 16px;width:100%;font-size:14px;font-family:'Segoe UI',sans-serif;"></div>
        <button class="btn btn-accent" onclick="showToast('Profile Updated','Your changes have been saved','success')">Save Changes</button>
        <button class="btn btn-accent" style="margin-top:12px;" onclick="updatePassword()">Change Password</button>
      </div>
    `;
  } else if (tab === 'orders') {
    const userOrders = getUserOrders();
    content.innerHTML = `
      <h2 style="font-size:28px;font-weight:300;letter-spacing:2px;margin-bottom:30px;">My Orders</h2>
      <div class="dash-table">
        <table>
          <thead><tr><th>Order ID</th><th>Product</th><th>Date</th><th>Amount</th><th>Status</th><th>Action</th></tr></thead>
          <tbody>
            ${userOrders.length ? userOrders.map(order => {
      const statusLabel = order.status === 4 ? 'Delivered' : order.status === 2 ? 'Shipped' : 'Processing';
      const badgeClass = order.status === 4 ? 'status-delivered' : order.status === 2 ? 'status-shipped' : 'status-processing';
      return `<tr><td>#${order.id}</td><td>${order.product}</td><td>${new Date(order.createdAt).toLocaleDateString()}</td><td>${order.total}</td><td><span class="status-badge ${badgeClass}">${statusLabel}</span></td><td><button class="btn" style="padding:6px 14px;font-size:10px;" onclick="trackOrder('${order.id}')">Track</button></td></tr>`;
    }).join('') : '<tr><td colspan="6" style="text-align:center;color:var(--text3);font-family:Segoe UI,sans-serif;font-size:13px;">No orders yet</td></tr>'}
          </tbody>
        </table>
      </div>
    `;
  } else if (tab === 'track') {
    content.innerHTML = `
      <h2 style="font-size:28px;font-weight:300;letter-spacing:2px;margin-bottom:30px;">Track Order</h2>
      <div class="tracking-panel" style="margin-top:0;">
        <div class="tracking-input-row">
          <input type="text" id="dashTrackingInput" placeholder="Enter order ID (e.g. SWS2024001)">
          <button class="btn btn-accent" onclick="trackOrder()">Track</button>
        </div>
        <div id="dashTrackingResult" class="tracking-result">
          <p style="font-size:14px;font-family:'Segoe UI',sans-serif;color:var(--text2);margin-bottom:10px;">Tracking: <strong id="dashTrackingProduct"></strong></p>
          <div id="dashTrackingTimeline" class="tracking-timeline"></div>
          <div id="dashTrackingMap"></div>
        </div>
      </div>
    `;
  } else if (tab === 'products' && currentUser?.role === 'admin') {
    content.innerHTML = `
      <h2 style="font-size:28px;font-weight:300;letter-spacing:2px;margin-bottom:30px;">Manage Products <span class="admin-badge">Admin</span></h2>
      <button class="btn btn-accent" style="margin-bottom:20px;" onclick="showToast('Add Product','Product form coming soon','info')">+ Add Product</button>
      <div class="dash-table">
        <table>
          <thead><tr><th>Product</th><th>Category</th><th>Price</th><th>Stock</th><th>Actions</th></tr></thead>
          <tbody>
            <tr><td>Crochet Tote Bag</td><td>Crochet</td><td>₹1,299</td><td>8</td><td><button class="btn" style="padding:5px 12px;font-size:10px;" onclick="showToast('Edit','Opening editor','info')">Edit</button></td></tr>
            <tr><td>Resin Art Bowl</td><td>Resin</td><td>₹899</td><td>12</td><td><button class="btn" style="padding:5px 12px;font-size:10px;" onclick="showToast('Edit','Opening editor','info')">Edit</button></td></tr>
            <tr><td>Handmade Earrings</td><td>Jewellery</td><td>₹549</td><td>25</td><td><button class="btn" style="padding:5px 12px;font-size:10px;" onclick="showToast('Edit','Opening editor','info')">Edit</button></td></tr>
            <tr><td>Crochet Wallet</td><td>Crochet</td><td>₹749</td><td>5</td><td><button class="btn" style="padding:5px 12px;font-size:10px;" onclick="showToast('Edit','Opening editor','info')">Edit</button></td></tr>
          </tbody>
        </table>
      </div>
    `;
  } else if (tab === 'customers' && currentUser?.role === 'admin') {
    const users = JSON.parse(localStorage.getItem('sws-users') || '[]');
    content.innerHTML = `
      <h2 style="font-size:28px;font-weight:300;letter-spacing:2px;margin-bottom:30px;">Customers <span class="admin-badge">Admin</span></h2>
      <div class="dash-table">
        <table>
          <thead><tr><th>Name</th><th>Email</th><th>Orders</th><th>Joined</th></tr></thead>
          <tbody>
            ${users.length ? users.map(u => `<tr><td>${u.name}</td><td>${u.email}</td><td>0</td><td>Recent</td></tr>`).join('') : '<tr><td colspan="4" style="text-align:center;color:var(--text3);font-family:Segoe UI,sans-serif;font-size:13px;">No registered customers yet</td></tr>'}
          </tbody>
        </table>
      </div>
    `;
  }
}

function createParticles() {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  for (let i = 0; i < 15; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.cssText = `
      width: ${Math.random() * 4 + 1}px;
      height: ${Math.random() * 4 + 1}px;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      animation-delay: ${Math.random() * 6}s;
      animation-duration: ${4 + Math.random() * 4}s;
    `;
    hero.appendChild(p);
  }
}

function searchProducts(q) {
  const query = (q || document.getElementById('searchInput')?.value || '').toLowerCase();
  document.querySelectorAll('.product-card').forEach(card => {
    const name = card.querySelector('.card-name')?.textContent.toLowerCase() || '';
    card.style.display = name.includes(query) || query === '' ? 'block' : 'none';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initScrollAnim();
  createParticles();
  renderNotifications();
  updateAuthUI();
  cart = loadCart();
  wishlist = loadWishlist();
  updateCartBadge();
  updateWishlistUI();
  if (new URLSearchParams(window.location.search).get('showLogin') === '1') {
    openLoginModal();
  }
  updateCartBadge();
  updateWishlistUI();

  setTimeout(() => {
    document.querySelector('.hero .fade')?.classList.add('show');
  }, 300);
});