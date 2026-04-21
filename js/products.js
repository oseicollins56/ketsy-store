// ─── Ketsy Store — Product Catalogue ───────────────────────────────────────
const products = [

  // ── T-SHIRTS ──────────────────────────────────────────────────────────────
  {
    id: 1, name: 'Classic Plain Tee', category: 'tshirts',
    price: 85, oldPrice: null, rating: 4.8, reviews: 124,
    badge: 'Bestseller', icon: '👕',
    img: 'images/tshirts/tshirt-1.jpg',
    description: 'A clean everyday essential — premium cotton crew-neck tee with a relaxed fit and smooth finish. Styled here over slim dark jeans with white low-top sneakers. Simple, versatile, and incredibly comfortable for all-day wear.',
    colors: ['#1a1a1a','#4a4a4a','#6c8ebf','#d9d9d9'], sizes: ['S','M','L','XL','XXL']
  },
  {
    id: 2, name: 'Essential Black & White Tee', category: 'tshirts',
    price: 80, oldPrice: 100, rating: 4.7, reviews: 89,
    badge: 'Sale', icon: '👕',
    img: 'images/tshirts/tshirt-2.jpg',
    description: 'A bold two-tone black and white graphic tee with a slightly oversized fit. Worn here with black slim-fit joggers and black-and-white chunky sneakers. A strong, street-ready look that pairs with almost anything in your wardrobe.',
    colors: ['#1a1a1a','#ffffff'], sizes: ['S','M','L','XL']
  },
  {
    id: 3, name: 'Diesel Sleeveless Tee – White', category: 'tshirts',
    price: 120, oldPrice: null, rating: 4.9, reviews: 56,
    badge: 'New', icon: '👕',
    img: 'images/tshirts/tshirt-3.jpg',
    description: 'A premium white Diesel-branded sleeveless muscle tee — fitted cut that shows off your physique. The clean white tone pairs effortlessly with black cargo shorts, dark joggers, or denim. Styled here with clean white athletic shoes.',
    colors: ['#ffffff'], sizes: ['S','M','L','XL']
  },
  {
    id: 4, name: 'Diesel Sleeveless Tee – Black', category: 'tshirts',
    price: 120, oldPrice: null, rating: 4.9, reviews: 48,
    badge: 'New', icon: '👕',
    img: 'images/tshirts/tshirt-4.jpg',
    description: 'The all-black version of the premium Diesel muscle tee — sleeveless, fitted, and sharp. A go-to for gym sessions, casual events, or layering under a jacket. Paired here with grey sweatpants and black-sole sneakers for a coordinated look.',
    colors: ['#1a1a1a'], sizes: ['S','M','L','XL']
  },
  {
    id: 5, name: 'Vibrant Colour-Pack Tee', category: 'tshirts',
    price: 75, oldPrice: 90, rating: 4.6, reviews: 73,
    badge: 'Sale', icon: '👕',
    img: 'images/tshirts/tshirt-5.jpg',
    description: 'A pack of vibrant colour-block tees — available in bold shades including yellow, brown, blue, and purple. Relaxed fit with a rounded hem. Shown styled with neutral shorts or joggers and white canvas sneakers for a colourful, fun everyday look.',
    colors: ['#f5c518','#5c3a1e','#1a6dc0','#5b2d8e'], sizes: ['S','M','L','XL','XXL']
  },
  {
    id: 6, name: 'Graphic Flag Tee', category: 'tshirts',
    price: 95, oldPrice: null, rating: 4.5, reviews: 41,
    badge: null, icon: '👕',
    img: 'images/tshirts/tshirt-6.jpg',
    description: 'A dark charcoal graphic tee featuring a bold flag-inspired print across the chest. Slightly oversized with dropped shoulders for that streetwear feel. Best paired with dark cargo trousers and chunky black sneakers for a full urban look.',
    colors: ['#3a3a3a'], sizes: ['S','M','L','XL']
  },

  // ── JOGGERS ───────────────────────────────────────────────────────────────
  {
    id: 12, name: 'Black Cargo Joggers', category: 'joggers',
    price: 115, oldPrice: null, rating: 4.8, reviews: 77,
    badge: 'New', icon: '🩳',
    img: 'images/joggers/joggers-3.jpg',
    description: 'Slim-fit black cargo joggers with multiple pockets on the sides and thighs. Elastic waistband and tapered ankle cuff. Styled here with a plain white tee and black high-top sneakers — a clean, street-ready combo that works day or night.',
    colors: ['#1a1a1a'], sizes: ['S','M','L','XL','XXL']
  },
  {
    id: 13, name: 'Multi-Colour Sweat Joggers', category: 'joggers',
    price: 100, oldPrice: 120, rating: 4.5, reviews: 35,
    badge: 'Sale', icon: '🩳',
    img: 'images/joggers/joggers-4.jpg',
    description: 'Comfortable fleece sweat joggers available in multiple bold colours. Elastic waist with drawstring, ribbed ankle cuffs, and a relaxed tapered fit. Shown here paired with a matching coloured hoodie and fresh white-sole sneakers for a full coordinated tracksuit vibe.',
    colors: ['#1a1a1a','#c0392b','#2c6e49','#ffffff','#2d3142'], sizes: ['S','M','L','XL']
  },

  // ── LONG SLEEVES ──────────────────────────────────────────────────────────
  {
    id: 14, name: 'Olive Button-Down Shirt', category: 'longsleeves',
    price: 130, oldPrice: null, rating: 4.8, reviews: 53,
    badge: 'New', icon: '👔',
    img: 'images/fullset/longsleeve-1.jpg',
    description: 'A slim-fit olive green button-down shirt with a clean collar and chest pocket. Versatile enough to wear tucked or untucked. Styled here with khaki chino trousers and tan suede loafers — smart-casual perfection for the well-dressed man.',
    colors: ['#4a6741'], sizes: ['S','M','L','XL','XXL']
  },
  {
    id: 15, name: 'Black Oxford Shirt', category: 'longsleeves',
    price: 125, oldPrice: 150, rating: 4.7, reviews: 67,
    badge: 'Sale', icon: '👔',
    img: 'images/fullset/longsleeve-2.jpg',
    description: 'A sharp all-black Oxford long-sleeve shirt with a structured collar and button-front design. Slim fit, looks great tucked into dark trousers. Worn here with black slim-fit chinos and polished black Oxford shoes — a powerful, clean look for any formal occasion.',
    colors: ['#1a1a1a'], sizes: ['S','M','L','XL']
  },
  {
    id: 16, name: 'Brown Zara Long Sleeve', category: 'longsleeves',
    price: 140, oldPrice: null, rating: 4.9, reviews: 42,
    badge: 'Bestseller', icon: '👔',
    img: 'images/fullset/longsleeve-3.jpg',
    description: 'A premium rich brown Zara long-sleeve shirt with a smooth fabric finish and clean button-down front. Styled here with beige chino trousers and tan leather shoes — an earth-toned outfit that reads sophisticated and stylish in any setting.',
    colors: ['#7d4e1e'], sizes: ['S','M','L','XL']
  },
  {
    id: 17, name: 'White Classic Shirt', category: 'longsleeves',
    price: 120, oldPrice: null, rating: 4.6, reviews: 58,
    badge: null, icon: '👔',
    img: 'images/fullset/longsleeve-4.jpg',
    description: 'A timeless crisp white long-sleeve shirt — a wardrobe essential every man should own. Structured collar, clean cut, and smooth fabric that holds its shape all day. Worn here with navy blue trousers and black leather shoes for a classic office or church look.',
    colors: ['#ffffff'], sizes: ['S','M','L','XL','XXL']
  },
  {
    id: 18, name: 'White Slim Fit Shirt', category: 'longsleeves',
    price: 115, oldPrice: 135, rating: 4.5, reviews: 34,
    badge: 'Sale', icon: '👔',
    img: 'images/fullset/longsleeve-5.jpg',
    description: 'A slim-fit white dress shirt designed to hug the body cleanly. Features a fine fabric with a subtle sheen. Styled here with dark grey slim trousers and white leather sneakers — works equally well for smart casual or semi-formal settings.',
    colors: ['#ffffff'], sizes: ['S','M','L','XL']
  },
  {
    id: 19, name: 'White & Black Smart Shirt', category: 'longsleeves',
    price: 120, oldPrice: null, rating: 4.7, reviews: 49,
    badge: null, icon: '👔',
    img: 'images/fullset/longsleeve-6.jpg',
    description: 'A smart two-tone white and black patterned long-sleeve shirt — bold yet refined. Slim fit with a button-front and clean collar. Paired here with black slim trousers and black dress shoes. A standout choice for events, meetings, or dinner outings.',
    colors: ['#ffffff','#1a1a1a'], sizes: ['S','M','L','XL']
  },
  {
    id: 20, name: 'Maroon Oxford Shirt', category: 'longsleeves',
    price: 130, oldPrice: null, rating: 4.8, reviews: 36,
    badge: 'New', icon: '👔',
    img: 'images/fullset/longsleeve-7.jpg',
    description: 'A deep maroon Oxford long-sleeve shirt with a classic collar and buttoned cuffs. Rich colour that stands out without being loud. Styled here with beige or light chino trousers and dark brown leather shoes — a confident look for any occasion.',
    colors: ['#7b1a2e'], sizes: ['S','M','L','XL']
  },

  // ── HOODIES ───────────────────────────────────────────────────────────────
  {
    id: 21, name: 'Navy Pullover Hoodie', category: 'hoodies',
    price: 150, oldPrice: null, rating: 4.8, reviews: 82,
    badge: 'Bestseller', icon: '🧥',
    img: 'images/hoodies/hoodie-1.jpg',
    description: 'A thick premium fleece pullover hoodie in deep navy. Features a front kangaroo pocket, adjustable drawstring hood, and ribbed cuffs. Styled with slim-fit dark joggers and clean white low-top sneakers for a sharp casual look.',
    colors: ['#1a2a5e'], sizes: ['S','M','L','XL','XXL']
  },
  {
    id: 22, name: '"81" Graphic Hoodie', category: 'hoodies',
    price: 160, oldPrice: 190, rating: 4.7, reviews: 55,
    badge: 'Sale', icon: '🧥',
    img: 'images/hoodies/hoodie-2.jpg',
    description: 'A statement cream/off-white oversized hoodie with bold "81" graphic print on the chest. Relaxed fit with a large front pocket. Worn here with black cargo pants and matching off-white chunky sneakers for a streetwear finish.',
    colors: ['#f5f0e8'], sizes: ['S','M','L','XL']
  },
  {
    id: 24, name: 'Baby Blue Graphic Hoodie', category: 'hoodies',
    price: 155, oldPrice: null, rating: 4.6, reviews: 40,
    badge: null, icon: '🧥',
    img: 'images/hoodies/hoodie-4.jpg',
    description: 'A soft pastel baby blue hoodie with a subtle graphic print on the chest. Medium-weight fleece, relaxed fit. Paired here with light wash denim jeans and white court sneakers — a clean, easy everyday look.',
    colors: ['#a8d8ea'], sizes: ['S','M','L','XL']
  },

  // ── MEN FULL SET ──────────────────────────────────────────────────────────
  {
    id: 25, name: 'Smart Quarter-Zip Set', category: 'fullset',
    price: 280, oldPrice: null, rating: 4.9, reviews: 37,
    badge: 'New', icon: '🧑‍🎤',
    img: 'images/fullset/fullset-1.jpg',
    description: 'A coordinated quarter-zip pullover with matching tapered trousers in a warm neutral tone. The top features a clean zip collar and subtle texture. Completed with white leather sneakers — an effortlessly smart look for outings or events.',
    colors: ['#b5a99a','#1a1a1a'], sizes: ['S','M','L','XL']
  },
  {
    id: 27, name: 'Brown Tee & Chinos Set', category: 'fullset',
    price: 220, oldPrice: null, rating: 4.7, reviews: 51,
    badge: null, icon: '🧑‍🎤',
    img: 'images/fullset/fullset-3.jpg',
    description: 'A fitted brown premium tee paired with matching slim-fit chino trousers. Clean, simple, and versatile. Styled with brown suede loafers that tie the earthy tones together perfectly — great for casual outings or a relaxed date look.',
    colors: ['#5c3a1e','#f5f0e8'], sizes: ['S','M','L','XL']
  },
  {
    id: 28, name: 'Olive Tee & Denim Set', category: 'fullset',
    price: 230, oldPrice: null, rating: 4.8, reviews: 44,
    badge: 'Bestseller', icon: '🧑‍🎤',
    img: 'images/fullset/fullset-4.jpg',
    description: 'An olive-green fitted tee matched with clean straight-leg denim jeans. The contrast of earthy olive and classic blue denim creates a sharp, effortless outfit. Finished with white and tan canvas sneakers for a clean street-ready look.',
    colors: ['#4a6741','#5b8ad4'], sizes: ['S','M','L','XL','XXL']
  },
  {
    id: 29, name: 'Striped Sweater & Denim Set', category: 'fullset',
    price: 260, oldPrice: 300, rating: 4.6, reviews: 33,
    badge: 'Sale', icon: '🧑‍🎤',
    img: 'images/fullset/fullset-5.jpg',
    description: 'A classic striped knit sweater in charcoal and cream tones, paired with straight-cut blue denim jeans. A timeless smart-casual combination. Styled with clean white leather sneakers and worn with a relaxed, confident posture.',
    colors: ['#3a3a3a','#5b8ad4'], sizes: ['S','M','L','XL']
  },
  {
    id: 30, name: 'Black Polo & Khaki Set', category: 'fullset',
    price: 240, oldPrice: null, rating: 4.7, reviews: 48,
    badge: null, icon: '🧑‍🎤',
    img: 'images/fullset/fullset-6.jpg',
    description: 'A slim-fit black polo shirt paired with tailored khaki/beige chino trousers. A sharp contrast that works for both semi-formal and casual occasions. Completed with tan leather dress shoes that elevate the entire outfit.',
    colors: ['#1a1a1a','#c9a96e'], sizes: ['S','M','L','XL']
  },
  {
    id: 31, name: 'Navy Ribbed Polo Set', category: 'fullset',
    price: 300, oldPrice: null, rating: 4.9, reviews: 62,
    badge: 'Bestseller', icon: '🧑‍🎤',
    img: 'images/fullset/fullset-7.jpg',
    description: 'A premium navy ribbed polo top with matching tailored navy trousers. The ribbed texture adds depth and structure to the silhouette. Paired with white clean-sole sneakers and worn with confidence — one of our most complimented outfits.',
    colors: ['#1a2a5e','#f5f0e8'], sizes: ['S','M','L','XL']
  },
  {
    id: 32, name: 'Light Blue Suit Set', category: 'fullset',
    price: 420, oldPrice: 500, rating: 4.8, reviews: 25,
    badge: 'Sale', icon: '🧑‍🎤',
    img: 'images/fullset/fullset-8.jpg',
    description: 'A tailored light blue two-piece suit — blazer and matching slim-fit trousers. Crisp and formal with a modern fit. The look is completed with a white dress shirt underneath and polished black Oxford shoes — perfect for events, church, or formal occasions.',
    colors: ['#a8d8ea','#ffffff'], sizes: ['S','M','L','XL']
  },
  {
    id: 34, name: 'Baby Blue Nike Tracksuit', category: 'fullset',
    price: 380, oldPrice: 450, rating: 4.8, reviews: 58,
    badge: 'Sale', icon: '🧑‍🎤',
    img: 'images/fullset/fullset-10.jpg',
    description: 'A matching baby blue Nike tracksuit — zip-up jacket with Nike logo and matching tracksuit bottoms. Soft, lightweight, and incredibly comfortable. Finished with fresh white Nike trainers — a clean sporty look that stands out wherever you go.',
    colors: ['#a8d8ea','#ffffff'], sizes: ['S','M','L','XL']
  },
  {
    id: 36, name: 'White Tee & Grey Denim Set', category: 'fullset',
    price: 210, oldPrice: null, rating: 4.6, reviews: 43,
    badge: null, icon: '🧑‍🎤',
    img: 'images/fullset/fullset-12.jpg',
    description: 'A clean white fitted tee paired with grey straight-leg denim jeans. Simple, fresh, and versatile — this combo works for any casual occasion. Finished with white-sole sneakers and optional silver accessories to complete the minimalist look.',
    colors: ['#ffffff','#888888'], sizes: ['S','M','L','XL','XXL']
  },
  {
    id: 37, name: 'Slate Quarter-Zip Matching Set', category: 'fullset',
    price: 290, oldPrice: null, rating: 4.8, reviews: 47,
    badge: 'New', icon: '🧑‍🎤',
    img: 'images/fullset/fullset-13.jpg',
    description: 'A coordinated slate blue-grey quarter-zip sweatshirt with matching tapered jogger trousers. The muted cool tone is modern and easy to style. Worn with white leather chunky sneakers that contrast beautifully against the slate grey outfit.',
    colors: ['#5a7a8a'], sizes: ['S','M','L','XL']
  },
  {
    id: 38, name: 'Black Formal Suit Set', category: 'fullset',
    price: 480, oldPrice: 580, rating: 4.9, reviews: 31,
    badge: 'Sale', icon: '🧑‍🎤',
    img: 'images/fullset/fullset-14.jpg',
    description: 'A sharp all-black formal two-piece suit — fitted blazer with peak lapels and matching slim trousers. A crisp white dress shirt is visible underneath. Completed with polished black leather Oxford shoes. The ultimate power look for formal events, weddings, and business meetings.',
    colors: ['#1a1a1a','#ffffff'], sizes: ['S','M','L','XL']
  },

  // ── CAPS ──────────────────────────────────────────────────────────────────
  {
    id: 39, name: 'Fitted MLB Snapback Cap', category: 'caps',
    price: 90, oldPrice: null, rating: 4.7, reviews: 94,
    badge: 'Bestseller', icon: '🧢',
    img: 'images/caps/caps-1.jpg',
    description: 'A premium fitted MLB-style snapback cap with a structured crown and flat brim. Available in bold colour options. Pairs with almost any casual outfit — tees, hoodies, or full sets. Adjustable snap closure for a perfect fit.',
    colors: ['#c0392b','#1a1a1a'], sizes: ['S/M','L/XL']
  },
  {
    id: 40, name: 'Camo Military Cap', category: 'caps',
    price: 80, oldPrice: null, rating: 4.6, reviews: 67,
    badge: null, icon: '🧢',
    img: 'images/caps/caps-2.jpg',
    description: 'A classic military-style camo cap with a curved brim and adjustable strap at the back. The green camo print gives it a rugged, outdoor aesthetic. Works well with cargo trousers, khakis, or any street-style outfit.',
    colors: ['#4a5e3a'], sizes: ['One Size']
  },
  {
    id: 41, name: 'Black Rebel Trucker Cap', category: 'caps',
    price: 85, oldPrice: 100, rating: 4.5, reviews: 53,
    badge: 'Sale', icon: '🧢',
    img: 'images/caps/caps-3.jpg',
    description: 'A bold trucker-style cap with a mesh back panel and structured front. Available in deep maroon, all-black, and dark navy. The curved brim and adjustable snap back give it a comfortable all-day fit. Best worn with graphic tees, hoodies, or casual outfits.',
    colors: ['#7b1a2e','#1a1a1a','#2d3142'], sizes: ['One Size']
  },
  {
    id: 42, name: 'Green MA Trucker Cap', category: 'caps',
    price: 95, oldPrice: null, rating: 4.8, reviews: 41,
    badge: 'New', icon: '🧢',
    img: 'images/caps/caps-4.jpg',
    description: 'A fresh forest green trucker cap with a clean front panel and breathable mesh back. The deep green tone pairs brilliantly with earth-toned outfits, olive shirts, khaki trousers, or full sets. Adjustable back closure for a perfect custom fit.',
    colors: ['#2c6e49'], sizes: ['One Size']
  },

  // ── CUPS ──────────────────────────────────────────────────────────────────
  {
    id: 46, name: 'Custom Printed Mug', category: 'cups',
    price: 55, oldPrice: null, rating: 4.6, reviews: 38,
    badge: 'Custom', icon: '☕', img: null,
    colors: ['#ffffff','#1a1a1a','#c0392b','#2d3142'], sizes: ['11oz','15oz']
  },
  {
    id: 47, name: 'Travel Tumbler', category: 'cups',
    price: 75, oldPrice: null, rating: 4.7, reviews: 29,
    badge: null, icon: '🥤', img: null,
    colors: ['#1a1a1a','#c0392b','#2d3142','#4ECDC4'], sizes: ['16oz','20oz']
  },

  // ── FRAMES ────────────────────────────────────────────────────────────────
  {
    id: 48, name: 'Custom Photo Frame', category: 'frames',
    price: 120, oldPrice: null, rating: 4.8, reviews: 45,
    badge: 'Custom', icon: '🖼️', img: null,
    colors: ['#1a1a1a','#c9a96e','#ffffff'], sizes: ['4×6','5×7','8×10'],
    frameStyles: [
      { name: 'Classic Wood',  bg: 'linear-gradient(135deg,#6B4B1A,#C49A2A)', border: '#4A3010', inner: '#F5EFE0' },
      { name: 'Sleek Black',   bg: 'linear-gradient(135deg,#1a1a1a,#3d3d3d)', border: '#000',    inner: '#f5f5f5' },
      { name: 'Rose Gold',     bg: 'linear-gradient(135deg,#C28A6B,#E8B89A)', border: '#8B5E3C', inner: '#FFF5F0' },
      { name: 'White Modern',  bg: 'linear-gradient(135deg,#f0f0f0,#ddd)',    border: '#bbb',    inner: '#fff'    },
      { name: 'Rustic Brown',  bg: 'linear-gradient(135deg,#5C3A1E,#8B6040)', border: '#3A2010', inner: '#FFF8F0' }
    ]
  },
  {
    id: 49, name: 'LED Light Frame', category: 'frames',
    price: 180, oldPrice: 220, rating: 4.9, reviews: 31,
    badge: 'Sale', icon: '🖼️', img: null,
    colors: ['#1a1a1a','#ffffff','#c0392b','#2d6e9e'], sizes: ['5×7','8×10','10×12'],
    frameStyles: [
      { name: 'LED Warm Gold', bg: 'linear-gradient(135deg,#1a1200,#3d2800)', border: '#FFD700',  inner: '#0d0d0d', glow: '#FFD700' },
      { name: 'LED Cool Blue', bg: 'linear-gradient(135deg,#000d1a,#001a33)', border: '#00BFFF',  inner: '#050505', glow: '#00BFFF' },
      { name: 'LED Red Neon',  bg: 'linear-gradient(135deg,#1a0000,#330000)', border: '#FF2222',  inner: '#0d0000', glow: '#FF2222' },
      { name: 'LED Pink',      bg: 'linear-gradient(135deg,#1a001a,#330033)', border: '#FF69B4',  inner: '#0d000d', glow: '#FF69B4' },
      { name: 'LED Green',     bg: 'linear-gradient(135deg,#001a00,#003300)', border: '#39FF14',  inner: '#000d00', glow: '#39FF14' }
    ]
  },
  {
    id: 50, name: 'Collage Memory Frame', category: 'frames',
    price: 145, oldPrice: null, rating: 4.7, reviews: 22,
    badge: 'New', icon: '🖼️', img: null,
    colors: ['#1a1a1a','#c9a96e','#4a6741'], sizes: ['8×10','A4','A3'],
    frameStyles: [
      { name: 'Gold Ornate',   bg: 'linear-gradient(135deg,#7A5C10,#D4A820)', border: '#C4901A', inner: '#FAF0D0' },
      { name: 'Silver Metal',  bg: 'linear-gradient(135deg,#555,#999)',        border: '#888',    inner: '#f8f8f8' },
      { name: 'Dark Walnut',   bg: 'linear-gradient(135deg,#2d1a0e,#5C3A1E)', border: '#1a0d00', inner: '#FFF8F0' },
      { name: 'Bright White',  bg: 'linear-gradient(135deg,#f8f8f8,#e8e8e8)', border: '#ccc',    inner: '#fff'    },
      { name: 'Navy Blue',     bg: 'linear-gradient(135deg,#0d1a2d,#1a2d4a)', border: '#2d4a6e', inner: '#f5f8ff' }
    ]
  }
];

// ─── Render a single product card ──────────────────────────────────────────
function renderProductCard(product) {
  const APPAREL_CATS = ['tshirts','joggers','longsleeves','hoodies','croptops','fullset'];
  const isApparel   = APPAREL_CATS.includes(product.category);
  const isFrame     = product.category === 'frames';

  const categoryLabel = {
    tshirts:'T-Shirts', shorts:'Shorts', joggers:'Joggers',
    longsleeves:'Long Sleeves', hoodies:'Hoodies', fullset:'Men Full Set',
    caps:'Caps', cups:'Cups', croptops:'Crop Tops', frames:'Frames'
  }[product.category] || product.category;

  // ── image / media area ──────────────────────────────────────────────────
  let imgHTML;

  if (isFrame && product.frameStyles && product.frameStyles.length) {
    // Swipeable frame-style gallery
    const slides = product.frameStyles.map((s, i) => {
      const glowStyle = s.glow
        ? `box-shadow:0 0 12px 3px ${s.glow},0 0 24px 6px ${s.glow}40;`
        : '';
      return `
      <div class="frame-slide ${i === 0 ? 'active' : ''}" style="background:${s.bg}">
        <div class="frame-preview-wrap">
          <div class="frame-border-box" style="border-color:${s.border};${glowStyle}">
            <div class="frame-inner" style="background:${s.inner}">
              <i class="fas fa-image" style="font-size:1.4rem;color:#bbb"></i>
            </div>
          </div>
        </div>
        <span class="frame-style-label">${s.name}</span>
      </div>`;
    }).join('');

    const dots = product.frameStyles.map((_,i) =>
      `<span class="fdot${i===0?' active':''}"></span>`
    ).join('');

    imgHTML = `
    <div class="frame-gallery" id="fg-${product.id}" data-current="0" data-total="${product.frameStyles.length}">
      <div class="frame-slides-track">${slides}</div>
      <button class="frame-nav frame-nav-prev" onclick="frameNav(event,'${product.id}',-1)" aria-label="Previous style">
        <i class="fas fa-chevron-left"></i>
      </button>
      <button class="frame-nav frame-nav-next" onclick="frameNav(event,'${product.id}',1)" aria-label="Next style">
        <i class="fas fa-chevron-right"></i>
      </button>
      <div class="frame-dots">${dots}</div>
    </div>`;

  } else if (product.img) {
    const posStyle = product.category === 'fullset' ? 'object-position:top center;' : '';
    imgHTML = `
    <img src="${product.img}" alt="${product.name}" loading="lazy" style="${posStyle}"
         onerror="this.style.display='none';var s=document.getElementById('icon-${product.id}');if(s)s.style.display='flex'">
    <span id="icon-${product.id}"
          style="display:none;font-size:4rem;position:absolute;inset:0;align-items:center;justify-content:center;background:#f5f5f5;color:#bbb">${product.icon}</span>`;
  } else {
    imgHTML = `<span style="font-size:4rem;width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#f5f5f5;color:#bbb">${product.icon}</span>`;
  }

  // ── size pills (apparel only) ────────────────────────────────────────────
  let sizesHTML = '';
  if (isApparel && product.sizes && product.sizes.length) {
    sizesHTML = `
    <div class="card-sizes" role="group" aria-label="Select size">
      ${product.sizes.map((s, i) =>
        `<button class="card-size-btn${i===0?' active':''}" data-size="${s}" type="button" aria-label="Size ${s}">${s}</button>`
      ).join('')}
    </div>`;
  }

  // ── color dots ───────────────────────────────────────────────────────────
  let colorsHTML = '';
  if (product.colors && product.colors.length) {
    colorsHTML = `
    <div class="product-colors">
      ${product.colors.map((c,i) =>
        `<span class="color-dot${i===0?' active':''}" data-color="${c}" style="background:${c};border:${(c==='#ffffff'||c==='#f5f0e8'||c==='#f5f5f5')?'1.5px solid #ddd':'none'}" title="${c}"></span>`
      ).join('')}
    </div>`;
  }

  return `
  <div class="product-card" data-id="${product.id}" data-category="${product.category}" data-price="${product.price}">
    <div class="product-image${isFrame?' product-image--frame':''}">
      ${!isFrame ? `<a href="product.html?id=${product.id}" class="product-image-link" aria-label="View ${product.name}" style="position:absolute;inset:0;z-index:1"></a>` : ''}
      ${imgHTML}
      ${product.badge ? `<span class="product-badge badge-${product.badge.toLowerCase().replace(/\s/g,'-')}">${product.badge}</span>` : ''}
      ${!isFrame ? `
      <div class="product-overlay">
        <button class="btn btn-primary btn-sm quick-add" data-id="${product.id}" type="button">
          <i class="fas fa-shopping-cart"></i> Add
        </button>
        <a href="product.html?id=${product.id}" class="btn btn-outline btn-sm">
          <i class="fas fa-eye"></i> View
        </a>
      </div>` : ''}
      <button class="wishlist-btn ${isWishlisted(product.id) ? 'active' : ''}" data-id="${product.id}" title="Add to Wishlist" type="button" style="z-index:6">
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
      ${colorsHTML}
      ${sizesHTML}
      ${isFrame ? `
      <a href="product.html?id=${product.id}" class="btn btn-primary btn-sm" style="width:100%;margin-top:.5rem;font-size:.82rem">
        <i class="fas fa-paint-brush"></i> Customize &amp; Order
      </a>` : ''}
    </div>
  </div>`;
}

// ─── Frame gallery navigation (global) ─────────────────────────────────────
function frameNav(event, productId, direction) {
  event.preventDefault();
  event.stopPropagation();
  const gallery = document.getElementById('fg-' + productId);
  if (!gallery) return;

  let current = parseInt(gallery.dataset.current, 10) || 0;
  const total  = parseInt(gallery.dataset.total,   10) || 1;
  const slides = gallery.querySelectorAll('.frame-slide');
  const dots   = gallery.querySelectorAll('.fdot');

  // Deactivate current
  if (slides[current]) slides[current].classList.remove('active');
  if (dots[current])   dots[current].classList.remove('active');

  // Move
  current = (current + direction + total) % total;
  gallery.dataset.current = current;

  // Activate new
  if (slides[current]) slides[current].classList.add('active');
  if (dots[current])   dots[current].classList.add('active');
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

// ─── Bind add-to-cart, size pills & wishlist events on rendered cards ───────
function bindProductCardEvents(container) {
  // Size pill selection
  container.querySelectorAll('.card-sizes').forEach(group => {
    group.querySelectorAll('.card-size-btn').forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        e.stopPropagation();
        group.querySelectorAll('.card-size-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });
  });

  // Color dot selection
  container.querySelectorAll('.product-colors').forEach(group => {
    group.querySelectorAll('.color-dot').forEach(dot => {
      dot.addEventListener('click', e => {
        e.preventDefault();
        e.stopPropagation();
        group.querySelectorAll('.color-dot').forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
      });
    });
  });

  // Quick-add to cart (captures selected size & color)
  container.querySelectorAll('.quick-add').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();
      const id   = +btn.dataset.id;
      const card = btn.closest('.product-card');
      const selectedSize  = card?.querySelector('.card-size-btn.active')?.dataset.size  || '';
      const selectedColor = card?.querySelector('.color-dot.active')?.dataset.color || '';
      const variant = [selectedSize, selectedColor].filter(Boolean).join(' / ');
      if (typeof addToCart === 'function') addToCart(id, 1, variant);
    });
  });

  // Wishlist toggle
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

// ─── Category Showcase Card (swipeable gallery of all products in a category) ──
function renderCategoryShowcase(category, title, icon) {
  const items = getProductsByCategory(category).filter(p => p.category === category);
  if (!items.length) return '';
  const galleryId = 'sc-' + category;

  const slides = items.map((p, i) => {
    const isFullset = p.category === 'fullset';
    const imgHTML = p.img
      ? `<img src="${p.img}" alt="${p.name}" loading="lazy" style="${isFullset ? 'object-position:top center;' : ''}"
             onerror="this.style.display='none'">`
      : `<span class="sc-icon-fallback">${p.icon}</span>`;

    const sizesBtns = p.sizes && p.sizes.length && !['cups'].includes(p.category)
      ? `<div class="sc-sizes">${p.sizes.slice(0,4).map((s,si) =>
          `<button class="card-size-btn${si===0?' active':''}" data-size="${s}">${s}</button>`
        ).join('')}</div>`
      : '';

    return `
    <div class="sc-slide ${i === 0 ? 'active' : ''}" data-id="${p.id}">
      <a href="product.html?id=${p.id}" class="sc-img-link">
        <div class="sc-img">${imgHTML}</div>
      </a>
      <div class="sc-info">
        <p class="sc-name">${p.name}</p>
        <p class="sc-price">GHS ${p.price.toFixed(2)}${p.oldPrice ? `<span class="sc-old">GHS ${p.oldPrice.toFixed(2)}</span>` : ''}</p>
        ${p.description ? `<p class="sc-look">${p.description.split('.')[0]}.</p>` : ''}
        ${sizesBtns}
      </div>
    </div>`;
  }).join('');

  const dots = items.map((_,i) =>
    `<span class="sc-dot${i===0?' active':''}" data-idx="${i}"></span>`
  ).join('');

  return `
  <div class="showcase-card">
    <div class="showcase-card-header">
      <span class="showcase-cat-icon">${icon}</span>
      <h3>${title}</h3>
      <a href="shop.html?cat=${category}" class="showcase-view-all">All ${items.length} <i class="fas fa-arrow-right"></i></a>
    </div>
    <div class="sc-gallery" id="${galleryId}" data-current="0" data-total="${items.length}">
      <div class="sc-track">${slides}</div>
      <button class="sc-nav sc-prev" onclick="showcaseNav(event,'${category}',-1)" aria-label="Previous">
        <i class="fas fa-chevron-left"></i>
      </button>
      <button class="sc-nav sc-next" onclick="showcaseNav(event,'${category}',1)" aria-label="Next">
        <i class="fas fa-chevron-right"></i>
      </button>
      <div class="sc-counter" id="sc-counter-${category}">1 / ${items.length}</div>
    </div>
    <div class="sc-dots">${dots}</div>
    <div class="showcase-card-footer">
      <button class="btn btn-primary btn-sm sc-cart-btn" data-category="${category}" type="button">
        <i class="fas fa-cart-plus"></i> Add to Cart
      </button>
      <a href="shop.html?cat=${category}" class="btn btn-outline btn-sm">
        <i class="fas fa-eye"></i> View All
      </a>
    </div>
  </div>`;
}

// ─── Showcase gallery navigation ─────────────────────────────────────────────
function showcaseNav(event, category, direction) {
  if (event) { event.preventDefault(); event.stopPropagation(); }
  const gallery  = document.getElementById('sc-' + category);
  if (!gallery) return;

  let current = parseInt(gallery.dataset.current, 10) || 0;
  const total  = parseInt(gallery.dataset.total, 10)   || 1;
  const slides = gallery.querySelectorAll('.sc-slide');

  // dots are siblings of the gallery inside the .showcase-card
  const card = gallery.closest('.showcase-card');
  const dots = card ? card.querySelectorAll('.sc-dot') : [];
  const counter = document.getElementById('sc-counter-' + category);

  if (slides[current]) slides[current].classList.remove('active');
  if (dots[current])   dots[current].classList.remove('active');

  current = (current + direction + total) % total;
  gallery.dataset.current = current;

  if (slides[current]) slides[current].classList.add('active');
  if (dots[current])   dots[current].classList.add('active');
  if (counter)         counter.textContent = `${current + 1} / ${total}`;

  // Bind size btns on newly visible slide
  const activeSlide = slides[current];
  if (activeSlide) {
    activeSlide.querySelectorAll('.card-size-btn').forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault(); e.stopPropagation();
        activeSlide.querySelectorAll('.card-size-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });
  }
}

// ─── Render all category showcases into a container ──────────────────────────
function renderAllShowcases(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const cats = [
    { key: 'fullset',  label: 'Men Full Set', icon: '🕴️' },
    { key: 'tshirts',  label: 'T-Shirts',    icon: '👕' },
    { key: 'joggers',  label: 'Joggers',      icon: '🏃' },
    { key: 'hoodies',  label: 'Hoodies',      icon: '🧥' },
  ];
  el.innerHTML = cats.map(c => renderCategoryShowcase(c.key, c.label, c.icon)).join('');
  bindShowcaseEvents(el);
}

// ─── Bind cart + size events for all showcase cards ──────────────────────────
function bindShowcaseEvents(container) {
  // Size pills
  container.querySelectorAll('.sc-slide.active .card-size-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault(); e.stopPropagation();
      btn.closest('.sc-sizes')?.querySelectorAll('.card-size-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
  // Dot navigation
  container.querySelectorAll('.sc-dot').forEach(dot => {
    dot.addEventListener('click', e => {
      e.stopPropagation();
      const card = dot.closest('.showcase-card');
      const gallery = card?.querySelector('.sc-gallery');
      if (!gallery) return;
      const category = gallery.id.replace('sc-','');
      const target = parseInt(dot.dataset.idx, 10);
      const current = parseInt(gallery.dataset.current, 10) || 0;
      showcaseNav(null, category, target - current);
    });
  });
  // Add-to-cart for active slide
  container.querySelectorAll('.sc-cart-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const category = btn.dataset.category;
      const gallery  = document.getElementById('sc-' + category);
      if (!gallery) return;
      const current  = parseInt(gallery.dataset.current, 10) || 0;
      const slide    = gallery.querySelectorAll('.sc-slide')[current];
      const id       = slide ? +slide.dataset.id : null;
      if (!id) return;
      const size  = slide.querySelector('.card-size-btn.active')?.dataset.size  || '';
      const color = slide.querySelector('.color-dot.active')?.dataset.color || '';
      const variant = [size, color].filter(Boolean).join(' / ');
      if (typeof addToCart === 'function') addToCart(id, 1, variant);
    });
  });
}
