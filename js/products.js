// ─── Ketsy Store — Product Catalogue ───────────────────────────────────────
const products = [

  // ── T-SHIRTS ──────────────────────────────────────────────────────────────
  {
    id: 1, name: 'Classic Plain Tee', category: 'tshirts',
    price: 85, oldPrice: null, rating: 4.8, reviews: 124,
    badge: 'Bestseller', icon: '👕',
    img: 'images/tshirts/tshirt-1.jpg',
    colors: ['#1a1a1a','#4a4a4a','#6c8ebf','#d9d9d9'], sizes: ['S','M','L','XL','XXL']
  },
  {
    id: 2, name: 'Essential Black & White Tee', category: 'tshirts',
    price: 80, oldPrice: 100, rating: 4.7, reviews: 89,
    badge: 'Sale', icon: '👕',
    img: 'images/tshirts/tshirt-2.jpg',
    colors: ['#1a1a1a','#ffffff'], sizes: ['S','M','L','XL']
  },
  {
    id: 3, name: 'Diesel Sleeveless Tee – White', category: 'tshirts',
    price: 120, oldPrice: null, rating: 4.9, reviews: 56,
    badge: 'New', icon: '👕',
    img: 'images/tshirts/tshirt-3.jpg',
    colors: ['#ffffff'], sizes: ['S','M','L','XL']
  },
  {
    id: 4, name: 'Diesel Sleeveless Tee – Black', category: 'tshirts',
    price: 120, oldPrice: null, rating: 4.9, reviews: 48,
    badge: 'New', icon: '👕',
    img: 'images/tshirts/tshirt-4.jpg',
    colors: ['#1a1a1a'], sizes: ['S','M','L','XL']
  },
  {
    id: 5, name: 'Vibrant Colour-Pack Tee', category: 'tshirts',
    price: 75, oldPrice: 90, rating: 4.6, reviews: 73,
    badge: 'Sale', icon: '👕',
    img: 'images/tshirts/tshirt-5.jpg',
    colors: ['#f5c518','#5c3a1e','#1a6dc0','#5b2d8e'], sizes: ['S','M','L','XL','XXL']
  },
  {
    id: 6, name: 'Graphic Flag Tee', category: 'tshirts',
    price: 95, oldPrice: null, rating: 4.5, reviews: 41,
    badge: null, icon: '👕',
    img: 'images/tshirts/tshirt-6.jpg',
    colors: ['#3a3a3a'], sizes: ['S','M','L','XL']
  },

  // ── SHORTS ────────────────────────────────────────────────────────────────
  {
    id: 7, name: 'Brown Fleece Shorts', category: 'shorts',
    price: 70, oldPrice: null, rating: 4.5, reviews: 38,
    badge: null, icon: '🩲',
    img: 'images/shorts/shorts-1.jpg',
    colors: ['#5c3a1e'], sizes: ['S','M','L','XL']
  },
  {
    id: 8, name: 'Black Sport Shorts', category: 'shorts',
    price: 65, oldPrice: null, rating: 4.6, reviews: 52,
    badge: 'Bestseller', icon: '🩲',
    img: 'images/shorts/shorts-2.jpg',
    colors: ['#1a1a1a'], sizes: ['S','M','L','XL','XXL']
  },
  {
    id: 9, name: 'Fleece Cargo Shorts', category: 'shorts',
    price: 75, oldPrice: 95, rating: 4.4, reviews: 29,
    badge: 'Sale', icon: '🩲',
    img: 'images/shorts/shorts-3.jpg',
    colors: ['#5c3a1e','#1a1a1a'], sizes: ['S','M','L','XL']
  },

  // ── JOGGERS ───────────────────────────────────────────────────────────────
  {
    id: 10, name: 'Brown Fleece Joggers', category: 'joggers',
    price: 110, oldPrice: null, rating: 4.7, reviews: 61,
    badge: 'Bestseller', icon: '🩳',
    img: 'images/joggers/joggers-1.jpg',
    colors: ['#5c3a1e'], sizes: ['S','M','L','XL','XXL']
  },
  {
    id: 11, name: 'Premium Fleece Joggers', category: 'joggers',
    price: 110, oldPrice: 130, rating: 4.6, reviews: 44,
    badge: 'Sale', icon: '🩳',
    img: 'images/joggers/joggers-2.jpg',
    colors: ['#5c3a1e'], sizes: ['S','M','L','XL']
  },
  {
    id: 12, name: 'Black Cargo Joggers', category: 'joggers',
    price: 115, oldPrice: null, rating: 4.8, reviews: 77,
    badge: 'New', icon: '🩳',
    img: 'images/joggers/joggers-3.jpg',
    colors: ['#1a1a1a'], sizes: ['S','M','L','XL','XXL']
  },
  {
    id: 13, name: 'Multi-Colour Sweat Joggers', category: 'joggers',
    price: 100, oldPrice: 120, rating: 4.5, reviews: 35,
    badge: 'Sale', icon: '🩳',
    img: 'images/joggers/joggers-4.jpg',
    colors: ['#1a1a1a','#c0392b','#2c6e49','#ffffff','#2d3142'], sizes: ['S','M','L','XL']
  },

  // ── LONG SLEEVES ──────────────────────────────────────────────────────────
  {
    id: 14, name: 'Olive Button-Down Shirt', category: 'longsleeves',
    price: 130, oldPrice: null, rating: 4.8, reviews: 53,
    badge: 'New', icon: '👔',
    img: 'images/longsleeves/longsleeve-1.jpg',
    colors: ['#4a6741'], sizes: ['S','M','L','XL','XXL']
  },
  {
    id: 15, name: 'Black Oxford Shirt', category: 'longsleeves',
    price: 125, oldPrice: 150, rating: 4.7, reviews: 67,
    badge: 'Sale', icon: '👔',
    img: 'images/longsleeves/longsleeve-2.jpg',
    colors: ['#1a1a1a'], sizes: ['S','M','L','XL']
  },
  {
    id: 16, name: 'Brown Zara Long Sleeve', category: 'longsleeves',
    price: 140, oldPrice: null, rating: 4.9, reviews: 42,
    badge: 'Bestseller', icon: '👔',
    img: 'images/longsleeves/longsleeve-3.jpg',
    colors: ['#7d4e1e'], sizes: ['S','M','L','XL']
  },
  {
    id: 17, name: 'White Classic Shirt', category: 'longsleeves',
    price: 120, oldPrice: null, rating: 4.6, reviews: 58,
    badge: null, icon: '👔',
    img: 'images/longsleeves/longsleeve-4.jpg',
    colors: ['#ffffff'], sizes: ['S','M','L','XL','XXL']
  },
  {
    id: 18, name: 'White Slim Fit Shirt', category: 'longsleeves',
    price: 115, oldPrice: 135, rating: 4.5, reviews: 34,
    badge: 'Sale', icon: '👔',
    img: 'images/longsleeves/longsleeve-5.jpg',
    colors: ['#ffffff'], sizes: ['S','M','L','XL']
  },
  {
    id: 19, name: 'White & Black Smart Shirt', category: 'longsleeves',
    price: 120, oldPrice: null, rating: 4.7, reviews: 49,
    badge: null, icon: '👔',
    img: 'images/longsleeves/longsleeve-6.jpg',
    colors: ['#ffffff','#1a1a1a'], sizes: ['S','M','L','XL']
  },
  {
    id: 20, name: 'Maroon Oxford Shirt', category: 'longsleeves',
    price: 130, oldPrice: null, rating: 4.8, reviews: 36,
    badge: 'New', icon: '👔',
    img: 'images/longsleeves/longsleeve-7.jpg',
    colors: ['#7b1a2e'], sizes: ['S','M','L','XL']
  },

  // ── HOODIES ───────────────────────────────────────────────────────────────
  {
    id: 21, name: 'Navy Pullover Hoodie', category: 'hoodies',
    price: 150, oldPrice: null, rating: 4.8, reviews: 82,
    badge: 'Bestseller', icon: '🧥',
    img: 'images/hoodies/hoodie-1.jpg',
    colors: ['#1a2a5e'], sizes: ['S','M','L','XL','XXL']
  },
  {
    id: 22, name: '"81" Graphic Hoodie', category: 'hoodies',
    price: 160, oldPrice: 190, rating: 4.7, reviews: 55,
    badge: 'Sale', icon: '🧥',
    img: 'images/hoodies/hoodie-2.jpg',
    colors: ['#f5f0e8'], sizes: ['S','M','L','XL']
  },
  {
    id: 23, name: 'Black Zip-Up Hoodie', category: 'hoodies',
    price: 170, oldPrice: null, rating: 4.9, reviews: 63,
    badge: 'New', icon: '🧥',
    img: 'images/hoodies/hoodie-3.jpg',
    colors: ['#1a1a1a'], sizes: ['S','M','L','XL','XXL']
  },
  {
    id: 24, name: 'Baby Blue Graphic Hoodie', category: 'hoodies',
    price: 155, oldPrice: null, rating: 4.6, reviews: 40,
    badge: null, icon: '🧥',
    img: 'images/hoodies/hoodie-4.jpg',
    colors: ['#a8d8ea'], sizes: ['S','M','L','XL']
  },

  // ── MEN FULL SET ──────────────────────────────────────────────────────────
  {
    id: 25, name: 'Smart Quarter-Zip Set', category: 'fullset',
    price: 280, oldPrice: null, rating: 4.9, reviews: 37,
    badge: 'New', icon: '🧑‍🎤',
    img: 'images/fullset/fullset-1.jpg',
    colors: ['#b5a99a','#1a1a1a'], sizes: ['S','M','L','XL']
  },
  {
    id: 26, name: 'Blue Elegant Suit Set', category: 'fullset',
    price: 450, oldPrice: 550, rating: 4.8, reviews: 29,
    badge: 'Sale', icon: '🧑‍🎤',
    img: 'images/fullset/fullset-2.jpg',
    colors: ['#1a2a5e','#3d5a80','#4a6fa5'], sizes: ['S','M','L','XL','XXL']
  },
  {
    id: 27, name: 'Brown Tee & Chinos Set', category: 'fullset',
    price: 220, oldPrice: null, rating: 4.7, reviews: 51,
    badge: null, icon: '🧑‍🎤',
    img: 'images/fullset/fullset-3.jpg',
    colors: ['#5c3a1e','#f5f0e8'], sizes: ['S','M','L','XL']
  },
  {
    id: 28, name: 'Olive Tee & Denim Set', category: 'fullset',
    price: 230, oldPrice: null, rating: 4.8, reviews: 44,
    badge: 'Bestseller', icon: '🧑‍🎤',
    img: 'images/fullset/fullset-4.jpg',
    colors: ['#4a6741','#5b8ad4'], sizes: ['S','M','L','XL','XXL']
  },
  {
    id: 29, name: 'Striped Sweater & Denim Set', category: 'fullset',
    price: 260, oldPrice: 300, rating: 4.6, reviews: 33,
    badge: 'Sale', icon: '🧑‍🎤',
    img: 'images/fullset/fullset-5.jpg',
    colors: ['#3a3a3a','#5b8ad4'], sizes: ['S','M','L','XL']
  },
  {
    id: 30, name: 'Black Polo & Khaki Set', category: 'fullset',
    price: 240, oldPrice: null, rating: 4.7, reviews: 48,
    badge: null, icon: '🧑‍🎤',
    img: 'images/fullset/fullset-6.jpg',
    colors: ['#1a1a1a','#c9a96e'], sizes: ['S','M','L','XL']
  },
  {
    id: 31, name: 'Navy Ribbed Polo Set (Zara)', category: 'fullset',
    price: 300, oldPrice: null, rating: 4.9, reviews: 62,
    badge: 'Bestseller', icon: '🧑‍🎤',
    img: 'images/fullset/fullset-7.jpg',
    colors: ['#1a2a5e','#f5f0e8'], sizes: ['S','M','L','XL']
  },
  {
    id: 32, name: 'Light Blue Suit Set', category: 'fullset',
    price: 420, oldPrice: 500, rating: 4.8, reviews: 25,
    badge: 'Sale', icon: '🧑‍🎤',
    img: 'images/fullset/fullset-8.jpg',
    colors: ['#a8d8ea','#ffffff'], sizes: ['S','M','L','XL']
  },
  {
    id: 33, name: 'Nike Sport Set', category: 'fullset',
    price: 350, oldPrice: null, rating: 4.9, reviews: 71,
    badge: 'New', icon: '🧑‍🎤',
    img: 'images/fullset/fullset-9.jpg',
    colors: ['#3a3a3a','#1a1a1a'], sizes: ['S','M','L','XL','XXL']
  },
  {
    id: 34, name: 'Baby Blue Nike Tracksuit', category: 'fullset',
    price: 380, oldPrice: 450, rating: 4.8, reviews: 58,
    badge: 'Sale', icon: '🧑‍🎤',
    img: 'images/fullset/fullset-10.jpg',
    colors: ['#a8d8ea','#ffffff'], sizes: ['S','M','L','XL']
  },
  {
    id: 35, name: 'Business Casual Uniform Set', category: 'fullset',
    price: 320, oldPrice: null, rating: 4.7, reviews: 39,
    badge: null, icon: '🧑‍🎤',
    img: 'images/fullset/fullset-11.jpg',
    colors: ['#6b8cba','#1a1a1a','#888888'], sizes: ['S','M','L','XL']
  },
  {
    id: 36, name: 'White Tee & Grey Denim Set', category: 'fullset',
    price: 210, oldPrice: null, rating: 4.6, reviews: 43,
    badge: null, icon: '🧑‍🎤',
    img: 'images/fullset/fullset-12.jpg',
    colors: ['#ffffff','#888888'], sizes: ['S','M','L','XL','XXL']
  },
  {
    id: 37, name: 'Slate Quarter-Zip Matching Set', category: 'fullset',
    price: 290, oldPrice: null, rating: 4.8, reviews: 47,
    badge: 'New', icon: '🧑‍🎤',
    img: 'images/fullset/fullset-13.jpg',
    colors: ['#5a7a8a'], sizes: ['S','M','L','XL']
  },
  {
    id: 38, name: 'Black Formal Suit Set', category: 'fullset',
    price: 480, oldPrice: 580, rating: 4.9, reviews: 31,
    badge: 'Sale', icon: '🧑‍🎤',
    img: 'images/fullset/fullset-14.jpg',
    colors: ['#1a1a1a','#ffffff'], sizes: ['S','M','L','XL']
  },

  // ── CAPS ──────────────────────────────────────────────────────────────────
  {
    id: 39, name: 'Fitted MLB Snapback Caps', category: 'caps',
    price: 90, oldPrice: null, rating: 4.7, reviews: 94,
    badge: 'Bestseller', icon: '🧢',
    img: 'images/caps/caps-1.jpg',
    colors: ['#c0392b','#1a1a1a'], sizes: ['S/M','L/XL']
  },
  {
    id: 40, name: 'Camo Military Cap', category: 'caps',
    price: 80, oldPrice: null, rating: 4.6, reviews: 67,
    badge: null, icon: '🧢',
    img: 'images/caps/caps-2.jpg',
    colors: ['#4a5e3a'], sizes: ['One Size']
  },
  {
    id: 41, name: 'Black Rebel Trucker Cap', category: 'caps',
    price: 85, oldPrice: 100, rating: 4.5, reviews: 53,
    badge: 'Sale', icon: '🧢',
    img: 'images/caps/caps-3.jpg',
    colors: ['#7b1a2e','#1a1a1a','#2d3142'], sizes: ['One Size']
  },
  {
    id: 42, name: 'Green MA Trucker Cap', category: 'caps',
    price: 95, oldPrice: null, rating: 4.8, reviews: 41,
    badge: 'New', icon: '🧢',
    img: 'images/caps/caps-4.jpg',
    colors: ['#2c6e49'], sizes: ['One Size']
  },

  // ── CROP TOPS ─────────────────────────────────────────────────────────────
  {
    id: 43, name: 'Black Graphic Crop Top', category: 'croptops',
    price: 75, oldPrice: null, rating: 4.7, reviews: 66,
    badge: 'New', icon: '👚',
    img: 'images/croptops/croptop-1.jpg',
    colors: ['#1a1a1a'], sizes: ['XS','S','M','L']
  },
  {
    id: 44, name: '"Be Kind" Blue Crop Top', category: 'croptops',
    price: 70, oldPrice: 85, rating: 4.8, reviews: 82,
    badge: 'Sale', icon: '👚',
    img: 'images/croptops/croptop-2.jpg',
    colors: ['#a8d8ea'], sizes: ['XS','S','M','L']
  },
  {
    id: 45, name: 'Pink Square-Neck Crop Top', category: 'croptops',
    price: 72, oldPrice: null, rating: 4.9, reviews: 74,
    badge: 'Bestseller', icon: '👚',
    img: 'images/croptops/croptop-3.jpg',
    colors: ['#f5c5c5'], sizes: ['XS','S','M','L']
  },

  // ── CUPS (add images when available) ──────────────────────────────────────
  {
    id: 46, name: 'Custom Printed Mug', category: 'cups',
    price: 55, oldPrice: null, rating: 4.6, reviews: 38,
    badge: 'Custom', icon: '☕', img: null,
    colors: ['#ffffff','#1a1a1a'], sizes: ['11oz','15oz']
  },
  {
    id: 47, name: 'Travel Tumbler', category: 'cups',
    price: 75, oldPrice: null, rating: 4.7, reviews: 29,
    badge: null, icon: '🥤', img: null,
    colors: ['#1a1a1a','#c0392b','#2d3142'], sizes: ['16oz','20oz']
  },

  // ── FRAMES (add images when available) ────────────────────────────────────
  {
    id: 48, name: 'Custom Photo Frame', category: 'frames',
    price: 120, oldPrice: null, rating: 4.8, reviews: 45,
    badge: 'Custom', icon: '🖼️', img: null,
    colors: ['#1a1a1a','#c9a96e','#ffffff'], sizes: ['4×6','5×7','8×10']
  },
  {
    id: 49, name: 'LED Light Frame', category: 'frames',
    price: 180, oldPrice: 220, rating: 4.9, reviews: 31,
    badge: 'Sale', icon: '🖼️', img: null,
    colors: ['#1a1a1a','#ffffff'], sizes: ['5×7','8×10']
  }
];

// ─── Render a single product card ──────────────────────────────────────────
function renderProductCard(product) {
  const imgHTML = product.img
    ? `<img src="${product.img}" alt="${product.name}" loading="lazy"
           onerror="this.style.display='none';var s=document.getElementById('icon-${product.id}');if(s){s.style.display='flex'}">
       <span id="icon-${product.id}"
             style="display:none;font-size:4rem;position:absolute;inset:0;align-items:center;justify-content:center;background:#f5f5f5;color:#bbb">${product.icon}</span>`
    : `<span style="font-size:4rem;width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#f5f5f5;color:#bbb">${product.icon}</span>`;

  const categoryLabel = {
    tshirts:'T-Shirts', shorts:'Shorts', joggers:'Joggers',
    longsleeves:'Long Sleeves', hoodies:'Hoodies', fullset:'Men Full Set',
    caps:'Caps', cups:'Cups', croptops:'Crop Tops', frames:'Frames'
  }[product.category] || product.category;

  return `
  <div class="product-card" data-id="${product.id}" data-category="${product.category}" data-price="${product.price}">
    <div class="product-image">
      <a href="product.html?id=${product.id}" class="product-image-link" aria-label="${product.name}" style="position:absolute;inset:0;z-index:1"></a>
      ${imgHTML}
      ${product.badge ? `<span class="product-badge badge-${product.badge.toLowerCase().replace(/\s/g,'-')}">${product.badge}</span>` : ''}
      <div class="product-overlay">
        <button class="btn btn-primary btn-sm quick-add" data-id="${product.id}" type="button">
          <i class="fas fa-shopping-cart"></i> Add
        </button>
        <a href="product.html?id=${product.id}" class="btn btn-outline btn-sm">
          <i class="fas fa-eye"></i> View
        </a>
      </div>
      <button class="wishlist-btn ${isWishlisted(product.id) ? 'active' : ''}" data-id="${product.id}" title="Wishlist" type="button">
        <i class="fa${isWishlisted(product.id) ? 's' : 'r'} fa-heart"></i>
      </button>
    </div>
    <div class="product-info">
      <p class="product-category">${categoryLabel}</p>
      <h3 class="product-name"><a href="product.html?id=${product.id}">${product.name}</a></h3>
      <div class="product-rating">
        <span class="stars" style="color:#FF6B35">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5-Math.floor(product.rating))}</span>
        <span style="font-size:.8rem;color:var(--text-muted)">(${product.reviews})</span>
      </div>
      <div class="product-price">
        <span class="price-current">GHS ${product.price.toFixed(2)}</span>
        ${product.oldPrice ? `<span class="price-old">GHS ${product.oldPrice.toFixed(2)}</span>` : ''}
      </div>
      ${product.colors && product.colors.length ? `
      <div class="product-colors">
        ${product.colors.map(c=>`<span class="color-dot" style="background:${c};border:${c==='#ffffff'||c==='#f5f0e8'?'1px solid #ddd':'none'}" title="${c}"></span>`).join('')}
      </div>` : ''}
    </div>
  </div>`;
}

// ─── Wishlist helper ────────────────────────────────────────────────────────
function isWishlisted(id) {
  try {
    const w = JSON.parse(localStorage.getItem('ketsy_wishlist') || '[]');
    return w.includes(id);
  } catch { return false; }
}

// ─── Filter & render products into a grid ──────────────────────────────────
function renderProducts(containerId, opts = {}) {
  const { category = 'all', maxPrice = 9999, sort = 'featured', limit = null } = opts;
  let filtered = products.filter(p =>
    (category === 'all' || p.category === category) && p.price <= maxPrice
  );
  if (sort === 'price-asc')  filtered.sort((a,b) => a.price - b.price);
  if (sort === 'price-desc') filtered.sort((a,b) => b.price - a.price);
  if (sort === 'rating')     filtered.sort((a,b) => b.rating - a.rating);
  if (sort === 'newest')     filtered.sort((a,b) => b.id - a.id);
  if (limit) filtered = filtered.slice(0, limit);
  const el = document.getElementById(containerId);
  if (!el) return 0;
  el.innerHTML = filtered.length
    ? filtered.map(renderProductCard).join('')
    : '<p style="grid-column:1/-1;text-align:center;padding:3rem;color:var(--text-muted)">No products found.</p>';
  bindProductCardEvents(el);
  return filtered.length;
}

// ─── Bind add-to-cart & wishlist events on rendered cards ──────────────────
function bindProductCardEvents(container) {
  container.querySelectorAll('.quick-add').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();
      const id = +btn.dataset.id;
      if (typeof addToCart === 'function') addToCart(id);
    });
  });
  container.querySelectorAll('.wishlist-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();
      const id = +btn.dataset.id;
      let w = JSON.parse(localStorage.getItem('ketsy_wishlist') || '[]');
      if (w.includes(id)) {
        w = w.filter(x => x !== id);
        btn.classList.remove('active');
        btn.innerHTML = '<i class="far fa-heart"></i>';
        if (typeof showToast === 'function') showToast('Removed from wishlist', '');
      } else {
        w.push(id);
        btn.classList.add('active');
        btn.innerHTML = '<i class="fas fa-heart"></i>';
        if (typeof showToast === 'function') showToast('💖 Added to wishlist!', 'success');
      }
      localStorage.setItem('ketsy_wishlist', JSON.stringify(w));
      document.querySelectorAll('#wishlist-count').forEach(el => el.textContent = w.length);
    });
  });
}

// Keep backward-compatible alias (some pages may reference PRODUCTS)
const PRODUCTS = products;

// ─── Helpers referenced by cart.js / main.js ───────────────────────────────
function getProductById(id) {
  const n = typeof id === 'string' ? parseInt(id, 10) : id;
  const p = products.find(x => x.id === n);
  if (!p) return null;
  // Attach a few handy display fields so other pages don't crash
  const labelMap = {
    tshirts:'T-Shirts', shorts:'Shorts', joggers:'Joggers',
    longsleeves:'Long Sleeves', hoodies:'Hoodies', fullset:'Men Full Set',
    caps:'Caps', cups:'Cups', croptops:'Crop Tops', frames:'Frames'
  };
  return {
    ...p,
    categoryLabel: labelMap[p.category] || p.category,
    inStock: true,
    description: p.description || `${p.name} — premium quality, available in multiple sizes and colors. Delivered across Ghana with fast, reliable shipping from Ketsy Store.`,
    originalPrice: p.oldPrice || null
  };
}

function getProductsByCategory(category) {
  if (!category || category === 'all') return products.slice();
  return products.filter(p => p.category === category);
}

function renderStars(rating) {
  const full = Math.floor(rating);
  const half = (rating - full) >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}
