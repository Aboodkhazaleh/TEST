// ============================================================
// Waqar — Firebase configuration
// ============================================================
// Paste the firebaseConfig object Firebase gives you below.
// The `window.firebaseConfig = ...` line at the end exposes it to admin.html
// and index.html (which load this file with a regular <script> tag).
// ============================================================

const firebaseConfig = {
  apiKey: "AIzaSyDJA4tYSKiuemRx5QR-9iq1HJ9kdUOHtxY",
  authDomain: "waqar-6364f.firebaseapp.com",
  projectId: "waqar-6364f",
  storageBucket: "waqar-6364f.firebasestorage.app",
  messagingSenderId: "339253062131",
  appId: "1:339253062131:web:a0f1934763c3604a278a86",
  measurementId: "G-X81VXS7MZD"
};

// Expose to the rest of the app
window.firebaseConfig = firebaseConfig;

// ============================================================
// Google Maps — used by the checkout location picker
// ============================================================
// 1. Go to https://console.cloud.google.com/
// 2. Create / select a project, then enable BOTH:
//      • Maps JavaScript API
//      • Places API
//      • Geocoding API
// 3. Credentials → Create API key → restrict it:
//      • HTTP referrers → add your domains (e.g. *.vercel.app/*, aboodkhazaleh.github.io/*)
//      • API restrictions → select the 3 APIs above
// 4. Paste the key below.
// 5. (If billing is required, Google's free $200/month credit easily covers
//     a small store — the location picker is only used on checkout.)
//
// If the key is missing or invalid, checkout falls back to a plain text
// address field and the map section is hidden automatically.
window.GOOGLE_MAPS_API_KEY = AIzaSyAo0dIh6eCYBpMs_fdw5q1xQAu0QhpBdJ8;

// Country codes used to bias / restrict address autocomplete results.
// Edit this list to suit where you deliver (ISO 3166-1 alpha-2).
window.WAQAR_GMAPS_COUNTRIES = ["jo", "sa", "ae", "kw", "qa", "bh", "om"];

// Default map center (Amman, Jordan) — fallback when no location is picked yet.
window.WAQAR_GMAPS_DEFAULT_CENTER = { lat: 31.9454, lng: 35.9284 };

// ============================================================
// Default product seed — used once by the admin's "Seed default
// products" button to populate Firestore with the initial 6 thobes.
// Edit freely or remove after you've populated the store yourself.
// ============================================================
window.WAQAR_DEFAULT_PRODUCTS = [
  {
    name_en: 'Charcoal Linen Thobe', name_ar: 'ثوب الفحم الكتاني',
    desc_en: 'A whisper of texture in a deep, smoky charcoal. Spun from Italian linen, this thobe wears beautifully through the warmest months and ages with quiet grace.',
    desc_ar: 'لمسة من النسيج بلون الفحم الداكن. منسوج من الكتان الإيطالي، يلائم أحرّ الفصول ويزداد جمالاً مع مرور الزمن.',
    price: 95, color: 'charcoal',
    badge_en: 'Bestseller', badge_ar: 'الأكثر طلباً',
    fabric_en: 'Italian Linen Blend', fabric_ar: 'مزيج الكتان الإيطالي',
    soldOut: false, stock: { S:10, M:10, L:10, XL:10 },
    images: [], order: 1
  },
  {
    name_en: 'Camel Signature Thobe', name_ar: 'ثوب الجمل المميز',
    desc_en: 'A warm camel hue with a soft sheen — our signature smooth-finish cotton, tailored for an effortless drape.',
    desc_ar: 'لون الجمل الدافئ بلمعان ناعم — قطننا الفاخر بنهاية حريرية، مفصّل لانسدال رشيق دون مجهود.',
    price: 105, color: 'camel',
    badge_en: '', badge_ar: '',
    fabric_en: 'Japanese Premium Cotton', fabric_ar: 'قطن ياباني فاخر',
    soldOut: false, stock: { S:10, M:10, L:10, XL:10 },
    images: [], order: 2
  },
  {
    name_en: 'Midnight Premium Thobe', name_ar: 'ثوب منتصف الليل الفاخر',
    desc_en: 'The classic, distilled. Deep midnight black in a heavyweight wool-cotton, finished with mother-of-pearl buttons.',
    desc_ar: 'الكلاسيكية في أنقى صورها. أسود منتصف الليل العميق بنسيج صوف-قطن ثقيل، مع أزرار من عرق اللؤلؤ.',
    price: 125, color: 'midnight',
    badge_en: 'Premium', badge_ar: 'فاخر',
    fabric_en: 'Wool & Cotton Blend', fabric_ar: 'مزيج صوف وقطن',
    soldOut: false, stock: { S:10, M:10, L:10, XL:10 },
    images: [], order: 3
  },
  {
    name_en: 'Pearl Ivory Thobe', name_ar: 'ثوب اللؤلؤ العاجي',
    desc_en: 'A luminous off-white woven from long-staple Egyptian cotton. The quintessential thobe for celebrations and Friday prayer alike.',
    desc_ar: 'أبيض لؤلؤي مضيء منسوج من القطن المصري طويل التيلة. الثوب الأمثل للمناسبات وصلاة الجمعة.',
    price: 110, color: 'pearl',
    badge_en: 'New', badge_ar: 'جديد',
    fabric_en: 'Egyptian Long-Staple Cotton', fabric_ar: 'قطن مصري طويل التيلة',
    soldOut: false, stock: { S:10, M:10, L:10, XL:10 },
    images: [], order: 4
  },
  {
    name_en: 'Royal Navy Thobe', name_ar: 'ثوب الكحلي الملكي',
    desc_en: 'A rich, regal navy in fine Italian wool. Tailored for evening occasions where presence speaks louder than words.',
    desc_ar: 'كحلي ملكي عميق من الصوف الإيطالي الفاخر. مفصّل للمناسبات المسائية حيث الحضور أبلغ من الكلام.',
    price: 120, color: 'navy',
    badge_en: 'Signature', badge_ar: 'التوقيع',
    fabric_en: 'Italian Merino Wool', fabric_ar: 'صوف ميرينو إيطالي',
    soldOut: false, stock: { S:10, M:10, L:10, XL:10 },
    images: [], order: 5
  },
  {
    name_en: 'Forest Olive Thobe', name_ar: 'ثوب الزيتون الغابي',
    desc_en: 'A deep, earthy olive inspired by the groves of the Levant. Modern, considered, unmistakable.',
    desc_ar: 'لون الزيتون العميق المستوحى من بساتين بلاد الشام. عصري، أنيق، لا يُنسى.',
    price: 115, color: 'olive',
    badge_en: 'Limited', badge_ar: 'كمية محدودة',
    fabric_en: 'Wool & Silk Blend', fabric_ar: 'مزيج صوف وحرير',
    soldOut: false, stock: { S:10, M:10, L:10, XL:10 },
    images: [], order: 6
  }
];

// Color swatches — fallback when a product has no uploaded image
window.WAQAR_COLOR_MAP = {
  charcoal: '#4A4843', camel: '#A47148', midnight: '#16161A',
  pearl: '#F0E8D8', navy: '#1E2A4A', olive: '#4D5A3A',
  white: '#F8F2E6', gray: '#7A7872'
};
