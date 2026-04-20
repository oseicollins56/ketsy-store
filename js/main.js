// ===================================================
// KETSY STORE – Main JavaScript
// ===================================================

document.addEventListener('DOMContentLoaded', () => {

  // ----- Categories Expand/Collapse -----
  const catToggle = document.getElementById('categories-toggle');
  const catPanel = document.getElementById('categories-panel');
  const customTrigger = document.getElementById('custom-items-trigger');
  const customSubitems = document.getElementById('custom-subitems');

  if (catToggle && catPanel) {
    catToggle.addEventListener('click', () => {
      const isOpen = catPanel.classList.toggle('open');
      catToggle.setAttribute('aria-expanded', isOpen);
      // Close sub-items if panel closes
      if (!isOpen && customSubitems) {
        customSubitems.classList.remove('open');
        customTrigger?.classList.remove('sub-open');
      }
    });
  }

  if (customTrigger && customSubitems) {
    customTrigger.addEventListener('click', (e) => {
      e.preventDefault();
      const isSubOpen = customSubitems.classList.toggle('open');
      customTrigger.classList.toggle('sub-open', isSubOpen);
    });
  }

  // ----- Hamburger / Mobile Nav -----
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');

  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      nav.classList.toggle('open');
      document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
    });
    // Close nav when a link is clicked
    nav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        nav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ----- Cart Toggle -----
  document.getElementById('cart-toggle')?.addEventListener('click', openCart);
  document.getElementById('cart-close')?.addEventListener('click', closeCart);
  document.getElementById('cart-overlay')?.addEventListener('click', closeCart);

  // ----- Back to Top -----
  const backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('visible', window.scrollY > 300);
    });
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // ----- Header scroll shadow -----
  const header = document.getElementById('header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.style.boxShadow = window.scrollY > 10 ? '0 2px 20px rgba(0,0,0,0.12)' : 'none';
    });
  }

  // ----- Featured Products (Home page) -----
  const featuredEl = document.getElementById('featured-products');
  if (featuredEl) {
    const featured = PRODUCTS.slice(0, 8);
    featuredEl.innerHTML = featured.map(renderProductCard).join('');
  }

  // ----- Newsletter -----
  const nlForm = document.getElementById('newsletter-form');
  if (nlForm) {
    nlForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('🎉 You\'re subscribed! Welcome to Ketsy family.', 'success');
      nlForm.reset();
    });
  }

  // ----- Active nav link -----
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.split('?')[0] === currentPage) {
      link.classList.add('active');
    }
  });

  // ----- Shop page -----
  if (document.getElementById('shop-products-grid')) {
    initShopPage();
  }

  // ----- Product detail page -----
  if (document.getElementById('product-detail-root')) {
    initProductPage();
  }

  // ----- Checkout page -----
  if (document.getElementById('checkout-form')) {
    initCheckoutPage();
  }

  // ----- Contact form -----
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('✅ Message sent! We\'ll reply within 24 hours.', 'success');
      contactForm.reset();
    });
  }

  // ----- Custom order form -----
  const customForm = document.getElementById('custom-order-form');
  if (customForm) {
    customForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showModal(
        '🎉',
        'Order Request Received!',
        'Thank you! We\'ve received your custom order request. Our team will contact you within 24 hours with a quote and timeline.',
        'Close'
      );
      customForm.reset();
    });
  }

});

// ===== SHOP PAGE =====
function initShopPage() {
  const params = new URLSearchParams(window.location.search);
  let activeCategory = params.get('cat') || 'all';
  let sortBy = 'featured';
  let priceMax = 300;

  const grid = document.getElementById('shop-products-grid');
  const countEl = document.getElementById('results-count');

  function renderShop() {
    let filtered = getProductsByCategory(activeCategory);

    // Sort
    if (sortBy === 'price-asc') filtered.sort((a,b) => a.price - b.price);
    else if (sortBy === 'price-desc') filtered.sort((a,b) => b.price - a.price);
    else if (sortBy === 'rating') filtered.sort((a,b) => b.rating - a.rating);
    else if (sortBy === 'newest') filtered = [...filtered].reverse();

    // Price filter
    filtered = filtered.filter(p => p.price <= priceMax);

    if (countEl) countEl.textContent = `${filtered.length} products`;
    if (grid) grid.innerHTML = filtered.length ? filtered.map(renderProductCard).join('') : `<div class="empty-state" style="grid-column:1/-1"><i class="fas fa-search"></i><h3>No products found</h3><p>Try adjusting your filters.</p></div>`;
  }

  // Category filter buttons
  document.querySelectorAll('.cat-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.cat-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.dataset.cat;
      renderShop();
    });
    if (btn.dataset.cat === activeCategory) btn.classList.add('active');
  });

  // Sort
  const sortEl = document.getElementById('sort-select');
  if (sortEl) {
    sortEl.addEventListener('change', () => { sortBy = sortEl.value; renderShop(); });
  }

  // Price range
  const priceEl = document.getElementById('price-range');
  const priceLabel = document.getElementById('price-label');
  if (priceEl) {
    priceEl.addEventListener('input', () => {
      priceMax = parseInt(priceEl.value);
      if (priceLabel) priceLabel.textContent = `GHS ${priceMax}`;
      renderShop();
    });
  }

  renderShop();
}

// ===== PRODUCT DETAIL PAGE =====
function initProductPage() {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get('id');
  const product = getProductById(productId);
  const root = document.getElementById('product-detail-root');

  if (!product || !root) {
    root.innerHTML = `<div class="empty-state"><i class="fas fa-box-open"></i><h3>Product not found</h3><p>This product does not exist.</p><a href="shop.html" class="btn btn-primary">Back to Shop</a></div>`;
    return;
  }

  document.title = `${product.name} – Ketsy Store`;

  const stars = renderStars(product.rating);
  const originalPrice = product.originalPrice ? `<span class="original">GHS ${product.originalPrice.toFixed(2)}</span>` : '';
  const sizeButtons = product.sizes.map(s => `<button class="size-btn" onclick="selectSize(this)">${s}</button>`).join('');
  const colorSwatches = product.colors.map(c => `<span class="color-swatch" style="background:${c}" onclick="selectColor(this)" title="${c}"></span>`).join('');
  const badge = product.badge ? `<span class="product-badge ${product.badge === 'Sale' ? 'sale' : 'new'}">${product.badge}</span>` : '';

  const mainMedia = product.img
    ? `<img src="${product.img}" alt="${product.name}" style="width:100%;height:100%;object-fit:cover;border-radius:inherit">`
    : `${product.icon}`;

  root.innerHTML = `
    <div class="product-detail-grid">
      <div class="product-gallery">
        <div class="gallery-main" id="gallery-main" style="position:relative;overflow:hidden">${mainMedia}</div>
        <div class="gallery-thumbs">
          ${[1,2,3,4].map(i => `
            <div class="gallery-thumb ${i===1?'active':''}" onclick="selectThumb(this)" style="position:relative;overflow:hidden">
              ${product.img
                ? `<img src="${product.img}" alt="" style="width:100%;height:100%;object-fit:cover">`
                : product.icon}
            </div>
          `).join('')}
        </div>
      </div>
      <div class="product-detail-info">
        <p class="product-category" style="font-size:.85rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:.05em;margin-bottom:.5rem">${product.categoryLabel}</p>
        <h1>${product.name}</h1>
        <div class="product-meta">
          <div class="product-rating">${stars}<span style="margin-left:.3rem">${product.rating} (${product.reviews} reviews)</span></div>
          <span class="stock-badge ${product.inStock ? 'in-stock' : 'out-of-stock'}">${product.inStock ? '✓ In Stock' : '✗ Out of Stock'}</span>
        </div>
        <div class="detail-price">GHS ${product.price.toFixed(2)} ${originalPrice}</div>
        <p style="color:var(--text-light);font-size:.9rem;line-height:1.7;margin-bottom:1.5rem">${product.description}</p>

        ${product.sizes[0] !== 'One Size' && !['cups','frames'].includes(product.category) ? `
        <div class="variant-section">
          <p class="variant-label">Size: <span id="selected-size">Select a size</span></p>
          <div class="size-options">${sizeButtons}</div>
        </div>` : ''}

        <div class="variant-section">
          <p class="variant-label">Color</p>
          <div class="color-swatches">${colorSwatches}</div>
        </div>

        <div class="variant-section">
          <p class="variant-label">Quantity</p>
          <div class="qty-control">
            <button class="qty-control-btn" onclick="changeDetailQty(-1)">−</button>
            <input type="number" id="detail-qty" class="qty-control-input" value="1" min="1" max="99" readonly/>
            <button class="qty-control-btn" onclick="changeDetailQty(1)">+</button>
          </div>
        </div>

        <div class="detail-actions">
          <button class="btn btn-primary" onclick="addDetailToCart(${product.id})"><i class="fas fa-cart-plus"></i> Add to Cart</button>
          <button class="btn btn-outline" onclick="addToWishlist(${product.id})"><i class="fas fa-heart"></i> Wishlist</button>
          <a href="checkout.html" class="btn btn-secondary"><i class="fas fa-bolt"></i> Buy Now</a>
        </div>

        <div class="product-tabs">
          <div class="tab-buttons">
            <button class="tab-btn active" onclick="switchTab(this,'desc')">Description</button>
            <button class="tab-btn" onclick="switchTab(this,'care')">Care Instructions</button>
            <button class="tab-btn" onclick="switchTab(this,'sizing')">Size Guide</button>
          </div>
          <div id="tab-desc" class="tab-content active">
            <p>${product.description}</p>
            <ul style="margin-top:1rem;padding-left:1.5rem;list-style:disc;color:var(--text-light)">
              <li>Premium quality materials</li>
              <li>Available in multiple sizes and colors</li>
              <li>Custom designs available on request</li>
              <li>Fast nationwide delivery across Ghana</li>
            </ul>
          </div>
          <div id="tab-care" class="tab-content">
            <ul style="padding-left:1.5rem;list-style:disc">
              <li>Machine wash cold with similar colors</li>
              <li>Do not bleach</li>
              <li>Tumble dry low or hang dry</li>
              <li>Iron on low heat if needed</li>
              <li>Do not dry clean</li>
            </ul>
          </div>
          <div id="tab-sizing" class="tab-content">
            <table style="width:100%;border-collapse:collapse;font-size:.88rem">
              <tr style="background:var(--bg-light)">
                <th style="padding:.75rem;border:1px solid var(--border);text-align:left">Size</th>
                <th style="padding:.75rem;border:1px solid var(--border)">Chest (cm)</th>
                <th style="padding:.75rem;border:1px solid var(--border)">Length (cm)</th>
              </tr>
              ${[['S','88-92','68'],['M','96-100','71'],['L','104-108','74'],['XL','112-116','77'],['XXL','120-124','80']].map(r =>
                `<tr><td style="padding:.75rem;border:1px solid var(--border)">${r[0]}</td><td style="padding:.75rem;border:1px solid var(--border);text-align:center">${r[1]}</td><td style="padding:.75rem;border:1px solid var(--border);text-align:center">${r[2]}</td></tr>`
              ).join('')}
            </table>
          </div>
        </div>
      </div>
    </div>
  `;

  // Related products
  const related = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0,4);
  const relEl = document.getElementById('related-products');
  if (relEl && related.length) relEl.innerHTML = related.map(renderProductCard).join('');
}

function selectSize(btn) {
  document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const label = document.getElementById('selected-size');
  if (label) label.textContent = btn.textContent;
}

function selectColor(swatch) {
  document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
  swatch.classList.add('active');
}

function selectThumb(thumb) {
  document.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
  thumb.classList.add('active');
}

function changeDetailQty(delta) {
  const input = document.getElementById('detail-qty');
  if (!input) return;
  let val = parseInt(input.value) + delta;
  input.value = Math.max(1, Math.min(99, val));
}

function addDetailToCart(productId) {
  const qty = parseInt(document.getElementById('detail-qty')?.value || 1);
  const sizeEl = document.getElementById('selected-size');
  const activeSize = document.querySelector('.size-btn.active')?.textContent || '';
  const activeColor = document.querySelector('.color-swatch.active')?.style.background || '';
  const variant = [activeSize, activeColor].filter(Boolean).join(' / ');
  addToCart(productId, qty, variant);
}

function switchTab(btn, tabId) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('tab-' + tabId)?.classList.add('active');
}

// ===== CHECKOUT PAGE =====
function initCheckoutPage() {
  // Populate order summary from cart
  const summaryItems = document.getElementById('summary-items');
  if (summaryItems) {
    if (cart.length === 0) {
      summaryItems.innerHTML = `<p style="text-align:center;color:var(--text-muted);font-size:.88rem">No items in cart. <a href="shop.html" style="color:var(--primary)">Shop now</a></p>`;
    } else {
      summaryItems.innerHTML = cart.map(item => `
        <div class="order-item">
          <div class="order-item-img">${item.icon}</div>
          <div class="order-item-info">
            <strong>${item.name}</strong>
            <span>${item.variant || item.category} × ${item.qty}</span>
          </div>
          <span class="order-item-price">GHS ${(item.price * item.qty).toFixed(2)}</span>
        </div>
      `).join('');
    }
  }

  // Update totals
  updateSummaryTotals();

  // Payment method selection
  document.querySelectorAll('.payment-method').forEach(method => {
    method.addEventListener('click', () => {
      document.querySelectorAll('.payment-method').forEach(m => m.classList.remove('active'));
      method.classList.add('active');
      method.querySelector('input[type="radio"]').checked = true;

      // Show/hide MoMo fields
      document.querySelectorAll('.momo-fields').forEach(f => f.style.display = 'none');
      const momoFields = document.getElementById('momo-fields-' + method.dataset.method);
      if (momoFields) momoFields.style.display = 'block';
    });
  });

  // Promo code
  document.getElementById('apply-promo')?.addEventListener('click', () => {
    const code = document.getElementById('promo-input')?.value?.trim().toUpperCase();
    if (code === 'KETSY10') {
      showToast('🎉 Promo code applied! 10% discount.', 'success');
      updateSummaryTotals(0.9);
    } else {
      showToast('❌ Invalid promo code.', 'error');
    }
  });

  // Checkout form submit
  document.getElementById('checkout-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const paymentMethod = document.querySelector('.payment-method.active')?.dataset.method;
    const momoNumber = document.getElementById('momo-number')?.value;

    showModal('🎉', 'Order Placed Successfully!',
      `Your order has been received. You'll receive a confirmation SMS${momoNumber ? ` on ${momoNumber}` : ''}. Thank you for shopping with Ketsy Store!`,
      'Continue Shopping', () => { cart = []; saveCart(); window.location.href = 'index.html'; }
    );
  });
}

function updateSummaryTotals(discount = 1) {
  const subtotal = getCartTotal() * discount;
  const delivery = subtotal > 200 ? 0 : 20;
  const total = subtotal + delivery;

  const subtotalEl = document.getElementById('summary-subtotal');
  const deliveryEl = document.getElementById('summary-delivery');
  const totalEl = document.getElementById('summary-total');

  if (subtotalEl) subtotalEl.textContent = `GHS ${subtotal.toFixed(2)}`;
  if (deliveryEl) deliveryEl.textContent = delivery === 0 ? 'FREE' : `GHS ${delivery.toFixed(2)}`;
  if (totalEl) totalEl.textContent = `GHS ${total.toFixed(2)}`;
}

// ===== TOAST =====
function showToast(message, type = '') {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.className = `toast ${type}`;
  toast.classList.add('show');
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
}

// ===== MODAL =====
function showModal(icon, title, message, btnText = 'Close', onConfirm = null) {
  let overlay = document.getElementById('modal-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'modal-overlay';
    overlay.className = 'modal-overlay';
    overlay.innerHTML = `
      <div class="modal">
        <div class="modal-icon" id="modal-icon"></div>
        <h3 id="modal-title"></h3>
        <p id="modal-message"></p>
        <button class="btn btn-primary" id="modal-btn" style="width:100%"></button>
      </div>
    `;
    document.body.appendChild(overlay);
  }

  document.getElementById('modal-icon').textContent = icon;
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-message').textContent = message;
  const btn = document.getElementById('modal-btn');
  btn.textContent = btnText;
  btn.onclick = () => {
    overlay.classList.remove('active');
    if (onConfirm) onConfirm();
  };
  overlay.onclick = (e) => { if (e.target === overlay) overlay.classList.remove('active'); };
  overlay.classList.add('active');
}
