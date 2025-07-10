# Manual Effects CSS & JavaScript - Tanpa Plugin

Koleksi efek visual yang dibuat dengan CSS dan JavaScript murni tanpa menggunakan plugin apapun. Semua efek ini dirancang untuk memberikan pengalaman visual yang menarik pada website PT. MEIDIRA MEGAH JAYA.

## 📁 File yang Dibuat

1. **`css/manual-effects.css`** - File CSS berisi semua efek manual
2. **`js/manual-effects.js`** - File JavaScript untuk mengontrol efek
3. **`manual-effects-demo.html`** - Halaman demo untuk melihat semua efek
4. **`MANUAL-EFFECTS-README.md`** - Dokumentasi ini

## 🎯 Efek yang Tersedia

### 1. Manual Slider
Slider custom tanpa plugin dengan fitur:
- Auto-play dengan interval 5 detik
- Navigasi dot dan arrow
- Touch/swipe support untuk mobile
- Pause autoplay saat hover
- Responsive design

```html
<section class="manual-slider">
    <div class="manual-slider-container">
        <div class="manual-slide">
            <div class="manual-slide-content">
                <h2>Judul Slide</h2>
                <p>Deskripsi slide</p>
                <a href="#" class="mil-btn">Tombol</a>
            </div>
        </div>
        <!-- Tambahkan slide lainnya -->
    </div>
    
    <!-- Navigation -->
    <div class="manual-slider-nav">
        <div class="manual-slider-dot active"></div>
        <div class="manual-slider-dot"></div>
        <!-- dst -->
    </div>
    
    <!-- Arrows -->
    <button class="manual-slider-arrow manual-slider-prev">‹</button>
    <button class="manual-slider-arrow manual-slider-next">›</button>
</section>
```

### 2. Hover Effects
Berbagai efek hover untuk elemen:

#### Hover Lift
```html
<div class="hover-lift">
    <!-- Konten akan terangkat saat hover -->
</div>
```

#### Hover Scale
```html
<div class="hover-scale">
    <!-- Konten akan membesar saat hover -->
</div>
```

#### Hover Glow
```html
<div class="hover-glow">
    <!-- Konten akan bersinar saat hover -->
</div>
```

#### Hover Slide
```html
<div class="hover-slide">
    <!-- Efek slide saat hover -->
</div>
```

### 3. Loading Effects

#### Spinner Loading
```html
<div class="loading-spinner"></div>
```

#### Dots Loading
```html
<div class="loading-dots">
    <span></span>
    <span></span>
    <span></span>
</div>
```

### 4. Progress Bar
```html
<div class="progress-container">
    <div class="progress-bar" data-progress="75"></div>
</div>
```

### 5. Card Flip Effect
```html
<div class="flip-card">
    <div class="flip-card-inner">
        <div class="flip-card-front">
            <h3>Front Side</h3>
        </div>
        <div class="flip-card-back">
            <h3>Back Side</h3>
        </div>
    </div>
</div>
```

### 6. Parallax Effect
```html
<section class="parallax-section">
    <div class="parallax-bg"></div>
    <div class="parallax-content">
        <h2>Konten Parallax</h2>
    </div>
</section>
```

### 7. Modal System
```html
<!-- Trigger -->
<button data-modal="my-modal">Buka Modal</button>

<!-- Modal -->
<div class="modal-overlay" id="my-modal">
    <div class="modal-content">
        <button class="modal-close">&times;</button>
        <h3>Judul Modal</h3>
        <p>Konten modal</p>
    </div>
</div>
```

### 8. Tooltip Effect
```html
<button class="tooltip" data-tooltip="Ini adalah tooltip">Hover untuk tooltip</button>
```

### 9. Animation Classes
Tambahkan atribut `data-animation` untuk animasi scroll:

```html
<div data-animation="fadeIn">Fade In Animation</div>
<div data-animation="slideInLeft">Slide In Left</div>
<div data-animation="slideInRight">Slide In Right</div>
<div data-animation="slideInUp">Slide In Up</div>
<div data-animation="bounceIn">Bounce In</div>
```

## 🚀 Cara Penggunaan

### 1. Include File CSS dan JS
Tambahkan file CSS dan JavaScript ke halaman HTML Anda:

```html
<!-- CSS -->
<link rel="stylesheet" href="css/manual-effects.css">

<!-- JavaScript -->
<script src="js/manual-effects.js"></script>
```

### 2. Struktur HTML
Pastikan struktur HTML mengikuti format yang telah ditentukan untuk setiap efek.

### 3. Inisialisasi Otomatis
Semua efek akan diinisialisasi secara otomatis saat halaman dimuat.

## 🎨 Kustomisasi

### Warna Utama
Warna utama yang digunakan adalah `#D30000` (merah). Anda dapat mengubahnya di file CSS:

```css
:root {
    --primary-color: #D30000;
    --primary-light: #ff4444;
}
```

### Animasi
Semua animasi dapat dikustomisasi dengan mengubah nilai di file CSS:

```css
/* Contoh kustomisasi animasi */
@keyframes slideInUp {
    from {
        opacity: 0;
        transform: translateY(50px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

## 📱 Responsive Design

Semua efek telah dioptimalkan untuk berbagai ukuran layar:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔧 Fitur JavaScript

### ManualSlider Class
```javascript
// Inisialisasi manual
const slider = new ManualSlider(document.querySelector('.manual-slider'));

// Method yang tersedia
slider.nextSlide();
slider.prevSlide();
slider.goToSlide(2);
slider.startAutoPlay();
slider.stopAutoPlay();
```

### Utility Functions
```javascript
// Debounce function
const debouncedFunction = ManualEffects.debounce(myFunction, 300);

// Throttle function
const throttledFunction = ManualEffects.throttle(myFunction, 100);

// Check if element is in viewport
if (ManualEffects.isInViewport(element)) {
    // Element is visible
}

// Add animation class
ManualEffects.addClassWithAnimation(element, 'my-animation');
```

## 🎯 Performance Tips

1. **Gunakan Intersection Observer** untuk animasi scroll
2. **Debounce/Throttle** untuk event scroll dan resize
3. **CSS Transforms** untuk animasi yang smooth
4. **Will-change** property untuk optimasi GPU

## 🐛 Troubleshooting

### Slider tidak berfungsi
- Pastikan struktur HTML sesuai
- Periksa console untuk error JavaScript
- Pastikan file CSS dan JS ter-load dengan benar

### Animasi tidak muncul
- Periksa atribut `data-animation`
- Pastikan elemen berada dalam viewport
- Periksa CSS animation properties

### Modal tidak terbuka
- Pastikan ID modal sesuai dengan `data-modal`
- Periksa event listener
- Pastikan tidak ada konflik dengan CSS z-index

## 📄 Lisensi

Efek manual ini dibuat khusus untuk PT. MEIDIRA MEGAH JAYA dan dapat digunakan secara bebas dalam proyek internal perusahaan.

## 🤝 Kontribusi

Untuk menambahkan efek baru atau memperbaiki bug, silakan:
1. Buat branch baru
2. Tambahkan fitur/perbaikan
3. Test di berbagai browser
4. Submit pull request

## 📞 Support

Untuk pertanyaan atau bantuan teknis, silakan hubungi tim development PT. MEIDIRA MEGAH JAYA.

---

**Dibuat dengan ❤️ untuk PT. MEIDIRA MEGAH JAYA** 