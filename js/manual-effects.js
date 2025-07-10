/* ===========================================
   MANUAL EFFECTS JAVASCRIPT - Tanpa Plugin
   =========================================== */

// Manual Slider Functionality
class ManualSlider {
    constructor(container) {
        this.container = container;
        this.sliderContainer = container.querySelector('.manual-slider-container');
        this.slides = container.querySelectorAll('.manual-slide');
        this.dots = container.querySelectorAll('.manual-slider-dot');
        this.prevBtn = container.querySelector('.manual-slider-prev');
        this.nextBtn = container.querySelector('.manual-slider-next');
        this.currentSlide = 0;
        this.slideCount = this.slides.length;
        this.autoPlayInterval = null;
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.updateSlider();
        this.startAutoPlay();
    }
    
    setupEventListeners() {
        // Dot navigation
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                this.goToSlide(index);
            });
        });
        
        // Arrow navigation
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => {
                this.prevSlide();
            });
        }
        
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => {
                this.nextSlide();
            });
        }
        
        // Touch/swipe support
        let startX = 0;
        let endX = 0;
        
        this.container.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });
        
        this.container.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            this.handleSwipe(startX, endX);
        });
        
        // Mouse drag support
        let isDragging = false;
        let startPos = 0;
        
        this.container.addEventListener('mousedown', (e) => {
            isDragging = true;
            startPos = e.clientX;
        });
        
        this.container.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
        });
        
        this.container.addEventListener('mouseup', (e) => {
            if (isDragging) {
                const endPos = e.clientX;
                this.handleSwipe(startPos, endPos);
                isDragging = false;
            }
        });
        
        // Pause autoplay on hover
        this.container.addEventListener('mouseenter', () => {
            this.stopAutoPlay();
        });
        
        this.container.addEventListener('mouseleave', () => {
            this.startAutoPlay();
        });
    }
    
    handleSwipe(startX, endX) {
        const threshold = 50;
        const diff = startX - endX;
        
        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                this.nextSlide();
            } else {
                this.prevSlide();
            }
        }
    }
    
    goToSlide(index) {
        this.currentSlide = index;
        this.updateSlider();
    }
    
    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.slideCount;
        this.updateSlider();
    }
    
    prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.slideCount) % this.slideCount;
        this.updateSlider();
    }
    
    updateSlider() {
        const translateX = -this.currentSlide * 25; // 25% per slide
        this.sliderContainer.style.transform = `translateX(${translateX}%)`;
        
        // Update dots
        this.dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentSlide);
        });
    }
    
    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, 5000); // Change slide every 5 seconds
    }
    
    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }
}

// Parallax Effect
class ParallaxEffect {
    constructor() {
        this.parallaxElements = document.querySelectorAll('.parallax-bg');
        this.init();
    }
    
    init() {
        window.addEventListener('scroll', () => {
            this.updateParallax();
        });
        
        // Initial update
        this.updateParallax();
    }
    
    updateParallax() {
        const scrolled = window.pageYOffset;
        
        this.parallaxElements.forEach(element => {
            const speed = 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    }
}

// Modal System
class ModalSystem {
    constructor() {
        this.modals = document.querySelectorAll('.modal-overlay');
        this.modalTriggers = document.querySelectorAll('[data-modal]');
        this.init();
    }
    
    init() {
        // Setup modal triggers
        this.modalTriggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                const modalId = trigger.getAttribute('data-modal');
                this.openModal(modalId);
            });
        });
        
        // Setup modal close buttons
        this.modals.forEach(modal => {
            const closeBtn = modal.querySelector('.modal-close');
            if (closeBtn) {
                closeBtn.addEventListener('click', () => {
                    this.closeModal(modal);
                });
            }
            
            // Close on overlay click
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.closeModal(modal);
                }
            });
        });
        
        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeAllModals();
            }
        });
    }
    
    openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }
    
    closeModal(modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    closeAllModals() {
        this.modals.forEach(modal => {
            this.closeModal(modal);
        });
    }
}

// Progress Bar Animation
class ProgressBar {
    constructor() {
        this.progressBars = document.querySelectorAll('.progress-bar');
        this.init();
    }
    
    init() {
        this.observeProgressBars();
    }
    
    observeProgressBars() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateProgressBar(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        this.progressBars.forEach(bar => {
            observer.observe(bar);
        });
    }
    
    animateProgressBar(bar) {
        const targetWidth = bar.getAttribute('data-progress') || '75';
        bar.style.width = targetWidth + '%';
    }
}

// Scroll Animations
class ScrollAnimations {
    constructor() {
        this.animatedElements = document.querySelectorAll('[data-animation]');
        this.init();
    }
    
    init() {
        this.observeElements();
    }
    
    observeElements() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateElement(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        this.animatedElements.forEach(element => {
            observer.observe(element);
        });
    }
    
    animateElement(element) {
        const animation = element.getAttribute('data-animation');
        element.style.animation = `${animation} 0.8s ease-out forwards`;
        element.style.opacity = '1';
    }
}

// Tooltip System
class TooltipSystem {
    constructor() {
        this.tooltips = document.querySelectorAll('.tooltip');
        this.init();
    }
    
    init() {
        this.tooltips.forEach(tooltip => {
            tooltip.addEventListener('mouseenter', () => {
                this.showTooltip(tooltip);
            });
            
            tooltip.addEventListener('mouseleave', () => {
                this.hideTooltip(tooltip);
            });
        });
    }
    
    showTooltip(tooltip) {
        const tooltipText = tooltip.getAttribute('data-tooltip');
        if (!tooltipText) return;
        
        // Create tooltip element if it doesn't exist
        let tooltipElement = tooltip.querySelector('.tooltip-content');
        if (!tooltipElement) {
            tooltipElement = document.createElement('div');
            tooltipElement.className = 'tooltip-content';
            tooltipElement.textContent = tooltipText;
            tooltip.appendChild(tooltipElement);
        }
        
        tooltipElement.style.opacity = '1';
        tooltipElement.style.visibility = 'visible';
    }
    
    hideTooltip(tooltip) {
        const tooltipElement = tooltip.querySelector('.tooltip-content');
        if (tooltipElement) {
            tooltipElement.style.opacity = '0';
            tooltipElement.style.visibility = 'hidden';
        }
    }
}

// Loading Effects
class LoadingEffects {
    constructor() {
        this.loadingElements = document.querySelectorAll('.loading-spinner, .loading-dots');
        this.init();
    }
    
    init() {
        // Auto-hide loading elements after 3 seconds
        setTimeout(() => {
            this.loadingElements.forEach(element => {
                element.style.display = 'none';
            });
        }, 3000);
    }
    
    showLoading(container) {
        const spinner = document.createElement('div');
        spinner.className = 'loading-spinner';
        container.appendChild(spinner);
    }
    
    hideLoading(container) {
        const spinner = container.querySelector('.loading-spinner');
        if (spinner) {
            spinner.remove();
        }
    }
}

// Card Flip Effects
class CardFlipEffects {
    constructor() {
        this.flipCards = document.querySelectorAll('.flip-card');
        this.init();
    }
    
    init() {
        this.flipCards.forEach(card => {
            card.addEventListener('click', () => {
                this.toggleFlip(card);
            });
        });
    }
    
    toggleFlip(card) {
        const inner = card.querySelector('.flip-card-inner');
        if (inner) {
            inner.style.transform = inner.style.transform === 'rotateY(180deg)' 
                ? 'rotateY(0deg)' 
                : 'rotateY(180deg)';
        }
    }
}

// Initialize all effects when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Manual Slider
    const sliders = document.querySelectorAll('.manual-slider');
    sliders.forEach(slider => {
        new ManualSlider(slider);
    });
    
    // Initialize other effects
    new ParallaxEffect();
    new ModalSystem();
    new ProgressBar();
    new ScrollAnimations();
    new TooltipSystem();
    new LoadingEffects();
    new CardFlipEffects();
    
    // Add smooth scrolling to all internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add scroll to top functionality
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '↑';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        background: #D30000;
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 20px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
    `;
    
    document.body.appendChild(scrollToTopBtn);
    
    // Show/hide scroll to top button
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.visibility = 'visible';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top functionality
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// Utility functions
const ManualEffects = {
    // Debounce function for performance
    debounce: function(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    // Throttle function for performance
    throttle: function(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },
    
    // Check if element is in viewport
    isInViewport: function(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    },
    
    // Add CSS class with animation
    addClassWithAnimation: function(element, className) {
        element.classList.add(className);
        element.addEventListener('animationend', () => {
            element.classList.remove(className);
        }, { once: true });
    }
}; 