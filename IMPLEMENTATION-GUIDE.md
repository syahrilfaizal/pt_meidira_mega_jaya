# Panduan Implementasi Efek Manual - PT. MEIDIRA MEGAH JAYA

## 📋 Daftar Isi
1. [Instalasi](#instalasi)
2. [Implementasi Slider Manual](#implementasi-slider-manual)
3. [Implementasi Hover Effects](#implementasi-hover-effects)
4. [Implementasi Animasi Scroll](#implementasi-animasi-scroll)
5. [Implementasi Modal System](#implementasi-modal-system)
6. [Implementasi Progress Bar](#implementasi-progress-bar)
7. [Implementasi Card Flip](#implementasi-card-flip)
8. [Implementasi Parallax](#implementasi-parallax)
9. [Implementasi Tooltip](#implementasi-tooltip)
10. [Implementasi Loading Effects](#implementasi-loading-effects)
11. [Kustomisasi](#kustomisasi)
12. [Troubleshooting](#troubleshooting)

## 🚀 Instalasi

### 1. Include File CSS
Tambahkan file CSS ke dalam `<head>` HTML:

```html
<!-- Manual Effects CSS -->
<link rel="stylesheet" href="css/manual-effects.css">
<link rel="stylesheet" href="css/manual-effects-custom.css">
```

### 2. Include File JavaScript
Tambahkan file JavaScript sebelum penutup `</body>`:

```html
<!-- Manual Effects JavaScript -->
<script src="js/manual-effects.js"></script>
```

## 🎠 Implementasi Slider Manual

### Struktur HTML Dasar
```html
<section class="manual-slider">
    <div class="manual-slider-container">
        <!-- Slide 1 -->
        <div class="manual-slide">
            <div class="manual-slide-content">
                <h2>Judul Slide 1</h2>
                <p>Deskripsi slide 1</p>
                <a href="#" class="mil-btn">Tombol 1</a>
            </div>
        </div>
        
        <!-- Slide 2 -->
        <div class="manual-slide">
            <div class="manual-slide-content">
                <h2>Judul Slide 2</h2>
                <p>Deskripsi slide 2</p>
                <a href="#" class="mil-btn">Tombol 2</a>
            </div>
        </div>
        
        <!-- Tambahkan slide lainnya sesuai kebutuhan -->
    </div>
    
    <!-- Navigation Dots -->
    <div class="manual-slider-nav">
        <div class="manual-slider-dot active"></div>
        <div class="manual-slider-dot"></div>
        <!-- Tambahkan dot sesuai jumlah slide -->
    </div>
    
    <!-- Navigation Arrows -->
    <button class="manual-slider-arrow manual-slider-prev">‹</button>
    <button class="manual-slider-arrow manual-slider-next">›</button>
</section>
```

### Kustomisasi Background Slide
```css
/* Di file CSS Anda */
.manual-slide:nth-child(1) {
    background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('path/to/image1.jpg');
}

.manual-slide:nth-child(2) {
    background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('path/to/image2.jpg');
}
```

### Kontrol JavaScript
```javascript
// Inisialisasi manual (opsional)
const slider = new ManualSlider(document.querySelector('.manual-slider'));

// Method yang tersedia
slider.nextSlide();        // Slide berikutnya
slider.prevSlide();        // Slide sebelumnya
slider.goToSlide(2);       // Ke slide tertentu (index 2)
slider.startAutoPlay();    // Mulai autoplay
slider.stopAutoPlay();     // Hentikan autoplay
```

## 🎯 Implementasi Hover Effects

### Hover Lift Effect
```html
<div class="hover-lift">
    <img src="image.jpg" alt="Image">
    <h3>Judul</h3>
    <p>Deskripsi</p>
</div>
```

### Hover Scale Effect
```html
<div class="hover-scale">
    <img src="image.jpg" alt="Image">
    <h3>Judul</h3>
    <p>Deskripsi</p>
</div>
```

### Hover Glow Effect
```html
<div class="hover-glow">
    <img src="image.jpg" alt="Image">
    <h3>Judul</h3>
    <p>Deskripsi</p>
</div>
```

### Hover Slide Effect
```html
<div class="hover-slide">
    <img src="image.jpg" alt="Image">
    <h3>Judul</h3>
    <p>Deskripsi</p>
</div>
```

## ✨ Implementasi Animasi Scroll

### Menambahkan Animasi ke Elemen
```html
<!-- Fade In -->
<div data-animation="fadeIn">
    <h2>Judul dengan Fade In</h2>
</div>

<!-- Slide In Left -->
<div data-animation="slideInLeft">
    <p>Teks dari kiri</p>
</div>

<!-- Slide In Right -->
<div data-animation="slideInRight">
    <p>Teks dari kanan</p>
</div>

<!-- Slide In Up -->
<div data-animation="slideInUp">
    <p>Teks dari bawah</p>
</div>

<!-- Bounce In -->
<div data-animation="bounceIn">
    <p>Teks dengan bounce</p>
</div>
```

### Kustomisasi Animasi
```css
/* Di file CSS Anda */
@keyframes customAnimation {
    from {
        opacity: 0;
        transform: translateY(100px) rotate(10deg);
    }
    to {
        opacity: 1;
        transform: translateY(0) rotate(0deg);
    }
}

/* Gunakan animasi custom */
<div data-animation="customAnimation">
    <p>Animasi custom</p>
</div>
```

## 🪟 Implementasi Modal System

### Struktur Modal
```html
<!-- Trigger Button -->
<button data-modal="my-modal" class="mil-btn">Buka Modal</button>

<!-- Modal Overlay -->
<div class="modal-overlay" id="my-modal">
    <div class="modal-content">
        <button class="modal-close">&times;</button>
        <h3>Judul Modal</h3>
        <p>Konten modal Anda di sini.</p>
        <button class="mil-btn">Tombol Aksi</button>
    </div>
</div>
```

### Modal dengan Form
```html
<div class="modal-overlay" id="contact-modal">
    <div class="modal-content">
        <button class="modal-close">&times;</button>
        <h3>Contact Form</h3>
        <form>
            <div class="mil-form">
                <input type="text" placeholder="Nama Lengkap" required>
                <input type="email" placeholder="Email" required>
                <textarea placeholder="Pesan" rows="5" required></textarea>
                <button type="submit" class="mil-btn">Kirim Pesan</button>
            </div>
        </form>
    </div>
</div>
```

## 📊 Implementasi Progress Bar

### Progress Bar Dasar
```html
<div class="progress-container">
    <div class="progress-bar" data-progress="75"></div>
</div>
```

### Progress Bar dengan Label
```html
<div class="mil-mb-30">
    <h4>HTML/CSS Skills</h4>
    <div class="progress-container">
        <div class="progress-bar" data-progress="90"></div>
    </div>
    <span>90%</span>
</div>

<div class="mil-mb-30">
    <h4>JavaScript Skills</h4>
    <div class="progress-container">
        <div class="progress-bar" data-progress="85"></div>
    </div>
    <span>85%</span>
</div>
```

### Progress Bar Dinamis dengan JavaScript
```javascript
// Update progress bar secara dinamis
function updateProgress(progressId, percentage) {
    const progressBar = document.querySelector(`[data-progress-id="${progressId}"]`);
    if (progressBar) {
        progressBar.setAttribute('data-progress', percentage);
        progressBar.style.width = percentage + '%';
    }
}

// Contoh penggunaan
updateProgress('skill-html', 90);
updateProgress('skill-js', 85);
```

## 🃏 Implementasi Card Flip

### Card Flip Dasar
```html
<div class="flip-card">
    <div class="flip-card-inner">
        <div class="flip-card-front">
            <h3>Front Side</h3>
            <p>Klik untuk membalik</p>
        </div>
        <div class="flip-card-back">
            <h3>Back Side</h3>
            <p>Informasi tambahan</p>
        </div>
    </div>
</div>
```

### Card Flip dengan Konten Lengkap
```html
<div class="flip-card">
    <div class="flip-card-inner">
        <div class="flip-card-front">
            <img src="service-icon.png" alt="Service">
            <h3>Web Development</h3>
            <p>Klik untuk detail</p>
        </div>
        <div class="flip-card-back">
            <h3>Detail Layanan</h3>
            <ul>
                <li>Frontend Development</li>
                <li>Backend Development</li>
                <li>Database Design</li>
                <li>API Integration</li>
            </ul>
            <a href="#" class="mil-btn">Pelajari Lebih Lanjut</a>
        </div>
    </div>
</div>
```

## 🌊 Implementasi Parallax

### Parallax Section
```html
<section class="parallax-section">
    <div class="parallax-bg"></div>
    <div class="parallax-content">
        <h2>Parallax Effect</h2>
        <p>Efek parallax yang smooth saat scroll</p>
        <a href="#contact" class="mil-btn">Hubungi Kami</a>
    </div>
</section>
```

### Kustomisasi Background Parallax
```css
/* Di file CSS Anda */
.parallax-bg {
    background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('path/to/your/image.jpg');
}
```

## 💡 Implementasi Tooltip

### Tooltip Dasar
```html
<button class="tooltip" data-tooltip="Ini adalah tooltip untuk tombol">Hover untuk Tooltip</button>
```

### Tooltip pada Teks
```html
<span class="tooltip" data-tooltip="Ini adalah tooltip untuk teks">Hover teks ini untuk melihat tooltip</span>
```

### Tooltip pada Link
```html
<a href="#" class="tooltip" data-tooltip="Link menuju halaman about">About Us</a>
```

## ⏳ Implementasi Loading Effects

### Spinner Loading
```html
<div class="loading-spinner"></div>
```

### Dots Loading
```html
<div class="loading-dots">
    <span></span>
    <span></span>
    <span></span>
</div>
```

### Loading dengan JavaScript
```javascript
// Tampilkan loading
function showLoading(container) {
    const loading = document.createElement('div');
    loading.className = 'loading-spinner';
    container.appendChild(loading);
}

// Sembunyikan loading
function hideLoading(container) {
    const loading = container.querySelector('.loading-spinner');
    if (loading) {
        loading.remove();
    }
}

// Contoh penggunaan
const container = document.querySelector('.content-container');
showLoading(container);

// Simulasi loading
setTimeout(() => {
    hideLoading(container);
    // Tampilkan konten
}, 2000);
```

## 🎨 Kustomisasi

### Mengubah Warna Utama
```css
:root {
    --primary-color: #D30000;
    --primary-light: #ff4444;
    --primary-dark: #b30000;
}

/* Atau override langsung */
.manual-slider-arrow {
    background: #your-color;
}

.progress-bar {
    background: linear-gradient(90deg, #your-color, #your-light-color);
}
```

### Mengubah Durasi Animasi
```css
/* Di file CSS Anda */
.manual-slider-container {
    transition: transform 0.8s ease-in-out; /* Ubah dari 0.5s */
}

.hover-lift {
    transition: transform 0.5s ease, box-shadow 0.5s ease; /* Ubah dari 0.3s */
}
```

### Mengubah Ukuran Elemen
```css
/* Ubah ukuran slider */
.manual-slider {
    height: 600px; /* Ubah dari 500px */
}

/* Ubah ukuran flip card */
.flip-card {
    width: 350px; /* Ubah dari 300px */
    height: 250px; /* Ubah dari 200px */
}
```

## 🔧 Troubleshooting

### Slider tidak berfungsi
**Masalah:** Slider tidak bergerak atau tidak merespons klik

**Solusi:**
1. Pastikan file JavaScript ter-load dengan benar
2. Periksa console browser untuk error
3. Pastikan struktur HTML sesuai dengan template
4. Periksa apakah ada konflik dengan CSS lain

```javascript
// Debug slider
console.log('Slider elements:', document.querySelectorAll('.manual-slider'));
console.log('Slider container:', document.querySelector('.manual-slider-container'));
```

### Animasi tidak muncul
**Masalah:** Elemen dengan `data-animation` tidak beranimasi

**Solusi:**
1. Pastikan elemen berada dalam viewport
2. Periksa apakah Intersection Observer didukung
3. Pastikan CSS animation ter-load

```javascript
// Debug animation
const animatedElements = document.querySelectorAll('[data-animation]');
console.log('Animated elements:', animatedElements);
```

### Modal tidak terbuka
**Masalah:** Modal tidak muncul saat tombol diklik

**Solusi:**
1. Pastikan ID modal sesuai dengan `data-modal`
2. Periksa event listener
3. Pastikan tidak ada konflik z-index

```javascript
// Debug modal
const modalTriggers = document.querySelectorAll('[data-modal]');
const modals = document.querySelectorAll('.modal-overlay');
console.log('Modal triggers:', modalTriggers);
console.log('Modals:', modals);
```

### Progress bar tidak beranimasi
**Masalah:** Progress bar tidak mengisi saat scroll

**Solusi:**
1. Pastikan elemen memiliki `data-progress` attribute
2. Periksa Intersection Observer
3. Pastikan CSS transition ter-load

```javascript
// Debug progress bar
const progressBars = document.querySelectorAll('.progress-bar');
console.log('Progress bars:', progressBars);
progressBars.forEach(bar => {
    console.log('Progress value:', bar.getAttribute('data-progress'));
});
```

## 📱 Responsive Design

### Breakpoints yang Didukung
- **Desktop:** 1200px+
- **Tablet:** 768px - 1199px
- **Mobile:** 320px - 767px

### Kustomisasi Responsive
```css
/* Tablet */
@media (max-width: 992px) {
    .manual-slider {
        height: 400px;
    }
    
    .flip-card {
        width: 280px;
        height: 180px;
    }
}

/* Mobile */
@media (max-width: 768px) {
    .manual-slider {
        height: 300px;
    }
    
    .manual-slide-content h2 {
        font-size: 2rem;
    }
    
    .flip-card {
        width: 100%;
        height: 150px;
    }
}
```

## 🚀 Performance Tips

### Optimasi CSS
```css
/* Gunakan transform untuk animasi */
.hover-lift:hover {
    transform: translateY(-10px); /* Lebih baik dari margin-top */
}

/* Gunakan will-change untuk optimasi GPU */
.manual-slider-container {
    will-change: transform;
}
```

### Optimasi JavaScript
```javascript
// Gunakan debounce untuk event scroll
const debouncedScrollHandler = ManualEffects.debounce(() => {
    // Handle scroll event
}, 16); // ~60fps

window.addEventListener('scroll', debouncedScrollHandler);

// Gunakan throttle untuk resize
const throttledResizeHandler = ManualEffects.throttle(() => {
    // Handle resize event
}, 100);

window.addEventListener('resize', throttledResizeHandler);
```

## 📞 Support

Untuk bantuan teknis atau pertanyaan implementasi, silakan hubungi tim development PT. MEIDIRA MEGAH JAYA.

---

**Dibuat dengan ❤️ untuk PT. MEIDIRA MEGAH JAYA** 