// ===================================================
// KETSY STORE – Cart Logic
// ===================================================

// Cart stored in memory (array of {id, name, price, icon, qty, variant})
let cart = JSON.parse(localStorage.getItem('ketsyCart') || '[]');

function saveCart() {
  localStorage.setItem('ketsyCart', JSON.stringify(cart));
  updateCartUI();
}

function addToCart(productId, qty = 1, variant = '') {
  const product = getProductById(productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId && item.variant === variant);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: product.id, name: product.name, price: product.price, icon: product.icon, qty, variant, category: product.categoryLabel });
  }
  saveCart();
  showToast(`✅ "${product.name}" added to cart!`, 'success');
  openCart();
}

function removeFromCart(productId, variant = '') {
  cart = cart.filter(item => !(item.id === productId && item.variant === variant));
  saveCart();
}

function updateQty(productId, variant, delta) {
  const item = cart.find(i => i.id === productId && i.variant === variant);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart();
}

function getCartTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function getCartCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function updateCartUI() {
  // Update badge
  const count = getCartCount();
  const badges = document.querySelectorAll('#cart-count');
  badges.forEach(b => { b.textContent = count; });

  // Update cart items panel
  const itemsEl = document.getElementById('cart-items');
  const footerEl = document.getElementById('cart-footer');
  const totalEl = document.getElementById('cart-total');

  if (!itemsEl) return;

  if (cart.length === 0) {
    itemsEl.innerHTML = `<div class="cart-empty"><i class="fas fa-shopping-bag"></i><p>Your cart is empty</p></div>`;
    if (footerEl) footerEl.style.display = 'none';
  } else {
    itemsEl.innerHTML = cart.map(item => `
      <div class="cart-item">
        <div class="cart-item-img">${item.icon}</div>
        <div class="cart-item-info">
          <p class="cart-item-name">${item.name}</p>
          <p class="cart-item-variant">${item.variant || item.category}</p>
          <div class="cart-item-actions">
            <button class="qty-btn" onclick="updateQty(${item.id}, '${item.variant}', -1)">−</button>
            <span class="qty-value">${item.qty}</span>
            <button class="qty-btn" onclick="updateQty(${item.id}, '${item.variant}', 1)">+</button>
            <span class="cart-item-price">GHS ${(item.price * item.qty).toFixed(2)}</span>
            <button class="remove-item" onclick="removeFromCart(${item.id}, '${item.variant}')"><i class="fas fa-trash-alt"></i></button>
          </div>
        </div>
      </div>
    `).join('');
    if (footerEl) footerEl.style.display = 'flex';
    if (totalEl) totalEl.textContent = `GHS ${getCartTotal().toFixed(2)}`;
  }
}

function openCart() {
  document.getElementById('cart-sidebar')?.classList.add('open');
  document.getElementById('cart-overlay')?.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cart-sidebar')?.classList.remove('open');
  document.getElementById('cart-overlay')?.classList.remove('active');
  document.body.style.overflow = '';
}

// Wishlist (simple)
let wishlist = JSON.parse(localStorage.getItem('ketsyWishlist') || '[]');

function addToWishlist(productId) {
  const product = getProductById(productId);
  if (!product) return;
  if (wishlist.includes(productId)) {
    showToast('Already in your wishlist!');
    return;
  }
  wishlist.push(productId);
  localStorage.setItem('ketsyWishlist', JSON.stringify(wishlist));
  const wCount = document.getElementById('wishlist-count');
  if (wCount) wCount.textContent = wishlist.length;
  showToast(`❤️ Added "${product.name}" to wishlist!`);
}

// Init wishlist count
document.addEventListener('DOMContentLoaded', () => {
  const wCount = document.getElementById('wishlist-count');
  if (wCount) wCount.textContent = wishlist.length;
  updateCartUI();
});
