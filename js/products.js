// ===================================================
// KETSY STORE – Products Data
// ===================================================

const PRODUCTS = [
  // T-SHIRTS
  { id: 1, name: "Classic Ketsy Logo Tee", category: "tshirts", categoryLabel: "T-Shirts", price: 80, originalPrice: null, icon: "👕", badge: "New", rating: 4.8, reviews: 24, sizes: ["S","M","L","XL","XXL"], colors: ["#000","#fff","#FF6B35","#2D3142"], description: "Premium quality cotton t-shirt with Ketsy Store signature logo. Soft, breathable and perfectly cut.", inStock: true },
  { id: 2, name: "Graphic Print Tee – Wave", category: "tshirts", categoryLabel: "T-Shirts", price: 95, originalPrice: 120, icon: "👕", badge: "Sale", rating: 4.6, reviews: 18, sizes: ["S","M","L","XL"], colors: ["#fff","#000","#4ECDC4"], description: "Bold graphic wave print t-shirt. Eye-catching design made with eco-friendly inks.", inStock: true },
  { id: 3, name: "Oversized Street Tee", category: "tshirts", categoryLabel: "T-Shirts", price: 100, originalPrice: null, icon: "👕", badge: null, rating: 4.9, reviews: 32, sizes: ["M","L","XL","XXL"], colors: ["#1a1a1a","#F5F5F5","#FF6B35"], description: "Trendy oversized fit for a relaxed street-style look. Premium cotton blend fabric.", inStock: true },
  { id: 4, name: "Afro Culture Tee", category: "tshirts", categoryLabel: "T-Shirts", price: 90, originalPrice: null, icon: "👕", badge: "New", rating: 4.7, reviews: 14, sizes: ["S","M","L","XL","XXL"], colors: ["#000","#FFD700","#008000"], description: "Celebrate African culture with this vibrant print tee. Inspired by Ghanaian heritage.", inStock: true },

  // JOGGERS
  { id: 5, name: "Slim-Fit Jogger Pants", category: "joggers", categoryLabel: "Joggers", price: 150, originalPrice: null, icon: "🩳", badge: "New", rating: 4.8, reviews: 27, sizes: ["S","M","L","XL","XXL"], colors: ["#1a1a1a","#888","#2D3142","#FF6B35"], description: "Tapered slim-fit joggers with elastic waistband and drawstring. Perfect for gym or casual wear.", inStock: true },
  { id: 6, name: "Premium Track Joggers", category: "joggers", categoryLabel: "Joggers", price: 180, originalPrice: 220, icon: "🩳", badge: "Sale", rating: 4.7, reviews: 19, sizes: ["S","M","L","XL"], colors: ["#1a1a1a","#fff","#444"], description: "High-quality track joggers with side pockets and cuffed ankles. Great for both sport and leisure.", inStock: true },
  { id: 7, name: "Cargo Jogger Pants", category: "joggers", categoryLabel: "Joggers", price: 165, originalPrice: null, icon: "🩳", badge: null, rating: 4.5, reviews: 11, sizes: ["M","L","XL","XXL"], colors: ["#1a1a1a","#4a5568","#808080"], description: "Functional cargo joggers with multiple pockets and adjustable waist. Urban street style.", inStock: true },

  // SHORTS
  { id: 8, name: "Athletic Training Shorts", category: "shorts", categoryLabel: "Shorts", price: 75, originalPrice: null, icon: "🩲", badge: "New", rating: 4.6, reviews: 21, sizes: ["S","M","L","XL","XXL"], colors: ["#1a1a1a","#fff","#FF6B35","#0096D6"], description: "Lightweight and breathable training shorts with mesh inner lining. Great for workouts.", inStock: true },
  { id: 9, name: "Casual Chino Shorts", category: "shorts", categoryLabel: "Shorts", price: 85, originalPrice: 100, icon: "🩲", badge: "Sale", rating: 4.4, reviews: 16, sizes: ["S","M","L","XL"], colors: ["#C8A97E","#1a1a1a","#2D4A7A"], description: "Smart casual chino shorts perfect for everyday wear. Versatile and comfortable fit.", inStock: true },
  { id: 10, name: "Swim Board Shorts", category: "shorts", categoryLabel: "Shorts", price: 80, originalPrice: null, icon: "🩲", badge: null, rating: 4.3, reviews: 9, sizes: ["S","M","L","XL","XXL"], colors: ["#0096D6","#FF6B35","#1a1a1a"], description: "Quick-dry swim shorts with tropical print. Great for the beach or pool.", inStock: true },

  // CAPS
  { id: 11, name: "Ketsy Signature Cap", category: "caps", categoryLabel: "Caps", price: 55, originalPrice: null, icon: "🧢", badge: "New", rating: 4.9, reviews: 38, sizes: ["One Size"], colors: ["#1a1a1a","#fff","#FF6B35","#2D3142"], description: "Premium 6-panel cap with Ketsy Store embroidered logo. Adjustable strap for perfect fit.", inStock: true },
  { id: 12, name: "Flat Brim Snapback", category: "caps", categoryLabel: "Caps", price: 65, originalPrice: null, icon: "🧢", badge: null, rating: 4.7, reviews: 22, sizes: ["One Size"], colors: ["#1a1a1a","#fff","#FF6B35"], description: "Street-style flat brim snapback with graphic logo. Adjustable snap closure.", inStock: true },
  { id: 13, name: "Vintage Dad Cap", category: "caps", categoryLabel: "Caps", price: 50, originalPrice: 65, icon: "🧢", badge: "Sale", rating: 4.5, reviews: 17, sizes: ["One Size"], colors: ["#C8A97E","#1a1a1a","#2D4A7A","#888"], description: "Classic unstructured dad cap with soft front panel. Retro look with modern comfort.", inStock: true },

  // CUPS
  { id: 14, name: "Custom Name Mug", category: "cups", categoryLabel: "Cups", price: 45, originalPrice: null, icon: "☕", badge: "New", rating: 4.8, reviews: 31, sizes: ["11oz","15oz"], colors: ["#fff","#1a1a1a","#FF6B35"], description: "Personalized ceramic mug with your name or custom text. Microwave and dishwasher safe.", inStock: true },
  { id: 15, name: "Photo Print Travel Mug", category: "cups", categoryLabel: "Cups", price: 60, originalPrice: null, icon: "☕", badge: null, rating: 4.6, reviews: 15, sizes: ["12oz"], colors: ["#1a1a1a","#FF6B35"], description: "Insulated travel mug with custom photo print. Keeps drinks hot for 6 hours.", inStock: true },
  { id: 16, name: "Ketsy Branded Mug Set", category: "cups", categoryLabel: "Cups", price: 85, originalPrice: 110, icon: "☕", badge: "Sale", rating: 4.7, reviews: 12, sizes: ["Set of 2"], colors: ["#fff","#1a1a1a"], description: "Set of 2 Ketsy branded mugs. Perfect as a gift or for home use.", inStock: true },

  // LADIES CROP TOPS
  { id: 17, name: "Ribbed Crop Top", category: "croptops", categoryLabel: "Crop Tops", price: 65, originalPrice: null, icon: "👚", badge: "New", rating: 4.9, reviews: 45, sizes: ["XS","S","M","L","XL"], colors: ["#fff","#1a1a1a","#FF6B35","#E91E8C"], description: "Trendy ribbed crop top with a fitted silhouette. Super soft fabric, perfect for everyday wear.", inStock: true },
  { id: 18, name: "Graphic Crop Tee", category: "croptops", categoryLabel: "Crop Tops", price: 70, originalPrice: 90, icon: "👚", badge: "Sale", rating: 4.7, reviews: 28, sizes: ["XS","S","M","L"], colors: ["#fff","#FFC0CB","#1a1a1a"], description: "Fun graphic print crop tee. Relaxed fit with bold front print.", inStock: true },
  { id: 19, name: "Off-Shoulder Crop", category: "croptops", categoryLabel: "Crop Tops", price: 80, originalPrice: null, icon: "👚", badge: null, rating: 4.8, reviews: 33, sizes: ["S","M","L","XL"], colors: ["#fff","#E91E8C","#9B59B6","#1a1a1a"], description: "Elegant off-shoulder crop top. Perfect for nights out or casual daytime looks.", inStock: true },
  { id: 20, name: "Tie-Dye Crop Top", category: "croptops", categoryLabel: "Crop Tops", price: 75, originalPrice: null, icon: "👚", badge: "New", rating: 4.6, reviews: 20, sizes: ["XS","S","M","L","XL"], colors: ["#FF6B35","#9B59B6","#4ECDC4"], description: "Vibrant tie-dye crop top. Each piece is unique. Fun, colorful, and trendy.", inStock: true },

  // CUSTOMIZED FRAMES
  { id: 21, name: "Custom Photo Frame – A4", category: "frames", categoryLabel: "Custom Frames", price: 90, originalPrice: null, icon: "🖼️", badge: "New", rating: 4.9, reviews: 52, sizes: ["A4"], colors: ["#1a1a1a","#C8A97E","#fff"], description: "High-quality custom A4 frame with your personal photo or message. Perfect for gifts.", inStock: true },
  { id: 22, name: "Collage Frame – 4 Photos", category: "frames", categoryLabel: "Custom Frames", price: 120, originalPrice: 150, icon: "🖼️", badge: "Sale", rating: 4.8, reviews: 29, sizes: ["A4","A3"], colors: ["#1a1a1a","#fff","#C8A97E"], description: "Beautiful 4-photo collage frame. Capture your favorite memories in one stunning piece.", inStock: true },
  { id: 23, name: "LED Light Frame", category: "frames", categoryLabel: "Custom Frames", price: 150, originalPrice: null, icon: "🖼️", badge: "Popular", rating: 4.9, reviews: 41, sizes: ["A4","A3"], colors: ["#1a1a1a"], description: "Glowing LED border frame with your custom photo. USB powered. Stunning night effect.", inStock: true },
  { id: 24, name: "Couple Memory Frame", category: "frames", categoryLabel: "Custom Frames", price: 100, originalPrice: null, icon: "🖼️", badge: null, rating: 4.7, reviews: 35, sizes: ["A4"], colors: ["#fff","#C8A97E","#1a1a1a","#E91E8C"], description: "Romantic custom frame for couples. Add names, dates, and your favorite photo.", inStock: true },
];

// Helper: get products by category
function getProductsByCategory(cat) {
  if (!cat || cat === 'all') return PRODUCTS;
  return PRODUCTS.filter(p => p.category === cat);
}

// Helper: get product by ID
function getProductById(id) {
  return PRODUCTS.find(p => p.id === parseInt(id));
}

// Helper: render product card HTML
function renderProductCard(product) {
  const stars = renderStars(product.rating);
  const badge = product.badge ? `<span class="product-badge ${product.badge === 'Sale' ? 'sale' : product.badge === 'New' ? 'new' : ''}">${product.badge}</span>` : '';
  const originalPrice = product.originalPrice ? `<span class="price-original">GHS ${product.originalPrice.toFixed(2)}</span>` : '';

  return `
    <div class="product-card" data-id="${product.id}">
      <div class="product-img">
        <span style="font-size:4rem">${product.icon}</span>
        ${badge}
        <div class="product-actions">
          <button class="product-action-btn" onclick="addToWishlist(${product.id})" title="Add to wishlist"><i class="fas fa-heart"></i></button>
          <a href="product.html?id=${product.id}" class="product-action-btn" title="Quick view"><i class="fas fa-eye"></i></a>
        </div>
      </div>
      <div class="product-info">
        <p class="product-category">${product.categoryLabel}</p>
        <h3 class="product-name">${product.name}</h3>
        <div class="product-rating">
          ${stars}
          <span>(${product.reviews})</span>
        </div>
        <div class="product-price">
          <span class="price-current">GHS ${product.price.toFixed(2)}</span>
          ${originalPrice}
        </div>
        <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
          <i class="fas fa-cart-plus"></i> Add to Cart
        </button>
      </div>
    </div>
  `;
}

function renderStars(rating) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) html += '<i class="fas fa-star" style="color:#F4A800"></i>';
    else if (i - 0.5 <= rating) html += '<i class="fas fa-star-half-alt" style="color:#F4A800"></i>';
    else html += '<i class="far fa-star" style="color:#F4A800"></i>';
  }
  return html;
}
